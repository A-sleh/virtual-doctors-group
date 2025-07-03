import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import { IoSendSharp } from 'react-icons/io5';
import { chatData } from '../api/data';
import Messages from './RenderMessages';

export default function ChatBody() {
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
      <form className="flex justify-between items-center rounded-box">
        <input
          type="text"
          placeholder="write a message ... "
          className="w-full outline-none text-secondary"
        />
        <IoSendSharp size={30} className="text-primary" />
      </form>
    </AnimateUpEffect>
  );
}
