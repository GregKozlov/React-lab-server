"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("Games", [
            {
                id: Math.random() * 1000,
                gameName: "Counter-Strike",
                genre: "Shooter",
                age: 18,
                price: 2,
                rating: 3,
                description:
                    "Counter-Strike (CS) is a series of multiplayer first-person shooter video games in which teams of terrorists battle to perpetrate an act of terror (bombing, hostage-taking, assassination) while counter-terrorists try to prevent it (bomb defusal, hostage rescue).",
                image: "http://localhost:3000/images/cs.jpg",
                pc: true,
                xbox: true,
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
