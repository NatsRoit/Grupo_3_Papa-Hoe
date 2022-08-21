module.exports = (sequelize, dataTypes) => {
    let alias = "Payment_methods";
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
        tableName: "payment_methods",
        timestamps: "false"
    }

    const Payment_method = sequelize.define(alias, cols, config);

    Payment_method.associate = function (models) {
        Payment_method.hasMany(models.Purchases, {
            as: "purchases",
            foreingKey: "payment_method_id"
        });
    };

    return Payment_method;
};