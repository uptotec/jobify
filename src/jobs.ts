import { job } from "./jobType";

export const fakeJobs: job[] = [
    {
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
    },
    {
        id: "2",
        jobTitle: "Time Travel Researcher",
        time: "Full-Time",
        openPositions: 3,
        shortDescription:
            "Embark on a groundbreaking journey to unlock the secrets of time travel and explore different eras of history.",
        field: "time travel",
        company: {
            name: "Temporal Discoveries Inc.",
            nameAbbreviation: "TDI",
            logo: "temporal-discoveries-logo.png",
            about: "Temporal Discoveries Inc. is at the forefront of temporal studies, pushing the boundaries of scientific exploration.",
            email: "careers@temporaldiscoveries.com",
        },
        details: {
            "Career Level": "Mid-Senior Level",
            "Experience Needed": "5+ years",
            Location: "Temporal Research Facility",
            "Education Level": "Ph.D. in Temporal Physics",
            Salary: "$150,000 - $180,000",
            "Job Category": "Science and Research",
        },
        Description: [
            "Lead temporal research projects to investigate the possibilities of time travel.",
            "Experiment with temporal anomalies and historical exploration.",
            "Collaborate with renowned physicists to advance temporal studies.",
        ],
        requirments: [
            "Proven experience in temporal physics research.",
            "In-depth knowledge of theoretical time travel concepts.",
            "Adaptability to navigate temporal anomalies.",
            "Excellent problem-solving skills in non-linear time environments.",
        ],
        skillsAndTools: [
            "Temporal Physics Research",
            "Time Anomaly Analysis",
            "Temporal Navigation",
            "Chrono-Experimentation",
        ],
        postDate: "2023-12-10T09:30:00Z",
    },
    {
        id: "3",
        jobTitle: "Deep Sea Explorer",
        time: "Full-Time",
        openPositions: 6,
        shortDescription:
            "Embark on an oceanic adventure to explore the mysteries of the deep sea and discover new marine species.",
        field: "Marine",
        company: {
            name: "Oceanic Explorations",
            nameAbbreviation: "OE",
            logo: "oceanic-explorations-logo.png",
            about: "Oceanic Explorations is dedicated to uncovering the secrets of the world's oceans through cutting-edge marine exploration.",
            email: "careers@oceanicexplorations.com",
        },
        details: {
            "Career Level": "Mid-Senior Level",
            "Experience Needed": "4+ years",
            Location: "Underwater Research Station",
            "Education Level": "Master's in Marine Biology or related field",
            Salary: "$100,000 - $130,000",
            "Job Category": "Science and Research",
        },
        Description: [
            "Lead underwater expeditions to explore the depths of the ocean.",
            "Study marine life and ecosystems in uncharted underwater territories.",
            "Collaborate with marine biologists to contribute to biodiversity research.",
        ],
        requirments: [
            "Experience in deep-sea exploration missions.",
            "Expertise in marine biology and underwater research.",
            "Adaptability to extreme underwater environments.",
            "Excellent problem-solving skills in unexplored marine territories.",
        ],
        skillsAndTools: [
            "Underwater Navigation",
            "Marine Biology Research",
            "Submersible Operation",
            "Deep-Sea Sampling",
        ],
        postDate: "2023-12-12T11:15:00Z",
    },
    {
        id: "5",
        jobTitle: "Virtual Reality Education Developer",
        time: "Full-Time",
        openPositions: 3,
        shortDescription:
            "Join our team to revolutionize education by developing immersive virtual reality experiences for interactive learning.",
        field: "Education",
        company: {
            name: "EduVR Solutions",
            nameAbbreviation: "EVS",
            logo: "eduvr-solutions-logo.png",
            about: "EduVR Solutions is a cutting-edge education technology company committed to enhancing learning through virtual reality.",
            email: "careers@eduvrsolutions.com",
        },
        details: {
            "Career Level": "Entry-Mid Level",
            "Experience Needed": "2-4 years in VR development",
            Location: "EduVR Solutions Headquarters, Silicon Valley",
            "Education Level":
                "Bachelor's in Computer Science or related field",
            Salary: "$80,000 - $100,000",
            "Job Category": "Education Technology",
        },
        Description: [
            "Design and develop virtual reality educational content.",
            "Collaborate with educators to create interactive and engaging VR lessons.",
            "Stay updated on emerging VR technologies and educational trends.",
        ],
        requirments: [
            "Experience in virtual reality development.",
            "Proficiency in VR development tools and platforms.",
            "Understanding of pedagogical principles for effective learning.",
            "Creative and innovative approach to educational content development.",
        ],
        skillsAndTools: [
            "VR Development",
            "Unity3D",
            "Educational Technology",
            "Pedagogical Principles",
        ],
        postDate: "2023-12-16T09:45:00Z",
    },
    {
        id: "6",
        jobTitle: "Digital Learning Specialist",
        time: "Full-Time",
        openPositions: 4,
        shortDescription:
            "Shape the future of education by designing and implementing innovative digital learning strategies for students and educators.",
        field: "Education",
        company: {
            name: "FutureLearn Innovations",
            nameAbbreviation: "FLI",
            logo: "futurelearn-innovations-logo.png",
            about: "FutureLearn Innovations is a forward-thinking company dedicated to advancing digital learning solutions for the education sector.",
            email: "careers@futurelearninnovations.com",
        },
        details: {
            "Career Level": "Mid Level",
            "Experience Needed": "3-5 years in digital education",
            Location: "FutureLearn Innovations Office, London",
            "Education Level":
                "Master's in Education Technology or related field",
            Salary: "$90,000 - $120,000",
            "Job Category": "Digital Education",
        },
        Description: [
            "Develop and implement digital learning strategies for educational programs.",
            "Provide training and support to educators on digital tools and platforms.",
            "Evaluate the effectiveness of digital learning initiatives.",
        ],
        requirments: [
            "Experience in designing and implementing digital learning programs.",
            "Knowledge of education technology tools and platforms.",
            "Excellent communication and training skills.",
            "Master's degree in Education Technology or a related field.",
        ],
        skillsAndTools: [
            "Digital Learning",
            "Education Technology",
            "Training and Development",
            "Program Evaluation",
        ],
        postDate: "2023-12-18T11:00:00Z",
    },
    {
        id: "7",
        jobTitle: "Education Data Analyst",
        time: "Full-Time",
        openPositions: 2,
        shortDescription:
            "Contribute to data-driven decision-making in education by analyzing and interpreting educational data to improve student outcomes.",
        field: "Education",
        company: {
            name: "EduInsights Analytics",
            nameAbbreviation: "EIA",
            logo: "eduinsights-analytics-logo.png",
            about: "EduInsights Analytics is a data-driven education company focused on improving student success through analytics.",
            email: "careers@eduinsightsanalytics.com",
        },
        details: {
            "Career Level": "Mid-Senior Level",
            "Experience Needed": "4-6 years in data analysis",
            Location: "EduInsights Analytics Office, New York",
            "Education Level": "Bachelor's in Statistics or related field",
            Salary: "$100,000 - $130,000",
            "Job Category": "Education Analytics",
        },
        Description: [
            "Collect, clean, and analyze educational data to identify trends and patterns.",
            "Collaborate with educators to provide insights for instructional improvement.",
            "Present findings and recommendations to stakeholders.",
        ],
        requirments: [
            "Experience in data analysis, preferably in education.",
            "Proficiency in statistical analysis tools and programming languages.",
            "Strong communication and presentation skills.",
            "Bachelor's degree in Statistics or a related field.",
        ],
        skillsAndTools: [
            "Data Analysis",
            "Statistics",
            "Data Visualization",
            "Programming",
        ],
        postDate: "2023-12-20T13:15:00Z",
    },
    {
        id: "8",
        jobTitle: "Blockchain Developer",
        time: "Full-Time",
        openPositions: 5,
        shortDescription:
            "Join our innovative blockchain development team to build decentralized applications and contribute to the future of digital finance.",
        field: "Blockchain",
        company: {
            name: "CryptoTech Solutions",
            nameAbbreviation: "CTS",
            logo: "cryptotech-solutions-logo.png",
            about: "CryptoTech Solutions is a leading blockchain technology company dedicated to advancing the adoption of decentralized solutions.",
            email: "careers@cryptotechsolutions.com",
        },
        details: {
            "Career Level": "Entry-Mid Level",
            "Experience Needed": "2-4 years in blockchain development",
            Location: "CryptoTech Solutions Office, San Francisco",
            "Education Level":
                "Bachelor's in Computer Science or related field",
            Salary: "$90,000 - $120,000",
            "Job Category": "Blockchain Development",
        },
        Description: [
            "Develop smart contracts and decentralized applications on blockchain platforms.",
            "Contribute to the design and implementation of blockchain solutions.",
            "Stay updated on emerging blockchain technologies and industry trends.",
        ],
        requirments: [
            "Experience in blockchain development using platforms like Ethereum or Binance Smart Chain.",
            "Proficiency in programming languages like Solidity.",
            "Understanding of consensus algorithms and cryptographic principles.",
            "Creative problem-solving skills in decentralized application design.",
        ],
        skillsAndTools: [
            "Blockchain Development",
            "Smart Contracts",
            "Solidity",
            "Cryptographic Principles",
        ],
        postDate: "2023-12-22T09:30:00Z",
    },
    {
        id: "9",
        jobTitle: "DevOps Engineer",
        time: "Full-Time",
        openPositions: 4,
        shortDescription:
            "Join our DevOps team to streamline development processes, automate deployments, and enhance the reliability of our software systems.",
        field: "DevOps",
        company: {
            name: "DevOps Innovations",
            nameAbbreviation: "DOI",
            logo: "devops-innovations-logo.png",
            about: "DevOps Innovations is a leading firm specializing in DevOps practices and automation solutions for software development.",
            email: "careers@devopsinnovations.com",
        },
        details: {
            "Career Level": "Mid-Senior Level",
            "Experience Needed": "3-5 years in DevOps",
            Location: "DevOps Innovations Headquarters, Seattle",
            "Education Level":
                "Bachelor's in Computer Science or related field",
            Salary: "$100,000 - $130,000",
            "Job Category": "DevOps",
        },
        Description: [
            "Implement and manage continuous integration and delivery pipelines.",
            "Automate deployment and monitoring processes for software applications.",
            "Collaborate with development and operations teams to optimize workflows.",
        ],
        requirments: [
            "Experience in DevOps practices and tools (e.g., Jenkins, Docker, Kubernetes).",
            "Proficiency in scripting languages like Bash or Python.",
            "Knowledge of infrastructure as code (e.g., Terraform).",
            "Strong problem-solving and collaboration skills.",
        ],
        skillsAndTools: [
            "DevOps",
            "CI/CD",
            "Docker",
            "Infrastructure as Code (IaC)",
        ],
        postDate: "2023-12-24T11:00:00Z",
    },
    {
        id: "10",
        jobTitle: "Machine Learning Engineer",
        time: "Full-Time",
        openPositions: 3,
        shortDescription:
            "Contribute to cutting-edge artificial intelligence projects, building and deploying machine learning models for real-world applications.",
        field: "AI",
        company: {
            name: "AIInnovate Labs",
            nameAbbreviation: "AIL",
            logo: "aiinnovate-labs-logo.png",
            about: "AIInnovate Labs is a leading research and development firm specializing in artificial intelligence and machine learning.",
            email: "careers@aiinnovatelabs.com",
        },
        details: {
            "Career Level": "Mid-Senior Level",
            "Experience Needed": "4-6 years in machine learning",
            Location: "AIInnovate Labs Research Center, Palo Alto",
            "Education Level":
                "Master's or Ph.D. in Computer Science or related field",
            Salary: "$120,000 - $150,000",
            "Job Category": "Machine Learning",
        },
        Description: [
            "Develop and implement machine learning algorithms for various applications.",
            "Collaborate with cross-functional teams on AI projects.",
            "Stay updated on emerging machine learning technologies and research.",
        ],
        requirments: [
            "Proven experience in machine learning and AI projects.",
            "Strong programming skills in languages like Python or R.",
            "Knowledge of machine learning frameworks (e.g., TensorFlow, PyTorch).",
            "Creative problem-solving and research-oriented mindset.",
        ],
        skillsAndTools: [
            "Machine Learning",
            "Python",
            "TensorFlow",
            "Research",
        ],
        postDate: "2023-12-26T13:15:00Z",
    },
    {
        id: "11",
        jobTitle: "Social Media Marketing Specialist",
        time: "Full-Time",
        openPositions: 4,
        shortDescription:
            "Join our dynamic marketing team to create engaging social media campaigns and build brand presence across various platforms.",
        field: "Marketing",
        company: {
            name: "DigitalPresence",
            nameAbbreviation: "DPS",
            logo: "digitalpresence-strategies-logo.png",
            about: "DigitalPresence Strategies specializes in comprehensive digital marketing solutions to enhance online brand visibility.",
            email: "careers@digitalpresencestrategies.com",
        },
        details: {
            "Career Level": "Entry-Mid Level",
            "Experience Needed": "2-4 years in social media marketing",
            Location: "DigitalPresence Strategies Office, New York",
            "Education Level": "Bachelor's in Marketing or related field",
            Salary: "$70,000 - $90,000",
            "Job Category": "Social Media Marketing",
        },
        Description: [
            "Develop and execute social media marketing strategies across platforms.",
            "Create engaging content and manage social media campaigns.",
            "Analyze performance metrics and provide insights for optimization.",
        ],
        requirments: [
            "Experience in social media marketing and campaign management.",
            "Creative content creation and copywriting skills.",
            "Familiarity with social media analytics tools.",
            "Excellent communication and interpersonal skills.",
        ],
        skillsAndTools: [
            "Social Media Marketing",
            "Content Creation",
            "Campaign Management",
            "Analytics",
        ],
        postDate: "2023-12-28T09:45:00Z",
    },
    {
        id: "12",
        jobTitle: "Content Marketing Manager",
        time: "Full-Time",
        openPositions: 3,
        shortDescription:
            "Lead our content marketing initiatives, creating compelling and strategic content to drive brand awareness and engagement.",
        field: "Marketing",
        company: {
            name: "ContentCraft Innovations",
            nameAbbreviation: "CCI",
            logo: "contentcraft-innovations-logo.png",
            about: "ContentCraft Innovations specializes in content marketing solutions to elevate brand storytelling and audience engagement.",
            email: "careers@contentcraftinnovations.com",
        },
        details: {
            "Career Level": "Mid-Senior Level",
            "Experience Needed": "5-8 years in content marketing",
            Location: "ContentCraft Innovations Headquarters, San Francisco",
            "Education Level":
                "Bachelor's in Marketing, Journalism, or related field",
            Salary: "$90,000 - $120,000",
            "Job Category": "Content Marketing",
        },
        Description: [
            "Develop and implement content marketing strategies aligned with business goals.",
            "Manage content creation, including blog posts, whitepapers, and videos.",
            "Collaborate with cross-functional teams to ensure cohesive brand messaging.",
        ],
        requirments: [
            "Proven experience in content marketing strategy and execution.",
            "Excellent writing and editing skills.",
            "Understanding of SEO and content performance analytics.",
            "Strategic thinking and project management skills.",
        ],
        skillsAndTools: [
            "Content Marketing Strategy",
            "SEO",
            "Content Creation",
            "Project Management",
        ],
        postDate: "2023-12-30T11:00:00Z",
    },
    {
        id: "13",
        jobTitle: "Influencer Marketing Coordinator",
        time: "Full-Time",
        openPositions: 2,
        shortDescription:
            "Coordinate and execute influencer marketing campaigns to expand brand reach and connect with target audiences.",
        field: "Marketing",
        company: {
            name: "InfluenceHub Strategies",
            nameAbbreviation: "IHS",
            logo: "influencehub-strategies-logo.png",
            about: "InfluenceHub Strategies specializes in influencer marketing solutions to amplify brand influence and engagement.",
            email: "careers@influencehubstrategies.com",
        },
        details: {
            "Career Level": "Entry-Mid Level",
            "Experience Needed": "2-3 years in influencer marketing",
            Location: "InfluenceHub Strategies Office, Los Angeles",
            "Education Level": "Bachelor's in Marketing or related field",
            Salary: "$60,000 - $80,000",
            "Job Category": "Influencer Marketing",
        },
        Description: [
            "Identify and connect with potential influencers for collaboration.",
            "Coordinate influencer marketing campaigns from inception to execution.",
            "Analyze campaign performance and provide insights for improvement.",
        ],
        requirments: [
            "Experience in influencer marketing and partnership coordination.",
            "Knowledge of social media platforms and influencer trends.",
            "Excellent communication and relationship-building skills.",
            "Creative and data-driven approach to influencer campaigns.",
        ],
        skillsAndTools: [
            "Influencer Marketing",
            "Social Media Platforms",
            "Campaign Coordination",
            "Analytics",
        ],
        postDate: "2024-01-02T13:15:00Z",
    },
];
