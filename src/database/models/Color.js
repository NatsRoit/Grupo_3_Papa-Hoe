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
            type: dataTypes.STRING(45),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(45),
            allowNull: true
        },
    };
    let config = {
        tableName: "colors",
        timestamps: "false"
    }

    const Color = sequelize.define(alias, cols, config);

    Color.associate = function (models) {
        Color.belongsToMany(models.Products, {
            as: "products",
            through: "products_has_colors",
            foreingKey: "color_id",
            otherKey: "product_id",
            timestamps: false,
        });
    };

    return Color;
};