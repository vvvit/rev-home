import * as React from 'react';

import './Title.scss';

export class Title extends React.Component {
    render() {
        return <h1>{this.props.children}</h1>;
    }
}
