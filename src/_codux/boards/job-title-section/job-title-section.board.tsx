import { createBoard } from "@wixc3/react-board";
import { JobTitleSection } from "../../../components/job-title-section/job-title-section";
import { fakeJobs } from "../../../jobs";

export default createBoard({
    name: "JobTitleSection",
    Board: () => <JobTitleSection job={fakeJobs[0]} />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 800,
    },
});
