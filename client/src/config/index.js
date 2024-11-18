// Updated form controls and e-commerce structure for a plant-based store

// User Registration Form Controls
export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

// User Login Form Controls
export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

// Add Product Form Controls (for adding plants to the store)
export const addProductFormElements = [
  {
    label: "Plant Name",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter plant name",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter plant description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "palm-trees", label: "Palm Trees" },
      { id: "fruit-trees", label: "Fruit Trees" },
      { id: "conifers", label: "Conifers" },
      { id: "indoor-plants", label: "Indoor Plants" },
      { id: "outdoor-plants", label: "Outdoor Plants/Trees" },
    ],
  },
  {
    label: "Plant's Characteristics",
    name: "characterics",
    componentType: "select",
    options: [
      { id: "climbing", label: "Climbing & Vine Plants" },
    { id: "easy-care", label: "Easy Care" },
    { id: "blossoms", label: "Blossoms" },
    { id: "shade-forming", label: "Shade Forming" },
    { id: "air-purifying", label: "Air Purifying" },
      // { id: "tree", label: "Tree" },
      // { id: "shrub", label: "Shrub" },
      // { id: "flower", label: "Flower" },
      // { id: "climber", label: "Climber" },
      // { id: "cactus", label: "Cactus" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter plant price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
  {
    label: "Care Instructions",
    name: "careInstructions",
    componentType: "textarea",
    placeholder: "Enter care instructions",
  },
];

// Header Menu for Shopping View (updated to match your categories)
export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  // {
  //   id: "plants",
  //   label: "Plants",
  //   path: "/shop/listing",
  // },
  {
    id: "palm-trees",
    label: "Palm Trees",
    path: "/shop/listing",
  },
  {
    id: "fruit-trees",
    label: "Fruit Trees",
    path: "/shop/listing",
  },
  {
    id: "conifers",
    label: "Conifers",
    path: "/shop/listing",
  },
  {
    id: "indoor-plants",
    label: "Indoor Plants",
    path: "/shop/listing",
  },
  {
    id: "outdoor-plants",
    label: "Outdoor Plants",
    path: "/shop/listing",
  },
  {
    id: "landscaping",
    label: "Landscaping Services",
    path: "/shop/listing",
  },
  {
    id: "plant-care",
    label: "Plant Care",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

// Category Options Map for Filter (menu updated to match categories)
export const categoryOptionsMap = {
  "palm-trees": "Palm Trees",
  "fruit-trees": "Fruit Trees",
  "conifers": "Conifers",
  "indoor-plants": "Indoor Plants ",
  "outdoor-plants": "Outdoor Plants & Trees",
  "landscaping": "Landscaping Services",
  "plant-care": "Plant Care",
};

//Brand Options for Filtering (useful for filtering by plant brands)
export const brandOptionsMap = {
  "aero-garden": "AeroGarden",
  "miracle-grow": "Miracle-Gro",
  "home-depot": "Home Depot",
  "lowes": "Lowe's",
};

// Filter Options for Product Search (by category and brand)
export const filterOptions = {
  category: [
    { id: "palm-trees", label: "Palm Trees" },
    { id: "fruit-trees", label: "Fruit Trees" },
    { id: "conifers", label: "Conifers" },
    { id: "indoor-plants", label: "Indoor Plants" },
    { id: "outdoor-plants", label: "Outdoor Plants/Trees" },
  ],
  characteristics: [
    { id: "climbing", label: "Climbing & Vine Plants" },
    { id: "easy-care", label: "Easy Care" },
    { id: "blossoms", label: "Blossoms" },
    { id: "shade-forming", label: "Shade Forming" },
    { id: "air-purifying", label: "Air Purifying" },
  ],
};

// Sort Options for Product Sorting (by price and title)
export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

// Address Form Controls for Order Checkout (used when placing an order)
export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];



// Updated form controls and e-commerce structure for a plant-based store

// export const registerFormControls = [
//   {
//     name: "userName",
//     label: "User Name",
//     placeholder: "Enter your user name",
//     componentType: "input",
//     type: "text",
//   },
//   {
//     name: "email",
//     label: "Email",
//     placeholder: "Enter your email",
//     componentType: "input",
//     type: "email",
//   },
//   {
//     name: "password",
//     label: "Password",
//     placeholder: "Enter your password",
//     componentType: "input",
//     type: "password",
//   },
// ];

// export const loginFormControls = [
//   {
//     name: "email",
//     label: "Email",
//     placeholder: "Enter your email",
//     componentType: "input",
//     type: "email",
//   },
//   {
//     name: "password",
//     label: "Password",
//     placeholder: "Enter your password",
//     componentType: "input",
//     type: "password",
//   },
// ];

// export const addProductFormElements = [
//   {
//     label: "Plant Name",
//     name: "title",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter plant name",
//   },
//   {
//     label: "Description",
//     name: "description",
//     componentType: "textarea",
//     placeholder: "Enter plant description",
//   },
//   {
//     label: "Category",
//     name: "category",
//     componentType: "select",
//     options: [
//       { id: "indoor-plants", label: "Indoor Plants" },
//       { id: "outdoor-plants", label: "Outdoor Plants" },
//       { id: "succulents", label: "Succulents" },
//       { id: "trees", label: "Trees" },
//       { id: "flowers", label: "Flowers" },
//     ],
//   },
//   {
//     label: "Plant Type",
//     name: "type",
//     componentType: "select",
//     options: [
//       { id: "tree", label: "Tree" },
//       { id: "shrub", label: "Shrub" },
//       { id: "flower", label: "Flower" },
//       { id: "climber", label: "Climber" },
//       { id: "cactus", label: "Cactus" },
//     ],
//   },
//   {
//     label: "Price",
//     name: "price",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter plant price",
//   },
//   {
//     label: "Sale Price",
//     name: "salePrice",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter sale price (optional)",
//   },
//   {
//     label: "Total Stock",
//     name: "totalStock",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter total stock",
//   },
//   {
//     label: "Care Instructions",
//     name: "careInstructions",
//     componentType: "textarea",
//     placeholder: "Enter care instructions",
//   },
// ];

// export const shoppingViewHeaderMenuItems = [
//   {
//     id: "home",
//     label: "Home",
//     path: "/shop/home",
//   },
//   {
//     id: "plants",
//     label: "Plants",
//     path: "/shop/listing",
//   },
//   {
//     id: "indoor-plants",
//     label: "Indoor Plants",
//     path: "/shop/listing",
//   },
//   {
//     id: "outdoor-plants",
//     label: "Outdoor Plants",
//     path: "/shop/listing",
//   },
//   {
//     id: "succulents",
//     label: "Succulents",
//     path: "/shop/listing",
//   },
//   {
//     id: "plant-care",
//     label: "Plant Care",
//     path: "/shop/listing",
//   },
//   {
//     id: "gardening-tools",
//     label: "Gardening Tools",
//     path: "/shop/listing",
//   },
//   {
//     id: "search",
//     label: "Search",
//     path: "/shop/search",
//   },
// ];

// export const categoryOptionsMap = {
//   "indoor-plants": "Indoor Plants",
//   "outdoor-plants": "Outdoor Plants",
//   "succulents": "Succulents",
//   "flowers": "Flowers",
//   "trees": "Trees",
//   "gardening-tools": "Gardening Tools",
//   "plant-care": "Plant Care",
// };

// export const brandOptionsMap = {
//   "aero-garden": "AeroGarden",
//   "miracle-grow": "Miracle-Gro",
//   "home-depot": "Home Depot",
//   "lowes": "Lowe's",
// };

// export const filterOptions = {
//   category: [
//     { id: "indoor-plants", label: "Indoor Plants" },
//     { id: "outdoor-plants", label: "Outdoor Plants" },
//     { id: "succulents", label: "Succulents" },
//     { id: "flowers", label: "Flowers" },
//     { id: "trees", label: "Trees" },
//   ],
//   brand: [
//     { id: "aero-garden", label: "AeroGarden" },
//     { id: "miracle-grow", label: "Miracle-Gro" },
//     { id: "home-depot", label: "Home Depot" },
//     { id: "lowes", label: "Lowe's" },
//   ],
// };

// export const sortOptions = [
//   { id: "price-lowtohigh", label: "Price: Low to High" },
//   { id: "price-hightolow", label: "Price: High to Low" },
//   { id: "title-atoz", label: "Title: A to Z" },
//   { id: "title-ztoa", label: "Title: Z to A" },
// ];

// export const addressFormControls = [
//   {
//     label: "Address",
//     name: "address",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter your address",
//   },
//   {
//     label: "City",
//     name: "city",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter your city",
//   },
//   {
//     label: "Pincode",
//     name: "pincode",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter your pincode",
//   },
//   {
//     label: "Phone",
//     name: "phone",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter your phone number",
//   },
//   {
//     label: "Notes",
//     name: "notes",
//     componentType: "textarea",
//     placeholder: "Enter any additional notes",
//   },
// ];


// export const registerFormControls = [
//   {
//     name: "userName",
//     label: "User Name",
//     placeholder: "Enter your user name",
//     componentType: "input",
//     type: "text",
//   },
//   {
//     name: "email",
//     label: "Email",
//     placeholder: "Enter your email",
//     componentType: "input",
//     type: "email",
//   },
//   {
//     name: "password",
//     label: "Password",
//     placeholder: "Enter your password",
//     componentType: "input",
//     type: "password",
//   },
// ];

// export const loginFormControls = [
//   {
//     name: "email",
//     label: "Email",
//     placeholder: "Enter your email",
//     componentType: "input",
//     type: "email",
//   },
//   {
//     name: "password",
//     label: "Password",
//     placeholder: "Enter your password",
//     componentType: "input",
//     type: "password",
//   },
// ];

// export const addProductFormElements = [
//   {
//     label: "Title",
//     name: "title",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter product title",
//   },
//   {
//     label: "Description",
//     name: "description",
//     componentType: "textarea",
//     placeholder: "Enter product description",
//   },
//   {
//     label: "Category",
//     name: "category",
//     componentType: "select",
//     options: [
//       { id: "men", label: "Men" },
//       { id: "women", label: "Women" },
//       { id: "kids", label: "Kids" },
//       { id: "accessories", label: "Accessories" },
//       { id: "footwear", label: "Footwear" },
//     ],
//   },
//   {
//     label: "Brand",
//     name: "brand",
//     componentType: "select",
//     options: [
//       { id: "nike", label: "Nike" },
//       { id: "adidas", label: "Adidas" },
//       { id: "puma", label: "Puma" },
//       { id: "levi", label: "Levi's" },
//       { id: "zara", label: "Zara" },
//       { id: "h&m", label: "H&M" },
//     ],
//   },
//   {
//     label: "Price",
//     name: "price",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter product price",
//   },
//   {
//     label: "Sale Price",
//     name: "salePrice",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter sale price (optional)",
//   },
//   {
//     label: "Total Stock",
//     name: "totalStock",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter total stock",
//   },
// ];

// export const shoppingViewHeaderMenuItems = [
//   {
//     id: "home",
//     label: "Home",
//     path: "/shop/home",
//   },
//   {
//     id: "products",
//     label: "Products",
//     path: "/shop/listing",
//   },
//   {
//     id: "men",
//     label: "Men",
//     path: "/shop/listing",
//   },
//   {
//     id: "women",
//     label: "Women",
//     path: "/shop/listing",
//   },
//   {
//     id: "kids",
//     label: "Kids",
//     path: "/shop/listing",
//   },
//   {
//     id: "footwear",
//     label: "Footwear",
//     path: "/shop/listing",
//   },
//   {
//     id: "accessories",
//     label: "Accessories",
//     path: "/shop/listing",
//   },
//   {
//     id: "search",
//     label: "Search",
//     path: "/shop/search",
//   },
// ];

// export const categoryOptionsMap = {
//   men: "Men",
//   women: "Women",
//   kids: "Kids",
//   accessories: "Accessories",
//   footwear: "Footwear",
// };

// export const brandOptionsMap = {
//   nike: "Nike",
//   adidas: "Adidas",
//   puma: "Puma",
//   levi: "Levi",
//   zara: "Zara",
//   "h&m": "H&M",
// };

// export const filterOptions = {
//   category: [
//     { id: "men", label: "Men" },
//     { id: "women", label: "Women" },
//     { id: "kids", label: "Kids" },
//     { id: "accessories", label: "Accessories" },
//     { id: "footwear", label: "Footwear" },
//   ],
//   brand: [
//     { id: "nike", label: "Nike" },
//     { id: "adidas", label: "Adidas" },
//     { id: "puma", label: "Puma" },
//     { id: "levi", label: "Levi's" },
//     { id: "zara", label: "Zara" },
//     { id: "h&m", label: "H&M" },
//   ],
// };

// export const sortOptions = [
//   { id: "price-lowtohigh", label: "Price: Low to High" },
//   { id: "price-hightolow", label: "Price: High to Low" },
//   { id: "title-atoz", label: "Title: A to Z" },
//   { id: "title-ztoa", label: "Title: Z to A" },
// ];

// export const addressFormControls = [
//   {
//     label: "Address",
//     name: "address",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter your address",
//   },
//   {
//     label: "City",
//     name: "city",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter your city",
//   },
//   {
//     label: "Pincode",
//     name: "pincode",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter your pincode",
//   },
//   {
//     label: "Phone",
//     name: "phone",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter your phone number",
//   },
//   {
//     label: "Notes",
//     name: "notes",
//     componentType: "textarea",
//     placeholder: "Enter any additional notes",
//   },
// ];


// export const registerFormControls = [
//   {
//     name: "userName",
//     label: "User Name",
//     placeholder: "Enter your user name",
//     componentType: "input",
//     type: "text",
//   },
//   {
//     name: "email",
//     label: "Email",
//     placeholder: "Enter your email",
//     componentType: "input",
//     type: "email",
//   },
//   {
//     name: "password",
//     label: "Password",
//     placeholder: "Enter your password",
//     componentType: "input",
//     type: "password",
//   },
// ];

// export const loginFormControls = [
//   {
//     name: "email",
//     label: "Email",
//     placeholder: "Enter your email",
//     componentType: "input",
//     type: "email",
//   },
//   {
//     name: "password",
//     label: "Password",
//     placeholder: "Enter your password",
//     componentType: "input",
//     type: "password",
//   },
// ];

// export const addProductFormElements = [
//   {
//     label: "Title",
//     name: "title",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter product title",
//   },
//   {
//     label: "Description",
//     name: "description",
//     componentType: "textarea",
//     placeholder: "Enter product description",
//   },
//   {
//     label: "Category",
//     name: "category",
//     componentType: "select",
//     options: [
//       { id: "ashok", label: "Ashok" },
//              { id: "cuban_royal", label: "Cuban Royal" },
//             { id: "king_palm", label: "King Palm" },
//              { id: "cornifers", label: "Cornifers" },
//              { id: "fruit_trees", label: "Fruit Trees" },
//       // { id: "men", label: "Men" },
//       // { id: "women", label: "Women" },
//       // { id: "kids", label: "Kids" },
//       // { id: "accessories", label: "Accessories" },
//       // { id: "footwear", label: "Footwear" },
//     ],
//   },
//   {
//     label: "Family", //Brand
//     name: "brand",
//     componentType: "select",
//     options: [
//       { id: "ashok", label: "Ashok" },
//       { id: "palm_trees", label: "Palm Trees" },
//       { id: "cornifers", label: "Cornifers" },
//       { id: "fruit_trees", label: "Fruit Trees" },
//       { id: "blossoms", label: "Blossoms" },
//       { id: "trees", label: "Trees" },
//     ],
//   },
//   {
//     label: "Price",
//     name: "price",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter product price",
//   },
//   {
//     label: "Sale Price",
//     name: "salePrice",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter sale price (optional)",
//   },
//   {
//     label: "Total Stock",
//     name: "totalStock",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter total stock",
//   },
// ];

// export const shoppingViewHeaderMenuItems = [
//   {
//     id: "home",
//     label: "Home",
//     path: "/shop/home",
//   },
//   {
//     id: "products",
//     label: "Products",
//     path: "/shop/listing",
//   },
//   {
//     id: "ashok",
//     label: "Ashok",
//     path: "/shop/listing",
//   },
//   {
//     id: "cuban_royal",
//     label: "Cuban Royal",
//     path: "/shop/listing",
//   },
//   {
//     id: "king_palm",
//     label: "King Palm",
//     path: "/shop/listing",
//   },
//   {
//     id: "cornifers",
//     label: "Cornifers",
//     path: "/shop/listing",
//   },
//   {
//     id: "fruit_trees",
//     label: "Fruit Trees",
//     path: "/shop/listing",
//   },
//   {
//     id: "search",
//     label: "Search",
//     path: "/shop/search",
//   },
// ];

// export const categoryOptionsMap = {
//   ashok: "Ashok",
//   cuban_royal: "Cuban Royal",
//   king_palm: "King Palm",
//   cornifers: "Cornifers",
//   fruit_trees: "Fruit Trees",
// };

// //ws brandOptionsMap
// export const brandOptionsMap = {
//   ashok: "Ashok",
//   palm_trees: "Palm Trees",
//   cornifers: "Cornifers",
//   fruit_trees: "Fruit Trees",
//   blossoms:"Blossoms",
//   trees: "Trees",

//   // nike: "Nike",
//   // adidas: "Adidas",
//   // puma: "Puma",
//   // levi: "Levi",
//   // zara: "Zara",
//   // "h&m": "H&M",
// };

// export const filterOptions = {
//   category: [

//     { id: "ashok", label: "Ashok" },
//     { id: "cuban_royal", label: "Cuban Royal" },
//    { id: "king_palm", label: "King Palm" },
//     { id: "cornifers", label: "Cornifers" },
//     { id: "fruit_trees", label: "Fruit Trees" },


//     // { id: "men", label: "Men" },
//     // { id: "women", label: "Women" },
//     // { id: "kids", label: "Kids" },
//     // { id: "accessories", label: "Accessories" },
//     // { id: "footwear", label: "Footwear" },
//   ],
//   brand: [ //brand

//     { id: "ashok", label: "Ashok" },
//     { id: "palm_trees", label: "Palm Trees" },
//     { id: "cornifers", label: "Cornifers" },
//     { id: "fruit_trees", label: "Fruit Trees" },
//     { id: "blossoms", label: "Blossoms" },
//     { id: "trees", label: "Trees" },


//     // { id: "nike", label: "Nike" },
//     // { id: "adidas", label: "Adidas" },
//     // { id: "puma", label: "Puma" },
//     // { id: "levi", label: "Levi's" },
//     // { id: "zara", label: "Zara" },
//     // { id: "h&m", label: "H&M" },
//   ],
// };

// export const sortOptions = [
//   { id: "price-lowtohigh", label: "Price: Low to High" },
//   { id: "price-hightolow", label: "Price: High to Low" },
//   { id: "title-atoz", label: "Title: A to Z" },
//   { id: "title-ztoa", label: "Title: Z to A" },
// ];

// export const addressFormControls = [
//   {
//     label: "Address",
//     name: "address",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter your address",
//   },
//   {
//     label: "City",
//     name: "city",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter your city",
//   },
//   {
//     label: "Pincode",
//     name: "pincode",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter your pincode",
//   },
//   {
//     label: "Phone",
//     name: "phone",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter your phone number",
//   },
//   {
//     label: "Notes",
//     name: "notes",
//     componentType: "textarea",
//     placeholder: "Enter any additional notes",
//   },
// ];


