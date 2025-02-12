import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Youtube, ExternalLink } from "lucide-react";
interface ExperienceCardProps {
    company: string;
    position: string;
    projectTitle: string;
    bulletPoints: string[];
    techStack: string[];
    github: string;
    youtube: string;
    preview: string;
  }
export function ExperienceCard({
    company,
    position,
    projectTitle,
    bulletPoints,
    techStack,
    github,
    youtube,
    preview,
  }: ExperienceCardProps): JSX.Element {
    return (
        <div className="border-sky-950 shadow-xl shadow-background/50 border-radius-6 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-third">
            <div className="p-1">
                <h3 className="text-third text-3xl font-semibold mb-2">{company}</h3>
                <h4 className="text-third/70 text-xl font-semibold mb-2">{position}</h4>
                <h5 className="text-third/50 text-xs font-semibold mb-2">{projectTitle}</h5>
                <ul>
                    {bulletPoints.map((bullet, index) => (
                        <li key={index} className="text-muted-foreground text-xs mb-4 line-clamp-2">- {bullet}</li>
                    ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full bg-secondary/60 text-muted-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                        <Link href={github} target="_blank">
                            <Button variant="ghost" size="icon">
                                <Github className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href={youtube} target="_blank">
                            <Button variant="ghost" size="icon">
                                <Youtube className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                    <Link href={preview} target="_blank">
                        <Button variant="outline" size="sm">
                            Preview
                        </Button>
                    </Link>
                </div>
            </div>
        </div>

    )
}