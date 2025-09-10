import { AnimateUpInView } from '@/lib/Animation/AnimateUpEffect';
import { message } from '../types/chat';

// temp image 
import imgTemp from "@/assets/images/pexels-jrfotosgrand-fotografia-12660379.jpg"
import { getTimeFromDate } from '@/utils';

type chatBoxProps = message & { owner: boolean };

export default function ChatBox({ text, date, owner }: chatBoxProps) {
  return (
    <AnimateUpInView className={owner ? ' self-start ' : ' self-end'}>
      <div className={`flex items-end gap-2 min-w-[40vw] flex-1 ${!owner && 'flex-row-reverse'}`}>
        <img src={imgTemp} className="w-8 h-8 bg-fourth rounded-full" />
        <div
          className={`space-y-2 rounded-md flex-1 p-2 ${
            owner
              ? 'text-right bg-white text-secondary rounded-bl-none outline-secondary-hover outline'
              : 'bg-primary text-white rounded-br-none '
          }`}
        >
          <p className={`font-sans ${owner && 'text-left'} `} >{text}</p>
          <span className={`${!owner && 'float-end'} `}>{getTimeFromDate(date,false)}</span>
        </div>
      </div>
    </AnimateUpInView>
  );
}
