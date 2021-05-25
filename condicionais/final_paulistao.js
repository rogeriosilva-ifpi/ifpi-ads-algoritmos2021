const prompt = require('prompt-sync')()


function main(){
    console.log('### Paulistão ###')
    const gols_sp = Number(prompt('Gols São Paulo: '))
    const gols_palmeiras = Number(prompt('Gols Palmeiras: '))

    // Se são Paulo ganhar é campeão
    if (gols_sp > gols_palmeiras){
        console.log('São Paulo F.C. é Campeão 2021!!!!')
    }else if (gols_sp < gols_palmeiras ){
        console.log('Palmeira é campeão 2021!!')
    }else{
        console.log('Partida empatou. Pênaltis')
    }

}

main()