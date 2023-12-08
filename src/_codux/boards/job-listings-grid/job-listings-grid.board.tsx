import { createBoard } from "@wixc3/react-board";
import { JobListingsGrid } from "../../../components/job-listings-grid/job-listings-grid";
import { JobListingCardProps } from "../../../components/job-listing-card/job-listing-card";

const job = {
    companyName: "Bue",
    timePosted: "3 days ago",
    jobTitle: "Computer Engineering Phd Doctor",
    jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    jobCategory: "education",
    salary: "E£1.25/Year",
};

const jobs: JobListingCardProps[] = [];

for (let i = 0; i < 8; i++) {
    jobs.push(job);
}

export default createBoard({
    name: "JobListingsGrid",
    Board: () => <JobListingsGrid jobs={jobs} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 720
    }
});
