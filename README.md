# Yobi challenge

## Running the application

```bash
$ npm i
$ npm run start
```

## Running test

Unit:

```bash
$ npm run test
```

e2e:

```bash
$ npm run test:e2e
```

# Challenge information

## Configuration

We've provided redux, react-router, and redux-saga to the project. You'll use these packages to complete the questions below.

The `API_URL` found in `config/default.js` is the API url you'll need to request products.

The GET route to request products is: `/products`;

We're looking for use of each of the three packages listed above. You're free to use any HTTP library to call the API.

## Questions

When a user navigates to the application for the first time, the application should pull the products from the API. While the product information is being fetched from the API, an indication of progress should be displayed.

Upon the completion of the product request, a listing of products should be displayed on the screen. The order by default of the products should be determined by the product name. Each item in the listing should display the following:

1. Product Name
2. Product Type
3. Whether the product has bulk
4. Whether the product has retail

Additionally, a user should be able to do the following on the product list:

1. Search products by name
2. Sort products by name
3. Add a product to the list
4. Remove a product from the list

We've provided a basic structure to get you started. However, feel free to change it in any way you see fit.

Good luck! If you need any assistance please reach out to taylor@getyobi.com
