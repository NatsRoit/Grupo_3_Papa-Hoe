module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
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
        price:  {
            type: dataTypes.DECIMAL(7,2),
            allowNull: false
        },
        discount:{
            type: dataTypes.TINYINT,
            allowNull: true
        },  
        description: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        features: {
            type: dataTypes.STRING(45),
            allowNull: true
        },  
        active: {
            type: dataTypes.TINYINT(1),
            allowNull: false,
            defaultValue: 1,
        },
        stock: {
            type: dataTypes.INTERGER,
            allowNull: false,
        },
        image1: {
            type: dataTypes.STRING(255),
            allowNull: false
        }, 
        image2: {
            type: dataTypes.STRING(255),
            allowNull: true
        }, 
        image3: {
            type: dataTypes.STRING(255),
            allowNull: true
        },
        image4: {
            type: dataTypes.STRING(255),
            allowNull: true
        },
        image5: {
            type: dataTypes.STRING(255),
            allowNull: true
        } 
    };
    let config = {
        tableName: "products",
        timestamps: "false"
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Categories, {
            as: "categories",
            foreingKey: "category_id"
        });
    };

    Product.associate = function (models) {
        Product.belongsTo(models.Subcategories, {
            as: "subcategories",
            foreingKey: "subcategory_id"
        });
    };

    Product.associate = function (models) {
        Product.belongsTo(models.Fin_setup, {
            as: "fin_setup",
            foreingKey: "fin_system_id"
        });
    };

    Product.associate = function (models) {
        Product.belongsTo(models.Brands, {
            as: "brands",
            foreingKey: "brand_id"
        });
    };

    Product.associate = function (models) {
        Product.belongsToMany(models.Board_sizes, {
            as: "board_sizes",
            through: "Products_board_sizes",
            foreingKey: "product_id",
            otherKey: "board_size_id",
            timestamps: false,
        });
    };

    Product.associate = function (models) {
        Product.belongsToMany(models.Colors, {
            as: "colors",
            through: "Products_has_colors",
            foreingKey: "product_id",
            otherKey: "color_id",
            timestamps: false,
        });
    };
    Product.associate = function (models) {
        Product.belongsToMany(models.Purchases, {
            as: "purchases",
            through: "purchases_has_products",
            foreingKey: "product_id",
            otherKey: "purchase_id",
            timestamps: false,
        });
    };


    return Product;
};


