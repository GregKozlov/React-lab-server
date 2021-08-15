"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("Games", [
            {
                id: Math.random() * 1000,
                gameName: "Lineage 2",
                genre: "MMORPG",
                age: 12,
                price: 9,
                rating: 5,
                description:
                    "Lineage II is a massive multiplayer online role-playing game (MMORPG) for Microsoft Windows and the second game in the Lineage series. It is a prequel to Lineage and is set 150 years before the firstgame.",
                image: "http://localhost:3000/images/lineage.jpg",
                pc: true,
                xbox: false,
                ps: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("Games", null, {});
    },
};
