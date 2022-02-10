const AWS = require("aws-sdk");
const mainAuthFunc = async (event) => {
  try {
    const lambda = new AWS.Lambda({
      region: "us-east-2",
      endpoint: "http://localhost:3003",
    });

    const result = await lambda
      .invoke({
        FunctionName: "ms-auth-dev-verifyToken",
        Payload: JSON.stringify(event),
      })
      .promise();

    if (result.StatusCode === 200) {
      return JSON.parse(result.Payload);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { mainAuthFunc };
