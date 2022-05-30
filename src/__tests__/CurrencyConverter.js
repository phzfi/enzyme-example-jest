import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

import CurrencyConverter from '../CurrencyConverter';

describe('CurrencyConverter', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<CurrencyConverter />).contains(<input type="submit" />)).toBe(true);
  });

  it('should be selectable by class "currency-converter"', function() {
    expect(shallow(<CurrencyConverter />).is('.currency-converter')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<CurrencyConverter />).find('.currency-converter').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<CurrencyConverter />).text()).toEqual('Convert Currency');
  });
});
