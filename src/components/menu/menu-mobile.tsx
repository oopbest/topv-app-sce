import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import MunuList from "./menu-list";
import Image from "next/image";
import logo from "@images/logo.svg";
import {
  FOLLOW_FACEBOOK_ROUTE_PATH,
  FOLLOW_INSTAGRAM_ROUTE_PATH,
  FOLLOW_LINE_ROUTE_PATH,
  FOLLOW_X_ROUTE_PATH,
  FOLLOW_YOUTUBE_ROUTE_PATH,
} from "@/const/route-paths.const";
import {
  faFacebook,
  faLine,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

type Props = {
  toggleMenu: () => void;
  isOpenMenu: boolean;
};

export default function MenuMobile({ toggleMenu, isOpenMenu }: Props) {
  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 w-full -translate-x-full transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:w-1/2 lg:hidden ${
          isOpenMenu ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div className="flex justify-between px-6">
          <Image src={logo} alt="logo" />

          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>

        <div className="container mx-auto flex h-[85%] flex-col justify-between">
          <ul className="flex flex-col space-y-5 px-6 text-primary">
            <MunuList />
          </ul>

          <div className="flex flex-col items-center">
            <div className="space-x-3 *:size-10 *:rounded-full *:border-2 *:border-primary *:bg-primary *:text-white hover:[&_button]:bg-white hover:[&_button]:text-primary">
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
            <small className="block py-3 text-center text-gray-400">
              © topvalue 2024
            </small>
          </div>
        </div>
      </div>
    </>
  );
}