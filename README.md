# Helsinki city bike app

## Description
This project displays individual journeys taken with city bikes in Helsinki metropolitan area. Project is currently running frontend at [Vercel](https://helsinki-citybike-j2z5.vercel.app/) and backend in DigitalOcean. Client is a [T3 Stack](https://create.t3.gg/) bootstrapped with `create-t3-app`.

## Prerequisites
* Nodejs version 19 or higher
* Docker

## How to get started
This application consists of client and backend. Backend code and instructions are located at [here!](https://github.com/tomivv/helsinki-citybike-server)

1. Clone repository
```bash
git clone https://github.com/tomivv/helsinki-citybike.git
```
2. Install dependencies

```bash
cd helsinki-citybike
npm install
```

3. Edit env files
```
rename .env.example to .env and fill the values
```
4. Running app

```bash
npm run dev
```

5. Running tests

```bash
npm run test:e2e
```

6. Building app

```bash
npm run build
```

## Technologies used

* Docker
* PostgreSQL
* Typescript
* Next.js + React
* Java (backend)
