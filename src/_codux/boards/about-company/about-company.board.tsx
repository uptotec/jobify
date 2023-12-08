import { createBoard } from '@wixc3/react-board';
import { AboutCompany } from '../../../components/about-company/about-company';

export default createBoard({
    name: 'AboutCompany',
    Board: () => <AboutCompany name="BUE" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Lorem ipsum dolor sit amet." type="Educational Institute" />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 416
    }
});
