"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Alif",
        profession: "Super Admin",
        role: "admin",
        email: "alifirfandi79@gmail.com",
        password: await bcrypt.hash("alif12345", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Irfandi",
        profession: "Developer Student",
        role: "student",
        email: "irfandialif@gmail.com",
        password: await bcrypt.hash("irfandi12345", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
