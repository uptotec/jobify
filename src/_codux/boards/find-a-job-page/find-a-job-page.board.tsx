import { createBoard } from '@wixc3/react-board';
import { FindAJobPage } from '../../../pages/find-a-job-page/find-a-job-page';

export default createBoard({
    name: 'FindAJobPage',
    Board: () => <FindAJobPage />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
