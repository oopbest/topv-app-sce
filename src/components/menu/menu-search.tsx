import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ProductDto } from "@/interface/dto/product.dto";
import { FormatThaiBaht } from "@/utils/format-currency";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { PRODUCT_NOT_FOUND_IMG } from "@/const/product.const";

type Props = {
  toggleSearch: () => void;
  isOpenSearch: boolean;
};

export default function MenuSearch({ toggleSearch, isOpenSearch }: Props) {
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function fetchProduct() {
    const res = await fetch("/products/api", { cache: "no-store" }); // เรียก API route
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return data;
  }

  const filteredProducts = Array.isArray(products)
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleCloseSearch = () => {
    setSearchQuery("");
    toggleSearch();
  };

  useEffect(() => {
    if (searchQuery.length >= 3) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const result = await fetchProduct();
          setProducts(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    } else {
      setProducts([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (isOpenSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpenSearch]);

  return (
    <>
      <div
        className={`${
          isOpenSearch ? "flex" : "hidden"
        } fixed inset-0 z-50 h-[100vh] w-[100vw] flex-col bg-black bg-opacity-25 p-4 sm:p-6 md:p-[10vh] lg:p-[12vh]`}
        onClick={handleCloseSearch}
      >
        <div
          className={`mx-auto my-0 flex min-h-full w-full max-w-[48rem] flex-col rounded-lg bg-white shadow-lg md:min-h-0`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex justify-between space-x-3 p-4">
            <div
              className="flex w-full overflow-hidden rounded-lg border border-gray-300 duration-500 hover:border-primary focus:border-primary"
              tabIndex={0}
            >
              <span className="flex items-center justify-center px-3 text-gray-500">
                {/* <!-- Search Icon --> */}
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                ref={inputRef}
                type="search"
                placeholder="ค้นหาสินค้า..."
                className="flex-1 border-none px-1 py-2 text-sm outline-none focus:ring-0"
              />
            </div>

            <button
              className="rounded-full px-3 hover:bg-slate-100"
              onClick={handleCloseSearch}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </header>

          <div className="flex overflow-auto rounded-b-lg">
            <div className="container flex min-h-36 flex-col justify-between border-t pb-4">
              <ul className="flex flex-col bg-white text-primary">
                {searchQuery.length >= 3 && (
                  <small className="mx-4 my-2">
                    {filteredProducts.length} Item
                  </small>
                )}
                {loading ? (
                  <div role="status" className="m-5 flex justify-center">
                    <svg
                      aria-hidden="true"
                      className="h-8 w-8 animate-spin fill-primary text-gray-200"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <>
                    {filteredProducts.length > 0 ? (
                      <>
                        {filteredProducts
                          // .slice(0, 5)
                          .map((product: ProductDto) => (
                            <li
                              className="my-1 rounded-md hover:bg-slate-100 md:mx-2"
                              key={product.id}
                              onClick={handleCloseSearch}
                            >
                              <Link
                                href={`/products/${product.id}`}
                                className="flex items-center justify-between p-4"
                              >
                                <div className="flex space-x-2">
                                  {product.image ? (
                                    <Image
                                      src={product.image}
                                      alt={product.name}
                                      className="size-12 rounded-md"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src={PRODUCT_NOT_FOUND_IMG}
                                      alt={product.name}
                                      className="size-12 rounded-md"
                                      width={50}
                                      height={50}
                                    />
                                  )}
                                  <div>
                                    <p className="line-clamp-1">
                                      {product.name}
                                    </p>
                                    <small className="rounded-full bg-primary bg-opacity-10 px-2 font-semibold">
                                      <FormatThaiBaht amount={product.price} />
                                    </small>
                                  </div>
                                </div>

                                <FontAwesomeIcon icon={faAngleRight} />
                              </Link>
                            </li>
                          ))}

                        {/* More product */}
                        {/* {filteredProducts.length >= 5 && (
                        <div className="mt-3 flex justify-center">
                          <Link
                            href={"/products"}
                            onClick={() => {
                              clearSearch();
                              toggleSearch();
                            }}
                          >
                            <button className="btn-primary w-24 py-1">
                              ดูเพิ่มเติม
                            </button>
                          </Link>
                        </div>
                      )} */}
                      </>
                    ) : searchQuery.length >= 3 ? (
                      <div className="mt-4 text-center text-gray-400">
                        <small>ไม่พบสินค้าที่ค้นหา</small>
                      </div>
                    ) : (
                      <>
                        <small className="items-center py-12 text-center text-gray-400">
                          ยังไม่มีรายการค้นหา
                        </small>
                      </>
                    )}
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
