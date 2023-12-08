import { createBoard } from '@wixc3/react-board';
import { JobSearchHeader } from '../../../components/job-search-header/job-search-header';

export default createBoard({
    name: 'JobSearchHeader',
    Board: () => <JobSearchHeader />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
