import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import data from './data.json';

const DataTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <table className="data-table w-[1300px] my-6 ml-6 mr-4 border-collapse border">
        <tr className="bg-blue-50 text-xs text-left">
          <th className="px-4 py-2">S/N</th>
          <th className="px-4 py-2">Image</th>
          <th className="px-4 py-2">SKU</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Brand</th>
          <th className="px-4 py-2">Cost Price</th>
          <th className="px-4 py-2">Quantity</th>
          <th className="px-4 py-2">Size</th>
        </tr>
      <tbody className="border rounded-lg mt-4 space-y-4">
        {products.map((product, index) => (
          <tr key={product.id} className="bg-white border-t">
            <td className="px-4 py-2">
              <span className="inline-block rounded-xl p-1 mr-1">
                <FontAwesomeIcon icon={faSquare} className="text-blue-50 w-2 h-2 border-2 rounded-sm border-slate-400" />
              </span>
              {index + 1}
            </td>
            <td className="px-4 py-2">
              <img src={product.Image} alt={product.Name} className="h-10 w-10 object-cover" />
            </td>
            <td className="px-4 py-2">{product.SKU}</td>
            <td className="px-4 py-2">{product.Name}</td>
            <td className="px-4 py-2">{product.Title}</td>
            <td className="px-4 py-2">{product.Description}</td>
            <td className="px-4 py-2">{product.Brand}</td>
            <td className="px-4 py-2">{product.Cost}</td>
            <td className="px-4 py-2">{product.Quantity}</td>
            <td className="px-4 py-2">{product.Size}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
