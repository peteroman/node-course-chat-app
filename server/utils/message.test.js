const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const from = 'Johnny';
        const text = 'Let\'s meetup and play some football';
        var msg = generateMessage(from, text);
        expect(msg).toMatchObject({from, text});
        expect(typeof msg.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate the correct location object', () => {
        const from = 'Johnny';
        const lat = '58.493484893';
        const long = '72.678645334';
        const url = 'https://www.google.com/maps?q=58.493484893,72.678645334'
        var msg = generateLocationMessage(from, lat, long);
        expect(msg).toMatchObject({from, url});
        expect(typeof msg.createdAt).toBe('number');
    });
});