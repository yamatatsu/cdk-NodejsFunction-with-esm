import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as nodejs from "aws-cdk-lib/aws-lambda-nodejs";

const app = new cdk.App();
const stack = new cdk.Stack(app, "MyStack");

new nodejs.NodejsFunction(stack, "ESM", {
  entry: "src/handler.ts",
  runtime: lambda.Runtime.NODEJS_20_X,
  bundling: {
    target: "node20",
    format: nodejs.OutputFormat.ESM,
    // sourceMap: true,
    // sourceMapMode: nodejs.SourceMapMode.INLINE,
  },
});

new nodejs.NodejsFunction(stack, "CJS", {
  entry: "src/handler.ts",
  runtime: lambda.Runtime.NODEJS_20_X,
  bundling: {
    target: "node20",
    format: nodejs.OutputFormat.CJS,
    // sourceMap: true,
    // sourceMapMode: nodejs.SourceMapMode.INLINE,
  },
});
