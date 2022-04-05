let amigo = {
    nome:`Rodrigo`,
    sexo:`M`,
    peso:88.9,
    engordar(p=0){
        console.log(`Engordou`)
        this.peso += p
    }
}

amigo.engordar(-4)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)