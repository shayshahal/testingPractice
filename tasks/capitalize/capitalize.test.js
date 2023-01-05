import capitalize from './capitalize';

test('capitalize uncapitalized first latter', ()=>
{
    expect(capitalize('shay Shahal')).toBe('Shay Shahal')
});

test('capitalized first latter stays capitalized', ()=>
{
    expect(capitalize('Shay Shahal')).toBe('Shay Shahal')
});

test('non alphanumeric first char', ()=>
{
    expect(capitalize('!shay Shahal')).toBe('!shay Shahal')
});