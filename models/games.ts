import { Model, DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize("Tes1DB", "postgres", "root", {
    host: "localhost",
    dialect: "postgres",
});

class Games extends Model {}

Games.init(
    {
        gameName: DataTypes.STRING,
        genre: DataTypes.STRING,
        age: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        rating: DataTypes.INTEGER,
        description: DataTypes.STRING,
        image: DataTypes.STRING,
        pc: DataTypes.BOOLEAN,
        xbox: DataTypes.BOOLEAN,
        ps: DataTypes.BOOLEAN,
    },
    {
        sequelize,
        modelName: "Games",
    },
);

export default Games;
