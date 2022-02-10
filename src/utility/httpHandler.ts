// import { httpResponse } from "@framework/utility/httpResponse";
// import { Either } from "@shared/either";
// import { IError } from "@shared/iError";
// import { APIGatewayProxyResult } from "aws-lambda";

// export const httpHandler = async (
//   handler: () => Promise<Either<IError, any>>
// ): Promise<APIGatewayProxyResult> => {
//   try {
//     const response = await handler();
//     if (response.isLeft()) {
//       return httpResponse.badRequest(response.value);
//     }
//     return httpResponse.ok(response.value);
//   } catch (error) {
//     if (error && error.shortMessage === "validationError") {
//       return httpResponse.badRequest(error);
//     }
//     console.error(error);
//     return httpResponse.internalServerError();
//   }
// };
