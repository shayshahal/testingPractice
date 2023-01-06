export default function analyze(arr)
{
    if(arr.length === 0)
        return ()=> {throw new Error('Empty array could not be analyzed')};
    let sum = 0;
    return arr.reduce((ans, n, i)=> {
        ans.min = Math.min(ans.min, n);
        ans.max = Math.max(ans.max, n);
        sum += n;
        if(i === arr.length-1)
            ans.average = sum/ans.length;
        return ans;
    }, 
    {
        average: 0,
        min: Infinity,
        max: -Infinity,
        length: arr.length
    })
}