import { ThemeProvider } from 'styled-components';
import { GlobalStype } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStype />
            hello world
        </ThemeProvider>
    );
}

export default App;
