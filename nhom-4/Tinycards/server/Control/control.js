var database = require('../db')
var control = {
    logIn: function (req, res) {
        console.log("đã nhận được yêu cầu đăng nhập");
        try {
            let username = req.body.username;
            let password = req.body.password;
            console.log(password);
            database.getUser(username).then(user => {
                console.log(user);
                if (password == user[0].userPassword) {
                    res.status(201);
                    res.send({ userName: username })
                }
                else { res.status(400); res.send() }
            }).catch(e => {
                console.log(e);
                res.status(400);
                res.send();
            })

        } catch (error) {
            console.log(error);
            res.status(500);
            res.send();
        }
    },
    signUp: function (req, res) {
        try {
            console.log(req.body)
            let username = req.body.username;
            let password = req.body.password1;
            database.insertUser(username, password)
                .then(
                    r => {
                        res.status(201);
                        res.send();
                    }
                )
                .catch(e => {
                    res.status(500);
                    res.send();
                })
        } catch (error) {
            res.status(500);
            res.send();
        }
    },


    sendListCardColection: function (res) {
        console.log("da nhan duoc 1 yeu cau lấy danh sách các bộ thẻ");

        database.getListCardCollection().then(
            result => {
                console.log(result);
                res.status(200);
                res.send(JSON.stringify(result));
            }
        )
            .catch(err => {
                console.log(err);
                res.status(404);
                res.send();
            })
    },
    sendListFavoriteCollectionCardColection: function (req, res) {
        let userName = req.params.userName;
        console.log("đã nhận được yêu cầu lấy các thẻ yêu thích");
        
        console.log(userName);
        database.getListFavoriteCollection(userName)
            .then(
                result => {
                    console.log(result);
                    res.status(200);
                    res.send(JSON.stringify(result));
                }
            )
            .catch(err => {
                console.log(err);
                res.status(404);
                res.send();
            })
    },
    sendCardCollection: function (req, res) {
        let cardID = req.params.cardID;
        console.log(cardID);

        database.getCardCollection(cardID)
            .then(result => {
                res.status(200);
                res.send(JSON.stringify(result));
            })
            .catch(err => {
                res.status(404);
                res.send();
            })
    },
    createNewCardCollection: function (req, res) {
        database.insertCardColection({
            title: req.body.title,
            avatar: req.body.avatar,
            typeAvatar: req.body.typeAvatar,
        }).then(collectionID => { // tao bo the thanh cong
            let listCard = JSON.parse(req.body.cards);
            listCard.forEach(card => {
                card.cardOf = collectionID; // gan id cua bo the moi tao cho tat ca cac the               
            });
            database.insertCard(listCard)
                .then(
                    r => {
                        res.status(201);
                        res.send();
                    }
                )
                .catch(e => {
                    console.log(e);
                    res.status(500);
                    res.send();
                })
        })
    },
    addFavoriteForUser:function(req,res){
        let collectionID= req.params.collectionID;
        let userName= req.params.userName;
        database.insertUser_Collection(userName,collectionID)
        .then(r => {
            res.status(201);
            res.send();
        })
        .catch(e => {
            console.log(e);
            res.status(500);
            res.send();
        })
    }
    ,
    removeFavoriteForUser:function(req,res){
        let collectionID= req.params.collectionID;
        let userName= req.params.userName;
        database.deleteUser_Collection(userName,collectionID)
        .then(r => {
            res.status(201);
            res.send();
        })
        .catch(e => {
            console.log(e);
            res.status(500);
            res.send();
        })
    }
}
module.exports = control;
// control.readCards();
