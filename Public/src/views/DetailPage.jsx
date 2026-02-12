import axios from 'axios'
import { useParams } from 'react-router'
import baseUrl from '../constants/baseUrl';
import { useEffect, useState } from 'react';
import currencyFormatter from '../helpers/formatCurrency';
import { NavHashLink } from 'react-router-hash-link';


export default function DetailPage() {
    const {id} = useParams()
    const [lodging, setLodging] = useState({})

    async function fetchLodging() {
        try {
            const {data} = await axios.get(`${baseUrl}/pub/${id}`)

            console.log(data.data);
            

            setLodging(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchLodging()
    }, [])

    return (
        <>
            <main>
                {/* HERO */}
                <section className="relative w-full h-[420px] overflow-hidden">
                <img
                    src={lodging.imgUrl}
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
                {/* hero content */}
                <div className="relative z-10 flex items-end h-full px-4 pb-10 mx-auto max-w-7xl">
                    <div className="text-white space-y-2 animate-fade-in">
                    <p className="text-sm uppercase tracking-widest text-indigo-200">
                        {lodging?.Type?.name}
                    </p>
                    <h1 className="text-4xl font-bold">{lodging.name}</h1>
                    </div>
                </div>
                </section>
                {/* CONTENT */}
                <section className="px-4 py-12 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* LEFT */}
                    <div className="lg:col-span-2 space-y-8">
                    {/* INFO CARD */}
                    <div className="rounded-xl border-1 border-indigo-900 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in delay-200">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                        <div className="flex items-start gap-3">
                            <span className="text-xl">👨‍👩‍👦</span>
                            <div>
                            <p className="text-sm font-medium">Capacity</p>
                            <p className="text-sm text-gray-600">{lodging.roomCapacity} people</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-xl">📍</span>
                            <div>
                            <p className="text-sm font-medium">Location</p>
                            <p className="text-sm text-gray-600">{lodging.location}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* FACILITY */}
                    <div className="space-y-2 animate-fade-in delay-300">
                        <h2 className="text-xl font-semibold">Facility</h2>
                        <p className="text-gray-700">{lodging.facility}</p>
                    </div>
                    {/* TYPE */}
                    <div className="space-y-2 animate-fade-in delay-300">
                        <h2 className="text-xl font-semibold">Type</h2>
                        <p className="text-gray-700">{lodging?.Type?.name}</p>
                    </div>
                    </div>
                    {/* RIGHT / PRICE */}
                    <div className="lg:sticky lg:top-28 h-fit">
                    <div className="rounded-xl border-1 border-indigo-900 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 space-y-5 animate-fade-in delay-200">
                        <div>
                        <p className="text-sm text-gray-500">Price</p>
                        <p className="text-2xl font-bold text-gray-900">{currencyFormatter(lodging.price)}</p>
                        </div>
                        <NavHashLink
                        to="/#explore"
                        className="block w-full rounded-lg bg-indigo-600 px-4 py-3 text-center text-white font-semibold transition hover:bg-indigo-500 active:scale-95"
                        >
                        Return to explore
                        </NavHashLink>
                        <p className="text-xs text-gray-500 text-center">
                        Limited room available
                        </p>
                    </div>
                    </div>
                </div>
                </section>
            </main>
        </>
    )
}