import SiteHeader from "@/components/SiteHeader/SiteHeader";

export default function Home() {
  return (
    <div className="flex flex-col">
      <SiteHeader />
      {/* Product filtering bar */}
      <div className="bg-base-200 px-4 flex">
        <div className="dropdown dropdown-end ml-auto">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm m-1">Sort by</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Price: Highest to Lowest</a></li>
            <li><a>Price: Lowest to Highest</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}