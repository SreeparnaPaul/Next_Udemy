import React, { Fragment } from "react";
import fs from "fs/promises";
import path from "path";
const ProductDetailPage = (props) => {
  const { loadedProduct } = props;
  if (!loadedProduct) {
    return <p>Loading ..</p>;
  }
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}
//Adding getStaticProps tell next.js that i want to pre-render this page
export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const data = await getData();
  const product = data.products.find((product) => product.id === productId);
  if (!product) {
    return { notFound: true };
  }
  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: pathsWithParams,
    fallback: false,
    // fallback: true, //It tells next that if the pid is not present, but if the product is visble, then on request it will generate the page.
  };
}
export default ProductDetailPage;
