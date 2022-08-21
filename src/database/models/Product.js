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
            type: DataTypes.STRING(45),
            allowNull: false
        },
        price:  {
            type: DataTypes.DECIMAL(7,2),
            allowNull: false
        },
        discount:{
            type: DataTypes.TINYINT,
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
            type: DataTypes.TINYINT(1),
            allowNull: false,
            defaultValue: 1,
        },
        stock: {
            type: dataTypes.INTERGER,
            allowNull: false,
        },
        brand_id: {
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
        Product.belongsTo(models.Category, {
            as: "categories",
            foreingKey: "category_id"
        });
    };

    Product.associate = function (models) {
        Product.belongsTo(models.Subcategory, {
            as: "subcategories",
            foreingKey: "subcategory_id"
        });
    };

    Product.associate = function (models) {
        Product.belongsTo(models.fin_setup, {
            as: "fin_setup",
            foreingKey: "fin_system_id"
        });
    };

    return Product;
};


