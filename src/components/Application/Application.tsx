import * as React from 'react';
import {cn} from '@bem-react/classname';

import { Exchange } from '../Exchange/Exchange';
import { rateConnector } from '../Exchange/connectors/rateConnector';

import './Application.scss';

const cnApp = cn('Application');

const ExchangeContainer = rateConnector(Exchange);

class Application extends React.Component {
    render() {
        return (
          <div className={cnApp()}>
              <ExchangeContainer />
          </div>
        );
    }
}

export { Application };
