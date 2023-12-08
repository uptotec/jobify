import { createBoard } from '@wixc3/react-board';
import { Pagination } from '../../../components/pagination/pagination';

export default createBoard({
    name: 'Pagination',
    Board: () => <Pagination />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#dd9696'
    }
});
