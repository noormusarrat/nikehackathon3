import Image from "next/image";
const essentials = [
    {
      category: 'Men\'s',
      items: ['Air Force 1', 'Huarache', 'Air Max 95'],
    },
    {
      category: 'Women\'s',
      items: ['All Shoes', 'Custom Shoes', 'Jordan Shoes', 'Running Shoes'],
    },
    {
      category: 'Clothing',
      items: ['All Clothing', 'Marked Wear', 'Hoodies & Pullovers', 'Shirts & Tops'],
    },
    {
      category: 'Kids',
      items: ['Infant & Toddler Shoes', 'Kids\' Shoes', 'Kids\' Jordan Shoes', 'Kids\' Basketball Shoes'],
    },
  ];
export default function Essential() {
  return (
    <section className="m-4" >
      <div>
        <h2 className="font-semibold text-xl py-5"> The Essentials</h2>
      </div>
      <div className="flex justify-evenly flex-wrap gap-5">
        <Image width={300} height={300} alt="" src={"/e1.png"} />
        <Image width={300} height={300} alt="" src={"/e2.png"} />
        <Image width={300} height={300} alt="" src={"/e3.png"} />
      </div>
       <div className="container mx-auto mt-5 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {essentials.map((essential, index) => (
              <div key={index} className="flex flex-col text-center justify-evenly">

              <h3 className="text-lg font-bold mb-2">{essential.category}</h3>
              <ul className="space-y-1">
                {essential.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>
    </section>
  );
}
