import Image from "next/image";
import Link from "next/link";
import { TfiGithub } from "react-icons/tfi";

export default function ProjectCard({ project }) {
  return (
    <li className="m-4 flex h-[700px] max-w-xs rounded-md overflow-hidden cards relative">
      <div className="flex flex-col items-center w-full">
        <div className="w-full">
          <Image src={project.image} width={400} alt={project.title} height={400} />
        </div>
        <div className="text-center flex flex-col justify-center items-center space-y-1 mt-5">
          <p>{project.title}</p>
          <div className="bg-secundary w-2/3 rounded-xl shadow-lg">
            <p>{project.status}</p>
          </div>
          <p>{project.description}</p>
        </div>
        <div className="flex flex-wrap justify-around mt-8 gap-x-4 gap-y-3 text-xs leading-3 pr-4 pl-4">
          {project.technologies.map((tech) => (
            <div key={tech.name} className="flex items-center space-x-2 ring-2 ring-blue-500/50 border-2 rounded-lg p-1 shadow-md">
              <Image src={tech.image} alt={tech.name} className="w-4" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 right-4">
          <Link href={project.githubUrl} target="_blank">
            <TfiGithub size={40} />
          </Link>
        </div>
      </div>
    </li>
  );
}
