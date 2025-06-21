export default function Detail({title , text} : {title: string , text : string}){
  return <div className="mb-6">
    <h3 className="text-xl font-bold text-primary">{title}</h3>
    <h1 className="text-4xl">{text}</h1></div>
}