## General Information

- Website to track sales and purchases for products.

## Features

- Users should have ability to view all products.
- Users should have ability to make all CRUD operations on products.
- Users should have ability to search for specific product.
- Users should have ability to make a purchase from suppliers.
- Users should have ability to sale products to registered customer or not registered customers.
- Users should have ability to view all invoices for specific supplier.
- Users should have ability to view all invoices for specific customer.
- Users should have ability to view all invoices for specific product.
- Users should have ability to generate a report using Charts for sales and purchases on daily, monthly and yearly basis.

## Setup

Following instructions will get you a copy of the project up and running on your local machine for development purpose.

1.  Install following on your local machine
    - [Git](https://git-scm.com)
    - [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com))
2.  Clone the repository by running this following command
    ```bash
    git clone https://github.com/AhmedFarazQaimkhani/sale_purchase
    ```
3.  Start project by running following commands

    ```bash
    npm install

    # once node_modules gets install, run next command
    ng server

    ```

4.  Once your app is running, you can access it on the following address in your browser

- Start Json server by running following command:

  ```bash

  json-server --watch db.json

  ```

- Resources
- [http://localhost:3000/products](http://localhost:3000/products)
- [http://localhost:3000/suppliers](http://localhost:3000/suppliers)
- [http://localhost:3000/customers](http://localhost:3000/customers)
- [http://localhost:3000/invoices](http://localhost:3000/invoices)
- [http://localhost:3000/sales](http://localhost:3000/sales)
- [http://localhost:3000/purchases](http://localhost:3000/purchases)

- Frontend 
- [http://localhost:4200](http://localhost:4200)

## Versions

Following versions are being used while creating this guide.

```
node@v16.15.0 or higher
npm@8.1.3 or higher
@angular/cli": "~16.0.2
typescript": "~5.0.2
kendo ui
```

## Branches

Current branches and their purposes are as follow.

```
master -> contains latest changes

```

# Room For Improvement

## Improvements

- Add E2E test cases.
- Add Unit test cases.
- Add SonarQube to analyze code quality and code security.
- UI. My basic focus on functionality

## About Me

_Hi, I'm Ahmed Faraz a BS(CE) graduate working as software developer in the industory for about 5 years, I am an experienced developer skilled in Javascript and its frameworks._
