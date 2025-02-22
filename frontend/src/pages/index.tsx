import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 via-green-400 to-green-500 flex items-center justify-center">
      <div className="text-center p-10 bg-white bg-opacity-70 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-green-900 mb-4">Welcome to HopShop</h1>
        <p className="text-lg text-green-800 mb-6">Home Page</p>
        <Link href="/about">
          <span className="text-green-900 font-bold">About</span>
        </Link>
        <button onClick={() => {
          console.log('making api request...');

          fetch('http://localhost:8000/neons')
            .then(response => response.json())
            .then((json) => { console.log(json) })
            .finally(() => { console.log('finished') })
            .catch((reason) => { console.error(reason) });
        }} className="text-red-500">Click me</button>
      </div>
    </div>
  );

}