/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import { mockPopulationInfo } from './mocks';

chai.use(chaiHttp);

describe('Tests for Population Management API', () => {
  it('Should fetch all population Information ', (done) => {
    chai.request(app)
      .get('/api/v1/population')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should create a new location', (done) => {
    chai.request(app)
      .post('/api/v1/population')
      .send(mockPopulationInfo)
      .end((err, res) => {
        if (err) done(err);

        const { message } = res.body;

        expect(res.status).to.equal(201);
        expect(message).to.equal('Population Information has been added successfully');
        done();
      });
  });

  it('should return 500 if you server crashes', (done) => {
    chai.request(app)
      .post('/api/v1/population')
      .send(mockPopulationInfo)
      .end((err, res) => {
        if (err) done(err);

        expect(res.status).to.equal(500);
        done();
      });
  });

  it('should give population info not found message when location is wrong', (done) => {
    chai.request(app)
      .get('/api/v1/population/2134hjbkneion32o5t')
      .end((err, res) => {
        const { message } = res.body;
        expect(res).to.have.status(404);
        expect(message).to.equal('Population Information not found');
        done();
      });
  });

  it('should get the details of a population', (done) => {
    chai.request(app)
      .get(`/api/v1/population/${mockPopulationInfo.location}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not update successfully if the location is wrong', (done) => {
    chai.request(app)
      .put('/api/v1/population/hbeihbqi1')
      .send({
        male: 10,
      })
      .end((err, res) => {
        if (err) done(err);

        expect(res.status).to.equal(404);
        done();
      });
  });

  it('should update successfully', (done) => {
    chai.request(app)
      .put(`/api/v1/population/${mockPopulationInfo.location}`)
      .send({
        male: 10,
      })
      .end((err, res) => {
        if (err) done(err);

        const { message } = res.body;
        expect(res.status).to.equal(200);
        expect(message).to.equal('Population Information has been updated successfully');
        done();
      });
  });


  it('should not delete successfully if location is wrong', (done) => {
    chai.request(app)
      .delete('/api/v1/population/hbeihbqi1')
      .end((err, res) => {
        if (err) done(err);

        expect(res.status).to.equal(404);
        done();
      });
  });

  it('should delete successfully', (done) => {
    chai.request(app)
      .delete(`/api/v1/population/${mockPopulationInfo.location}`)
      .end((err, res) => {
        if (err) done(err);

        const { message } = res.body;
        expect(res.status).to.equal(200);
        expect(message).to.equal('Population Information has been deleted successfully');
        done();
      });
  });
});
