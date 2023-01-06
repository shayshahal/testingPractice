import calculator from './calculator'

test('add', ()=>{
    let a = ~~(Math.random()*10), b = ~~(Math.random()*10);
    expect(
        calculator.add(a, b)
    ).toBe(a + b);
})
test('sub', ()=>{
    let a = ~~(Math.random()*10), b = ~~(Math.random()*10);
    expect(
        calculator.sub(a, b)
    ).toBe(a - b);
})
test('multiply', ()=>{
    let a = ~~(Math.random()*10), b = ~~(Math.random()*10);
    expect(
        calculator.multiply(a, b)
    ).toBe(a * b);
})
test('divide normal', ()=>{
    let a = ~~(Math.random()*10+1), b = Math.random()*5 + 1, c = a*b;
    expect(
        calculator.divide(c, a)
    ).toBe(b);
})
test('divide floating', ()=>{
    let a = ~~(Math.random()*10+1), b = Math.random(), c = a*b;
    expect(
        calculator.divide(c, a)
    ).toBeCloseTo(b);
})
test('divide by zero', ()=>{
    expect(
        calculator.divide(4, 0)
    ).toBe(Infinity);
})