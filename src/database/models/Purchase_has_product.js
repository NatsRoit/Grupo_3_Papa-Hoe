module.exports = (sequelize, dataTypes) => {
    let alias = "Purchases_has_products";
    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            allowNull: false
        },
        purchase_id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            allowNull: false
        },
        
    };
    let config = {
        tableName: "purchases_has_products",
        timestamps: "false"
    }

    const Purchases_has_products = sequelize.define(alias, cols, config);

    return Purchases_has_products;
};