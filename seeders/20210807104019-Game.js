"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("Games", [
            {
                id: Math.random() * 1000,
                gameName: "Warcraft III",
                genre: "RTS",
                age: 30,
                price: 7,
                rating: 5,
                description:
                    "Dota is a multiplayer online battle arena (MOBA) video game in which two teams of five players compete to collectively destroy a large structure defended by the opposing team known as the Ancient, whilst defending their own.",
                image: "http://localhost:3000/images/warcraft3.jpg",
                pc: false,
                xbox: false,
                ps: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("Games", null, {});
    },
};
