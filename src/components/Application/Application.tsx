import * as React from 'react';
import {cn} from '@bem-react/classname';

import { Exchange } from '../Exchange/Exchange';

import './Application.scss';

const cnApp = cn('Application');

class Application extends React.Component {
    render() {
        return (
          <div className={cnApp()}>
              <Exchange />
          </div>
        );
    }
}

export { Application };
