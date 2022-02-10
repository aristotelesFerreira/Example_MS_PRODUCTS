import "source-map-support/register";
import "reflect-metadata";

import { middyfy } from "../../utility/lambda";

import { APIGatewayProxyResult, Context } from "aws-lambda";
import { IHandlerInput } from "src/utility/types";
import { ProductModel } from "src/models/productModel";

const main = async (
  event: IHandlerInput,
  context: Context
): Promise<APIGatewayProxyResult> => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    const { name, description, color, price, quantity } = event.body;

    const productResult = await ProductModel.create({
      name,
      description,
      color,
      price,
      quantity,
    });
    return {
      statusCode: 200,
      body: JSON.stringify(productResult),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};
export const handler = middyfy(main);
