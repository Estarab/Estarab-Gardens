import { useEffect, useState } from "react";

function WelcomeComponent() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setShowText(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-[#228B22] to-[#228B22] flex items-center justify-center py-16 px-8 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0  opacity-40 z-0"></div>

      {/* Welcome Section */}
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
        {/* Heading */}
        <h2
          className={`text-4xl md:text-5xl font-extrabold mb-6 transform transition-all duration-1000 
          ${showText ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} ease-out`}
        >
          Elevate your gardening game with Estarab Gardens!
        </h2>

        {/* Description */}
        <p
          className={`text-lg md:text-xl mb-8 px-4 transform transition-all duration-1000 
          ${showText ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} ease-out`}
        >
          As the go-to solution for all plant enthusiasts, we offer a wide selection of top-quality plants
          alongside unmatched customer service.
        </p>

        {/* Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          {/* Leaf Icon */}
          <div
            className="p-8 rounded-full bg-green-500 shadow-xl transition-transform duration-700 transform hover:scale-110 hover:bg-green-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-white text-6xl w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4V2m0 0c3.333 1 6 4.25 6 8.5S15.333 18 12 19.5C8.667 18 6 14.75 6 10.5S8.667 2 12 4z"
              />
            </svg>
          </div>

          {/* Seedling Icon */}
          <div
            className="p-8 rounded-full bg-yellow-400 shadow-xl transition-transform duration-700 transform hover:scale-110 hover:bg-yellow-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-white text-6xl w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4V2m0 0c3.333 1 6 4.25 6 8.5S15.333 18 12 19.5C8.667 18 6 14.75 6 10.5S8.667 2 12 4z"
              />
            </svg>
          </div>

          {/* Star Icon */}
          <div
            className="p-8 rounded-full bg-gold-500 shadow-xl transition-transform duration-700 transform hover:scale-110 hover:bg-yellow-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-white text-6xl w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 17l3 4-1-5.9L18 8h-5.6L12 2l-2.4 6H6l3 7.1L9 21l3-4z"
              />
            </svg>
          </div>
        </div>

        {/* Additional Text */}
        <p
          className={`text-lg md:text-xl mb-8 px-4 transform transition-all duration-1000 
          ${showText ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} ease-out`}
        >
          Whether you're a seasoned gardener or just starting out, Estarab Gardens has everything you need to
          turn your outdoor and indoor spaces into a vibrant oasis.
        </p>

        <p
          className={`text-lg md:text-xl mb-8 px-4 transform transition-all duration-1000 
          ${showText ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} ease-out`}
        >
          Dive into a world where gardening and landscaping intertwine to create living masterpieces.
        </p>

        {/* Explore Button */}
        
        
      </div>
    </div>
  );
}

export default WelcomeComponent;
