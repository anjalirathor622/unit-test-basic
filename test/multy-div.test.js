const {multy,div} = require('../anjali');

test('multiplication',()=>{
    expect(multy(2,2)).toBe(4);
});

test('division',()=>{
    expect(div(36,6)).toBe(6);
});