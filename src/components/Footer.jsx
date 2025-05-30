import Image from "next/image";
import Link from "next/link";
import mailIcon from "@/assets/iconImage/mail_icon.png";
const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Link href="/">
          <h1 className="text-4xl  relative">
            Basit{" "}
            <span className="absolute bottom-[3.5px] right-[-6px] font-bold text-orange-200">
              .
            </span>
          </h1>
        </Link>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={mailIcon} alt="Mail-Icon" className="w-6" />
          basitdeveloper911@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p> &copy; 2025 Basit Ali . All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link href="https://github.com/BasitAli164/" target="_blank">
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/basit-ali-abdupa/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
