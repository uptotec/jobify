import { createBoard } from '@wixc3/react-board';
import { JobPage } from '../../../pages/job-page/job-page';

export default createBoard({
    name: 'JobPage',
    Board: () => <JobPage />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    }
});
