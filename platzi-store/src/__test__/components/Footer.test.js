import React from 'react';
import Footer from '../../components/Footer';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

describe('Componente <Footer />', () => {
  const footer = mount(<Footer />);
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
  test('Render del copy', () => {
    expect(footer.find('.Footer-copy').text()).toEqual(
      'Todos los Izquierdos Reservados'
    );
  });
});

describe('Footer Snapshot', () => {
  test('Comprobar la UI del componente Footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
