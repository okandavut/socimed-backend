"use strict";

var expect = require("chai").expect;
var request = require("request");
var chai = require("chai");
var chaiHttp = require("chai-http");
const axios = require("axios");
var user_controller = require("../controllers/usercontroller");

chai.use(chaiHttp);

describe("#userControllerTests", function () {
  it("should login returns user", (done) => {
    chai
      .request("http://localhost:3000")
      .post("/login")
      .send({ username: "okandav", password: "123" })
      .end((err, res) => {
        expect(res.body[0].name).equal("okan reyiz");
        expect(res.status).equal(200);
        done();
      });
  });

  it("should register returns user", (done) => {
    chai
      .request("http://localhost:3000")
      .post("/createuser")
      .send({ username: "test", password: "123", name: "test" })
      .end((err, res) => {
        expect(res.body.name).equal("test");
        expect(res.status).equal(200);
      });
    chai
      .request("http://localhost:3000")
      .post("/deleteUser")
      .send({ name: "test" })
      .end((err, res) => {
        expect(res.body).equal(true);
        expect(res.status).equal(200);
        done();
      });
  });
});
