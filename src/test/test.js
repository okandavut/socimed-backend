"use strict";

var expect = require("chai").expect;
var request = require("request");
var chai = require("chai");
var chaiHttp = require("chai-http");
const axios = require("axios");

chai.use(chaiHttp);

describe("#userControllerTests", function () {
  it("should login returns true", (done) => {
    chai
      .request("http://localhost:3000")
      .get("/login")
      .send({ username: "okan", password: "123" })
      .end((err, res) => {
        expect(res.body[0].name).equal("okandavut");
        expect(res.status).equal(200);
        done();
      });
  });
});
