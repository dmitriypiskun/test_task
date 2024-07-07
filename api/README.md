# API

## Description

This project is a Rest API and is built using the NestJS platform
<a alt="NestJS logo" href="https://nestjs.com" target="_blank" rel="noreferrer">
<img src="https://docs.nestjs.com/assets/logo-small-gradient.svg" width="25">
</a>

## Installation

To start the project you need to complete the following steps:

1. Install third party packages into the project;

```bash
# Go to api folder
$ cd api

# Install
$ npm ci
```

2. Create a file with environment variables `.env` in the root of the `api` folder, or edit and fill out the file `.env.example`.

#### Environment variables

| №   | Name       | Description                           | Default value |
| :-- | :--------- | ------------------------------------- | :------------ |
| 1   | PORT       | Sets the port for the api             |               |
| 2   | RATE_TTL   | Sets the time to live in milliseconds | 1000 ms       |
| 3   | RATE_LIMIT | Sets the maximum number of requests   | 50            |
| 4   | DELAY_MIN  | Sets the minimum delay value          | 1 ms          |
| 5   | DELAY_MAX  | Sets the maximum delay value          | 1000 ms       |

## Commands

```bash
# Run build project
$ npm run build

# Start development mode
$ npm run start

# Start watch mode
$ npm run start:dev

# Start production mode
$ npm run start:prod

# Run unit tests
$ npm run test

# Run e2e tests
$ npm run test:e2e

# Run test coverage
$ npm run test:cov

# Run lint in fix mode
$ npm run lint

# Run code formatting
$ npm run format
```
