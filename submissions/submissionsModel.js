const db = require("../database/dbConfig");

module.exports = {
  get,
  insert,
  update,
  remove,
  getStudentById
};

function get() {
  return db("students");
}

function insert(stu) {
  return db("students")
    .insert(stu)
    .returning("id")
    .then(ids => {
      return getStudentById(ids[0]);
    });
}

function getStudentById(id) {
  return db("students")
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("students")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("students")
    .where("id", id)
    .del();
}
