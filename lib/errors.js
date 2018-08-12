'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on mangacore-p2p Module {0}'
};

module.exports = require('mangacore-lib').errors.extend(spec);
