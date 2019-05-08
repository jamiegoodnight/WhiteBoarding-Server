const db = require("../database/dbConfig");

module.exports = {
  getUserByName,
  addUser
};

function getUserByName(filter) {
  return db("users")
    .where(filter)
    .first();
}

function addUser(user) {
  return db("users")
    .insert(user)
    .returning("id")
    .then(ids => {
      return getUserById(ids[0]);
    });
}

// async function addUser(user) {
//   const [id] = await db("users").insert(user);

//   return findByUserId(id);
// }

// function findByUserId(id) {
//   return db("users")
//     .select("id", "username")
//     .where({ id })
//     .first();
// }

function getUserById(id) {
  return db("users")
    .where({ id })
    .first();
}
