export default function About() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 flex items-center justify-center">
        <div className="text-center p-10 bg-white bg-opacity-70 rounded-lg shadow-lg max-w-md">
          <h1 className="text-5xl font-extrabold text-orange-900 mb-4">About HopShop</h1>
          <p className="text-lg text-orange-800 mb-6">This is the About Page of HOPSHOP</p>
          <div className="w-full h-64 overflow-hidden rounded-lg">
            <img src="/FROG_GANG.jpg" alt="Frog" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    );
  }