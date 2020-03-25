# Yet Another Serverless Project Boilerplate

## Installation

```sh
git clone git@github.com:marcus-n3rd/yaspberry.git
cd yaspberry
npm ci
```

Ensure you have an AWS profile set up similar to:

```sh
[personal]
aws_access_key_id = 6iBB3r!sh
aws_secret_access_key = m023/6iBB3r!sh
```

## Usage

To package and deploy to your personal stack:

```sh
npm run deploy -- --aws-profile personal --stage <your-fist-name>
```

## Testing

### Unit Tests

```sh
npm test
```

### Functional/Integration Tests

```sh
npm run deploy -- --aws-profile personal --stage <your-fist-name>
STAGE=<your-first-name> AWS_PROFILE=personal AWS_REGION=us-west-2 npm run test:int
```

## CI/CD

For packaging:

```sh
npm run package -- --stage dev
npm run package -- --stage staging
npm run package -- --stage prod
```

For deployment:

```sh
# Assumes that ./.serverless/ is already populated with files and archives from `npm run package`
npm run deploy:packaged -- --aws-profile <project-account-specific-profile> --stage dev
npm run deploy:packaged -- --aws-profile <project-account-specific-profile> --stage staging
npm run deploy:packaged -- --aws-profile <project-production-account-specific-profile> --stage prod
```

## Team Development

For this service and its siblings, it should be assumed that environment is same across all,
so that they all can work in unison, whether it is deployed in production, dev, or for a developer's feature branch.
Therefore, it is highly suggested that "setting up a developer's local environment" means deploying the current master
of all services, including this one, that relate to the project using developer's name as the stage. E.g.,

```sh
cd ~/Projects/someProject/
cd ./this-service/
npm run deploy -- --aws-profile <project-account-specific-profile> --stage marcus
cd ../that-service/
npm run deploy -- --aws-profile <project-account-specific-profile> --stage marcus
```

### Advanced Testing

This means that testing can be fairly easy. For instance, a QE named 'awesome' can test a feature branch for a service like so:

```sh
cd ~/Projects/someProject/
cd ./some-service/
git checkout master
git pull
npm run deploy -- --aws-profile project-dev --stage awesome
cd ../that-service/
git checkout master
git pull
npm run deploy -- --aws-profile project-dev --stage awesome
cd ../this-service/
git checkout master
git pull
npm run deploy -- --aws-profile project-dev --stage awesome
# Deployed to current production setup
# Now, deploy changes and if any CloudFormation errors occur on the change from production,
# then they can be caught here
git checkout -b feature/TICKET-1234-something-cool --track origin/feature/TICKET-1234-something-cool
npm run deploy -- --aws-profile project-dev --stage awesome
```

## Development

Lambda function definitions for the API are automatically generated using the command `npm run swagger`,
which will combine the data from `openapi.yml` and `serverless.default.yml` into the final `serverless.yml`.
Function names will be determined by the path and HTTP option data. For instance, given a `GET` definition
for the path `/domains/{id}` in `openapi.yml`, the filename expected to export the Lambda handler function
will be `domainsIdGET`.

## Rundowns

### Folder Structure

* `/devops`
  * `/aws-sdk`
    * Utilities to query or manipulate AWS resources
    * So far, only used for obtainig the API's URL for integration testing
  * `/gotswag`
    * Parses and translates `/openapi.yml` and combine it with `/serverless.default.yml` to generage `/serverless.yml`
    * Could be a separate node module
  * `/jest`
    * Configurations for testing
  * `/webpack`
    * Configurations for webpack that are used when packaging code for lambdas
* `/src`
  * Source code... whatever... could be Rust...
  * `/_lambda-handlers`
    * `/domainsIdGET.js`
    * `/domainsIdPUT.js`
* `/test`
  * Integration or functional tests... another whatever...

### Node Packages

Please, please, please keep track of these.

### Source Code Packages

* `middy`: for middleware
* `@middy/core`: for middleware
* `@middy/input-output-logger`: for middleware
* `lambda-proxy-response`: for middleware
* `aws-xray-sdk`: for logging
* `flatted`: for logging
* `axios`: for authorization
* `http-errors`

### Serverless Framework Pacakges

* `serverless`
* `serverless-webpack`: for compiling sourcecode to run on lambdas
* `webpack`: for compiling sourcecode to run on lambdas
* `webpack-node-externals`: for compiling sourcecode to run on lambdas

### Testing Packages

* `jest`: primary testing framework
* `jest-junit`: for unit testing
* `jest-stare`: I dunno, reporting or something?
* `babel-jest`: for running ES6 scripts
* `@babel/core`: for running ES6 scripts
* `@babel/plugin-transform-modules-commonjs`: for running ES6 scripts
* `supertest`: for calling API endpoints
* `bufferutil`: a required peer for a jest dependency
* `canvas`: a required peer for a jest dependency
* `utf-8-validate`: a required peer for a jest dependency

### Compiling Swagger Packages

* `yaml`: for reading and writing YAML files
* `@babel/core`: for running ES6 scripts
* `@babel/node`: for running ES6 scripts
* `@babel/plugin-transform-modules-commonjs`: for running ES6 scripts

### Running Locally Packages

* `aws-sdk`
* `@types/aws-lambda`: I dunno

### Forced Security Package Upgrades

* `acorn`
* `minimist`
