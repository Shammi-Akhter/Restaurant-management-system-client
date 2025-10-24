import React from "react";
import { Plus } from "lucide-react"; 
const Menu = () => {
  const foods = [
    { id: 1, name: "Grilled Chicken", price: "$12", img: "/images/chicken.jpg" },
    { id: 2, name: "Pasta Alfredo", price: "$10", img: "/images/pasta.jpg" },
    { id: 3, name: "Beef Burger", price: "$8", img: "/images/burger.jpg" },
    { id: 4, name: "French Fries", price: "$5", img: "/images/fries.jpg" },
    { id: 5, name: "Veggie Salad", price: "$6", img: "/images/salad.jpg" },
    { id: 6, name: "Pizza Slice", price: "$9", img: "/images/pizza.jpg" },
    { id: 7, name: "Soup Bowl", price: "$7", img: "/images/soup.jpg" },
    { id: 8, name: "Chocolate Cake", price: "$11", img: "/images/cake.jpg" },
  ];

  return (
    <section className="container mx-auto  mt-15">
      <h2 className="text-4xl font-bold text-center text-yellow-400 px-5 py-16">Menu</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={food.img}
              alt={food.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold mb-1">{food.name}</h3>
              <p className="text-lg font-medium text-gray-600 mb-1">
                {food.price}
              </p>
              
            </div>
            <div className="border-b-1 border-b-dotted border-gray-400 mb-2"></div>
              <button className="flex items-center gap-2 pl-20 mb-2 text-yellow-500 font-semibold">
                 Add to Cart <Plus size={18} />
              </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
