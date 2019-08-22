'use strict';

const AWS = require('aws-sdk');

module.exports.graphql = async (event) => {
  
  console.log('Received event {}', JSON.stringify(event, 3));
  console.log('Got an Invoke Request.');
};
