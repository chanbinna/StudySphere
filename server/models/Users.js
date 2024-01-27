module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // password: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        // gradeLevel: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // gender: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // }
    });
    // Users.associate = (models) => {
    //     Users.hasMany(models.Chats, {
    //         onDelete: 'cascade',
    //     });
    // };
    return Users;
}