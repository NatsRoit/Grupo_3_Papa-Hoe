module.exports = (sequelize, dataTypes) => {
    let alias = "category";
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
        tableName: "categories",
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "category_id"
        });
    };

    Category.associate = function (models) {
        Category.hasMany(models.Subcategory, {
            as: "subcategories",
            foreignKey: "category_id"
        });
    };

    return Category;
};