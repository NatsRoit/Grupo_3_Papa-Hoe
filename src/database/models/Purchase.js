module.exports = (sequelize, dataTypes) => {
    let alias = "Purchases";
    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        tax: {
            type: dataTypes.DECIMAL(7,2),
            allowNull: true
        },
        total: {
            type: dataTypes.DECIMAL(7,2),
            allowNull: false
        },
       
    };
    let config = {
        tableName: "purchases",
        timestamps: "false"
    }

    const Purchase = sequelize.define(alias, cols, config);

    Purchase.associate = function (models) {
        Purchase.belognTo(models.Shipping_methods, {
            as: "shipping_methods",
            foreingKey: "shipping_method_id"
        });
    };

    Purchase.associate = function (models) {
        Purchase.belognTo(models.Payment_methods, {
            as: "payment_methods",
            foreingKey: "payment_method_id"
        });
    };

    Purchase.associate = function (models) {
        Purchase.belongsToMany(models.Products, {
            as: "products",
            through: "purchases_has_products",
            foreingKey: "purchase_id",
            otherKey: "product_id",
            timestamps: false,
        });
    };

    Purchase.associate = function (models) {
        Purchase.belognTo(models.Users, {
            as: "users",
            foreingKey: "user_id"
        });
    };

    

    return Purchase;
}; 