# Client

## Description

This project was developed using the React framework for sending requests to APIs and displaying the results of their execution.

## Install

To start the project you need to complete the following steps:

1. Install third party packages into the project;

```bash
# Go to "client" folder
$ cd client

# Install
$ npm ci
```

2. Create a file with environment variables `.env` in the root of the `client` folder, or edit and fill out the file `.env.example`.

#### Environment variables

| №   | Name             | Description                                               | Default value |
| :-- | :--------------- | --------------------------------------------------------- | :------------ |
| 1   | NX_API_URL       | Sets the api url                                          |               |
| 2   | NX_REQUEST_COUNT | Sets the number of requests                               | 1000          |
| 3   | NX_REQUEST_LIMIT | Sets the time period for sending requests in milliseconds | 1000 ms       |

## Commands

```bash
# Start project
$ npm run start

# Run build project
$ npm run build

# Run tests
$ npm run test

# Run lint in fix mode
$ npm run lint
```

## Libraries

- <a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="35"></a>
- <a alt="React logo" href="https://react.dev" target="_blank" rel="noreferrer"><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="35"></a>
- <a alt="Axios logo" href="https://axios-http.com" target="_blank" rel="noreferrer"><img src="https://axios-http.com/assets/logo.svg" width="85"></a>
- [p-limit](https://github.com/sindresorhus/p-limit)
- [p-throttle](https://github.com/sindresorhus/p-throttle)
- [classnames](https://github.com/JedWatson/classnames)
