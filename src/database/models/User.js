module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(45)
        },
        last_name: {
            type: dataTypes.STRING(45)
        },
        email : {
            type: dataTypes.STRING(45)
        },
        password: {
            type: dataTypes.STRING(45)
        },
        user_name: {
            type: dataTypes.STRING(45)
        },
        address: {
            type: dataTypes.STRING(45)
        },
        floor_apt: {
            type: dataTypes.STRING(45)
        },
        city: {
            type: dataTypes.STRING(45)
        },
        zip_code: {
            type: dataTypes.STRING(45)
        },
        province: {
            type: dataTypes.STRING(45)
        },
        country: {
            type: dataTypes.STRING(45)
        },
        phone_number: {
            type: dataTypes.INTEGER(11),
        },
        avatar: {
            type: dataTypes.STRING(255),
        },
        active: {
            type: dataTypes.TINYINT(1),
        },
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {

        
    }

    return User
}