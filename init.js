const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main().then((res) =>{
    console.log("connections successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Vivek",
        to: "Prabhat",
        msg: "Send me notes for exam",
        created_at: new Date(),
    },
    {
        from: "Shivam",
        to: "Rahul",
        msg: "Send me some movie",
        created_at: new Date(),
    },
    {
        from: "Vikku",
        to: "Bhagatsingh",
        msg: "Teach me some important topics",
        created_at: new Date(),
    },
    {
        from: "Rohan",
        to: "Mohan",
        msg: "Teach me LinkedList",
        created_at: new Date(),
    },
    {
        from: "Vishnu",
        to: "Udit",
        msg: "Send me some content for exam",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);
