module.exports = (sequelize, DataTypes) => {
    const Chats = sequelize.define("Chats", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    return Chats;
}