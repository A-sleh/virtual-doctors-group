import { Link } from "react-router";
import { header } from "../../types/dashboard";

export function Title({title , location , goal} : header){
  return (
    <div className='flex font-bold justify-between p-3'>
        <h1 >{title}</h1>
        <Link to={location}>View all {goal} {'>>'}</Link>
        {/* <a href= {`http://localhost:5173/dashboard/${location}`} className='text-primary hover:text-primary-hover'>View all {goal} {'>>'}</a> */}
      </div>
  )
}