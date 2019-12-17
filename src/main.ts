import Vue from "vue";
import App from "./App.vue";
import { newEmployee } from "./graphql/subscriptions";

import aws_exports from "./aws-exports";
import AWSAppSyncClient from "aws-appsync";
import AWS from "aws-sdk";
import gql from "graphql-tag";
import { AUTH_TYPE } from "aws-appsync/lib";
import { AuthOptions } from "aws-appsync-auth-link/lib/auth-link";
import store from "./index";
import AWSService from "@/modules/core/services/cloud/AWSService/AWSService";

Vue.config.productionTip = false;

const credentials = new AWS.Credentials({
  accessKeyId: process.env.VUE_APP_AWS_ACCESS_KEY_ID || "",
  secretAccessKey: process.env.VUE_APP_AWS_SECRET_ACCESS_KEY || ""
});
// const awsService = new AWSService(credentials);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

const url = aws_exports.aws_appsync_graphqlEndpoint;
const region = aws_exports.aws_project_region;

AWS.config.update({
  region,
  credentials: new AWS.Credentials({
    accessKeyId: process.env.VUE_APP_AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.VUE_APP_AWS_SECRET_ACCESS_KEY || ""
  })
});

const auth = {
  type: AUTH_TYPE.AWS_IAM,
  credentials
} as AuthOptions;

const client = new AWSAppSyncClient({
  url,
  region,
  auth
});

const subquery = gql(newEmployee);

const test = async () => {
  const observable = client.subscribe({ query: subquery });
  observable.subscribe({
    next: (data: any) => {
      console.log("realtime data: ", data);
    },
    complete: console.log,
    error: console.error
  });
};

test();
