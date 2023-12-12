import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

const doc = DynamoDBDocument.from(new DynamoDBClient({}));

export const handler = async (event: any) => {
  const res = await doc.scan({ TableName: "MyTable" });
  return {
    statusCode: 200,
    body: JSON.stringify(res.Items ?? []),
  };
};
