const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, server } = require('../index');

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /files/list', () => {
    it('should return a list of files', (done) => {
        chai.request(app)
            .get('/files/list')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect('Content-Type', /json/);
                done();
            });
    });
});

describe('GET /files/data', function () {
    this.timeout(5000);
    it('should return a list of files and its data', (done) => {
        chai.request(app)
            .get('/files/data')
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect('Content-Type', /json/);
                done();
            });
    });
});

after(function (done) {
    if (typeof server.close === 'function') {
        server.close();
        done();
    } else {
        done();
    }
});
