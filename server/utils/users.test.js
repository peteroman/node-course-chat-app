const expect = require('expect');

const {Users} = require('./users');

var users;

beforeEach(() => {
    users = new Users();
    users.users = [{
        id: '1',
        name: 'Peter',
        room: 'Node course'
    }, {
        id: '2',
        name: 'Anna',
        room: 'React course'
    }, {
        id: '3',
        name: 'Steve',
        room: 'Node course'
    }]
});

describe('Users', () => {
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Peter',
            room: 'Aeroplane blues'
        }
        var resUser = users.addUser(user.id, user.name, user.room);
        
        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = users.users[0].id;
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users).not.toContainEqual(user);
    });

    it('should not remove a user', () => {
        var user = users.removeUser(users.users[0].id + 1);
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var user = users.getUser(users.users[1].id);
        expect(user).toBeTruthy();
        expect(user).toBe(users.users[1]);
    });

    it('should not find a user', () => {
        var user = users.getUser(users.users[1].id + 1);
        expect(user).toBeFalsy();
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node course');
        expect(userList).toEqual([users.users[0].name, users.users[2].name]);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React course');
        expect(userList).toEqual([users.users[1].name]);
    });
});