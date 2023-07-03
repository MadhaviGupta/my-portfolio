import Image from "next/image";
import about from "../../../../public/images/about.png";
import experience from "../../../../public/images/experience.png";
import languages from "../../../../public/images/langauges.png";
import frameworks from "../../../../public/images/frameworks.png";
import tools from "../../../../public/images/tools.png";
import { MdPlayArrow } from "react-icons/md";
function LanguagesArr() {
  return (
    <div>
      <ul className="text-sm">
        <li className="flex">
          <MdPlayArrow className="m-1.5" />
          HTML5
        </li>
        <li className="flex">
          <MdPlayArrow className="m-1.5" />
          CSS3
        </li>
        <li className="flex">
          <MdPlayArrow className="m-1.5" />
          JavaScript
        </li>
        <li className="flex">
          <MdPlayArrow className="m-1.5" />
          Java
        </li>
        <li className="flex">
          <MdPlayArrow className="m-1.5" />
          C++
        </li>
      </ul>
    </div>
  );
}
function FrameworksArr() {
  return (
    <div>
      <ul className="text-sm">
        <li className="flex">
          <MdPlayArrow className="m-1.5" />
          React.js
        </li>
        <li className="flex">
          <MdPlayArrow className="m-1.5" />
          Next.js
        </li>
        <li className="flex">
          <MdPlayArrow className="m-1.5" />
          Tailwind CSS
        </li>
        <li className="flex">
          <MdPlayArrow className="m-1.5" />
          Material UI
        </li>
        <li className="flex">
          <MdPlayArrow className="m-1.5" />
          Bootstrap
        </li>
      </ul>
    </div>
  );
}
function ToolsArr() {
  return (
    <div>
      <ul className="text-sm">
        <li className="flex">
          <MdPlayArrow className="m-1.5" />
          Git & GitHub
        </li>
        <li className="flex">
          <MdPlayArrow className="m-1.5" />
          Visual Studio Code
        </li>
        <li className="flex">
          <MdPlayArrow className="m-1.5" />
          IntelliJ IDEA
        </li>
        <li className="flex">
          <MdPlayArrow className="m-1.5" />
          Canva
        </li>
      </ul>
    </div>
  );
}
const aboutContent = [
  {
    id: 1,
    name: "About Me",
    img: about,
    desc: "I'm a final year student pursuing B.Tech. in computer science stream at Medicaps University, Indore. Always up for learning new things related to tech and food. I like to design write-ups, read books and various articles about technology, food, nation, health, mankind,  etc.",
  },
  {
    id: 2,
    name: "Experience",
    img: experience,
    desc: "I worked as a Frontend Web Developer Intern at Longswitch Software Solutions Private Limited. It is a software outsourcing company that provides software solutions and technical consulting. There, I worked on various projects using ReactJS and various libraries.",
  },
  {
    id: 3,
    name: "Languages",
    img: languages,
    desc: <LanguagesArr />,
  },
  {
    id: 4,
    name: "Libraries/Frameworks",
    img: frameworks,
    desc: <FrameworksArr />,
  },
  {
    id: 5,
    name: "Tools",
    img: tools,
    desc: <ToolsArr />,
  },
];
export default function About() {
  return (
    <div className="pt-20 md:pl-80 pl-20">
      <div className="md:text-2xl text-lg font-bold flex md:m-6 m-3">
        About me.
      </div>
      <div className="flex flex-wrap">
        {aboutContent.map((data) => (
          <div
            key={data.id}
            className="flex flex-col bg-[#1a1c22] hover:shadow-lg hover:shadow-green-600/30 transition-all duration-500 ease-in-out bg-opacity-90 rounded-lg min-w-min md:w-[28%] w-3/4 p-6 m-4"
          >
            <div className="flex justify-center">
            <Image
              src={data.img}
              width={160}
              height={160}
              className="rounded-lg"
              alt="img"
            />
            </div>
            <div className="font-bold text-xl mr-2 my-2 text-[#fa6c5f]">
              {data.name}
            </div>
            <hr className="border-1 w-full mb-2" />
            <div className="tracking-wide text-sm mt-2 text-[#689775]">
              {data.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
