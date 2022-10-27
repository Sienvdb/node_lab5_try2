// require models
//const Message = require("../models/message");
const getAll = (req, res) => {
        if (err) { 
            console.log(err)
            let response = {
                status: "error",
                message: "Error creating topping"
            }
            res.json(response);
        }
        let response = {
            status: "success",
            message: "GETTING messages",
        }
        res.json(response);
};

const getMessageById = (req, res) => {
    const messageId = req.params.id;
        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "This message isn't found"
                }
                res.json(response);
            }
            let response = {
                status: "success",
                message: "GETTING messages with ID" + req.params.id,
            }
            res.json(response);
            }

const createMessage = (req, res) => {
    let sender = req.body.sender;
    let message = req.body.message;

        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "Error creating message"
                }
                res.json(response);
            }
            let response = {
                status: "success",
                message: "POSTING a new message for user pikachu",
             }
            res.json(response);
        };

const changeMessage = (req, res) => {
    const messageId = req.params.id;
        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "This message isn't found so can't be updated"
                }
                res.json(response);
            }
            console.log("ok");
            let response = {
                status: "success",
                message: "UPDATING a message with id " + req.params.id,
            }
            res.json(response);
            }

const deleteMessage = (req, res) => {
    const messageId = req.params.id;
        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "This message isn't found so can't be removed"
                }
                res.json(response);
            }
            console.log("ok");
            let response = {
                status: "success",
                message: "REMOVING a message with id " + messageId,
                
            }
            res.json(response);
            }

const getMessageBySender = (req, res) => {
    const sender = req.params.sender;
        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "This message isn't found"
                }
                res.json(response);
            }
            let response = {
                status: "success",
                message: "GETTING messages " + sender,
            }
            res.json(response);
            }

module.exports.getAll = getAll;
module.exports.getMessageById = getMessageById;
module.exports.createMessage = createMessage;
module.exports.changeMessage = changeMessage;
module.exports.deleteMessage = deleteMessage;
module.exports.getMessageBySender = getMessageBySender;