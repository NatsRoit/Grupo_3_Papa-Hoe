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
            type: DataTypes.STRING(45),
            allowNull: false
        },
        
    };
    let config = {
        tableName: "brands",
        timestamps: "false"
    }

    const Brand = sequelize.define(alias, cols, config);

    return Brand;
};