import Image from "next/image";
import profileImage from "../assets/Basit.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand, faDownload,faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Button } from "./ui/button";
const Header = () => {
  {
    /* -----Icons----- */
  }
  const handIcon = <FontAwesomeIcon icon={faHand} />
  const downloadIcon=<FontAwesomeIcon icon={faDownload}/>
  const phoneIcon=<FontAwesomeIcon icon={faPhone}/>
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-2 mb-48 md:mb-[70px] lg:mb-0 ">
      <div className="mt-44 sm:mt-20">
        <Image
          src={profileImage}
          alt="Profile-Image"
          className="rounded-full w-20 "
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Basit Ali <li className="block text-orange-200 rotate-[-45deg]">{handIcon}</li>
      </h3>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-Ovo ">
        Full stack web developer based in Skardu.        
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo text-center text-lg">
          I am a full stack developer from Skardu, Gilgit Baltistan with 1
          year of experience in mulitple skills like frontend , backend, and database.
        </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <Link href="/contact" >
          <Button className="px-8 py-6 border rounded-full border-gray-500 bg-black text-white flex items-center gap2 text-lg ">
            Contact Me <span className="  rotate-[270deg]  animate-pulse" >{phoneIcon}</span>
          </Button>
        </Link>
        <a href="/My-Resume.pdf" download >
          <Button className="px-8 py-6 border rounded-full border-gray-500 flex items-center gap2 text-lg">
            My Resume <span className="animate-bounce">{downloadIcon}</span>
          </Button>
        </a> 
      </div>
    </div>
  );
};

export default Header;
