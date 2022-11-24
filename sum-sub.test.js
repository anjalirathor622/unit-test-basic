//named import
const {sum,sub} = require('./anjali');

test('sum',()=>{
    expect(sum(2,3)).toBe(5);
});

test('sub',()=>{
    expect(sub(5,3)).toBe(2);
});