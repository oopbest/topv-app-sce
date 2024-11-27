import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center space-y-4 bg-gray-100">
        <div className="text-center *:my-3">
          <h2 className="font-thin">Page Not Found</h2>
          <p>Could not find requested resource</p>

          <button className="rounded-full border-2 border-none border-primary bg-primary px-3 py-2 text-sm text-white">
            <Link href="/" className="flex">
              หน้าแรก
              <FontAwesomeIcon icon={faAnglesRight} className="my-auto ml-2 size-4" />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}