export default function Categories() {
  return (
    <div class="py-4 mx-auto max-w-4xl">
      <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-10">
        Top Categories
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full aspect-[41/50] overflow-hidden mx-auto">
            <img
              src="https://www.spark.co.nz/content/dam/spark/images/product-images/accessories/headphones/apple/airpods-max/Airpods-max-starlight-1.png"
              alt="product1"
              class="h-full w-full object-contain"
            />
          </div>
        </div>

        <div class="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full aspect-[41/50] overflow-hidden mx-auto">
            <img
              src="https://www.sony.ca/image/04575d5d3e3ace842828cec12600bc7c?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9"
              alt="product2"
              class="h-full w-full object-contain"
            />
          </div>
        </div>

        <div class="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full aspect-[41/50] overflow-hidden mx-auto">
            <img
              src="https://readymadeui.com/images/laptop4.webp"
              alt="product3"
              class="h-full w-full object-contain"
            />
          </div>
        </div>

        <div class="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full aspect-[41/50] overflow-hidden mx-auto">
            <img
              src="https://img.ricardostatic.ch/images/4443c6a8-ab16-44c8-be65-7edf0bb391c3/t_1000x750/apple-iphone-13-pro-max-512-gb-sierrabl"
              alt="product4"
              class="h-full w-full object-contain"
            />
          </div>
        </div>

        <div class="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full aspect-[41/50] overflow-hidden mx-auto">
            <img
              src="https://yanapc.it/wp-content/uploads/2025/03/Gaming-God.webp"
              alt="product5"
              class="h-full w-full object-contain"
            />
          </div>
        </div>

        <div class="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full aspect-[41/50] overflow-hidden mx-auto">
            <img
              src="https://www.almumtaz.com.pk/wp-content/uploads/2025/02/Webp.webp"
              alt="product6"
              class="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
