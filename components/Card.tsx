export default function Card({ brand }) {

    return (
        <>
            <div className="card w-96 mx-auto my-8 mx-8 hover:cursor-pointer hover:shadow-xl">
                <figure className="relative">
                    <img src={brand["OG image"]} alt={brand["URL"]+" hero image"} className="rounded-xl w-96 h-80"/>
                    <div className="badge bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300 absolute m-2 top-0 left-0">{brand["Category"]}</div>     
                </figure>
                <h2 className="font-semibold p-2">{brand["URL"]}</h2>
                <p className="text-sm p-2">Est. revenue: {brand["Estimated annual revenue (lower bound)"].trim()}</p>
                <div className="card-actions justify-start p-2">
                </div>
            </div>
        </>
    );
}
