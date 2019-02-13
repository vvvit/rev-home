import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Application } from '../components/Application/Application';

import '../styles/index.scss';

const initClientApp = () => {

    ReactDOM.hydrate(
        <Application />,
        document.getElementById('app'),
    );
};

export { initClientApp };
