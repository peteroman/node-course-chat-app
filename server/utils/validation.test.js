const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var result = isRealString(2352);
        expect(result).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var result = isRealString('      ');
        expect(result).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var result = isRealString('   sfakP eter32 ');
        expect(result).toBe(true);
    });
});
