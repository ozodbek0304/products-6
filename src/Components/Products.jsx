import useProducts from "../Hooks/useProducts"
import Placeholder from "./Placeholder"
import ProductsList from "./ProductsList"
const Products = () => {

  const [products, loading] = useProducts();
    return (
      <div className="container py-3">
        {loading ? <Placeholder />:<ProductsList products={products} />}
      </div>
    );
  
}

export default Products
