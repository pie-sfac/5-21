import { ErrorBoundary } from 'react-error-boundary';

import './App.css';
import UiErrorFallback from './components/common/UiErrorFallback';
import MyRouter from './MyRoutes';
import GlobalStyle from './styles/globals';

import { LinkProvider } from './pages/LinkContxt';
function App() {
  return (
    <ErrorBoundary FallbackComponent={UiErrorFallback}>
      <LinkProvider>
        <MyRouter />
      </LinkProvider>
      <GlobalStyle />
    </ErrorBoundary>
  );
}

export default App;
