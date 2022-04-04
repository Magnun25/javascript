/*
function fatorial(n){
    let fat = 1
    for(let i = n; i > 1 ; i--) {
        fat *= i
    }
    return fat
}

console.log(fatorial(5))
*/

/*
5! = 5 x 4 x 3 x 2 x 1 = 120

5! = 5 x 4!
1! = 1

n! = n x (n-1)!

*/

// RECURSIVIDADE

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

