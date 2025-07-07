import { AnimateUpInView } from '@/lib/Animation/AnimateUpEffect';
import { message } from '../types/chat';

// temp image 
import imgTemp from "@/assets/images/pexels-jrfotosgrand-fotografia-12660379.jpg"

type chatBoxProps = message & { owner: boolean };

export default function ChatBox({ message, time, owner }: chatBoxProps) {
  return (
    <AnimateUpInView className={owner ? ' self-start' : ' self-end'}>
      <div className={`flex items-end gap-2 ${!owner && 'flex-row-reverse'}`}>
        <img src={imgTemp} className="w-8 h-8 bg-fourth rounded-full" />
        <div
          className={`space-y-2 rounded-md  p-2 ${
            owner
              ? 'text-right bg-white text-secondary rounded-bl-none outline-secondary-hover outline'
              : 'bg-primary text-white rounded-br-none '
          }`}
        >
          <p className="font-sans">{message}</p>
          <span className="">{time}</span>
        </div>
      </div>
    </AnimateUpInView>
  );
}
