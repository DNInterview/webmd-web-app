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

### Run unit tests
```
npm run test:unit
```

### Run end-to-end tests
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

After getting an idea of the WebMD Live Events Platform, I wanted to find an asynchronous microservices solution to provide realtime updates and I settled on using AWS AppSync. 

AWS AppSync provides a graphQL API built on top of DynamoDB and combines the graphQL subscriptions with websockets to broadcast any updates to the database to any user or service that is subscribed.

#### Pros
* One to many broadcasting makes it a scalable realtime update model
* Feature-rich platform, including many-to-many client to client broadcasting, caching, connecting with Aurora relational databases vs DynamoDB NoSQL. 
* Easy to setup

#### Cons
* Seems to be little control over dependencies, which could lead to a heavy reliance on AWS to continue support well into the future.

### Alternatives
#### [SNS/SQS](docs/images/AwsSqsSns.png)
SNS is a publish subscriber service and SQS is a message queue services and together they provide a mechanism of reliable asynchronous communication in a distributed system of microservices. SNS supports push notifications to mobile devices as well as websocket for publishing to browsers as well. However after further investigation, the websocket mechanism seems to only support 1 to 1 publishes. This would likely mean there would need to be some kind of transaction for every published message, which could cause problems at scale.

I decided against using REST because it is inherently synchronous and does not provide any mechanism for real time updates, which limits it as a solution for backend communication.

However, all of these solutions solve specific problems and I am not opposed to using them in parallel.   

### Employees project
Using the AWS AppSync graphQL API, I developed an MVVM Vue app that uses the graphQL subscriptions to any updates to the databaase. 

I wanted to find the right microservices solution and spent the bulk of my time researching. Normally I would have full unit test coverage, functional CI/CD, the U in CRUD, and other standards, such as error handling and activity indicators. You can view my progress and priorities [here](https://kanbanflow.com/board/q3cRbV)  


    
