import { createBoard } from "@wixc3/react-board";
import { JobDetailsSection } from "../../../components/job-details-section/job-details-section";
import { fakeJobs } from "../../../jobs";

export default createBoard({
    name: "JobDetailsSection",
    Board: () => <JobDetailsSection job={fakeJobs[0]} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 796,
    },
});
