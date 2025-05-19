import codeIcon from "@/assets/iconImage/code-icon.png";
import codeIconDark from "@/assets/iconImage/code-icon-dark.png";
import educIcon from "@/assets/iconImage/edu-icon.png";
import educIconDark from "@/assets/iconImage/edu-icon-dark.png";
import projectIcon from "@/assets/iconImage/project-icon.png";
import projectIconDark from "@/assets/iconImage/project-icon-dark.png";
import gitIcon from "@/assets/toolImages/git.png";
import vscodeIcon from "@/assets/toolImages/vscode.png";
import mongodb from "@/assets/toolImages/mongodb.png";
import postman from "@/assets/toolImages/postman.png";
import frontendTech from '@/assets/skillImage/frontend.png';
import uiTech from '@/assets/skillImage/ui2.png';
import backendTech from '@/assets/skillImage/backend.jpg';
import fullTech from '@/assets/skillImage/full.jpg';
import dbTech from '@/assets/skillImage/db.jpg';
export const infoList = [
  {
    icon: codeIcon,
    iconDark: codeIconDark,
    title: "Language",
    description: "Balti, Urdu, English",
  },
  {
    icon: educIcon,
    iconDark: educIconDark,
    title: "Education",
    description: "BS in Computer Science(cont...)",
  },
  {
    icon: projectIcon,
    iconDark: projectIconDark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];
export const toolsDataLight = [vscodeIcon, gitIcon, mongodb, postman];
export const mySkills = [
 
  {
    icon:frontendTech,
    title: "Frontend Technology",
    description: "HTML5, CSS, Javascript, Typescript, and React",
   
  },
  {
    icon:uiTech,
    title: "UI Technology",
    description: "Tailwind CSS, SCSS, Bootstrap, Shadcn, Mui,  Mantine(exploring), and Framer Motion(exp..)",
   
  },
  {
    icon:backendTech,
    title: "Backend Technology",
    description:"Node js, Express js",
  },
  {
    icon:dbTech,
    title: "Database Technology",
    description: "Mongodb(mongoose), Sqlite(prisma)  ",
  },
  {
    icon:fullTech,
    title: "Web Framewrok",
    description: "Next js ",
  },
];
export const metadata={
  title:"Contact || Personal Portfolio"
}