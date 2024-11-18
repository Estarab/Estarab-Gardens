// src/components/FeaturedPlantsAndTrees.js
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function FeaturedPlantsAndTrees({ productList, handleGetProductDetails, handleAddtoCart }) {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Plants & Trees</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productList && productList.slice(0, 12).map((productItem) => (
            <ShoppingProductTile
              key={productItem.id}
              handleGetProductDetails={handleGetProductDetails}
              product={productItem}
              handleAddtoCart={handleAddtoCart}
            />
          ))}
        </div>
        <div className="text-center mt-6">
          <Button
            variant="link"
            onClick={() => navigate("/shop/listing")}
            className="text-blue-500"
          >
            View All Plants
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPlantsAndTrees;
