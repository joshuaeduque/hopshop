export default function Header() {
    return (
        <div className="px-[10%] py-4">
            <div className="flex flex-col gap-4">
                <div className="grid grid-rows-2 items-center lg:grid-rows-none lg:grid-cols-2">
                    <img className="w-16 invert" src="next.svg" alt="Website logo" />
                    <div className="flex flex-row gap-4">
                        <input className="input input-sm bg-base-200 flex-grow" type="text" placeholder="Search..." />
                        <button className="btn btn-sm btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-sm btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadown-sm">
                                <li><a href="">Log In</a></li>
                                <li><a href="">Sign Out</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-sm btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadown-sm">
                                <li><a href="">TODO cart</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <a className="link link-hover" href=""><p>Home</p></a>
                    <a className="link link-hover" href=""><p>About</p></a>
                    <a className="link link-hover" href=""><p>Help</p></a>
                    <a className="link link-hover" href=""><p>Shop</p></a>
                </div>
            </div>
        </div>
    );
}