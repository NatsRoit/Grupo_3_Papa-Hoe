module.exports = (sequelize, dataTypes) => {
    let alias = "Products_has_colors";
    let cols = {
        product_id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            allowNull: false
        },
        color_id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            allowNull: false
        },
        
    };
    let config = {
        tableName: "products_board_sizes",
        timestamps: "false"
    }

    const Product_board_size = sequelize.define(alias, cols, config);

    return Product_board_size;
};