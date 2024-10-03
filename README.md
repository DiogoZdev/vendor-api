<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<h1 align="center">Vendors</h1>

## Prerequisites

- Node.js (recommended version: 18 or above)
- Docker

## Project setup and initialization

### clone the project
```bash
$ git clone https://github.com/DiogoZdev/vendor-smart
```

### install dependenceis
```bash
$ npm install
```

### running the project
The next command run a local container with the postgres database, apply migrations, seed database with some initial data, and run the api
```bash
$ npm run start:dev
```

### destroying the container
```bash
$ npm run compose:down
```


## Running tests

```bash
$ npm run test
```

## API Endpoints

### healthcheck
```
GET http://localhost:3000/api/health
```

### add job
```
POST http://localhost:3000/api/v1/jobs
Headers:
- Authorization "Basic vs_tech_challenge:SuperSecurePassword123@"

body:
{
	"description": string,
	"locationId": number,
	"serviceId": number
}
```

### add Vendor
```
POST http://localhost:3000/api/v1/vendors
Headers:
- Authorization "Basic vs_tech_challenge:SuperSecurePassword123@"

body:
{
	"name": "string",
	"locationId": number,
	"serviceId": number
}
```

### count compliant vendors for a given job
A simple logic was defined to consider a vendor compliant. It must be in the same location and offer the same service as the job requested.
```
GET http://localhost:3000/api/v1/vendors/count?jobId=1
```

### get compliant vendors for a given job
A simple logic was defined to consider a vendor compliant. It must be in the same location and offer the same service as the job requested.
```
GET http://localhost:3000/api/v1/vendors?jobId=1
Headers:
- Authorization "Basic vs_tech_challenge:SuperSecurePassword123@"

```

## Possible Improvements

- Enhance error handling to refine possible errors and improve logging clarity.
- Adopt a more robust response standard (e.g., JSON API).
- Develop a complete Authentication Module (login, token generation and validation)


## Made with

- Ubuntu 24.04
- VSCodium
- Beekeeper Studio (database viewer)
- Docker
- ApiDog (endpoint design and test)


## Stay in touch

- LinkedIn - [Diogo Lara](https://linkedin.com/in/diogo-lara)