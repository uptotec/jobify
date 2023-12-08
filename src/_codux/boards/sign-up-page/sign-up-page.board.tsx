import { createBoard } from '@wixc3/react-board';
import { SignUpPage } from '../../../pages/sign-up-page/sign-up-page';

export default createBoard({
    name: 'SignUpPage',
    Board: () => <SignUpPage />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
