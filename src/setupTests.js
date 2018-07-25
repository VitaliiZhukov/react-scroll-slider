const Enzyme = require('enzyme');
// const EnzymeAdapter = require('enzyme-adapter-react-16');

// Enzyme.configure({ adapter: new EnzymeAdapter() });

import Adapter from '../testConfig/adapter';

Enzyme.configure({ adapter: new Adapter() });