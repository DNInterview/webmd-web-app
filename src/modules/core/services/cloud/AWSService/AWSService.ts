import ICloudService from "@/modules/core/services/cloud/ICloudService";
import AWSAppSyncClient from "aws-appsync/lib";
import { NormalizedCacheObject } from "apollo-cache-inmemory";
import AWS from "aws-sdk";
import { AuthOptions } from "aws-appsync-auth-link/lib/auth-link";

export default class AWSService implements ICloudService {
  readonly appSyncClient: AWSAppSyncClient<NormalizedCacheObject>;
  constructor(
    region: string,
    url: string,
    type: string,
    credentials: AWS.Credentials
  ) {
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
