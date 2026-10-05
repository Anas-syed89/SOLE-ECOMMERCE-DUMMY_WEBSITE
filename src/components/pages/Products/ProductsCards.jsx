import { useState } from "react";
import { products } from "../../../Data/ProductsData";
import Search from "../../common/Search";
import ProductCardLayout from "./ProductCardLayout";

const ProductsCards = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div className="bg-slate-900 w-full py-10">
      {/* Scrollable Container with Hidden Scrollbar */}
      <div className="py-4">
        <Search products={products} onSearch={setFilteredProducts} />
      </div>
      <div className="flex overflow-x-auto gap-7 px-6 sm:px-8 pb-6 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {filteredProducts.map((product) => (
          <ProductCardLayout key={product.id || index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCards;
