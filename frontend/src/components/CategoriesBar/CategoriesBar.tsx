export default function CategoriesBar() {
    return (
        <div className="bg-base-200 px-4 flex overflow-x-auto items-center gap-2">
            <button className="btn btn-square btn-ghost">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-5 w-5 stroke-current">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <button className="btn btn-ghost btn-sm">Pet frogs</button>
            <button className="btn btn-ghost btn-sm">Live Insects</button>
            <button className="btn btn-ghost btn-sm">Heat & Lighting</button>
            <button className="btn btn-ghost btn-sm">Water & Humidity</button>
            <button className="btn btn-ghost btn-sm">Decorations</button>
            <button className="btn btn-ghost btn-sm">Supplements</button>
            <button className="btn btn-ghost btn-sm">Apparel</button>
            <button className="btn btn-ghost btn-sm">Books</button>
        </div>
    );
}