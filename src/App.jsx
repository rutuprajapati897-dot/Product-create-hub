
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [products, setProducts] = useState([]);

  function addProduct(e) {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      price,
      category,
      quantity,
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice("");
    setCategory("");
    setQuantity("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-stone-900 to-orange-950 p-5 sm:p-10">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Inventory Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Product Management
            </h1>
            <p className="mt-2 text-gray-400">
              Create and manage your product inventory.
            </p>
          </div>

          <div className="rounded-2xl border border-orange-400/30 bg-orange-400/10 p-4 text-center">
            <p className="text-sm text-orange-200">Total Products</p>
            <p className="text-3xl font-bold text-white">
              {products.length}
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Product Form */}
          <div className="rounded-3xl border border-white/10 bg-white p-6 shadow-2xl lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                📦
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Add Product
                </h2>
                <p className="text-sm text-gray-500">
                  Enter product details
                </p>
              </div>
            </div>

            <form onSubmit={addProduct} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Product Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Wireless Headphones"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Price (₹)
                </label>
                <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  placeholder="e.g. 1499"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none focus:border-orange-500"
                >
                  <option value="">Select category</option>
                  <option>Electronics</option>
                  <option>Clothing</option>
                  <option>Accessories</option>
                  <option>Home & Living</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  placeholder="e.g. 10"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 p-3 font-bold text-white shadow-lg transition hover:bg-orange-600 active:scale-95"
              >
                + Add Product
              </button>
            </form>
          </div>

          {/* Product List */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Product Inventory
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  Your newly added products appear here.
                </p>
              </div>
              <span className="rounded-full bg-orange-500/20 px-3 py-1 text-sm font-semibold text-orange-300">
                {products.length} items
              </span>
            </div>

            {products.length === 0 ? (
              <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-600 p-8 text-center">
                <div className="text-6xl">🛍️</div>
                <h3 className="mt-4 text-xl font-bold text-white">
                  No Products Yet
                </h3>
                <p className="mt-2 text-gray-400">
                  Fill in the form to add your first product.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-gray-900 p-5 sm:flex-row sm:items-center"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-3xl">
                        📦
                      </div>
                      <div>
                        <h3 className="font-bold text-white">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-400">
                          {product.category} · Qty: {product.quantity}
                        </p>
                      </div>
                    </div>

                    <p className="text-xl font-extrabold text-orange-400">
                      ₹{Number(product.price).toLocaleString("en-IN")}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Product Management System · React + Tailwind CSS
        </p>
      </div>
    </div>
  );
}

export default App;
