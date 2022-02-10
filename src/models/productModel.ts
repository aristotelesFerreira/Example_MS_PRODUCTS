import { DataTypes, Model } from "sequelize";
import { sequelize } from "../utility/database";

export class ProductModel extends Model {}

export interface IProductEntity {
  name: string;
  description: string;
  createdAt?: Date;
}

export interface ProductModel extends IProductEntity {}

ProductModel.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "products",
    timestamps: true,
    underscored: true,
    sequelize,
  }
);
