import { notification } from "../../types/dashboard";

export function Notification({name , image , time , msg } : notification){
  return (
    <li className="flex py-4 px-5 items-center transition duration-200 hover:bg-gray-100">
        <img className="w-14 rounded-full mr-5" src={image} alt="" />
        <span>
          <h2 className="font-medium text-lg mb-1.5">{name}</h2>
          <p className="text-secondary">{msg?.slice(0, 45)}</p>
        </span>
        <span className="flex flex-col items-center ml-auto text-sm">
          <span className="text-secondary mb-2">{time}</span>
        </span>
      </li>
  )
}
