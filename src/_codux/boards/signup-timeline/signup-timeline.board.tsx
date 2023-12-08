import { createBoard } from '@wixc3/react-board';
import { SignupTimeline } from '../../../components/signup-timeline/signup-timeline';

export default createBoard({
    name: 'SignupTimeline',
    Board: () => <SignupTimeline />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
