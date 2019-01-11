class Users {
    constructor () {
        this.users = [];
    }

    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    };
    
    removeUser (id) {
        var user = this.getUser(id);
        if (user) {
            this.users = this.users.filter((u) => user !== u);
        }
        return user;
    };
    
    getUser (id) {
        return this.users.filter((user) => id === user.id)[0];
    }
    
    getUserList (room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);
        return namesArray;
    }
}

class User {
    constructor (id, name, room) {
        this.name = name;
        this.id = id;
        this.room = room;
    }

    getId () {
        return this.id;
    }
}

module.exports = {Users};