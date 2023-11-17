import fs from "fs/promises";
import path from "path";
function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}
//first this function will get called then the component
export async function getStaticProps() {
  console.log("(Re)-generating..");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }
  if (data.products.length === 0) {
    return {
      notFound: true, //404 page will reflect
    };
  }
  return {
    props: {
      products: data.products,
    },
    revalidate: 10, //In case of development page will be regenated on every request but in case of production, after 10 secs page will regenerate
  };
}
export default HomePage;
