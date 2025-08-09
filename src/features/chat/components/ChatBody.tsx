import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import { IoSendSharp } from 'react-icons/io5';
import { chatData } from '../api/data';
import Messages from './RenderMessages';
import { useState } from 'react';
import { useCreateNewMessage } from '../api/create-message';
import { useAuth } from '@/context/auth/AuthProvider';
import { useParams } from 'react-router';

export default function ChatBody() {
  const [message, setMessage] = useState<string>('');
  const { id: doctorId = 0, chatId = 0 } = useParams();

  const { userId } = useAuth();
  const { sendMessage, isPending } = useCreateNewMessage();

  function handleSendMessageClicked(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!message) return;
    sendMessage(
      {
        consultaionId: chatId,
        data: {
          ticketId: chatId,
          date: new Date(),
          ownerId: userId,
          text: message,
        },
      },
      {
        onSuccess: function () {
          setMessage('');
        },
      },
    );
  }
  console.log(isPending, doctorId);
  return (
    <AnimateUpEffect className="h-fit space-y-2 ">
      <section className="rounded-box flex flex-col space-y-3 h-[75vh] overflow-auto">
        {chatData.map((chat) => {
          return (
            <>
              <h3 className="self-center px-3 py-1.5 text-md font-bold text-primary bg-[#157ae51c] rounded-sm">
                {chat.date}
              </h3>
              <Messages messages={chat?.messages} />
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
