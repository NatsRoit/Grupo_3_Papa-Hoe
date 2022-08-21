module.exports = (sequelize, dataTypes) => {
    let alias = "Shipping_methods";
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
        tableName: "shipping_methods",
        timestamps: "false"
    }

    const Shipping_method = sequelize.define(alias, cols, config);

    Shipping_method.associate = function (models) {
        Shipping_method.hasMany(models.Purchases, {
            as: "purchases",
            foreingKey: "shipping_method_id"
        });
    };

    return Shipping_method;
};