export function Form(){
  return(
    <form action="" className="mx-4 mt-6 bg-third rounded-lg relative">
        <div className="px-4 py-3">
          <label htmlFor="admin" className="text-primary font-medium ">From: </label>
          <input type="email" className="w-10/12" name="" id="admin" placeholder="admin@gmail.com"/>
        </div>
        <hr />
        <div className="px-4 py-3">
          <label htmlFor="user" className="text-primary font-medium">To: </label>
          <input type="email" className="w-10/12" name="" id="user" placeholder="aboodazain22@gamil.com"/>
        </div>
        <hr />
        <div className="px-4 py-3">
          <label htmlFor="description" className="text-primary font-medium">Description: </label>
          <textarea className="w-full h-40 resize-none"  name="" id="description" placeholder="Write here..."></textarea>
        </div>
        <div className=" absolute right-3 bottom-2">
          <input className="w-24 p-1 cursor-pointer uppercase bg-primary text-white font-medium rounded-lg text-sm" type="submit" name="" value="Send"/>
        </div>
        
        
      </form>
  )
}