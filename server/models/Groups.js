module.exports = (sequelize, DataTypes) => {
    const Groups = sequelize.define("Groups", {
        groupName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        major: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gradeLevel: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        leader: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    })
    return Groups;
}