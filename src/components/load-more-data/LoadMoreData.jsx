import React, { useEffect, useState } from "react";
const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisablebutton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json(response);
      console.log(result);
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length == 196) {
      setDisablebutton(true);
    }
  }, [products]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-lg font-semibold text-gray-700 animate-pulse">
          Loading data, please wait...
        </p>
      </div>
    );
  }
  return (
    <div className="load-more-container p-4  bg-gray-100">
      <div className="product-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products && products.length
          ? products.map((item) => (
              <div
                className="product bg-white p-4 shadow-md rounded-md hover:shadow-lg transition-shadow duration-300"
                key={item.id}
              >
                <img
                  className="w-full h-40 object-cover rounded-md"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <p className="mt-2 text-gray-800 font-medium text-center">
                  {item.title}
                </p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container mt-6 text-center">
        <button
          className={`px-6 py-2 rounded-md text-white font-semibold ${
            disableButton
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          }`}
          disabled={disableButton}
          onClick={() => setCount(count + 1)}
        >
          Load More Products
        </button>
        {disableButton ? (
          <p className="mt-2 text-gray-600">You have reached 196 products.</p>
        ) : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
