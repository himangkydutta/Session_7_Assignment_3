/*Here each time we are calling the Javascript function it get incremented value starting with 
  1 and display in console
*/

function counter()
{
    var name=0;
    function innercount()
    {
        return ++name;
    };
    return innercount;
};

var mycount=counter();
console.log(mycount());
console.log(mycount());
console.log(mycount());
console.log(mycount());
console.log(mycount());
console.log(mycount());
console.log(mycount());
console.log(mycount());
console.log(mycount());
console.log(mycount());
console.log(mycount());
console.log(mycount());



