import { useState } from 'react'
import { Link } from 'react-router-dom'

function Treatment({ value, img, name, description, price, category, duration }) {
    const [treatmentInfo, seTreatmentInfo] = useState({
        id: value,
        name: name,
        description: description,
        price: price,
        category: category
    })

    return (
        // Card
        <article className="flex flex-col justify-evenly rounded-md shadow-md overflow-hidden text-center ">
            <img src="https://source.unsplash.com/random/500x400" />
            <div className="flex flex-col h-full justify-between">
                <h2 className="text-gray-900 text-lg pl-2 font-semibold">{name} </h2>
                <span className=" flex justify-around border py-2 text-gray-800 text-sm pl-2 font-semibold">
                    <p className="pr-1"><data value={price}>{price}kr </data></p>
                    <span className="text-gray-500">/</span>
                    <p className="">{duration}min</p>
                </span>

                <p className="px-2 py-1 ">{description}</p>
                {/* Book-button */}
                <Link className="px-4 py-1 text-gray-50 tracking-wider bg-green-700 hover:bg-green-600 rounded" to={
                    {
                        pathname: `/boka/${name.toLowerCase()}-${value}`,
                        state: {
                            id: value,
                            name: name,
                            description: description,
                            price: price,
                            category: category,
                            duration: duration
                        }
                    }
                }>Boka</Link>
            </div>
        </article>
    )
}

export default Treatment
