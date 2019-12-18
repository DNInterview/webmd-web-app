# webmd-web-app

http://webmd-web-app-20191216181919-hostingbucket-develop.s3-website-us-east-1.amazonaws.com/

[Test Cases](docs/TestCases.md)

## Project setup
```
npm install
```

## Run locally
The project requires AWS credentials to run locally, which can be provided on request.  
```
npm install -g @aws-amplify/cli
amplify init
```


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```


### Deployment
#### Patch
```
npm run deploy:patch
```
#### Minor
```
npm run deploy:minor
```
#### Major
```
npm run deploy:major
```

Monitor CI builds [here](https://circleci.com/gh/DNInterview/webmd-web-app)

Kanban board [here](https://kanbanflow.com/board/q3cRbV)


## Write up

### Architecture

#### [AWS AppSync](docs/images/AWSAppSync.png)

After getting a general idea of the Live Events Platform that WebMD will be building, it seemed necessary to find an asynchronous microservices solution to provide realtime updates and I settled on using AWS AppSync. 

AWS AppSync provides a graphQL API built on top of DynamoDB and combines the graphQL subscriptions with websockets to broadcast any updates to the database to any user or service that is subscribed.

#### Pros
* One to many broadcasting makes it a scalable realtime update model
* Feature-rich platform, including many-to-many client broadcasting, caching, connecting with Aurora relational databases vs DynamoDB NoSQL. 
* Easy to setup

#### Cons
* Little control over dependencies, which could lead to a heavy reliance on AWS to continue supporting this part of their platform.

### Alternatives
#### [SNS/SQS](docs/images/AwsSqsSns.png)
SNS is a publish subscriber service and SQS is a message Queue services and together they provide a mechanism of reliable asynchronous communication in a distributed system of microservices. SNS supports push notifications to mobile devices as well as websocket for publishing to browsers as well. However after further investigation, the websocket mechanism seems to only support 1 to 1 publishes. This means there would need to be a database call to determine for every published message, which cause problems at scale.

Honorable mention to REST as one of the primary means of communication over the web, but since it is inherently synchronous and does not provide any mechanism for real time updates, it did not seem like a viable solution for backend communication.

However, all of these solutions solve specific problems and can be used in parallel.   

### Employees project
Using the AWS AppSync graphQL API, I developed an MVVM Vue app that uses the graphQL subscriptions to any updates to the databaase. 

I wanted to find the right microservices solution and spent the bulk of my time researching. Normally I would have full unit test coverage, functional CI/CD, the U in CRUD, and other UX/UI standards, such as error handling and activity indicators. You can view my progress and priorities [here](https://kanbanflow.com/board/q3cRbV)  


    