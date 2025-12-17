export async function getProductsByCategory(category: string) {
  const safeCategory = encodeURIComponent(category);
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${safeCategory}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw [];
  }
  const data = await res.json();
  return data;
}

export async function getAllProducts() {
  const res = await fetch(`https://fakestoreapi.com/products`);

  if (!res.ok) {
    throw [];
  }
  const data = await res.json();
  return data.length > 10 ? data.slice(0, 10) : data;
}

export async function getCategories() {
  const res = await fetch(`https://fakestoreapi.com/products/categories`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw [];
  }
  const data = await res.json();
  return data;
}
