"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("Games", [
            {
                id: Math.random() * 1000,
                gameName: "WOW",
                genre: "MMOG",
                age: 15,
                price: 19,
                rating: 4,
                description:
                    "Screen from World of Warcraft, a “massively multiplayer” online game (MMOG). Set in the fictional world of Azeroth, WoW allows players to create avatar-style characters and explore a sprawling universe while interacting with nonreal players—called nonplayer characters (NPCs)—and other real-world players (PCs).",
                image: "http://localhost:3000/images/wow.jpg",
                pc: true,
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
