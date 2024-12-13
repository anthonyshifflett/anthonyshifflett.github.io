export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
}

export interface Skill {
    name: string;
    level: number;
    category: 'development' | 'testing' | 'tools' | 'ai';
}

export interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    achievements: string[];
}

export interface Education {
    school: string;
    degree: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export interface ProjectCardProps {
    project: Project;
}

export interface SkillCardProps {
    skill: Skill;
}

export interface ExperienceItemProps {
    experience: Experience;
}

export interface EducationItemProps {
    education: Education;
}

export type SkillCategory = 'development' | 'testing' | 'tools' | 'ai';

export interface CategoryMap {
    [key: string]: string;
}