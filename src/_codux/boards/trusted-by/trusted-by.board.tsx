import { createBoard } from '@wixc3/react-board';
import { TrustedBy } from '../../../components/trusted-by/trusted-by';

export default createBoard({
    name: 'TrustedBy',
    Board: () => <TrustedBy />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1080
    }
});
