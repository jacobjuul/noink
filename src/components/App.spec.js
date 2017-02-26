import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';

const setup = () => shallow(<App />);

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).to.be.present();
  });
});

