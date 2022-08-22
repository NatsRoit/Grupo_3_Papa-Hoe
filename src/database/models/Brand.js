module.exports = (sequelize, dataTypes) => {
    let alias = "Brands";
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
        
    };
    let config = {
        tableName: "brands",
        timestamps: "false"
    }

    const Brand = sequelize.define(alias, cols, config);

    Brand.associate = function (models) {
        Brand.hasMany(models.Products, {
            as: "products",
            foreingKey: "brand_id"
        });
    };

    return Brand;
};