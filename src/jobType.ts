export type job = {
    id: string;
    jobTitle: string;
    time: string;
    openPositions: number;
    shortDescription: string;
    field: string;
    company: {
        name: string;
        nameAbbreviation: string;
        logo: string;
        about: string;
        email: string;
    };
    details: {
        "Career Level": string;
        "Experience Needed": string;
        Location: string;
        "Education Level": string;
        Salary: string;
        "Job Category": string;
    };
    Description: string[];
    requirments: string[];
    skillsAndTools: string[];
    postDate: string;
};
