import { createBoard } from '@wixc3/react-board';
import { JobInfoPostJob } from '../../../components/job-info-post-job/job-info-post-job';

export default createBoard({
    name: 'JobInfoPostJob',
    Board: () => <JobInfoPostJob />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 500
    }
});
