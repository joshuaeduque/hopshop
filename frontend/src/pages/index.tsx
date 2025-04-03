import Header from "@/components/Header/header";

export default function Home() {

  const products = [
    { name: 'Aquatic Frog', src: '/products/aquatic-frog.jpg' },
    { name: 'Bull Frog', src: '/products/bull-frog.jpg' },
    { name: 'Glass Frog', src: '/products/glass-frog.jpg' },
    { name: 'Green Frog', src: '/products/green-frog.jpg' },
    { name: 'Green Tree Frog', src: '/products/green-tree-frog.jpg' },
    { name: 'Poison Dart Frog', src: '/products/poison-dart-frog.jpg' },
    { name: 'Red Eyed Tree Frog', src: '/products/red-eyed-tree-frog.jpg' },
    { name: 'Tomato Frog', src: '/products/tomato-frog.jpg' }
  ];

  return (
    <>
      <Header />
      <div className="px-[10%] py-8">
        <div className="border flex justify-center items-center bg-cover bg-top h-64" style={{ backgroundImage: "url('/hero-frog.jpg')" }}>
          <div className="flex flex-col items-center gap-4">
            <p className="font-bold text-white">Tagline describing your e-shop</p>
            <button className="btn text-white btn-success btn-sm w-fit">Shop Now</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="px-[10%] py-4">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-2xl">Featured Products</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, i) => (
              <div key={i} className="card bg-base-200 h-64 shadow-sm">
                <figure>
                  <img src={product.src} alt={product.name} />
                </figure>
                <div className="card-body">
                  <p className="card-title">{product.name}</p>
                  <div className="rating rating-sm rating-half">
                    <input type="radio" name={`rating-${i}`} className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="0.5 star" />
                    <input type="radio" name={`rating-${i}`} className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="1 star" />
                    <input type="radio" name={`rating-${i}`} className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="1.5 star" />
                    <input type="radio" name={`rating-${i}`} className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="2 star" />
                    <input type="radio" name={`rating-${i}`} className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="2.5 star" />
                    <input type="radio" name={`rating-${i}`} className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="3 star" />
                    <input type="radio" name={`rating-${i}`} className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="3.5 star" />
                    <input type="radio" name={`rating-${i}`} className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="4 star" />
                    <input type="radio" name={`rating-${i}`} className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="4.5 star" />
                    <input type="radio" name={`rating-${i}`} className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="5 star" defaultChecked />
                  </div>
                  <p>$999</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="px-[10%] py-4">
        <div className="grid grid-cols=[1fr_auto] lg:grid-rows-none lg:grid-cols-2 gap-4 lg:gap-[25%]">
          <div>
            <p className="font-bold text-2xl">Newsletter</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet inventore totam iusto vel aliquam molestias, voluptates repellat sapiente tempora sequi saepe nemo autem accusantium non dicta suscipit eius ipsum nostrum!</p>
          </div>
          <div className="flex gap-4 justify-end lg:items-center">
            <input className="input input-sm bg-base-200 lg:flex-grow" type="text" placeholder="example@email.com" />
            <button className="btn btn-sm px-8">Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="px-[10%] py-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row flex-wrap gap-4 justify-center">
            <a className="link link-hover" href=""><p className="text-sm">Conditions of Use</p></a>
            <a className="link link-hover" href=""><p className="text-sm">Privacy Notice</p></a>
            <a className="link link-hover" href=""><p className="text-sm">Consumer Health Data Privacy Disclosure</p></a>
            <a className="link link-hover" href=""><p className="text-sm">Your Ads Privacy Notice</p></a>
          </div>
          <p className="place-self-center text-sm">© 2025, hopshop.com, Inc. or its affiliates</p>
        </div>
      </div>
    </>
  );
}