import ICloudService from "@/modules/core/services/cloud/ICloudService";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync/lib";
import awsExports from "@/aws-exports";
import { NormalizedCacheObject } from "apollo-cache-inmemory";
import AWS from "aws-sdk";
import { AuthOptions } from "aws-appsync-auth-link/lib/auth-link";

export default class AWSService implements ICloudService {
  readonly appSyncClient: AWSAppSyncClient<NormalizedCacheObject>;
  constructor(credentials: AWS.Credentials) {
    const type = AUTH_TYPE.AWS_IAM;
    const region = awsExports.aws_appsync_region;
    const url = awsExports.aws_appsync_graphqlEndpoint;
    AWS.config.update({
      region,
      credentials
    });
    const auth = {
      type,
      credentials
    } as AuthOptions;

    this.appSyncClient = new AWSAppSyncClient({
      url,
      region,
      auth
    });
  }
}
