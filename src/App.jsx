import { ThemeProvider } from 'styled-components';
import { GlobalStype } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import GithubProvider from './context/GithubContext';

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStype />
            <GithubProvider>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </GithubProvider>
        </ThemeProvider>
    );
}

export default App;
