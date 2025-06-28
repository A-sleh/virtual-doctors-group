export default function Box(){
  return <div>
    <form>
      <div className="box-style mb-4 transition-duration">
        <label className="block text-gray-500  transition-duration">Email: </label>
        <input className="input" type="email" placeholder="youremail@gmail.com"/>
      </div>
      
      <div className="box-style transition-duration">
        <label className="block text-gray-500 transition-duration">Password: </label>
        <input className="input" type="password" placeholder="password hash"/>
      </div>
        <p className="text-danger text-xs px-3">this field is required!</p>
      
    </form>
    
  </div>
}