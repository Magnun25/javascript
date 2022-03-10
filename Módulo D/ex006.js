var agora = new Date()
var hora = agora.getHours

if (hora < 12 && hora >= 6) {
    console.log (`Good Morning!`)
} else if ( hora >= 12 && hora < 18) {
    console.log (`Good Afternoon!`)
} else if ( hora >= 18 && hora <= 24) {
    console.log (`Good Evening!`)
} else {
    console.log (`Good Night!`)
}