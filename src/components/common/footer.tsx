"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLine,
  faInstagram,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import imgTopv from "@images/site-topvalue.svg";
import imgShopee from "@images/site-shopee.svg";
import imgLazada from "@images/site-lazada.svg";
import imgJd from "@images/site-jd.svg";
import imgLogoFooter from "@images/sce-logo-footer.svg";
import {
  FOLLOW_FACEBOOK_ROUTE_PATH,
  FOLLOW_LINE_ROUTE_PATH,
  FOLLOW_INSTAGRAM_ROUTE_PATH,
  FOLLOW_X_ROUTE_PATH,
  FOLLOW_YOUTUBE_ROUTE_PATH,
  STORE_SHOPEE_ROUTE_PATH,
  STORE_LAZADA_ROUTE_PATH,
  STORE_TOPVALUE_ROUTE_PATH,
  STORE_JD_ROUTE_PATH,
} from "@/const/route-paths.const";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Footer() {
  const pathname = usePathname();
  const [activeToggle, setActiveToggle] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setActiveToggle(activeToggle === index ? null : index);
  };
  useEffect(() => {
    setActiveToggle(null);
  }, [pathname]);

  return (
    <>
      {/* <!-- Footer--> */}
      <footer className="bg-primary px-4 py-6 text-sm text-white lg:pt-10 lg:text-base">
        <section className="accordion container mx-auto flex flex-col justify-center gap-5 md:flex-row [&_svg]:me-3 [&_svg]:w-5">
          {/* <!-- Contact --> */}
          <div className="accordion-item sm:basis-1/3 lg:basis-1/2">
            <p
              className="accordion-header border-b pb-2 font-bold md:border-0 md:pb-4"
              aria-expanded="false"
              onClick={() => handleToggle(1)}
            >
              <b>ติดต่อ</b>
              <b className="accordion-icon md:hidden">&#9660;</b>
            </p>
            <div
              className={`accordion-content max-h-0 leading-9 opacity-0 md:max-h-none md:opacity-100 ${
                activeToggle === 1 ? "open" : ""
              }`}
            >
              <div className="p-3 md:p-0">
                <p>
                  <FontAwesomeIcon icon={faLocationDot} className="size-4"/>
                  บริษัท สวิทซเฟลคซ จำกัด เลขที่ 30/119 หมู่ 1 ต.โคกขาม อ.เมือง
                  จ.สมุทรสาคร 74000
                </p>
                <div className="pt-6">
                  <p>
                    <FontAwesomeIcon icon={faClock} className="size-4"/>
                    จันทร์ - เสาร์ <br />
                    9:00 - 17:00, <br />
                    ปิดทำการวันอาทิตย์
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Dealer --> */}
          <div className="accordion-item sm:basis-1/2 lg:basis-1/2">
            <p
              className="accordion-header border-b pb-2 font-bold md:border-0 md:pb-4"
              aria-expanded="false"
              onClick={() => handleToggle(2)}
            >
              <b>ตัวแทนจำหน่าย</b>
              <b className="accordion-icon md:hidden">&#9660;</b>
            </p>
            <div
              className={`accordion-content max-h-0 leading-9 opacity-0 md:max-h-none md:opacity-100 ${
                activeToggle === 2 ? "open" : ""
              }`}
            >
              <p className="p-3 md:p-0">
                สนใจสั่งซื้อสินค้าเป็นจำนวนมาก หรือสมัครเป็นตัวแทนจำหน่ายได้ที่
                โทร. 1277 E-mail: Service@switchflex.com
              </p>
            </div>
          </div>

          {/* <!-- Social media --> */}
          <div className="accordion-item basis-1/4">
            <p
              className="accordion-header border-b pb-2 font-bold md:border-0 md:pb-4"
              aria-expanded="false"
              onClick={() => handleToggle(3)}
            >
              <b>ติดตาม</b>
              <b className="accordion-icon md:hidden">&#9660;</b>
            </p>
            <div
              className={`accordion-content max-h-0 leading-9 opacity-0 md:max-h-none md:opacity-100 ${
                activeToggle === 3 ? "open" : ""
              }`}
            >
              <ul className="p-3 md:p-0">
                <li>
                  <a href={FOLLOW_FACEBOOK_ROUTE_PATH} target="_blank">
                    <FontAwesomeIcon icon={faFacebook} className="size-4"/>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href={FOLLOW_LINE_ROUTE_PATH} target="_blank">
                    <FontAwesomeIcon icon={faLine} className="size-4"/>
                    Line
                  </a>
                </li>
                <li>
                  <a href={FOLLOW_YOUTUBE_ROUTE_PATH} target="_blank">
                    <FontAwesomeIcon icon={faYoutube} className="size-4"/>
                    Youtube
                  </a>
                </li>
                <li>
                  <a href={FOLLOW_INSTAGRAM_ROUTE_PATH} target="_blank">
                    <FontAwesomeIcon icon={faInstagram} className="size-4"/>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={FOLLOW_X_ROUTE_PATH} target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} className="size-4"/>X
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Store --> */}
          <div className="accordion-item basis-1/4">
            <p
              className="accordion-header border-b pb-2 font-bold md:border-0 md:pb-4"
              aria-expanded="false"
              onClick={() => handleToggle(4)}
            >
              <b>สั่งซื้อ</b>
              <b className="accordion-icon md:hidden">&#9660;</b>
            </p>
            <div
              className={`accordion-content max-h-0 leading-9 opacity-0 md:max-h-none md:opacity-100 ${
                activeToggle === 4 ? "open" : ""
              }`}
            >
              <ul className="p-3 md:p-0">
                <li className="flex">
                  <Image
                    src={imgTopv}
                    alt="Topvalue"
                    className="me-3 ms-2 w-5"
                  />
                  <a href={STORE_TOPVALUE_ROUTE_PATH} target="_blank">
                    Topvalue
                  </a>
                </li>
                <li className="flex">
                  <Image src={imgShopee} alt="Shopee" className="me-2" />
                  <a href={STORE_SHOPEE_ROUTE_PATH} target="_blank">
                    Shopee
                  </a>
                </li>
                <li className="flex">
                  <Image src={imgLazada} alt="Lazada" className="me-2" />
                  <a href={STORE_LAZADA_ROUTE_PATH} target="_blank">
                    Lazada
                  </a>
                </li>
                <li className="flex">
                  <Image src={imgJd} alt="JD Central" className="me-2" />
                  <a href={STORE_JD_ROUTE_PATH} target="_blank">
                    JD Central
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Copyright --> */}
        <div className="container relative mx-auto flex flex-wrap border-0 pt-4 leading-10 md:mt-10 md:border-t">
          <div className="w-full content-center lg:w-1/5">
            <Image
              className="mx-auto text-white lg:mx-0"
              src={imgLogoFooter}
              alt="altec-logo"
            />
          </div>
          <div className="flex-1 pt-3 text-center lg:pt-0">
            <p>© Topvalue 2024</p>
            <a href="#"> เงื่อนไขการใช้งาน นโยบายส่วนบุคคล </a>
          </div>
          <div className="hidden lg:flex lg:w-1/5"></div>
        </div>
      </footer>
    </>
  );
}
