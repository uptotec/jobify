import { createBoard } from '@wixc3/react-board';
import { LoginPage } from '../../../pages/login-page/login-page';

export default createBoard({
    name: 'LoginPage',
    Board: () => <LoginPage />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
