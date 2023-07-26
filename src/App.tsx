import { ErrorBoundary } from 'react-error-boundary';
import Login from './pages/Login'
import Find from './pages/Find'

import './App.css';
import UiErrorFallback from './components/common/UiErrorFallback';
import MyRouter from './MyRoutes';
import GlobalStyle from './styles/globals';


function App() {
<<<<<<< HEAD
    return (
        
        <ErrorBoundary FallbackComponent={UiErrorFallback}>
            <MyRouter />
            <GlobalStyle />
        </ErrorBoundary>
        
    );
=======
  //   useEffect(() => {

  return (
    <ErrorBoundary FallbackComponent={UiErrorFallback}>
      <MyRouter />
      <GlobalStyle />
    </ErrorBoundary>
  );
>>>>>>> sun
}

export default App;
