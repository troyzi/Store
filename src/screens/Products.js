import { useParams } from "react-router-dom";

import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const params = useParams();
  const { category } = params;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(firestore, "products"),
        where("category", "==", category)
      );
      try {
        const querySnapshot = await getDocs(q);
        let res = [];
        querySnapshot.forEach((doc) => {
          res.push({ ...doc.data(), id: doc.id });
        });
        setData(res);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <h1 className="text-center">Loading ...</h1>;
  }

  return (
    <div className="container p-5">
      <h1 className="text-center">{category.toUpperCase()}</h1>
      <div className="container">
        {data.length === 0 && <h3 className="text-center">No Product Found</h3>}
        <div className="row mt-2 g-4">
          {data &&
            data.map((product, index) => (
              <ProductCard
                data={data}
                setData={setData}
                key={index}
                product={product}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
