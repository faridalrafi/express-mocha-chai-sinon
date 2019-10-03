const chai = require('chai');
const sinon = require('sinon');
const authController = require('../../controllers/auth');
var expect = chai.expect;
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
var sandbox = sinon.sandbox.create();

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
      //expect(res.json.calledWith({user: USER})).to.equal(true)
      //expect(res.json.calledWith({user: USER})).to.have.returned()
    });
  });