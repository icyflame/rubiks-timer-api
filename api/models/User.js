/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	name: {
  		type: 'String'
  	},

  	email: {
  		type: 'String',
  		required: true
  	},

  	phone: {
  		type: 'String',
  	},

  	wcaid: {
  		type: 'String'
  	},

  	password: {
  		type: 'String',
  		required: true
  	}

  }
};

