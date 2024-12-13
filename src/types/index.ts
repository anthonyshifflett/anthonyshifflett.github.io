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
    level: number; // 1-5
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