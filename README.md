# nedb-to-mongodb

Tool to migrate nedb database to mongoDB collection.

## Installation

```bash
npm install
```

## Usage

```bash
node ./index.js
    --host               (optional) mongoDB host. Default is: localhost
    --port               (optional) mongoDB port. Default is: 27017
    --db-name            name of mongoDB database
    --collection-name    name of mongoDB collection
    --db-path            path of nedb database
```
