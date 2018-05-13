var database = require('../db')
var control = {
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
    createNewCardCollection: function(req,res){
        database.insertCardColection({
            title:req.body.title,
            avatar:req.body.avatar,
            typeAvatar:req.body.typeAvatar,
        }).then(collectionID =>{ // tao bo the thanh cong
            let listCard = JSON.parse(req.body.cards);
            listCard.forEach(card => {
                card.cardOf= collectionID; // gan id cua bo the moi tao cho tat ca cac the               
            });
            database.insertCard(listCard)
            .then(
                r=>{
                    res.status(201);
                    res.send();
                }
            )
            .catch( e=>{
                console.log(e);
                res.status(500);
                res.send();
            })
        })
    }
}
module.exports = control;
// control.readCards();
