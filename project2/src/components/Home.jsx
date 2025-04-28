import { useAuth } from "../context/authContext";
import Banner from "./banner";
import Categories from "./Categories";
import Navbar from "./Navbar";

export default function Home() {
  const { user } = useAuth();
  return (
    <>
      <main className="bg-white relative overflow-hidden h-screen">
        <Navbar />
        <div className="bg-white flex relative z-20 items-center overflow-hidden">
          <div className="mx-auto w-full max-w-screen-lg px-6 flex flex-col lg:flex-row relative py-16">
            <div className="w-full lg:w-2/5 flex flex-col relative z-20 mb-10 lg:mb-0">
              <span className="w-20 h-2 bg-gray-800 mb-12"></span>
              <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
                Be on
                <span className="text-5xl sm:text-7xl">Time</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 mt-4">
                Dimension of reality that makes change possible and
                understandable. An indefinite and homogeneous environment in
                which natural events and human existence take place.
              </p>
              <div className="flex mt-8">
                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-md"
                >
                  Read more
                </a>
              </div>
            </div>

            <div className="w-full lg:w-3/5 flex justify-center">
              <img
                src="https://www.tailwind-kit.com/images/object/10.png"
                className="max-w-xs md:max-w-sm"
                alt="illustration"
              />
            </div>
          </div>
        </div>
      </main>
      <Banner />
      <Categories />
    </>
  );
}
