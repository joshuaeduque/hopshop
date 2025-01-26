import Link from "next/link";

export default function Home() {
  return (<div>
    <p>Home Page</p>
    <Link href={"/about"} className="underline">About</Link>

    <button onClick={() => {
      fetch('http://localhost:8000/neons')
        .then(response => response.json())
        .then((json) => { console.log(json) })
        .finally(() => { console.log('finished') })
        .catch((reason) => { console.error(reason) });
    }}>Click me</button>
  </div>);
}