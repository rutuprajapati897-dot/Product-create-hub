
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  function addProduct(e) {
    e.preventDefault();
    setProducts([...products, { name, price }]);
    setName("");
    setPrice("");
  }

  return (
    <div>
      <h2>Product Management</h2>

      <form onSubmit={addProduct}>
        <input
          placeholder="Product Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Add Product</button>
      </form>

      <h3>Product List</h3>
      {products.map((p, i) => (
        <p key={i}>
          {p.name} - ₹{p.price}
        </p>
      ))}
    </div>
  );
}

export default App;
