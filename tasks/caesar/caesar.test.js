import caesar from './caesar'

test('basic test', ()=>{
    expect(
        caesar('abcdef', 1)
    ).toBe('bcdefg')
})
test('more than 1', ()=>{
    expect(
        caesar('abcdef', 5)
    ).toBe('fghijk')
})
test('minus', ()=> {
    expect(
        caesar('bcdefg', -1)
    ).toBe('abcdef')
})
test('wrapping over', ()=>{
    expect(
        caesar('uvwxyz', 6)
    ).toBe('abcdef')
})
test('wrapping under', ()=>{
    expect(
        caesar('abcdef', -6)
    ).toBe('uvwxyz')
})
test('stay', ()=>{
    expect(
        caesar('abcdef', 0)
    ).toBe('abcdef')
})
test('case sensative', ()=>{
    expect(
        caesar('aBCdEf', 3)
    ).toBe('dEFgHi')
})
test('punctuation', ()=>{
    expect(
        caesar('Hi, my name is shay-shahal. Nice to meet you! How are you doing? Good?!?!? that\'s great!!!', 2)
    ).toBe('Jk, oa pcog ku ujca-ujcjcn. Pkeg vq oggv aqw! Jqy ctg aqw fqkpi? Iqqf?!?!? vjcv\'u itgcv!!!')
})