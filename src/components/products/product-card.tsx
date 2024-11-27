import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { ProductDto } from "@/interface/dto/product.dto";
import Link from "next/link";
import { PRODUCT_NOT_FOUND_IMG } from "@/const/product.const";
import { FormatThaiBaht } from "@/utils/format-currency";
import ProductRating from "./product-rating";

type Props = {
  product: ProductDto;
};

export default function ProductCard({ product }: Props) {
  return (
    <>
      <div className="rounded-2xl bg-white p-1 text-center transition duration-500 hover:-translate-y-1">
        <Link href={`/products/${product.url_key}`}>
          {product.image ? (
            <Image
              width={500}
              height={500}
              className="rounded-t-xl object-cover"
              src={product.image}
              alt={"product image"}
            />
          ) : (
            <Image
              width={500}
              height={500}
              className="rounded-t-xl object-cover"
              src={PRODUCT_NOT_FOUND_IMG}
              alt="Not found image"
            />
          )}
        </Link>
        <div className="my-3 space-y-2 px-2 md:space-y-3 md:px-6">
          <p className="line-clamp-2 h-12 px-2">{product.name}</p>
          <b>
            <FormatThaiBaht amount={product.price} />
          </b>
          <div className="flex justify-center divide-x *:px-2">
            <ProductRating rating={product.star_rating} />
            <p>{product.star_rating}</p>
          </div>
          <div>
            <Link href={`/products/${product.url_key}`}>
              <button className="w-full rounded-lg border-2 border-primary bg-primary py-2 text-white hover:bg-white hover:text-primary md:w-4/5">
                เรียนรู้เพิ่มเติม
              </button>
            </Link>
          </div>

          <a
            href={`${process.env.NEXT_PUBLIC_TOPVALUE_URL}/${product.url_key}`}
            className="flex items-center justify-center space-x-1"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLocationDot} className="size-4" />
            <small className="text-gray-500 hover:underline">
              สถานที่จัดจำหน่าย
            </small>
          </a>
        </div>
      </div>
    </>
  );
}
