import reverse from './reverse'

test('normal string', ()=>{
    expect(
        reverse('Shay Shahal')
        ).toBe('lahahS yahS');
})

test('special characters', ()=>{
    expect(
        reverse('!@#$%')
    ).toBe('%$#@!');
})

test('racecar', ()=>
{
    expect(
        reverse('racecar')
    ).toBe('racecar')
});
test('using js', ()=>
{
    expect(
        reverse('javascript')
    ).toBe('javascript'.split('').reverse().join(''))
})