const request = require('supertest');
const httpStatus = require('http-status');
const chai = require('chai');
const { app, server } = require('../../app');

const agent = request.agent(app);

chai.config.includeStack = true;

const baseUrl = '/api/v1';


describe('## Client API Integration testing', () => {
  beforeAll((done) => {
    app.on('dataLoaded', () => {
      done();
    });
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should return 10 clients', (done) => {
    agent.get(`${baseUrl}/client`)
           .expect(httpStatus.OK)
           .then((res) => {
             chai.expect(res.body.length).to.equal(10);
             done();
           })
           .catch(done);
  });

  it('should retrieve client num 1', (done) => {
    const clientId = 1;
    agent.get(`${baseUrl}/client/${clientId}`)
           .expect(httpStatus.OK)
           .then((res) => {
             chai.expect(res.body.id).to.equal(1);
             done();
           })
           .catch(done);
  });

  it('should create a new client', (done) => {
    const data = {
      name: 'New client',
      username: 'nickname',
      address: {
        street: 'elm street',
        geo: { lat: '12', lng: '12' }
      },
      company: {
        name: 'a company'
      }
    };

    agent.post(`${baseUrl}/client`)
            .send(data)
            .expect(httpStatus.CREATED)
            .then(() => {
              done();
            })
            .catch(done);
  });

  it('should update an existing client', (done) => {
    const clientId = 1;
    const data = {
      id: 1,
      name: 'Changed name',
      username: 'ChangedNickname',
      address: {
        street: 'elm street',
        geo: { lat: '12', lng: '12' }
      },
      company: {
        name: 'a company'
      }
    };

    agent.put(`${baseUrl}/client/${clientId}`)
            .send(data)
            .expect(httpStatus.OK)
            .then((res) => {
              chai.expect(res.body.id).to.equal(1);
              chai.expect(res.body.name).to.equal('Changed name');
              done();
            })
            .catch(done);
  });

  it('should delete a client', (done) => {
    const clientId = 1;
    agent.delete(`${baseUrl}/client/${clientId}`)
            .expect(httpStatus.OK)
            .then(() => {
              done();
            })
            .catch(done);
  });

  it('should raise validation error', (done) => {
    const clientId = 1;
    const data = {
      id: 1,
      name: 'Changed name'
    };

    agent.put(`${baseUrl}/client/${clientId}`)
          .send(data)
          .expect(httpStatus.BAD_REQUEST)
          .then((res) => {
            chai.expect(res.body.details.length).to.equal(1);
            done();
          })
          .catch(done);
  });

  it('should handle 404', (done) => {
    agent.get(`${baseUrl}/dummy`)
            .expect(httpStatus.NOT_FOUND)
            .then((res) => {
              chai.expect(res.body.message).to.contains('Not Found');
              done();
            })
            .catch(done);
  });
});
