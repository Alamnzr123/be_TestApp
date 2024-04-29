const { MongoClient } = require('mongodb');

class mongoDBConnection {

  static db = false

  static async connectToCluster() {
    let mongoClient;
    
    let uri = 'mongodb://127.0.0.1:27017'
    // let uri = 'mongodb+srv://alfandnap:Fl5yGqRXY6Hkr17t@c2-p3.da7ot3i.mongodb.net/?retryWrites=true&w=majority'
    
  
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
  
        // this.db = mongoClient.db('challange2-user')
        this.db = mongoClient.db('youapp')

        return 'success';
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
        // throw error
    }
  }
}

// mongoDBConnection.connectToCluster()

module.exports = mongoDBConnection