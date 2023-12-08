import { createBoard } from '@wixc3/react-board';
import { JobDetailsSection } from '../../../components/job-details-section/job-details-section';

export default createBoard({
    name: 'JobDetailsSection',
    Board: () => <JobDetailsSection />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 796
    }
});
