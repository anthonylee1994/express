import * as fs from "fs";
import * as path from "path";
import * as SequelizeStatic from "sequelize";
import { Sequelize as SequelizeLib } from "sequelize";
import { Configs } from "../utils/Configs";
import { log } from "../utils/Logger";

import Product, { IProductAttributes, IProductInstance } from "./Product";

export interface ISequelizeModels {
    Product: SequelizeStatic.Model<IProductInstance, IProductAttributes>;
}

const importModels: any = {
    Product,
};

class DatabaseInstance {

    private models: ISequelizeModels;
    private sequelize: SequelizeLib;

    constructor() {

        let dbConfig;

        if (process.env.NODE_ENV === "production") {
            dbConfig = Configs.getDatabaseConfig().production;
        } else {
            dbConfig = Configs.getDatabaseConfig().development;
        }

        if (dbConfig.logging) {
            dbConfig.logging = console.log;
        }

        this.sequelize = new SequelizeStatic(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

        this.models = importModels;

        Object.keys(this.models).forEach((modelName: string) => {
            this.models[modelName] = this.models[modelName](this.sequelize, SequelizeStatic);
        });

        Object.keys(this.models).forEach((modelName: string) => {
            if (typeof this.models[modelName].associate === "function") {
                this.models[modelName].associate(this.models);
            }
        });
    }

    public getModels() {
        return this.models;
    }

    public getSequelize() {
        return this.sequelize;
    }
}

const Database = new DatabaseInstance();

export const Models = Database.getModels();
export const Sequelize = Database.getSequelize();
