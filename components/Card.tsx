export default function Card({ brands }) {
    if (!brands || brands.length === 0) {
        return <div>Loading...</div>; // Add a loading indicator
    }

    return (
        <>
            {brands.map((brand: any) => (
                <div key={brand._id} className="card mx-auto my-auto w-auto my-8 mx-8 hover:bg-base-300 hover:cursor-pointer">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-lg" /></figure>
                    <div className="card-body bg-transparent p-5 flex">
                        <h2 className="card-title  flex justify-between">
                            {brand["URL"]}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-start">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}