"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Games", {
            id: {
                allowNull: false,
                afterIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            gameName: {
                type: Sequelize.STRING,
            },
            genre: {
                type: Sequelize.STRING,
            },
            age: {
                type: Sequelize.INTEGER,
            },
            price: {
                type: Sequelize.INTEGER,
            },
            rating: {
                type: Sequelize.INTEGER,
            },
            description: {
                type: Sequelize.TEXT,
            },
            image: {
                type: Sequelize.STRING,
            },
            pc: {
                type: Sequelize.BOOLEAN,
            },
            xbox: {
                type: Sequelize.BOOLEAN,
            },
            ps: {
                type: Sequelize.BOOLEAN,
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("Games");
    },
};
