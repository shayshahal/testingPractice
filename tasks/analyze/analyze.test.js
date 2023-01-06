import analyze from './analyze'

test('single number', ()=>{
    expect(
        analyze([5])
    ).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 1
    })
})
test('empty array', ()=>{
    expect(
        analyze([])
    ).toThrow('Empty array could not be analyzed')
})
test('simple case', ()=>{
    expect(
        analyze([1,8,3,4,2,6])
    ).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})
test('randomized case', ()=>{
    let len = ~~(Math.random * 10)+1;
    let arr = [];
    let avg = 0;
    let minN = Infinity, maxN = -Infinity;
    for(let i = 0; i < len; i++)
    {
        arr.push(~~(Math.random * 20 - 10));
        minN = Math.min(arr.at(-1),minN);
        maxN = Math.max(arr.at(-1),maxN);
        avg += arr.at(-1);
    }
    avg /= len;
    expect(
        analyze(arr)
    ).toEqual({
        average: avg,
        min: minN,
        max: maxN,
        length: len
    })
})