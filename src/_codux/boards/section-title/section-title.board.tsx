import { createBoard } from '@wixc3/react-board';
import { SectionTitle } from '../../../components/section-title/section-title';

export default createBoard({
    name: 'SectionTitle',
    Board: () => <SectionTitle align="center" title="Main Title is the large bold title" subTitle="Subtitle is the small normal text under the title" />,
    isSnippet: true,
});
