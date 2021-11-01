import Product from "../Product/Product";
import "./Products.css";

function Products({ productsList }) {
  return (
    <section className="products">
      {productsList.map(({ id, title, price, image }) => (
        <Product id={id} title={title} price={price} image={image} />
      ))}
    </section>
  );
}

export default Products;
