// n1=0 e n2=0 são parametros pré definidos, se eu não passar os parâmetros na chamada ele vai considerar 0. Caso eu não coloque o n1=0 ele vai dar como resultado NaN
function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(2))