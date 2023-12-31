import React, { useEffect, useState } from "react";
import useSWR from "swr";
function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    "https://nextjs-course-27cb7-default-rtdb.firebaseio.com/sales.json",
    fetcher
  );
  useEffect(() => {
    if (data) {
      //as i am using firebase realtime database, so to get the data in a structured way the below code is required
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);
  // if (isLoading) {
  //   return <p>Loading ...</p>;
  // }

  if (error) {
    return <p>Failed to load</p>;
  }
  if (!data && !sales) {
    return <p>Loading ...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}
export async function getStaticProps() {
  const response = await fetch(
    "https://nextjs-course-27cb7-default-rtdb.firebaseio.com/sales.json" //.json is firebase requirement
  );
  const data = await response.json();
  const transformedSales = [];
  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  return {
    props: {
      sales: transformedSales,
    },
    revalidate: 10,
  };
}
export default LastSalesPage;
