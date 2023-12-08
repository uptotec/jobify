import { createBoard } from '@wixc3/react-board';
import { HeroTitle } from '../../../components/hero-title/hero-title';

export default createBoard({
    name: 'HeroTitle',
    Board: () => <HeroTitle />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1080,
        windowHeight: 720
    }
});
