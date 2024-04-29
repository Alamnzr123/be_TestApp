const { MongoClient } = require('mongodb');

class mongoDBConnection {

  static db = false

  static async connectToCluster() {
    let mongoClient;

    let uri = 'mongodb://127.0.0.1:27017'

    try {
      mongoClient = new MongoClient(uri);
      console.log('Connecting to MongoDB Atlas cluster...');
      await mongoClient.connect();
      console.log('Successfully connected to MongoDB Atlas!');

      this.db = mongoClient.db('youapp')

      return 'success';
    } catch (error) {
      console.error('Connection to MongoDB Atlas failed!', error);
      process.exit();
    }
  }
}

// mongoDBConnection.connectToCluster()

module.exports = mongoDBConnection