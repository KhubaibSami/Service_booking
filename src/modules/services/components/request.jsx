import React from "react";

const Requests = () => {
  const products = [
    {
      name: "Shahzad",
      category: "plumber",
      price: "$29/h",
     detail:"reviews"
    },
    {
      name: "Shahzad",
      category: "plumber",
      price: "$29/h",
     detail:"reviews"
    },
    {
      name: "Shahzad",
      category: "plumber",
      price: "$29/h",
     detail:"reviews"
    },
    {
      name: "Shahzad",
      category: "plumber",
      price: "$29/h",
     detail:"reviews"
    },
    {
      name: "Shahzad",
      category: "plumber",
      price: "$29/h",
     detail:"reviews"
    },
    {
      name: "Shahzad",
      category: "plumber",
      price: "$29/h",
     detail:"reviews"
    },
  
    // Add more product data as needed
  ];

  return (
    <>
      <section className="dark:bg-gray-90 p-3 sm:p-5">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12 mt-14">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Category
                    </th>                  
                    <th scope="col" className="px-4 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-4 py-3">
                      
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index} className="border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {product.name}
                      </th>
                      <td className="px-4 py-3">{product.category}</td>
                      <td className="px-4 py-3">{product.price}</td>
                      <td className="px-4 py-3">{product.price}</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Requests;
