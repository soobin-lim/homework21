const { User, Book } = require('../models');


// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    user: async () => {
      return await User.find({_id:ID}).populate('classes').populate({
        path: 'classes',
        populate: 'professor'
      });
    },
    classes: async () => {
      // Get and return all documents from the classes collection
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
