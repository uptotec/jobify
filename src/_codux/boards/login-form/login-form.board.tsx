import { createBoard } from '@wixc3/react-board';
import { LoginForm } from '../../../components/login-form/login-form';

export default createBoard({
    name: 'LoginForm',
    Board: () => <LoginForm />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#f5f3ff',
        windowWidth: 1920,
        windowHeight: 1080
    }
});
