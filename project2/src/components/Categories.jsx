import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="py-4 mx-auto max-w-5xl mb-5">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-10">
        Top Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-[1000px] mx-auto">
        <Link
          to="/Audio "
          className="w-full md:w-[30%] bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all"
        >
          <h1 className="flex justify-center mb-4  text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl  lg:text-3xl dark:text-white">
            Audio
          </h1>
          <div className="w-full aspect-[41/50] overflow-hidden mx-auto">
            <img
              src="https://www.spark.co.nz/content/dam/spark/images/product-images/accessories/headphones/apple/airpods-max/Airpods-max-starlight-1.png"
              alt="product1"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>

        <Link
          to="/Tv"
          className="w-full md:w-[30%] bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all"
        >
          <div className="w-full aspect-[41/50] overflow-hidden mx-auto">
            <h1 className="flex justify-center mb-4  text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl  lg:text-3xl dark:text-white">
              TV
            </h1>
            <img
              src="https://www.sony.ca/image/04575d5d3e3ace842828cec12600bc7c?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9"
              alt="product2"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>

        <Link
          to="/Mobile"
          className="w-full md:w-[30%] bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all"
        >
          <div className="w-full aspect-[41/50] overflow-hidden mx-auto">
            <h1 className="flex justify-center mb-4  text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl  lg:text-3xl dark:text-white">
              Mobile
            </h1>
            <img
              src="https://img.ricardostatic.ch/images/4443c6a8-ab16-44c8-be65-7edf0bb391c3/t_1000x750/apple-iphone-13-pro-max-512-gb-sierrabl"
              alt="product3"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>

        <Link
          to="/Gaming"
          className="w-full md:w-[30%] bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all"
        >
          <div className="w-full aspect-[41/50] overflow-hidden mx-auto">
            <h1 className="flex justify-center mb-4  text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl  lg:text-3xl dark:text-white">
              Gaming
            </h1>
            <img
              src="https://yanapc.it/wp-content/uploads/2025/03/Gaming-God.webp"
              alt="product4"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>

        <Link
          to="/ElettroDomestici"
          className="w-full md:w-[30%] bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all"
        >
          <div className="w-full aspect-[41/50] overflow-hidden mx-auto">
            <h1 className="flex justify-center mb-4  text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl  lg:text-3xl dark:text-white">
              Casa
            </h1>
            <img
              src="https://media.cecotec.cloud/01899/bolero-coolmarket-2d-origin-86-green-e_7g4ctg_1.png"
              alt="product4"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>

        <Link
          to="/Laptop"
          className=" w-full md:w-[30%] bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all"
        >
          <div className="w-full aspect-[41/50] overflow-hidden mx-auto">
            <h1 className="flex justify-center mb-4  text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl  lg:text-3xl dark:text-white">
              Laptop
            </h1>
            <img
              src="https://pnghunter.com/get-logo.php?id=9506"
              alt="product4"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
