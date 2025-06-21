export default function Btn({ name , color , backgroundColor}: { name: string , color:string , backgroundColor:string}){
  return <button  className= {`${color} ${backgroundColor} button-login-register transition-duration hover:bg-opacity-100`} >{name}</button>
}