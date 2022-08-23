module.exports = (sequelize, dataTypes) => {
    let alias = 'Role';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45)
        },
    };
    let config = {
        tableName: 'roles',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {

        
    }

    return Role
}