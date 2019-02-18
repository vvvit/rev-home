import * as React from 'react';
import {cn} from '@bem-react/classname';

import './Icon.scss';

type KnownIcons = 'arrow-down' | 'arrow-up';

interface IconProps {
    type: KnownIcons;
    className?: string;
    size?: 's' | 'm';
}

const iconCn = cn('Icon');

class Icon extends React.Component<IconProps> {
    static defaultProps: Partial<IconProps> = {
        size: 'm'
    };

    render() {
        const {type, size, className} = this.props;

        return <span className={iconCn({size: size, type}, [className])} />;
    }
}

export {Icon, IconProps};
