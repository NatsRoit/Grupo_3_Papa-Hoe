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
            type: DataTypes.STRING(255),
            allowNull: false
        },
        
    };
    let config = {
        tableName: "board_sizes",
        timestamps: "false"
    }

    const Board_sizes = sequelize.define(alias, cols, config);

    return Board_sizes;
};