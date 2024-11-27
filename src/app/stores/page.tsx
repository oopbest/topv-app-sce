import { Metadata } from "next";
import Image from "next/image";
import Banner from "@images/shop.png";
import imgTopv from "@images/shop-topvalue.svg";
import imgShopee from "@images/shop-shopee.svg";
import imgLazada from "@images/shop-lazada.svg";
import imgJd from "@images/shop-jd.svg";
import {
  STORE_SHOPEE_ROUTE_PATH,
  STORE_LAZADA_ROUTE_PATH,
  STORE_TOPVALUE_ROUTE_PATH,
  STORE_JD_ROUTE_PATH,
} from "@/const/route-paths.const";

export const metadata: Metadata = {
  title: "Stores",
};

export default function StoresPage() {
  return (
    <>
      <main className="container mx-auto mb-16 space-y-10">
        {/* <!-- Banner --> */}
        <div className="transition-responsive container mx-auto my-1">
          <Image
            src={Banner}
            alt="banner-store"
            className="transition-responsive w-full rounded-xl object-cover"
          />
        </div>

        {/* <!-- Online --> */}
        <div className="transition-responsive container mx-auto">
          <div className="space-y-2 px-[10%] text-center">
            <h4 className="text-primary">ออนไลน์</h4>
            <p>พันธมิตรการขายออนไลน์</p>
            {/* <!-- Logo --> */}
            <div className="grid grid-cols-2 gap-2 p-3 md:grid-cols-4">
              <a
                className="transition hover:-translate-y-1"
                href={STORE_TOPVALUE_ROUTE_PATH}
                target="_blank"
              >
                <Image
                  className="rounded-lg border bg-white"
                  src={imgTopv}
                  alt="shop-topvalue"
                />
              </a>
              <a
                className="transition hover:-translate-y-1"
                href={STORE_SHOPEE_ROUTE_PATH}
                target="_blank"
              >
                <Image
                  className="rounded-lg border bg-white"
                  src={imgShopee}
                  alt="shop-shopee"
                />
              </a>
              <a
                className="transition hover:-translate-y-1"
                href={STORE_LAZADA_ROUTE_PATH}
                target="_blank"
              >
                <Image
                  className="rounded-lg border bg-white"
                  src={imgLazada}
                  alt="shop-lazada"
                />
              </a>
              <a
                className="transition hover:-translate-y-1"
                href={STORE_JD_ROUTE_PATH}
              >
                <Image
                  className="rounded-lg border bg-white"
                  src={imgJd}
                  alt="shop-jd"
                />
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Retail store --> */}
        <div className="transition-responsive container mx-auto">
          <div className="space-y-2 text-center">
            <h4 className="text-primary">หน้าร้าน</h4>
            <p>ค้นหา Retail Store ใกล้คุณ</p>
            <div className="pt-3">
              <iframe
                className="h-[500px] w-full lg:rounded-xl"
                src="https://www.google.com/maps/d/embed?mid=1G0Oxg9UKDRkxEI5YOp6FaZRcgDBz4QlF&hl=en"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
