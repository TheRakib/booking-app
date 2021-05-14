function Booking({ id, name, tel, treatment, price, date, time, duration }) {
    return (

        <article className='flex flex-col justify-center rounded-md shadow-md py-2 px-5 mb-7'>
            <p className={`booking-${id}`}>Appointment id: {id} {duration} min</p>
            <p className="text-xl font-semibold pl-2">{treatment}</p>
            <p className="text-s font-semibold px-2 py-1">{date} kl. {time} </p>
            <p className="text-s font-semibold px-2 py-1">{price} kr </p>
            <div className='flex justify-evenly'>
                <button className="px-4 py-2 mt-2 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-600 rounded">Boka om</button>
                <button className="px-4 py-2 mt-2 text-white font-light tracking-wider bg-red-500 hover:bg-red-600 rounded">Avboka</button>
            </div>
        </article>

    )
}

export default Booking
