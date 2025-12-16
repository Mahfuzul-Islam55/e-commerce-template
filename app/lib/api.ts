export async function getProductsByCategory(category: string) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return data;
}
