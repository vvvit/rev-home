import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import { Application } from '../components/Application/Application';
import { createAppStore } from '../store/createAppStore';

import '../styles/index.scss';

const initClientApp = () => {

    ReactDOM.hydrate(
        <Provider store={createAppStore()}>
            <Application />
        </Provider>,
        document.getElementById('app'),
    );
};

export { initClientApp };
