import Product from "../Product/Product";
import "./Products.css";

function Products({ productsList }) {
  return (
    <section className="products">
      {productsList.map(({ id, title, price, image, category }) => (
        <Product
          id={id}
          title={title}
          price={price}
          image={image}
          category={category}
        />
      ))}
    </section>
  );
}

export default Products;
