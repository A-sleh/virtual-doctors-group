import * as signalR from '@microsoft/signalr';

import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import { IoSendSharp } from 'react-icons/io5';

import Messages from './RenderMessages';
import { useEffect, useState } from 'react';
import { useCreateNewMessage } from '../api/create-message';
import { useAuth } from '@/context/auth/AuthProvider';
import { useParams } from 'react-router';
import { useGetConsultaionMessage } from '../api/get-messages';
import { useQueryClient } from '@tanstack/react-query';
import { QYERY_KEYS } from '@/lib/query-key';
import { formatDateMonthYearDay } from '@/utils';

export default function ChatBody() {
  // For real time messages
  const [connection, setConnection] = useState<signalR.HubConnection | null>(
    null,
  );

  const { userId } = useAuth();

  const { id: chatId } = useParams();
  const queryClient = useQueryClient();
  const [message, setMessage] = useState<string>('');

  const { sendMessage, isPending } = useCreateNewMessage();
  const { consultaionMessages, isPending: fetchMessages } =
    useGetConsultaionMessage(chatId || 0);

  function handleSendMessageClicked(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!message) return;

    sendMessage(
      {
        consultaionId: chatId || 0,
        data: {
          ticketId: chatId,
          date: new Date(),
          ownerId: userId,
          text: message,
        },
      },
      {
        onSuccess: async () => {
          queryClient.invalidateQueries({
            queryKey: [QYERY_KEYS.consultaionMessages],
          });
          setMessage('');
        },
      },
    );
  }

  if (fetchMessages) return;

  // The key will be array with two dimention ( the first one to data , and the second one to messages)
  const messageMaping = Object.entries(
    Object.groupBy(consultaionMessages, ({ date }: { date: Date }) =>
      formatDateMonthYearDay(date),
    ),
  );

  return (
    <AnimateUpEffect className="h-fit space-y-2 ">
      <section className="rounded-box flex flex-col space-y-3 h-[75vh] overflow-auto">
        {messageMaping.map((chat) => {
          return (
            <>
              <h3 className="self-center px-3 py-1.5 text-md font-bold text-primary bg-[#157ae51c] rounded-sm">
                {chat[0]}
              </h3>
              <Messages messages={chat[1]} />
            </>
          );
        })}
      </section>
      <form
        className="flex justify-between items-center rounded-box"
        onSubmit={(e) => handleSendMessageClicked(e)}
      >
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          placeholder="write a message ... "
          className="w-full outline-none text-secondary"
        />
        <button>
          <IoSendSharp size={30} className="text-primary" />
        </button>
      </form>
    </AnimateUpEffect>
  );
}
