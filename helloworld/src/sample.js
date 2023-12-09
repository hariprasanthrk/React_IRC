/*function Sample()
{
    return(
        <div>
            <h1>Hi helloworld</h1>
        </div>
    )
}
export default Sample;*/
function sum(...args)
{
    let sum=0;
    for(int i=0;i<args.length;i++)
    {
        sum+=args;
    }
    return sum;
}
console.log(sum(2,4,6,8))
console.log(sum(2,4,6,8))