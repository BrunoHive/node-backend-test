
const connection = require('../config')
const Sequelize = require('sequelize')

const Users = connection.define('Users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [0, 70]
    }
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [0,70]
    }
  },
  nickname: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      len: [0,70]
    }
  },
  address : {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      len: [0,70]
    }
  },
  bio : {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: true,
      len: [0,70]
    }
  },
})


module.exports = Users