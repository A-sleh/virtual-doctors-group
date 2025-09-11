import { requestJoinDoctor } from '../../types/dashboard';

export function RequestJoinDoctor({
  image,
  name,
  dateOfMessage,
  description,
  speciality,
  children,
}: requestJoinDoctor) {
  return (
    <div className="p-3 items-center bg-white rounded-2xl ">
      <img className="w-20 rounded-full mx-auto mb-2" src={image} alt="" />

      <div>
        <h4 className="text-md ">
          Dr.<span className="font-bold"> {name} </span>submitted an application
          to join our. His speciality is
          <span className="font-bold"> {speciality}</span>
        </h4>
        <p className="text-sm text-secondary mb-2">{dateOfMessage}</p>
        <h2 className="text-primary font-medium mb-2">Details</h2>
        <p className="mb-2">{description}</p>
        <div className="btn w-fit flex gap-x-2 mb-1.5">{children}</div>
      </div>
    </div>
  );
}
