module.exports = (sequelize, dataTypes) => {
    let alias = "Colors";
    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
    };
    let config = {
        tableName: "colors",
        timestamps: "false"
    }

    const Color = sequelize.define(alias, cols, config);

    return Color;
};