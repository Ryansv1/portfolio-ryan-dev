import "./App.css";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="">
        <section id="home-section" className="grid grid-cols-1 grid-rows-2">
          <div className="mt-24 mx-4 block">
            <h4 className="font-thin text-lg">Hey, I&apos;m</h4>
            <h1 className="font-bold text-2xl mt-4 mb-2">Ryan Silva</h1>
            <h5 className="font-extralight text-sm">
              I&apos;m a professional website developer with 2 years of
              experience
            </h5>
            <button className="mt-4 py-2 px-4 text-white bg-purple-400 rounded-md shadow-md">
              Hire me
            </button>
          </div>
          <div
            id="image-wrapper"
            className="relative mx-4 py-4 rounded-md overflow-hidden flex items-center justify-center flex-col"
          >
            <div className="bg-white p-2 rounded-md shadow-md text-center text-sm -mb-8 z-10">
              2 Years Experience
            </div>
            <img
              src="/images/pic.png"
              alt="Ryan Silva"
              className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-md"
            />
            <button className="bg-purple-400 text-white py-2 px-4 rounded-full shadow-md">
              Let&apos;s talk
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
