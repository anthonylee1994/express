import * as SequelizeStatic from "sequelize";
import { DataTypes, Instance, Sequelize } from "sequelize";

export interface IProductAttributes {
    name: string;
    description: string;
}

export interface IProductInstance extends Instance<IProductAttributes> {
    dataValues: IProductAttributes;
}

export default function(sequelize: Sequelize, dataTypes: DataTypes): SequelizeStatic.Model<IProductInstance, IProductAttributes> {

    const Product = sequelize.define<IProductInstance, IProductAttributes>("Product", {
        name: {
            type: dataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: true,
        },
    }, {
            indexes: [],
            classMethods: {},
            timestamps: false,
        });

    return Product;
}
