import { NavHashLink } from 'react-router-hash-link';

export default function Navbar() {
    return (
        <>
            <header className="sticky top-0 z-50 bg-indigo-800/80 dark:bg-gray-900/90 backdrop-blur-md border-b border-indigo-900 dark:border-gray-800 shadow-sm">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <nav className="flex items-center h-16 lg:h-20">
                        <div className="shrink-0">
                        <NavHashLink to="/#home" title="" className="flex group">
                            <span className="text-xl font-bold tracking-widest text-gray-900 dark:text-white uppercase group-hover:text-indigo-300 group-hover:dark:text-indigo-300 transition-colors">
                            Safe
                            <span className="text-indigo-300 dark:text-indigo-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                Space
                            </span>
                            </span>
                        </NavHashLink>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}