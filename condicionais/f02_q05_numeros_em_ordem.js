const prompt = require('prompt-sync')()
/**
 * a = 2, b = 8, c = 6
 * 
 * >> 2, 6, 8
 */
function main(){
    // corpo
    const num1 = Number(prompt('Num 1:'))
    const num2 = Number(prompt('Num 2:'))
    const num3 = Number(prompt('Num 3:'))

    let maior, menor, meio
    
    if (num1 > num2 && num1 > num3){
        maior = num1
        // entre num2 e num3
        if (num2 < num3){
            menor = num2
            meio = num3
        }else{
            menor = num3
            meio = num2
        }
    }else if (num1 < num2 && num1 < num3){
        menor = num1
        // entre num2 e num3
        if (num2 > num3){
            maior = num2
            meio = num3
        }else{
            maior = num3
            meio = num2
        }
    }else{
        meio = num1
        // entre num2 e num3
        if (num2 > num3){
            maior = num2
            menor = num3
        }else{
            maior = num3
            menor = num2
        }
    }

    console.log('Menor:', menor)
    console.log('Meio:', meio)
    console.log('Maior:', maior)
}

main()