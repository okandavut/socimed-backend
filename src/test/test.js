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

describe("#postControllerPosts", function () {
  it("should createPost", (done) => {
    chai
      .request("http://localhost:3000")
      .post("/createPost")
      .send({
        title: "Test",
        post: "Test",
        postUserId: "5f7570860e767e001101666f",
      })
      .end((err, res) => {
        expect(res.body.title).equal("Test");
        expect(res.status).equal(200);
        rollBackCreatedPost(res.body._id);
        done();
      });
  });
});

const rollBackCreatedPost = (id) => {
  //Rollback inserted item
  chai
    .request("http://localhost:3000")
    .post("/deletePost")
    .send({
      id: id,
    })
    .end((err, res) => {
      expect(res.body).equal(true);
      expect(res.status).equal(200);
    });
};
