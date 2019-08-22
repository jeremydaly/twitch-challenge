'use strict';

const AWS = require('aws-sdk')
const data = new AWS.DynamoDB.DocumentClient()

module.exports.graphql = async (event) => {

  const params = {
    TableName: 'property-table'
  }

  let response = await data.scan(params).promise()

  console.log(response);

  console.log('Received event {}', JSON.stringify(event, 3));
  console.log('Got an Invoke Request.');
};
