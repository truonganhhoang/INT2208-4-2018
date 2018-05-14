var mongoose = require('mongoose');
mongoose.connect("mongodb://root:root@ds119820.mlab.com:19820/tinycardn4");
// console.log(mongoose.connection.readyState);


const userSchema = new mongoose.Schema({
    userName: { type: String, unique: true, required: true },
    userPassword: { type: String, unique: false, required: true }
})

const cardCollectionSchema = new mongoose.Schema({
    title: { type: String, unique: false, required: true },
    avatar: { type: String, required: false },
    typeAvatar: { type: String }
})
const cardSchema = new mongoose.Schema({
    cardOf: { type: String, required: true },
    typeBack: { type: String, required: false },
    typeFront: { type: String, required: false },
    back: { type: String, required: false },
    front: { type: String, required: false },
})

const user_collectionSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    collectionID: { type: String, required: true }
})

const user = mongoose.model("user", userSchema);
const cardcollection = mongoose.model("cardcollection", cardCollectionSchema);
const card = mongoose.model("card", cardSchema);
const user_collection = mongoose.model("user_collection", user_collectionSchema);

// user.create({
//     userName:"linh",
//     userPassword:"linh"
// })

var database = {
    insertUser: async function (username, password) {
        try {
            let result = await user.create({ userName: username, userPassword: password })
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    },

    insertUser_Collection: async function (userName, collectionID) {
        try {
            let result = await user_collection.create({ userName: userName, collectionID: collectionID })
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    deleteUser_Collection: async function (userName, collectionID) {
        try {
            let result = await user_collection.remove({ userName: userName, collectionID: collectionID })
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getListFavoriteCollection: async function (userName) {
        try {
            let arr = await user_collection.find({ 'userName': userName });
            let c = await this.getListCardCollection();            
            let result= [];
            arr.forEach(favoriteCards => {
                c.forEach( cards =>{
                    if(favoriteCards.collectionID == cards._id){
                        console.log("tìm thấy bộ card trùng");                        
                        result.push(cards);
                        c.splice(c.indexOf(cards),1);
                    }
                })
            });
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    },

    getListCardCollection: async function () {
        try {
            let result = await cardcollection.find();
            // console.log(result);
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }

    },

    getCardCollection: async function (cardID) {
        try {
            let result = await card.find({ 'cardOf': cardID });
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    insertCardColection: async function (Collection) {
        try {
            let result = await cardcollection.create(Collection);
            return Promise.resolve(result._id);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    insertCard: async function (listCard) {
        try {
            let result = await card.create(listCard);
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getUser: async function (userName) {
        try {
            let result = await user.find({ 'userName': userName });
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }

    }
}

module.exports = database;
// database.insertCard(listcard).then(r => console.log(r)).catch(e => console.log(e));
// database.insertCardColection(listCollection).then(r => console.log(r)).catch(e => console.log(e))
// database.getCardCollection(2).then(r => console.log(r)).catch(e => console.log(e))
// database.getListCardCollection().then(r => console.log(r)).catch(e => console.log(e))
// database.deleteUser_Collection("1111","5af7a3b52c3176134c95f763").then(r => console.log(r)).catch(e => console.log(e))
// database.getListFavoriteCollection("1111").then(r => console.log(r)).catch(e => console.log(e))
