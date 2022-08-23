module.exports = (sequelize, dataTypes) => {
    let alias = "Subcategory";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
    };

    let config = {
        tableName: "subcategories",
        timestamps: false
    };

    const Subcategory = sequelize.define(alias, cols, config);
    Subcategory.associate = function (models) {
        Subcategory.belongsTo(models.Category, {
            foreignKey: "category_id",
            as: "categories",
        });
    };

    Subcategory.associate = function (models) {
        Subcategory.hasMany(models.Product, {
            as: "products",
            foreignKey: "subcategory_id"
        });
    };


    return Subcategory;
};