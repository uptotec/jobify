import { createBoard } from '@wixc3/react-board';
import { JobListingsSection } from '../../../components/job-listings-section/job-listings-section';

export default createBoard({
    name: 'JobListingsSection',
    Board: () => <JobListingsSection />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
