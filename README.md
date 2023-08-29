## Project Setup

```shell
npm install
```
copy `.env.example` and rename it to `.env`.

update `.env` file with database credentials

## Database Seeding 

```shell
npx md-seed run
```

## Run 

```shell
npm start 
```

## Api Endpoints

endpoint prefix `/api/v1`

Example: `http://localhost:portname/api/v1`

Endpoints              | Method  | Description
-----------------------|-------- |--------------------------------------------------------------------------
`/customers`           | `GET`   | Get all customers with pagination
`/customers/:id`       | `GET`   | Get customer by id
`/customers`           | `POST`  | Create customer
`/customers/:id`       | `PATCH` | Update customer
`/customers/:id`       | `DELETE`| Delete customer by id
`/shipping_fees`       | `GET`   | Get all shipping fees with pagination
`/shipping_fees/:id`   | `GET`   | Get shipping fee by id
`/shipping_fees`       | `POST`  | Create shipping fee
`/shipping_fees/:id`   | `PATCH` | Update shipping fee
`/shipping_fees/:id`   | `DELETE`| Delete shipping fee by id

