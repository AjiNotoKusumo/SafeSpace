import { NavLink } from "react-router";
import currencyFormatter from "../helpers/formatCurrency";

export default function Card({lodging}) {
    return (
        <>
            <NavLink
                to={`/lodging/${lodging.id}`}
                className="group flex flex-col md:flex-row h-auto md:h-40 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm
                transition hover:shadow-md animate-fade-in delay-200"
                >
                <img
                    src={lodging.imgUrl}
                    className="w-full h-48 md:h-full md:w-56 object-cover rounded-l-xl transition-transform duration-300 group-hover:scale-105 rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                />
                <div className="flex flex-col justify-between p-4 flex-1">
                    <div>
                    <p className="text-sm text-gray-500">{lodging?.Type?.name}</p>
                    <h3 className="text-lg font-semibold">{lodging.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                        {lodging.facility}
                    </p>
                    </div>
                    <p className="mt-3 text-indigo-600 font-semibold">
                    From {currencyFormatter(lodging.price)}
                    </p>
                </div>
            </NavLink>
        </>
    )
}