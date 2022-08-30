module.exports = (sequelize, dataTypes) => {
    let alias = "Size";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        dimension: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };

    let config = {
        tableName: "sizes",
        timestamps: false
    };

    const Size = sequelize.define(alias, cols, config);

    Size.associate = function (models) {
        Size.belongsToMany(models.Product, {
            as: "dimensiones",
            through: "Product_Size",
            foreignKey: "size_id",
            otherKey: "product_id", 
            timestamps: false
        });
    };

    return Size;
};