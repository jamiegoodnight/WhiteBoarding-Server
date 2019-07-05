const express = require("express");

const router = express.Router();
const restricted = require("../authorization/restricted").restricted;
const db = require("./submissionsModel");

router.get("/", (req, res) => {
  db.get()
    .then(signees => {
      //   console.log(res);
      res.status(200).json(signees);
    })
    .catch(err => {
      res.status(500).json(console.log(err));
      //   { message: "The tech could not be retrieved!" }
    });
});

router.post("/", async (req, res) => {
  const stu = req.body;

  if (stu.studentName) {
    db.insert(stu)
      .then(stu => {
        res.status(201).json(stu);
      })
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .json({ message: "There was an error saving your tech!" });
      });
  } else {
    res.status(400).json({ message: "Please provide a name for your tech!" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  db.remove(id)
    .then(tech => {
      if (tech) {
        db.getTechById(id).then(tech => {
          res.status(200).json(id);
        });
      } else {
        res.status(404).json({
          message: "The tech with the specified id could not be found!"
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "This tech could not be deleted!" });
    });
});

module.exports = router;
