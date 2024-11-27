import { Metadata } from "next";
import { Suspense } from "react";
import LoadingProductDetail from "./loading";
import ProductInfo from "@/components/products/product-info";
import ProductCarousel from "@/components/products/product-carousel";
import ProductDescription from "@/components/products/product-description";
import { ProductDetailDto } from "@/interface/dto/product-detail.dto";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ pkey: string }>;
}): Promise<Metadata> => {
  const pkey = (await params).pkey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product-detail?pkey=${pkey}`,
  );
  const product: ProductDetailDto = await res.json();

  return {
    title: product.name,
  };
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ pkey: string }>;
}) {
  const pkey = (await params).pkey;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product-detail?pkey=${pkey}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const product: ProductDetailDto = await res.json();

  return (
    <Suspense fallback={<LoadingProductDetail />}>
      <section className="bg-theme-container block md:p-3">
        <main className="container mx-auto block pb-16">
          {/* <!-- Info --> */}
          <div className="transition-responsive rounded-lg bg-white p-4">
            <div className="transition-responsive grid grid-cols-1 lg:grid-cols-5 lg:space-x-4">
              <div className="col-span-2 h-full">
                <ProductCarousel media={product.media} />
              </div>
              <div className="col-span-3">
                <ProductInfo product={product} urlKey={pkey} />
              </div>
            </div>

            {/* <!-- Description --> */}
            <div className="py-5">
              <div className="rounded-lg lg:border lg:p-5">
                <ProductDescription description={product.description} />
              </div>
            </div>
          </div>
        </main>
      </section>
    </Suspense>
  );
}
