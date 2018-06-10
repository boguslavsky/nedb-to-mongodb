const argv = require('yargs').argv
const fs = require('fs')
const monk = require('monk')

const host = argv.host || 'localhost'
const port = argv.port || '27017'
const dbName = argv.dbName
const collectionName = argv.collectionName
const dbPath = argv.dbPath

if (!dbName) {
    throw Error('Missed name of mongoDB database')
} else if (!collectionName) {
   throw Error('Missed name of mongoDB collection')
} else if (!dbPath) {
    throw Error('Missed path of nedb database')
}

const db = monk(host + ':' + port + '/' + dbName)

fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
        return console.log(err)
    }

    let collection = JSON.parse(data)

    db.get(collectionName).insert(collection.map(record => {
        delete record._id
        return record
    })).then(() => {
        console.log('DB "' + dbPath + '" has been cloned into "' + collectionName + '" collection of "' + dbName + '" database.')
        process.exit()
    })
});
