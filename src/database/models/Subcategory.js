module.exports = (sequelize, dataTypes) => {
    let alias = "Subcategories";
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
        category_id: {
            type: dataTypes.INTERGER,
            allowNull: false
        },
    };
    let config = {
        tableName: "subcategories",
        timestamps: "false"
    }

    const Subcategory = sequelize.define(alias, cols, config);

    Subcategory.associate = function (models) {
        Subcategory.hasMany(models.Products, {
            as: "products",
            foreingKey: "subcategory_id"
        });
    };

    Subcategory.associate = function (models) {
        Subcategory.belongsTo(models.Categories, {
            as: "categories",
            foreingKey: "category_id"
        });
    };

    return Subcategory;
};