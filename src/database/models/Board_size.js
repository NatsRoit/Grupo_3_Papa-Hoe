module.exports = (sequelize, dataTypes) => {
    let alias = "board_sizes";
    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        dimension: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        
    };
    let config = {
        tableName: "board_sizes",
        timestamps: "false"
    }

    const Board_size = sequelize.define(alias, cols, config);

    Board_size.associate = function (models) {
        Board_size.belongsToMany(models.Products, {
            as: "products",
            through: "Products_board_sizes",
            foreingKey: "board_size_id",
            otherKey: "product_id", 
            timestamps: false,
        });
    };

    return Board_size;
};