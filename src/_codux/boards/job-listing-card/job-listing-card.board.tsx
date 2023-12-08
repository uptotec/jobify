import { createBoard } from "@wixc3/react-board";
import { JobListingCard } from "../../../components/job-listing-card/job-listing-card";

const job = {
    id: "1",
    jobTitle: "Galactic Explorer",
    time: "Full-Time",
    openPositions: 5,
    shortDescription:
        "Embark on a thrilling journey to explore uncharted galaxies and discover new worlds.",
    field: "space",
    company: {
        name: "Cosmic Ventures",
        nameAbbreviation: "CV",
        logo: "cosmic-ventures-logo.png",
        about: "Cosmic Ventures is a leading space exploration company dedicated to pushing the boundaries of human knowledge and discovery.",
        email: "careers@cosmicventures.com",
    },
    details: {
        "Career Level": "Mid-Senior Level",
        "Experience Needed": "3+ years",
        Location: "Orbiting Space Station",
        "Education Level": "Advanced Degree in Astrophysics",
        Salary: "$120,000 - $150,000",
        "Job Category": "Science and Research",
    },
    Description: [
        "Lead and participate in interstellar expeditions to study celestial bodies.",
        "Conduct experiments in microgravity environments.",
        "Collaborate with alien civilizations for knowledge exchange.",
    ],
    requirments: [
        "Proven experience in space exploration missions.",
        "Strong understanding of astrophysics and celestial navigation.",
        "Adaptability to extraterrestrial environments.",
        "Excellent problem-solving skills in zero-gravity situations.",
    ],
    skillsAndTools: [
        "Interstellar Navigation",
        "Astrophysical Analysis",
        "Alien Communication",
        "Space Suit Maintenance",
    ],
    postDate: "2023-12-08T12:00:00Z", // Replace this with the actual date and time when the job was posted.
};

export default createBoard({
    name: "JobListingCard",
    Board: () => <JobListingCard job={job} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 946,
        canvasHeight: 56,
    },
});
