import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { store, persistor } from './store';
import Global from './styles/global';
import history from './services/history';
import Routes from './routes';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Global />
                    <Routes />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
