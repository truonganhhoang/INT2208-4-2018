var database = require('../db')
var control = {
    sendListCardColection: function (res) {
        database.getCardCollection().then(
            result => {
                res.status(200);
                res.send(JSON.stringify(result));
            }
        )
            .catch(err => {
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
        console.log(req.body);
    }
}
module.exports = control;
// control.readCards();
