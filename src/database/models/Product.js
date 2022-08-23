module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        price:  {
            type: dataTypes.DECIMAL(10,0),
            allowNull: false
        },
        discount:{
            type: dataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        },  
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        features: {
            type: dataTypes.STRING,
            allowNull: false
        },  
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        },
        stock: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        image1: {
            type: dataTypes.STRING(255),
            allowNull: false
        }, 
        image2: {
            type: dataTypes.STRING(255),
        }, 
        image3: {
            type: dataTypes.STRING(255),
        },
        image4: {
            type: dataTypes.STRING(255),
        },
        image5: {
            type: dataTypes.STRING(255)
        },
    };
    
    let config = {
        tableName: "products",
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Brand, {
            foreignKey: "brand_id",
            as: "marcas"
        });
    };
    
    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "category_id"
        });
    };

    Product.associate = function (models) {
        Product.belongsTo(models.Subcategory, {
            as: "subcategories",
            foreignKey: "subcategory_id"
        });
    };

    Product.associate = function (models) {
        Product.belongsTo(models.Fin, {
            as: "fins",
            foreignKey: "fin_id"
        });
    };


    Product.associate = function (models) {
        Product.belongsToMany(models.Size, {
            as: "sizes",
            through: "product_has_size",
            foreignKey: "product_id",
            otherKey: "size_id",
            timestamps: false
        });
    };

    Product.associate = function (models) {
        Product.belongsToMany(models.Color, {
            as: "colors",
            through: "product_has_color",
            foreignKey: "product_id",
            otherKey: "color_id",
            timestamps: false
        });
    };
    Product.associate = function (models) {
        Product.belongsToMany(models.Order, {
            as: "orders",
            through: "order_has_product",
            foreignKey: "product_id",
            otherKey: "order_id",
            timestamps: false
        });
    };

    return Product;
};


