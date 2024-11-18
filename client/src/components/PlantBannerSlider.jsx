import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const plantBanners = [
  {
    id: "ashok-tree-banner",
    name: "Conifers",
    description: "Add greenery to your landscape with our stunning collection of conifers.",
    image: "/assets/img01.png", 
  },
  {
    id: "swanes-gold-banner",
    name: "FRUIT TREES",
    description: "Discover a wide variety of fruit trees perfect for your garden or orchard.",
    image: "/assets/img02.png",
  },
  {
    id: "king-palm-banner",
    name: "Indoor Plants",
    description: "Bring nature indoors with our selection of vibrant and low-maintenance indoor plants",
    image: "/assets/img9.png",
  },
];

function PlantBannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentHeading, setCurrentHeading] = useState(0);
  const navigate = useNavigate();

  const handleViewAllPlants = () => {
    navigate('/shop/listing');
  };

  // Change the heading every 4 seconds
  useEffect(() => {
    const headingTimer = setInterval(() => {
      setCurrentHeading((prevHeading) => (prevHeading + 1) % 4 );  // Loop through 4 messages
    }, 4000); // 4 seconds interval

    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % plantBanners.length);
    }, 5000); // 5 seconds for auto slide

    return () => {
      clearInterval(headingTimer);
      clearInterval(slideTimer);
    };
  }, []);

  // Define sliding heading messages
  const slidingHeadings = [
    " 🌴 A Complete Solution for your Gardening Needs! 🌴",
    "🌿 A Sanctuary where your botanical dreams take root and flourish! 🌻",
    " Delivery Services Available! 🚚 ",
    " Landscaping Services Provided! 🏡",
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#228B22]"> {/* Green background */}
      
      {/* Sliding Heading at the top */}
      <div className="absolute top-0 left-0 w-full bg-[#4CAF50] text-white py-3 text-center animate-slide">
        <p className="text-xl md:text-2xl font-semibold">{slidingHeadings[currentHeading]}</p>
      </div>
      
      {/* Banner Slide Images */}
      {plantBanners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-center w-full h-full px-8 py-12">
            {/* Left Section - Company Name and About */}
            <div className="flex flex-col justify-center items-center text-white w-full md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">{banner.name}</h2>
              <p className="text-lg md:text-xl mb-6 text-center">{banner.description}</p>

              {/* View All Plants Button (on Desktop, next to the paragraph) */}
              <div className="w-full md:w-auto md:flex md:justify-start md:mt-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleViewAllPlants}
                  className="px-8 py-3 text-xl bg-white text-[#228B22] hover:bg-[#4CAF50] hover:text-white transition-all duration-300 hidden md:block"
                >
                  View All Plants
                </Button>
              </div>
            </div>

            {/* Right Section - Plant Image */}
            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
              <img
                src={banner.image}
                alt={banner.name}
                className="object-contain w-full h-72 md:h-80 lg:h-96 xl:h-96" // Fixed height for images
              />
            </div>
          </div>
        </div>
      ))}

      {/* Mobile View - View All Plants Button (After Image) */}
      <div className="absolute bottom-10 md:hidden w-full flex justify-center">
        <Button
          variant="primary"
          size="lg"
          onClick={handleViewAllPlants}
          className="px-8 py-3 text-xl bg-white text-[#228B22] hover:bg-[#4CAF50] hover:text-white transition-all duration-300"
        >
          View All Plants
        </Button>
      </div>

    </div>
  );
}

export default PlantBannerSlider;






// import { Button } from "@/components/ui/button";
// import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"; // Import icons for navigation
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const plantBanners = [
//   {
//     id: "ashok-tree-banner",
//     name: "Ashok Tree",
//     description: "Beautiful flowering tree, perfect for any garden.",
//     image: "/assets/ashok.jpg", 
//   },
//   {
//     id: "swanes-gold-banner",
//     name: "GOLDCREST",
//     description: "A golden beauty with vibrant hues.",
//     image: "/assets/goldcrest.jpg",
//   },
//   {
//     id: "king-palm-banner",
//     name: "XL ASHOK",
//     description: "Elegant palm tree with majestic leaves.",
//     image: "/assets/ashok3.2m.jpg",
//   },
//   {
//     id: "cuban-royal-banner",
//     name: "XL ASHOK",
//     description: "A striking palm, perfect for tropical gardens.",
//     image: "/assets/ashok3.2m.jpg",
//   },
//   {
//     id: "golden-thuja-banner",
//     name: "XL ASHOK",
//     description: "Perfect hedge plant with a golden hue.",
//     image: "/assets/ashok3.2m.jpg",
//   },
// ];

// function PlantBannerSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const navigate = useNavigate();

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % plantBanners.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prevSlide) => (prevSlide - 1 + plantBanners.length) % plantBanners.length
//     );
//   };

//   // Auto slide through the images every 3 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % plantBanners.length);
//     }, 3000); // 3 seconds interval

//     return () => clearInterval(timer); // Clean up the interval on component unmount
//   }, []);

//   const handleViewAllPlants = () => {
//     // Navigate to the plant listing page or category page
//     navigate('/shop/listing');
//   };

//   return (
//     <div className="relative w-full min-h-screen overflow-hidden bg-[#228B22]"> {/* Background with green */}
//       {/* Banner Slide Images */}
//       {plantBanners.map((banner, index) => (
//         <div
//           key={banner.id}
//           className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
//             index === currentSlide ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <div className="flex flex-col items-center justify-center w-full h-full text-white p-4">
//             {/* Left Exciting Text */}
//             {/* <div className="absolute left-4 top-1/4 md:top-1/3 text-3xl md:text-4xl font-bold text-white">
//               <p className="mb-4">Explore the Best of Nature</p>
//               <p className="text-xl md:text-2xl">Find Your Perfect Plant Today!</p>
//             </div> */}

//             {/* Centered Title and Description */}
//             <div className="text-center mb-6">
//               <h2 className="text-4xl font-bold mb-4">{banner.name}</h2>
//               <p className="text-xl">{banner.description}</p>
//             </div>

//             {/* Centered Image with Fixed Size */}
//             <div className="w-2/3 lg:w-1/2 xl:w-1/3 mt-6">
//               <img
//                 src={banner.image}
//                 alt={banner.name}
//                 className="object-contain w-full h-48 md:h-56 lg:h-64 xl:h-72"  // Fixed image height
//               />
//             </div>

//             {/* Right Exciting Text */}
//             <div className="absolute right-4 top-1/4 md:top-1/3 text-3xl md:text-4xl font-bold text-white text-right">
//               <p className="mb-4">Bring Freshness to Your Home</p>
//               {/* <p className="text-xl md:text-2xl">Add Greenery with Just One Click!</p> */}
//             </div>

//             {/* View All Plants Button */}
//             <div className="absolute bottom-10 md:bottom-12">
//               <Button
//                 variant="primary"
//                 size="lg"
//                 onClick={handleViewAllPlants}
//                 className="px-8 py-3 text-xl bg-white text-[#228B22] hover:bg-[#4CAF50] hover:text-white transition-all duration-300"
//               >
//                 View All Plants
//               </Button>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Additional small plant images on top of the green background */}
//       <div className="absolute top-1/4 left-10 md:left-20 lg:left-40 z-10">
//         <img
//           src="/assets/img4.png"
//           alt="Small Plant 1"
//           className="w-24 sm:w-32 md:w-48 lg:w-64 transform rotate-45"
//         />
//       </div>
//       <div className="absolute top-1/2 right-10 md:right-20 lg:right-40 z-10">
//         <img
//           src="/assets/img5.png"
//           alt="Small Plant 2"
//           className="w-24 sm:w-32 md:w-48 lg:w-64 transform rotate-0"
//         />
//       </div>
//       <div className="absolute top-3/4 left-10 md:left-32 lg:left-64 z-10">
//         <img
//           src="/assets/img2.png"
//           alt="Small Plant 3"
//           className="w-24 sm:w-32 md:w-48 lg:w-64 transform rotate-45"
//         />
//       </div>

//       {/* Slide Navigation Buttons */}
//       <Button
//         variant="outline"
//         size="icon"
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
//       >
//         <ChevronLeftIcon className="w-6 h-6 text-black" />
//       </Button>
//       <Button
//         variant="outline"
//         size="icon"
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
//       >
//         <ChevronRightIcon className="w-6 h-6 text-black" />
//       </Button>
//     </div>
//   );
// }

// export default PlantBannerSlider;



// // src/components/PlantBannerSlider.js
// import { Button } from "@/components/ui/button";
// import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"; // Import icons for navigation
// import { useState, useEffect } from "react";

// const plantBanners = [
//   {
//     id: "ashok-tree-banner",
//     name: "Ashok Tree",
//     description: "Beautiful flowering tree, perfect for any garden.",
//     image: "/assets/ashok.jpg", 
//   },
//   {
//     id: "swanes-gold-banner",
//     name: "GOLDCREST",
//     description: "A golden beauty with vibrant hues.",
//     image: "/assets/goldcrest.jpg",
//   },
//   {
//     id: "king-palm-banner",
//     name: "XL ASHOK",
//     description: "Elegant palm tree with majestic leaves.",
//     image: "/assets/ashok3.2m.jpg",
//   },
//   {
//     id: "cuban-royal-banner",
//     name: "XL ASHOK",
//     description: "A striking palm, perfect for tropical gardens.",
//     image: "/assets/ashok3.2m.jpg",
//   },
//   {
//     id: "golden-thuja-banner",
//     name: "XL ASHOK",
//     description: "Perfect hedge plant with a golden hue.",
//     image: "/assets/ashok3.2m.jpg",
//   },
// ];

// function PlantBannerSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % plantBanners.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prevSlide) => (prevSlide - 1 + plantBanners.length) % plantBanners.length
//     );
//   };

//   // Auto slide through the images every 3 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % plantBanners.length);
//     }, 3000); // 3 seconds interval

//     return () => clearInterval(timer); // Clean up the interval on component unmount
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen overflow-hidden bg-[#228B22]"> {/* Use min-h-screen to ensure the height is flexible */}
//       {/* Banner Slide Images */}
//       {plantBanners.map((banner, index) => (
//         <div
//           key={banner.id}
//           className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
//             index === currentSlide ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <div className="flex flex-col items-center justify-center w-full h-full text-white p-4">
//             {/* Centered Title and Description */}
//             <div className="text-center mb-6">
//               <h2 className="text-4xl font-bold mb-4">{banner.name}</h2>
//               <p className="text-xl">{banner.description}</p>
//             </div>

//             {/* Centered Image at the bottom (image height fixed on desktop) */}
//             <div className="w-2/3 lg:w-1/2 xl:w-1/3 mt-2">
//               <img
//                 src={banner.image}
//                 alt={banner.name}
//                 className="object-contain w-full h-48 md:h-56 lg:h-64 xl:h-72"  // Fixed image height
//               />
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Slide Navigation Buttons */}
//       <Button
//         variant="outline"
//         size="icon"
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
//       >
//         <ChevronLeftIcon className="w-6 h-6 text-black" />
//       </Button>
//       <Button
//         variant="outline"
//         size="icon"
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
//       >
//         <ChevronRightIcon className="w-6 h-6 text-black" />
//       </Button>
//     </div>
//   );
// }

// export default PlantBannerSlider;
