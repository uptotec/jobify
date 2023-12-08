import { createBoard } from '@wixc3/react-board';
import { HomePage } from '../../../pages/home-page/home-page';

export default createBoard({
    name: 'HomePage',
    Board: () => <HomePage />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 1080,
        windowWidth: 1920
    }
});
