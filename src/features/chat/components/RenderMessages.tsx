
import ChatBox from './ChatBox';
import { messagesProps } from '../types/chat';
const OWNER = 1;

export default function Messages({ messages }: messagesProps) {
  const messageList = messages.map((message) => (
    <ChatBox {...message} owner={OWNER === message.ownerId} />
  ));
  return messageList;
}
