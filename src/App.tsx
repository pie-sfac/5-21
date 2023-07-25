import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Login from './pages/Login'
import Find from './pages/Find'

import './App.css';
import UiErrorFallback from './components/common/UiErrorFallback';
import MyRouter from './MyRoutes';
import GlobalStyle from './styles/globals';


function App() {
    return (
        
        <ErrorBoundary FallbackComponent={UiErrorFallback}>
            <MyRouter />
            <div>
            <Login/>
            </div>
            <GlobalStyle />
        </ErrorBoundary>
        
    );
}

export default App;
