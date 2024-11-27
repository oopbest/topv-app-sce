import { cookies } from "next/headers";
import ProductCard from "@/components/products/product-card";
import { Metadata } from "next";
import { PRODUCT_DEFAULT_PAGE } from "@/const/product.const";
import { ProductDto } from "@/interface/dto/product.dto";
import RefreshToken from "@/components/products/product-refresh";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import ProductMore from "@/components/products/product-more";

export const metadata: Metadata = {
  title: "Products",
};

export default async function ProductsPage() {
  // Get Access Token From Cookies
  const accessToken = (await cookies()).get("ACCESS_TOKEN")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products?currentPage=${PRODUCT_DEFAULT_PAGE}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  // 401 Unauthorized Refresh Token
  if (res.status === 401) {
    return <RefreshToken />;
  }

  const products: ProductDto[] = await res.json();

  return (
    <>
      {products && products.length > 0 ? (
        <main className="bg-[#f7f7f7]">
          <div className="container mx-auto block space-y-16">
            <div className="grid grid-cols-2 gap-3 p-4 md:grid-cols-3">
              {products.map((product: ProductDto, index) => (
                <ProductCard key={index} product={product} />
              ))}
              <ProductMore accessToken={accessToken} />
            </div>
          </div>
        </main>
      ) : (
        <div className="m-5 w-full bg-slate-50 py-40 text-center *:my-3">
          <h3 className="font-thin">Sorry, No Product Found.</h3>
          <p>
            <small>Could not find requested resource</small>
          </p>
          <button className="rounded-full border-2 border-none border-primary bg-primary px-3 py-2 text-sm text-white">
            <Link href="/" className="flex">
              Home Page
              <FontAwesomeIcon
                icon={faAnglesRight}
                className="my-auto ml-2 size-4"
              />
            </Link>
          </button>
        </div>
      )}
    </>
  );
}
