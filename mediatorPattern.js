// Allows us to define an object that deifnes and controls how different objects communicate with each other. It prevents direct communication b/w objects

class Member {
    constructor(name) {
        this.name = name;
        this.chatroom = null
    }
}

// Memeber needs to know which chatroom it is in touch with
// Members can send and recieve messages so we add methods to the chatrooms
Memeber.prototype = {
    send: function(message, toMember)
    {
        this.chatroom.send(message, this, toMember) // this is the person who sends the message via Member
    },

    recieve: function(message, fromMember)
    {
        console.log(`${fromMember.name} to ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.members = {};
    }
}

ChatRoom.prototype = {
    addMember: function(member)
    {
        this.members[member.name];
        member.chatroom = this; //the null we gave earlier
    },
    send: function (message, fromMember, toMember) 
    {
        toMember.recieve(message, fromMember)
    }
}

const chat = new ChatRoom();
const bob = new Member("Bob");
const john = new Member("John");

chat.addMember(bob)
bob.send("Suna Jani", john)