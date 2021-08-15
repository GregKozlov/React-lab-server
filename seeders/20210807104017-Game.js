"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("Games", [
            {
                id: Math.random() * 1000,
                gameName: "Minecraft",
                genre: "Platformer",
                age: 6,
                price: 4,
                rating: 1,
                description:
                    "Minecraft is a video game in which players create and break apart various kinds of blocks in three-dimensional worlds. The game's two main modes are Survival and Creative. In Survival, players must find their own building supplies and food. They also interact with blocklike mobs, or moving creatures.",
                image: "http://localhost:3000/images/minecraft.jpg",
                pc: false,
                xbox: true,
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
