import React from 'react';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';
import { mount, shallow } from 'enzyme';

describe('Componente <Header />', () => {
  test('Render del componente Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  });
  test('Render del titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});
