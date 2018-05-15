var mongoose = require('mongoose');
mongoose.connect("mongodb://root:root@ds119820.mlab.com:19820/tinycardn4");
// console.log(mongoose.connection.readyState);


const userSchema = new mongoose.Schema({
    userName: { type: String, unique: true, required: true },
    userPassword: { type: String, unique: false, required: true }
})

const cardColectionSchema = new mongoose.Schema({
    cardID: { type: String, unique: false, required: true },
    title: { type: String, unique: false, required: true },
    avatar: { type: String, required: false }
})
const cardSchema = new mongoose.Schema({
    cardOf: { type: String, required: true },
    typeBack: { type: String, required: false },
    typeFront: { type: String, required: false },
    back: { type: String, required: false },
    front: { type: String, required: false },
})

const user = mongoose.model("user", userSchema);
const cards = mongoose.model("cards", cardColectionSchema);
const card = mongoose.model("card", cardSchema);

// user.create({
//     userName:"linh",
//     userPassword:"linh"
// })

var database = {
    getListCardCollection: async function () {
        try {
            let result = await cards.find();
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }

    },

    getCardCollection:async function(cardID){
        try {
            let result = await card.find({'cardOf':cardID});
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    insertCardColection: async function (listCollection) {
        try {
            let result = await cards.create(listCollection);
            return Promise.resolve(result);
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
    getUsers: async function () {
        try {
            let result = await user.find();
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }

    }
}

module.exports = database;
// database.getListCard().then(r => {
//     console.log("đã thành công");
//     console.log(r);
// }).catch(e => console.log(e));
var listcard = [
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Paraket', front: 'https://d9np3dj86nsu2.cloudfront.net/image/8249e80335efb41dadbd5c8936755183' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Macaw', front: 'https://d9np3dj86nsu2.cloudfront.net/image/bf39a08c037663a0ffcdc058a929adc0' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Blue and Gold Parrot', front: 'https://d9np3dj86nsu2.cloudfront.net/image/35023b50a18d18c3f21500bb42ea568a' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Cardinal', front: 'https://d9np3dj86nsu2.cloudfront.net/image/01dc70780cb93e6a920ff1d7e0d2d446' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Blue Jay', front: 'https://d9np3dj86nsu2.cloudfront.net/image/34f55bda0245680ca5f9948241240564' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Penguin', front: 'https://d9np3dj86nsu2.cloudfront.net/image/2392e707630d9439165be4624e95538a' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Woodpecker', front: 'https://d9np3dj86nsu2.cloudfront.net/image/4d31a4dbc767636019ccbb339a035bf0' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Hawk', front: 'https://d9np3dj86nsu2.cloudfront.net/image/4e5fcc08ddf606d8a6132d5c1576cf8f' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Eagle', front: 'https://d9np3dj86nsu2.cloudfront.net/image/4900298670056cea704a1de55eac2d26' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Mallard', front: 'https://d9np3dj86nsu2.cloudfront.net/image/1147496c6057e92eb95209eb35fdb148' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Duck', front: 'https://d9np3dj86nsu2.cloudfront.net/image/0419435b0d8876960185377ef5df4483' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Goose', front: 'https://d9np3dj86nsu2.cloudfront.net/image/3ec51856321772a4962f835cbaaaafa1' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Swan', front: 'https://d9np3dj86nsu2.cloudfront.net/image/dcc934655ce17a44604b0a75ecdf0fb2' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Wren', front: 'https://d9np3dj86nsu2.cloudfront.net/image/fa31092806461b5fc3d831f9effd86c1' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Chicken', front: 'https://d9np3dj86nsu2.cloudfront.net/image/8fb84088d27f1281441f0f03f515b8cd' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Hen', front: 'https://d9np3dj86nsu2.cloudfront.net/image/2170f61563a02742807daba93c4638ba' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Turkey', front: 'https://d9np3dj86nsu2.cloudfront.net/image/5c7dfcc6cb71ce06592005744de24d15' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Pigeon', front: 'https://d9np3dj86nsu2.cloudfront.net/image/39f42ccdfb6da13f21a9c5c6222c4d29' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Dove', front: 'https://d9np3dj86nsu2.cloudfront.net/image/f3d0b731f8ff1dcb3be23ea3e361b1bd' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Hummingbird', front: 'https://d9np3dj86nsu2.cloudfront.net/image/d861c1870d365b09fa84381412cb9335' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Owl', front: 'https://d9np3dj86nsu2.cloudfront.net/image/8a7907739579128f58cd41f59b5b500c' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Crane', front: 'https://d9np3dj86nsu2.cloudfront.net/image/5f5d6988e55041dd862768fcfb41afe6' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Crow', front: 'https://d9np3dj86nsu2.cloudfront.net/image/1561febd244fe2c14b12b172e486ee04' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Heron', front: 'https://d9np3dj86nsu2.cloudfront.net/image/46f5666a10292c99a3f367a63c59984c' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Kingfisher', front: 'https://d9np3dj86nsu2.cloudfront.net/image/46f5666a10292c99a3f367a63c59984c' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Sparrow', front: 'https://d9np3dj86nsu2.cloudfront.net/image/7e7a439c357743fb4acd0e9bbbe9af00' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Pelican', front: 'https://d9np3dj86nsu2.cloudfront.net/image/b60847cda60334121abab1d022ead6b4' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Albatross', front: 'https://d9np3dj86nsu2.cloudfront.net/image/6b1d8904a2a30a5db942ad13334c8bc0' },
    { cardOf: '1', typeBack: 'text', typeFront: 'img', back: 'Stork', front: 'https://d9np3dj86nsu2.cloudfront.net/image/cebc3ba87095d531e42b024540f32f9a' },
]

var listCollection=[
    {
        cardID:'1',
        title:'Birds',
        avatar:'https://d9np3dj86nsu2.cloudfront.net/image/8249e80335efb41dadbd5c8936755183'
    },
    {
        cardID:'2',
        title:'Foods',
        avatar:'https://d9np3dj86nsu2.cloudfront.net/image/7c97a2f4d56398fd4898cfa32e7fa505'
    },
    {
        cardID:'3',
        title:'Animals',
        avatar:'https://d9np3dj86nsu2.cloudfront.net/image/c7f32bc724ab723a65a18ac584dd4d9e'
    }
]

// database.insertCard(listcard).then(r => console.log(r)).catch(e => console.log(e));
// database.insertCardColection(listCollection).then(r => console.log(r)).catch(e => console.log(e))
// database.getCardCollection(2).then(r => console.log(r)).catch(e => console.log(e))