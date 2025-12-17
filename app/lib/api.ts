export async function getProductsByCategory(category: string) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return data;
}

export async function getAllProducts() {
  const res = await fetch(`https://fakestoreapi.com/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return data.length > 10 ? data.slice(0, 10) : data;
}

export async function getCategories() {
  const res = await fetch(`https://fakestoreapi.com/products/categories`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return data;
}
