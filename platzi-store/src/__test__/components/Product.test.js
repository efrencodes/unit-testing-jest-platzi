import React from 'react';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import { mount, shallow } from 'enzyme';
import Product from '../../components/Product';
import { create } from 'react-test-renderer';

describe('Componente <Product />', () => {
  test('Render del componente Product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    expect(product.length).toEqual(1);
  });
  test('Comprobar el botón de comprar', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});

describe('Product Snapshot', () => {
  const handleAddToCart = jest.fn();
  test('Comprobar la UI del componente Product', () => {
    const product = create(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>
    );
    expect(product.toJSON()).toMatchSnapshot();
  });
});
