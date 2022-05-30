import React, { PropTypes } from 'react';

const propTypes = {};

const defaultProps = {};

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="currency-converter">
        Convert Currency
        <form>
          <input type="text" name="currency-from" defaultValue="EUR" />
          <input type="text" name="currency-to" defaultValue="USD" />
          <input type="text" name="value" defaultValue="1" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

CurrencyConverter.propTypes = propTypes;
CurrencyConverter.defaultProps = defaultProps;

export default CurrencyConverter;
