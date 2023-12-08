import { createBoard } from '@wixc3/react-board';
import { JobSearch } from '../../../components/job-search/job-search';

export default createBoard({
    name: 'JobSearch',
    Board: () => <JobSearch />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#111111',
        windowWidth: 1024
    }
});
