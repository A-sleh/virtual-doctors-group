export default function Login() {
  return <div className="grid grid-cols-3">
    <Form/>
    <Pictur/>
  </div>;
}

function Form(){
  return <div className="col-span-2 m-5 pt-7 pb-7">
    <h3 className="text-xl font-bold text-500-blue">Welcom Back!</h3>
    <h1 className="text-4xl">Provide your personal detatails</h1>
    <Box/>
    <Btn name={"Login"}/>
  </div>;
}
function Box(){
  return <div className="mt-8 mb-8 ">
    <form className="mb-8 ">
      <div>
        <label>Email: </label>
        <input type="email" placeholder="youremail@gmail.com"/>
      </div>
      
      <div>
        <label>Password: </label>
        <input type="password" placeholder="password hash"/>
      </div>
      
    </form>
    <div>
      <span>
        <input type="checkbox" name="" id="remember" />
        <label htmlFor="remember">Remember me</label>
      </span>
      <span>Forgot password</span>
    </div>
  </div>
}


function Pictur(){
  return <div>
    <h1>Welcom</h1>
    <Btn name={"Register"}/>
  </div>
}

function Btn({ name }: { name: string }){
  return <button style={{color: "white"}} className="bg-primary">{name}</button>
}