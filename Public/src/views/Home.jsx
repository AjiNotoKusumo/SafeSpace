import axios from 'axios'
import { useEffect, useState } from 'react'
import baseUrl from '../constants/baseUrl';
import Card from '../components/Card';
import homePic from '../assets/homePic.jpg'
import { NavHashLink } from 'react-router-hash-link';
import CardLoading from '../components/CardLoading';

export default function Home() {
    const [types, setTypes] = useState([])
    const [lodgings, setLodgings] = useState([])
    const [loadingType, setLoadingType] = useState(false)
    const [loadingLodging, setLoadingLodging] = useState(false)
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1)

    async function fetchTypes() {
        try {
            setLoadingType(true) 
            const {data} = await axios.get(`${baseUrl}/pub/types`)
            
            setTypes(data?.data)
        } catch (error) {
            console.log(error.response.data.message);
        } finally {
            setLoadingType(false) 
        }
        
    }

    async function fetchLodgings() {
        try {
            setLoadingLodging(true) 

            const {data} = await axios.get(`${baseUrl}/pub?search=${search}&filter=${filter}&sort=${sort}&page=${page}`)
            
            setLodgings(data?.data)
        } catch (error) {
            console.log(error.response.data.message);
        } finally {
            setLoadingLodging(false) 
        }
        
    }

    function pageNum(number) {
        let pageArr = []

        for(let i = 1; i <= number; i++){
            pageArr.push(
                <button className={`px-4 py-2 rounded border 
                    hover:bg-gray-100 border-gray-200 cursor-pointer
                    ${page === i ? 'bg-gray-200' : ''}`} onClick={() => setPage(i)}>{i}</button>
            )
        }

        return pageArr
    }

    useEffect(() => {
        fetchTypes()
    }, [])

    useEffect(() => {
        fetchLodgings()
    }, [search, filter, sort, page])
    
    return (
        <>
            <main>
                {/* HERO */}
                <section id="home" className="relative h-[700px] overflow-hidden rounded-b-[1rem]">
                <img
                    src={homePic}
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
                    <p className="text-sm uppercase tracking-widest text-indigo-200 animate-fade-in">
                    Find Aji
                    </p>
                    <h1 className="mt-3 text-4xl font-bold animate-fade-in delay-100">
                    Discover Lodgings That Feels Like Home
                    </h1>
                    <NavHashLink
                    to="#explore"
                    className="mt-8 inline-block rounded-xl bg-indigo-500 px-10 py-4
                    font-semibold text-white transition hover:bg-indigo-400
                    animate-fade-in delay-200"
                    >
                    Explore now
                    </NavHashLink>
                </div>
                </section>
                {/* EXPLORE */}
                <section
                id="explore"
                className="scroll-mt-20 px-4 py-16 mx-auto max-w-7xl space-y-12"
                >
                <h2 className="text-3xl font-bold text-start text-gray-900 animate-fade-in">
                    Explore Lodgings
                </h2>
                {/* SEARCH / FILTER / SORT */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* SIDEBAR */}
                    <aside
                    className="lg:col-span-1 lg:sticky lg:top-24 h-fit
                        rounded-xl border border-gray-200 bg-white p-6 shadow-sm
                        space-y-6 animate-fade-in"
                    >
                    <h3 className="font-semibold text-lg">Filter</h3>
                    <div className="space-y-2">
                        <div className="space-y-2">
                        <p className="text-sm font-medium">Type</p>
                        <ul className="space-y-1 text-sm">
                            <li>
                            <button
                                className={`w-full text-left rounded-lg px-3 py-2 cursor-pointer
                                    ${filter === '' ? 'font-medium hover:bg-indigo-50 text-indigo-600' : 'hover:bg-gray-100'}`}
                                onClick={() => setFilter('')}
                            >
                                All
                            </button>
                            </li>
                            
                            {loadingType ? 
                                Array.from({ length: 7 }).map((_, i) => {
                                    return (
                                        <li>
                                            <div className=" w-full rounded-lg px-3 py-2 bg-gray-200 shimmer" >
                                                <div className="h-4 w-2/3 rounded bg-gray-300" />
                                            </div>
                                        </li>
                                    )
                                })
                            :
                                types.map(type => {
                                return (
                                    <li>
                                        <button
                                            className={`w-full text-left rounded-lg px-3 py-2 cursor-pointer
                                                transition ${filter === type.id ? 'font-medium hover:bg-indigo-50 text-indigo-600' : 'hover:bg-gray-100'}`}
                                            onClick={() => {setFilter(type.id); setPage(1)}}
                                        >
                                            {type.name}
                                        </button>
                                    </li>
                                )
                                })
                            }

                            
                            
                        </ul>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Sort by</label>
                        <select className="w-full h-11 rounded-lg border border-gray-200 px-3 cursor-pointer" onChange={(event) => setSort(event.target.value)}>
                            <option value="" selected>Sort</option>
                            <option value="-createdAt">Newest</option>
                            <option value="createdAt">Oldest</option>
                        </select>
                    </div>
                    </aside>
                    {/* CONTENT */}
                    <div className="lg:col-span-3 space-y-6">
                    {/* SEARCH */}
                    <div className="flex animate-fade-in delay-100">
                        <input
                        type="text"
                        placeholder="Search by name or location"
                        className="flex-1 h-12 rounded-l-xl border border-gray-300 px-5
                        focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        onChange={(event) => {setSearch(event.target.value); setPage(1)}}
                        />
                        <div
                        className="h-12 rounded-r-xl bg-indigo-600 px-8 pt-3
                        font-semibold text-white transition"
                        >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        </div>
                    </div>
                    {/* SCROLLABLE LIST */}
                    <div className="max-h-[800px] min-h-[600px] overflow-y-auto space-y-4 pr-2">
                        {/* CARD */}
                        {loadingLodging ? 
                            Array.from({ length: 3 }).map((_, i) => {
                                return (
                                    <CardLoading/>
                                )
                            })
                            
                        : 
                            lodgings?.rows?.map(lodging => {
                                return (
                                    <Card lodging={lodging}/>
                                )
                            })
                        }
                        
                        
                    </div>
                    {/* PAGINATION */}
                    <div className="flex justify-center gap-2 pt-4 animate-fade-in">
                        <button className="px-4 py-2 rounded border hover:bg-gray-100 border-gray-200 cursor-pointer" 
                            onClick={() => setPage((prevData) => (prevData === 1)? prevData : prevData-1)}>◁</button>
                        {pageNum(Math.ceil(lodgings.count/lodgings.limit))}
                        <button className="px-4 py-2 rounded border hover:bg-gray-100 border-gray-200 cursor-pointer" 
                            onClick={() => setPage((prevData) => (prevData === Math.ceil(lodgings.count/lodgings.limit))? prevData : prevData+1)}>▷</button>
                    </div>
                    </div>
                </div>
                </section>
            </main>
            
        </>

    )
}