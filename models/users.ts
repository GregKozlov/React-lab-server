import { Model, DataTypes, Sequelize, STRING, TEXT } from "sequelize";

const sequelize = new Sequelize("Tes1DB", "postgres", "root", {
    host: "localhost",
    dialect: "postgres",
});

class Users extends Model {}

Users.init(
    {
        userName: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        info: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "Users",
    },
);

export default Users;
