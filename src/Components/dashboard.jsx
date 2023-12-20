import React from "react";
import { FaSearch, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom"; // Make sure to import Link from react-router-dom
import { FaPlayCircle } from "react-icons/fa";
export const Dashboard = () => {
  // Define card data with name, route, and description
  const cards = [
    { name: "Nyaysetu chat", route: "/Chat", description: "Chat with Nyaysetu" },
    { name: "Legal check", route: "/Legal Check", description: "Explore legal checks" },
    { name: "FAQs", route: "/faq", description: "Frequently Asked Questions" },
    { name: "Complaint assistant", route: "/ComplaintAss", description: "Get help with complaints" },
    { name: "Complain law finder", route: "/analytics", description: "Find laws related to complaints" },
    { name: "Blogs and Articles", route: "/Blogs and Articles", description: "Blogs and articles related to law"}
    // Add more cards as needed
  ];

  return (
    <div className="mx-auto py-8">
      <div className="flex justify-between items-center pt-8">
        <div>
          <h2 className="font-semibold text-4xl">Hi Mayank</h2>
          <p>What would you like to know?</p>
        </div>
        <button className="h-9 px-4 bg-sky-950 text-white rounded-md">Tour <FaPlayCircle /></button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {cards.map((card, index) => (
          <Link to={card.route} key={index}>
            <div className="cursor-pointer bg-white border border-gray-300 p-4 rounded-lg hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-between mb-4">
                <FaSearch className="text-md mr-2" />
                <FaRegStar className="text-md" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.name}</h3>
              <p>{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

//export default Dashboard;
