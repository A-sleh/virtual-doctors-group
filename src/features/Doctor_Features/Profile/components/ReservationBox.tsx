
type reservationBoxProps = {
    type: string ;
    children?: React.ReactNode;
}

export default function ReservationBox({type,children}:reservationBoxProps) {
    return (
        <div className="rounded-box p-0 overflow-hidden">
            <h1 className="p-5 font-bold text-lg">{type}</h1>
            {children}
            <button className="text-center  bg-primary w-full p-2 text-white font-medium">{type}</button>
        </div>
    )

}