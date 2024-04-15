export default function Card({ brand }) {

    return (
        <>
            <div className="card w-96 mx-auto my-8 mx-8 border shadow-sm hover:cursor-pointer hover:shadow-xl">
                <figure className="relative">
                    <img src={brand["OG image"]} alt={brand["URL"]+" hero image"} className="rounded-xl w-190 h-80"/>
                    <div className="badge bg-gray-100 text-gray-800 text-md shadow-xl font-medium me-2 px-2.5 py-0.5 rounded-xl dark:bg-gray-100 dark:text-gray-800 absolute m-2 top-0 left-0">{brand["Category"]}</div>  
                    <div className="text-xs hover:bg-gray-200 font-medium me-2 px-2.5 py-0.5 rounded-xl absolute m-2 top-0 right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </div>        
                </figure>
                <div className="grid grid-cols-2 gap-4 justify-items-start left-0">
                    <h2 className="font-semibold p-2">{brand["URL"].trimStart()}</h2>
                    <div className="p-2 grid grid-cols-2 text-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-28">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <p className="font-sm">
                        4.2
                        </p>
                    </div>
                </div>
                <div className="justify-items-start">
                    <p className="text-sm text-start p-2">Est. revenue: {brand["Estimated annual revenue (lower bound)"].trim()}</p>

                </div>

            </div>
        </>
    );
}
