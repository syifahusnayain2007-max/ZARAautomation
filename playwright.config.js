// @ts-check
/* import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';
import { TIMEOUT } from 'dns';
import { on } from 'events';
import { permission } from 'process'; */
/* const path = require('path');

require('dotenv').config({
  path: 'env.rahul'
}); */


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
 timeout: 100*1000,
 expect: {
  timeout: 20000,
 },
  reporter : 'html',
  use: {
    browserName:'chromium',
    headless : false,
    screenshot : 'on',
    trace : 'retain-on-failure',
    permissions : ['geolocation'],
    geolocation: { "latitude": -6.200000, "longitude": 106.816666 },
    locale: "en-US",
    timezoneId: "Asia/Jakarta"
  },


});

module.exports = config

