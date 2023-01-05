export default function caesar(str, key)
{
    let ans = '';
    for(let c of str)
        ans += shiftChar(c, key)
    return ans;
}
function shiftChar(c, k)
{
    if(/[^a-zA-Z]/.test(c))
        return c;

    if(/[A-Z]/.test(c))
    {
        let s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        return s.at(((c.charCodeAt()-'A'.charCodeAt()+k)%26))
    }
    let s = 'abcdefghijklmnopqrstuvwxyz'
    return s.at(((c.charCodeAt()-'a'.charCodeAt()+k)%26))
}