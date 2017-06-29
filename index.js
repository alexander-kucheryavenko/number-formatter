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
 *
 * @param conf
 * @returns {{key: (*|string|string), secret: (*|string)}|*}
 */

module.exports.update = (conf) => {
  configs = {key: conf.key, secret: conf.secret};
  return configs;
};

/**
 * Check if configs was updated
 * @returns {*}
 */

module.exports.checkConfigs = () => {
  return configs;
};