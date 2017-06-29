'use strict';

const expect = require('chai').expect;
const main = require('../index');
const test_configs = {key: 'test_key', secret: 'test_secret'};

describe('#numFormatter', () => {
  it('should convert single digits', () => {
    const result = main.formatter(1);
    expect(result).to.equal('1');
  });

  it('should convert double digits', () => {
    const result = main.formatter(12);
    expect(result).to.equal('12');
  });

  it('should convert triple digits', () => {
    const result = main.formatter(123);
    expect(result).to.equal('123');
  });

  it('should convert 4 digits', () => {
    const result = main.formatter(1234);
    expect(result).to.equal('1,234');
  });

  it('should convert 5 digits', () => {
    const result = main.formatter(12345);
    expect(result).to.equal('12,345');
  });

  it('should convert 6 digits', () => {
    const result = main.formatter(123456);
    expect(result).to.equal('123,456');
  });

  it('should convert 7 digits', () => {
    const result = main.formatter(1234567);
    expect(result).to.equal('1,234,567');
  });

  it('should convert 8 digits', () => {
    const result = main.formatter(12345678);
    expect(result).to.equal('12,345,678');
  });

  it('should update configs', () => {
    const result = main.update(test_configs);
    expect(result).to.deep.include(test_configs)
  });

  it('should chec if configs are correct', () => {
    const result = main.checkConfigs();
    expect(result).to.deep.include(test_configs)
  });
});
