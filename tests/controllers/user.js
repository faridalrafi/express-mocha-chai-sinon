const chai = require('chai');
const sinon = require('sinon');
const authController = require('../../controllers/user');
var expect = chai.expect;

describe('authController', () => {
    const USER = {
      email: 'test@test.com',
      password: 'Test12345',
      confirm: 'Test12345',
      username: 'Test',
    };
  
    it('it should send user data with email: test@test.com', () => {
      const req = { user: USER };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy(),
      };
  
      authController.registration(req, res)
      // this is how we check that the res is being called with correct arguments
      expect(res.status.calledWith(201)).to.be.ok;
    });
  });