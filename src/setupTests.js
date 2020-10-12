/* eslint import/no-extraneous-dependencies: 0 */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/* eslint no-console: 0 */
console.warn = () => null;
console.info = () => null;
console.debug = () => null;

configure({ adapter: new Adapter() });

/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
global.matchMedia = global.matchMedia
  || function mockMatchMedia() {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };
