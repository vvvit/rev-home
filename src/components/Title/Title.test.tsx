import * as React from 'react';
import { shallow } from 'enzyme';

import { Title } from './Title';

describe('Title', () => {
    it('Должен корректно отрендериться главный заголовок', () => {
        expect(shallow(<Title>Главный заголовок</Title>)).toMatchSnapshot();
    });
});
