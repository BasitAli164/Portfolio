import Image from "next/image";
import myImage from "@/assets/basit.jpg";
import { infoList, toolsDataLight } from "@/assets/assest";

export const metadata={
  title:"About"
}


const AboutPage = () => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20  lg:-mb-16">
      <h2 className="text-center text-5xl font-Ovo mt-[70px]">About Me</h2>
      <div className="flex  w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none hover:shadow-2xl duration-500">
          <Image src={myImage} alt="My-Image" className="w-full rounded-3xl" />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo text-justify text-lg">
            I am an experienced Full Stack Developer with over a seven month of
            profissional experties in the field. Throughout my career, I will
            have have the privilege of colloborating with prestigious
            organizations, contributing to their success and growth{" "}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
                key={index}
              >
                <Image src={icon} alt={title} className="w-10 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo text-xl">Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {
              toolsDataLight.map((tool,index)=>(
                 <li className="flex justify-center items-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" key={index}>
                  <Image src={tool} alt="Tool" className="w-5 sm:w-10 "/>
                 </li>
              ))
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
