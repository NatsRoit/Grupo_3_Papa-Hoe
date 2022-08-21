module.exports = (sequelize, dataTypes) => {
    let alias = "fin_setup";
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
        tableName: "fin_setup",
        timestamps: "false"
    }

    const fin_setup = sequelize.define(alias, cols, config);

    fin_setup.associate = function (models) {
        fin_setup.hasMany(models.Products, {
            as: "products",
            foreingKey: "fin_system_id"
        });
    };

    return fin_setup;
};