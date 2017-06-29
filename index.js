'use strict';

let configs;

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */

module.exports.formatter = (number, locale) => {
  return number.toLocaleString(locale);
};

/**
 * Update configs
 * @param key
 * @param secret
 * @returns {*}
 */

module.exports.update = ({key, secret}) => {
  configs = {key, secret};
  return configs;
};

/**
 * Check if configs was updated
 * @returns {*}
 */

module.exports.checkConfigs = () => {
  return configs;
};