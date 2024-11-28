import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLine,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import imgBanner from "@images/banner_9_banner-withtext.png";
import imgDummy1 from "@images/dummy-home-sce-present-1.png";
import imgDummy2 from "@images/dummy-home-sce-present-2.png";
import imgShowCase2 from "@images/dummy-sce-showcase-2.png";
import imgIcon1 from "@images/dummy-standard-icon-1.png";
import imgIcon2 from "@images/dummy-standard-icon-2.png";
import imgIcon3 from "@images/dummy-standard-icon-3.png";
import imgLogo from "@images/logo.svg";
import imgAbout from "@images/about1.png";
import imgSwf from "@images/logo-switchflex.svg";
import {
  FOLLOW_FACEBOOK_ROUTE_PATH,
  FOLLOW_LINE_ROUTE_PATH,
  FOLLOW_YOUTUBE_ROUTE_PATH,
  FOLLOW_INSTAGRAM_ROUTE_PATH,
  FOLLOW_X_ROUTE_PATH,
} from "@/const/route-paths.const";

export default function Home() {
  return (
    <>
      <main className="mb-16 space-y-16 *:mx-auto">
        <Image
          className="container rounded-xl"
          src={imgBanner}
          alt="SCE Banner"
        />
        <section className="container grid justify-items-center px-3 md:grid-cols-2 md:space-x-4 xl:px-0">
          <div className="*:my-3">
            <h2 className="ms-3 pb-8 text-3xl text-primary md:ps-0">
              Every Emotion captured By &quot;SCE&quot;
            </h2>

            <Image
              className="rounded-xl"
              src={imgDummy1}
              alt="Present Product"
            />
            <div className="px-3">
              <p>SCE เครื่องดูดไรฝุ่น Mite Remover รุ่น MR1 - รับประกัน 1 ปี</p>
              <b className="text-xl text-primary">฿ 1,990.-</b>
            </div>
          </div>
          <div className="*:my-3">
            <h2 className="ms-3 hidden pb-8 text-3xl text-primary opacity-0 md:flex md:ps-0">
              Every Emotion captured By &quot;SCE&quot;
            </h2>
            <Image
              className="rounded-xl"
              src={imgDummy2}
              alt="Present Product"
            />
            <div className="px-3">
              <p>
                SCE เครื่องหนีบและม้วนผม 2 in 1 ขนาดแกนม้วน 18 mm รุ่น TW1 -
                รับประกัน 1 ปี
              </p>
              <b className="text-xl text-primary">฿ 999.-</b>
            </div>
          </div>
        </section>

        <section className="container flex flex-col px-3 xl:px-0">
          <div
            className="bg-start mx-0 flex h-[550px] items-center rounded-3xl bg-cover md:bg-right xl:mx-20"
            style={{
              backgroundImage: "url(./images/dummy-sce-showcase-1.png)",
            }}
          >
            <div className="w-full p-16 pb-20 text-primary md:w-1/2">
              <p className="mb-4 text-3xl">
                SCE เครื่องดูดฝุ่น 1200 วัตต์ รุ่น XQ1 - รับประกัน 1 ปี
              </p>
              <p className="mb-8 text-xl">
                <small>
                  มาพร้อมประโยชน์มากมาย ด้วยแรงดูดระดับไซโคลน กำลังไฟ 1,200
                  วัตต์ แรงดัน 16,500 pa
                </small>
              </p>
              <button>
                <Link
                  href={"/products"}
                  className="flex items-center rounded-full bg-white px-4 py-2 text-primary"
                >
                  ดูเพิ่มเติม{" "}
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="ms-2 size-4"
                  />
                </Link>
              </button>
            </div>
          </div>
        </section>

        <section className="container flex flex-wrap items-center justify-center px-5 md:px-0">
          <div className="order-2 space-y-6 px-3 text-primary md:order-1 md:basis-1/2 xl:px-0">
            <h2 className="text-3xl">
              SCE Plus หม้อทอดไร้น้ำมัน 3 ลิตร รุ่น X-AB3
            </h2>
            <p>
              SCE Plus หม้อทอดไร้น้ำมัน 3 ลิตร วัสดุตะแกรงและหม้อทอด ชั้นเคลือบ
              Non-Stick อย่างดี ปลอดภัยไร้กังวลน้ำมันไม่กระเด็นและประหยัดพลังงาน
            </p>
            <button className="underline-offset-4 hover:underline">
              <Link href={"/products"} className="flex items-center">
                ดูเพิ่มเติม{" "}
                <FontAwesomeIcon icon={faAnglesRight} className="ms-2 size-4" />
              </Link>
            </button>
          </div>
          <div className="flex justify-center py-3 md:order-2 md:basis-1/2">
            <Image src={imgShowCase2} alt="Showcase" />
          </div>
        </section>

        <section className="bg-[#eaf3ef] py-6">
          <h2 className="pb-6 text-center text-3xl text-primary">
            <b>มาตรฐานของเรา</b>
          </h2>
          <div className="container mx-auto flex flex-wrap space-x-0 space-y-3 md:space-x-6 md:space-y-0 [&_img]:size-12">
            <div className="flex basis-full flex-col items-center space-y-3 rounded-xl bg-white p-10 text-center md:flex-1">
              <Image src={imgIcon1} alt="standard icon" />
              <b>ประสิทธิภาพ</b>
              <p className="text-gray-400">
                ผ่านการทดสอบจากองค์กรชั้นนำ
                ในด้านคุณภาพการใช้งานที่มีประสิทธิภาพ
              </p>
            </div>
            <div className="flex basis-full flex-col items-center space-y-3 rounded-xl bg-white p-10 text-center md:flex-1">
              <Image src={imgIcon2} alt="standard icon" />
              <b>การจัดส่งรวดเร็ว</b>
              <p className="text-gray-400">
                จัดส่งถึงมือคุณอย่างรวดเร็วด้วยบริการขนส่งชั้นนำจาก
                TopvalueExpress, Kerry Express, CJ Logistics และ ไปรษณีย์ไทย
              </p>
            </div>
            <div className="flex basis-full flex-col items-center space-y-3 rounded-xl bg-white p-10 text-center md:flex-1">
              <Image src={imgIcon3} alt="standard icon" />
              <b>ประหยัดไฟ</b>
              <p className="text-gray-400">
                ผ่านเกณฑ์ประสิทธิภาพพลังงาน ตามโครงการฉลากประหยัดไฟเบอร์ 5
              </p>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="flex flex-wrap items-center justify-center">
            <div className="mb-5 flex items-center divide-x *:px-5 sm:mb-0">
              <h4 className="text-primary">ติดตามเรา</h4>
              <Image className="h-auto" src={imgLogo} alt="logo" />
            </div>
            <div className="space-x-3 *:size-12 *:rounded-full *:border-2 *:border-primary *:bg-primary *:text-white hover:[&_button]:bg-white hover:[&_button]:text-primary">
              <button>
                <a href={FOLLOW_FACEBOOK_ROUTE_PATH} target="_blank">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="mx-auto mt-1 size-6"
                  />
                </a>
              </button>
              <button>
                <a href={FOLLOW_LINE_ROUTE_PATH} target="_blank">
                  <FontAwesomeIcon
                    icon={faLine}
                    className="mx-auto mt-1 size-6"
                  />
                </a>
              </button>
              <button>
                <a href={FOLLOW_YOUTUBE_ROUTE_PATH} target="_blank">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="mx-auto mt-1 size-6"
                  />
                </a>
              </button>
              <button>
                <a href={FOLLOW_INSTAGRAM_ROUTE_PATH} target="_blank">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="mx-auto mt-1 size-6"
                  />
                </a>
              </button>
              <button>
                <a href={FOLLOW_X_ROUTE_PATH} target="_blank">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="mx-auto mt-1 size-6"
                  />
                </a>
              </button>
            </div>
          </div>
        </section>

        <section className="container mx-auto mb-10 overflow-hidden bg-white shadow-md">
          <div className="md:flex">
            <div className="md:flex-1">
              <Image
                className="h-48 w-full object-cover md:h-full"
                src={imgAbout}
                alt="Modern building architecture"
              />
            </div>
            <div className="flex items-center p-4 md:w-2/5 md:flex-initial lg:px-16 [&_p]:text-sm [&_p]:text-gray-500">
              <div className="space-y-3 divide-y-2">
                <div className="space-y-5">
                  <p>เกี่ยวกับ</p>
                  <h4 className="text-primary">บริษัท สวิทซ เฟลคซ จำกัด</h4>
                  <p>
                    ก่อตั้งขึ้นเมื่อปี 2005
                    โดยกลุ่มวิศวกรที่มีความเชี่ยวชาญในงานเครื่องจักรโดยเฉพาะ
                    และดำเนินธุรกิจนำเข้าและส่งออกเครื่องจักร
                    ทั้งขนาดเล็กและขนาดใหญ่สำหรับงานอุตสาหกรรม จนกระทั่งในปี
                    2019 คณะผู้ก่อตั้งบริษัท
                    ได้เล็งเห็นถึงโอกาสในการนำเครื่องจักรและเทคโนโลยี
                    มาพัฒนาต่อยอดเพื่อผลิตเป็นเครื่องใช้ไฟฟ้าในครัวเรือน
                  </p>
                  <button className="flex items-center rounded-full bg-primary px-4 py-2 text-white">
                    <Link href="/about-us" className="flex">
                      ดูเพิ่มเติม
                      <FontAwesomeIcon
                        icon={faAnglesRight}
                        className="my-auto ml-2 size-4 group-hover:translate-x-1"
                      />
                    </Link>
                  </button>
                </div>
                <div className="pt-6">
                  <p className="pb-4">ไปยังเว็บไซต์</p>
                  <a
                    href="https://switchflex.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={imgSwf} alt="switchflex" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
