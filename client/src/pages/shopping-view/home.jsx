// src/pages/ShoppingHome.js
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import { fetchProductDetails } from "@/store/shop/products-slice";
import PlantBannerSlider from "@/components/PlantBannerSlider";
import ShopByCategory from "@/components/ShopByCategory";
import FeaturedPlantsAndTrees from "@/components/FeaturedPlantsAndTrees";
import WelcomeComponent from "@/components/WelcomeComponent";

function ShoppingHome() {
  const { productList, productDetails } = useSelector((state) => state.shopProducts);
  const { user } = useSelector((state) => state.auth);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Fetch product details for a specific plant/tree
  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  // Add plant/tree to the cart
  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Plant added to cart",
        });
      }
    });
  }

  // Auto slide through feature images
  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner Slider */}
      <PlantBannerSlider />
      <WelcomeComponent/>

      {/* Shop by Category */}
      <ShopByCategory />

      {/* Featured Plants & Trees */}
      <FeaturedPlantsAndTrees
        productList={productList}
        handleGetProductDetails={handleGetProductDetails}
        handleAddtoCart={handleAddtoCart}
      />
    </div>
  );
}

export default ShoppingHome;



// import { Button } from "@/components/ui/button";
// import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"; // Import icons for navigation
// import { Card, CardContent } from "@/components/ui/card"; 
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAllFilteredProducts,
//   fetchProductDetails,
// } from "@/store/shop/products-slice";
// import ShoppingProductTile from "@/components/shopping-view/product-tile";
// import { useNavigate } from "react-router-dom";
// import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
// import { useToast } from "@/components/ui/use-toast";
// import ProductDetailsDialog from "@/components/shopping-view/product-details";
// import { getFeatureImages } from "@/store/common-slice";

// // Define the categories with icons (no images now)
// const categoriesWithIcon = [
//   { id: "palm-trees", label: "Palm Trees", icon: "🌴" },
//   { id: "fruit-trees", label: "Fruit Trees", icon: "🍏" },
//   { id: "conifers", label: "Conifers", icon: "🌲" },
//   { id: "ashok-trees", label: "Ashok Trees", icon: "🌸" },
//   { id: "indoor-plants", label: "Indoor Plants", icon: "🌱" },
// ];

// // Define plant names
// const plantNames = [
//   { id: "ashok-tree", label: "Ashok Tree" },
//   { id: "swanes-gold", label: "Swanes Gold" },
//   { id: "king-palm", label: "King Palm" },
//   { id: "cuban-royal", label: "Cuban Royal" },
//   { id: "golden-thuja", label: "Golden Thuja" },
// ];

// // Plant Banner Slider Component
// const plantBanners = [
//   {
//     id: "ashok-tree-banner",
//     name: "Ashok Tree",
//     //description: "Beautiful flowering tree, perfect for any garden.",
//     image: "/assets/ashok.jpg", // Image reference in public/assets folder
//   },
//   {
//     id: "swanes-gold-banner",
//     name: "GOLDCREST",
//     //description: "A golden beauty with vibrant hues.",
//     image: "/assets/goldcrest.jpg",
//   },
//   {
//     id: "king-palm-banner",
//     name: "XL ASHOK",
//     //description: "Elegant palm tree with majestic leaves.",
//     image: "/assets/ashok3.2m.jpg",
//   },
//   {
//     id: "cuban-royal-banner",
//     name: "XL ASHOK",
//     //description: "A striking palm, perfect for tropical gardens.",
//     image: "/assets/ashok3.2m.jpg",
//   },
//   {
//     id: "golden-thuja-banner",
//     name: "XL ASHOK",
//     //description: "Perfect hedge plant with a golden hue.",
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
//     <div className="relative w-full h-[500px] overflow-hidden bg-gray-200">
//       {/* Banner Slide Images */}
//       {plantBanners.map((banner, index) => (
//         <div
//           key={banner.id}
//           className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
//             index === currentSlide ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <div className="flex items-center justify-between w-full h-full">
//             {/* Left Side - Title and Description */}
//             <div className="lg:w-1/2 p-6 text-white bg-[#DAA520]">
//               <h2 className=" text-4xl font-bold">{banner.name}</h2>
//               <p className="mt-4 text-xl">{banner.description}</p>
//             </div>

//             {/* Right Side - Image */}
//             <div className="lg:w-1/2">
//               <img
//                 src={banner.image}
//                 alt={banner.name}
//                 className="object-cover w-full h-full"
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

// function ShoppingHome() {
//   const { productList, productDetails } = useSelector(
//     (state) => state.shopProducts
//   );
//   const { featureImageList } = useSelector((state) => state.commonFeature);
//   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { toast } = useToast();

//   // Navigate to product listing page with selected filter
//   function handleNavigateToListingPage(getCurrentItem, section) {
//     sessionStorage.removeItem("filters");
//     const currentFilter = {
//       [section]: [getCurrentItem.id],
//     };
//     sessionStorage.setItem("filters", JSON.stringify(currentFilter));
//     navigate(`/shop/listing`);
//   }

//   // Fetch product details for a specific plant/tree
//   function handleGetProductDetails(getCurrentProductId) {
//     dispatch(fetchProductDetails(getCurrentProductId));
//   }

//   // Add plant/tree to the cart
//   function handleAddtoCart(getCurrentProductId) {
//     dispatch(
//       addToCart({
//         userId: user?.id,
//         productId: getCurrentProductId,
//         quantity: 1,
//       })
//     ).then((data) => {
//       if (data?.payload?.success) {
//         dispatch(fetchCartItems(user?.id));
//         toast({
//           title: "Plant added to cart",
//         });
//       }
//     });
//   }

//   // Auto slide through feature images
//   useEffect(() => {
//     if (productDetails !== null) setOpenDetailsDialog(true);
//   }, [productDetails]);

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Banner Slider */}
//       <PlantBannerSlider />

//       {/* Shop by Category */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {categoriesWithIcon.map((categoryItem) => (
//               <Card
//                 onClick={() =>
//                   handleNavigateToListingPage(categoryItem, "category")
//                 }
//                 className="cursor-pointer hover:shadow-lg transition-shadow"
//                 key={categoryItem.id}
//               >
//                 <CardContent className="flex flex-col items-center justify-center p-6">
//                   <span className="text-3xl">{categoryItem.icon}</span>
//                   <span className="font-bold">{categoryItem.label}</span>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Shop by Plant Name */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">Shop by Plant Name</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {plantNames.map((plantItem) => (
//               <Card
//                 onClick={() =>
//                   handleNavigateToListingPage(plantItem, "plant")
//                 }
//                 className="cursor-pointer hover:shadow-lg transition-shadow"
//                 key={plantItem.id}
//               >
//                 <CardContent className="flex flex-col items-center justify-center text-center">
//                   <span className="text-3xl">{plantItem.label}</span>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Plants & Trees */}
//       <section className="py-12">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">
//             Featured Plants & Trees
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {productList && productList.length > 0
//               ? productList.map((productItem) => (
//                   <ShoppingProductTile
//                     handleGetProductDetails={handleGetProductDetails}
//                     product={productItem}
//                     handleAddtoCart={handleAddtoCart}
//                     key={productItem.id}
//                   />
//                 ))
//               : null}
//           </div>
//         </div>
//       </section>

//       {/* Product Details Dialog */}
//       <ProductDetailsDialog
//         open={openDetailsDialog}
//         setOpen={setOpenDetailsDialog}
//         productDetails={productDetails}
//       />
//     </div>
//   );
// }

// export default ShoppingHome;
