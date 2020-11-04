const getLikesCount = require('./index');

const zeroLikesMsg = 'No one likes this';

test('check empty source', () => {
    expect(getLikesCount(null)).toBe(zeroLikesMsg);
    expect(getLikesCount('')).toBe(zeroLikesMsg);
    expect(getLikesCount()).toBe(zeroLikesMsg);
});

test('check one like', () => {
    expect(getLikesCount(['Adam'])).toBe('Adam likes this');
});

test('check two likes', () => {
    expect(getLikesCount(['Adam', 'David'])).toBe('Adam and David like this');
});

test('check three likes', () => {
    expect(getLikesCount(['Adam', 'David', 'Anna'])).toBe('Adam, David and Anna like this');
});

test('check more then three likes', () => {
    expect(getLikesCount(['Adam', 'David', 'Anna', 'Susan'])).toBe('Adam, David and 2 others like this');
    expect(getLikesCount(['Adam', 'David', 'Anna', 'Susan', 'Ronnie', 'Olaf'])).toBe('Adam, David and 4 others like this');
});

test('check callback returns array length', () => {
    const mockCallback = jest.fn();
    getLikesCount(['Adam', 'David', 'Anna', 'Susan'], mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(4);
});