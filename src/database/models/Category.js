module.exports = (sequelize, dataTypes) => {
    let alias = "Categories";
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
        
    };
    let config = {
        tableName: "categories",
        timestamps: "false"
    }

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            as: "products",
            foreingKey: "category_id"
        });
    };

    Category.associate = function (models) {
        Category.hasMany(models.Subcategory, {
            as: "subcategories",
            foreingKey: "category_id"
        });
    };

    return Category;
};