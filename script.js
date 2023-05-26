

function validaCPF(pCpf) {
    const wTeste = pCpf
    let wCPFverdadeiro = wTeste.replace(/\./g, '').replace("-", "").trim()
    let wCPFfalso = false;
    wCPFverdadeiro.length == 11 ? (wCPFfalso =  wTeste[0].repeat(11) !=  wTeste) :div.innerTex
        console.log(wCPFfalso)
    if (wCPFfalso) {
        let arrayCPF = wCPFverdadeiro.split('');
        let cpfNumber = arrayCPF.map(digit => Number(digit));
        let soma = 0;

        /* for (let wIdx = 0; wIdx <= 10; wIdx++) {
            cpfNumber.push(parseInt(arrayCPF[wIdx]));
        } */

        for (let wIdx = 0, i = 1; wIdx <= 8, i <= 9; wIdx++, i++) {
            parseInt(arrayCPF[wIdx]);
            soma += arrayCPF[wIdx] * i;
        }

        let result = soma % 11;
        if (result != parseInt(arrayCPF[9])) {
            div.innerText = 'Invalido'
        } else {
            soma = 0;
            for (let wIdx = 0, i = 0; wIdx <= 9, i <= 9; wIdx++, i++) {
                soma += (parseInt(arrayCPF[wIdx])) * i;
            }
            result = soma % 11;
            result == parseInt(arrayCPF[10]) ? div.innerText = 'valido' : div.innerText = 'Invalido'
        }
    } else {
        div.innerText = 'Invalido'
    }
}


function validadorCnpj(pCnpj) {
    const wCnpj = pCnpj.replace(/\D/g,'').split("").map((num) => { return Number(num) });
    const wPrimeiroDigito = wCnpj[12];
    const wSegundoDigito = wCnpj[13];
    const wPrimeiraValidação = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const wResult = '';
    let wSoma = 0;

    for (let wIdx = 0; wIdx <= 11; wIdx++) {
        wSoma += wCnpj[wIdx] * wPrimeiraValidação[wIdx];
    }

    const wResto = Math.floor((wSoma / 11)) * 11;
    var wSegDigito = 0;

    const wValidador = verificaDigitos(wResto, wPrimeiroDigito);
    wValidador == true ? wSegDigito = validaSegundoDigito(wCnpj): false;

    return verificaDigitos(wSegDigito,wSegundoDigito);

        function verificaDigitos(pRestante2, pSegundoDigito) {
            if ([0, 1].includes(pRestante2)) {
                div.innerText = 'valido'
                return pSegundoDigito == 0
            
            } else if (pRestante2 >= 2 && pRestante2 <= 10) {
                div.innerText = 'valido'
                return pSegundoDigito == (11 - pRestante2)
            } else {
                div.innerText = 'Invalido'
                return false;
            } 
        }

        function validaSegundoDigito(pCnpj) {
            const wSegundaValidação = [6,5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
            let wSomaSegundaValidação = 0;
            for (let index = 0; index < wSegundaValidação.length; index++) {
                wSomaSegundaValidação += wSegundaValidação[index] * pCnpj[index];
            }
            const wSegundoResto = Math.floor((wSomaSegundaValidação / 11)) * 11;
            return wSegundoResto;
        }
    }

