import ChatBox from './ChatBox';
import { useAuth } from '@/context/auth/AuthProvider';
import { messageRequestBodyType } from '../api/create-message';

export default function Messages({
  messages,
}: {
  messages: messageRequestBodyType[];
}) {
  const { userId } = useAuth();

  const messageList = messages.map((message) => (
    <ChatBox
      ownerId={message.ownerId}
      date={new Date(message.date)}
      text={message.text}
      owner={userId === message.ownerId}
    />
  ));

  return messageList;
}
