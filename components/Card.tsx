export default function Card({ brand }) {

    return (
        <>
            <div className="card mx-auto my-auto w-auto card-bordered my-8 mx-8 hover:bg-base-300 hover:cursor-pointer">
                <figure className="w-fit"><img src={brand["OG image"]} alt={brand["URL"]+" hero image"} className="rounded-lg w-10/12" /></figure>
                <div className="card-body bg-transparent p-5 flex">
                    <h2 className="card-title  flex justify-between">
                        {brand["URL"]}<div className="badge badge-primary">NEW</div>
                    </h2>
                    <p>{brand["Meta description"]}</p>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">Fashion</div> 
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </>
    );
}
