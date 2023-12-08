import { createBoard } from '@wixc3/react-board';
import { PostJobPage } from '../../../pages/post-job-page/post-job-page';

export default createBoard({
    name: 'PostJobPage',
    Board: () => <PostJobPage />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
