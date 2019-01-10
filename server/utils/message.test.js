const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const from = 'Johnny';
        const text = 'Let\'s meetup and play some football';
        var msg = generateMessage(from, text);
        expect(msg).toMatchObject({from, text});
        expect(typeof msg.createdAt).toBe('number');
    });
});