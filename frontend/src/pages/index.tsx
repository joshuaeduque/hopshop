import CategoriesBar from "@/components/CategoriesBar/CategoriesBar";
import SiteHeader from "@/components/SiteHeader/SiteHeader";

export default function Home() {

  const products = [
    {
      name: 'Pacman frog',
      price: 99
    },
    {
      name: 'Budget frog',
      price: 199
    },
    {
      name: 'Tree frog',
      price: 299
    }
  ];

  return (
    <div className="flex flex-col min-w-max">
      <SiteHeader />
      <CategoriesBar />
      <div className="p-4 flex flex-wrap gap-4">
        {products.map((product) => {
          return (
            <div className="card bg-base-100 h-60 w-60 shadow-xl">
              <figure>
                <img src="/FROG_GANG.jpg"/>
              </figure>
              <div className="card-body">
                <p className="card-title">{product.name}</p>
                <p>${product.price / 100}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}