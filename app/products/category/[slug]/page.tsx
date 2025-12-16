import { getProductsByCategory } from "@/app/lib/api";

interface PageProps {
  params: { slug: string };
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const categoryName = resolvedParams.slug;

  const products = await getProductsByCategory(categoryName);

  return (
    <div>
      <h1>{decodeURIComponent(categoryName)}</h1>
      <ul>
        {products.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
