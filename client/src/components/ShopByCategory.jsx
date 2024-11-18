// src/components/ShopByCategory.js
import { Card, CardContent } from "@/components/ui/card"; 
import { useNavigate } from "react-router-dom";

const categoriesWithIcon = [
  { id: "palm-trees", label: "Palm Trees", icon: "🌴" },
  { id: "fruit-trees", label: "Fruit Trees", icon: "🍏" },
  { id: "conifers", label: "Conifers", icon: "🌲" },
  { id: "indoor-plants", label: "Indoor Plants", icon: "🌸" },
  { id: "outdoor-plants", label: "Outdoor Plants/Trees", icon: "🌱" },
];

function ShopByCategory() {
  const navigate = useNavigate();

  // Navigate to product listing page with selected filter
  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categoriesWithIcon.map((categoryItem) => (
            <Card
              onClick={() =>
                handleNavigateToListingPage(categoryItem, "category")
              }
              className="cursor-pointer hover:shadow-lg transition-shadow"
              key={categoryItem.id}
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <span className="text-3xl">{categoryItem.icon}</span>
                <span className="font-bold">{categoryItem.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopByCategory;
