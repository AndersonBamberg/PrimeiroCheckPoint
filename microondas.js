//Anderson Moreira Bamberg - Turma 05 NT

var prato = 0;
var tempoPadrao = 10;
var tempoUsuario = 5;


if (prato < 1 || prato > 5) {
    console.log('PRATO INEXISTENTE')
}


// OPÇÃO 1: PIPOCA - Tempo padrão 10s

if (prato == 1) {
    console.log('PIPOCA')
    if (tempoUsuario > 3 * tempoPadrao) {
        console.log('KABUM')
    } else if (tempoUsuario < tempoPadrao) {
        console.log('TEMPO INSUFICIENTE')
    } else if (tempoUsuario > 2 * tempoPadrao) {
        console.log('PIPOCA QUEIMOU')
    } else {
        console.log('PRATO PRONTO, BOM APETITE')
    }
}

// OPÇÃO 2: MACARRÃO - Tempo padrão 8s

else if (prato == 2) {
    console.log('MACARRÃO')
    if (tempoUsuario > 3 * tempoPadrao) {
        console.log('KABUM')
    } else if (tempoUsuario < tempoPadrao) {
        console.log('TEMPO INSUFICIENTE')
    } else if (tempoUsuario > 2 * tempoPadrao) {
        console.log('MACARRÃO QUEIMOU')
    } else {
        console.log('PRATO PRONTO, BOM APETITE')
    }
}

// OPÇÃO 3: CARNE - Tempo padrão 15s

else if (prato == 3) {
    console.log('CARNE')
    if (tempoUsuario > 3 * tempoPadrao) {
        console.log('KABUM')
    } else if (tempoUsuario < tempoPadrao) {
        console.log('TEMPO INSUFICIENTE')
    } else if (tempoUsuario > 2 * tempoPadrao) {
        console.log('CARNE QUEIMOU')
    } else {
        console.log('PRATO PRONTO, BOM APETITE')
    }
}

// OPÇÃO 4: FEIJÃO - Tempo padrão 12s

else if (prato == 4) {
    console.log('FEIJÃO')
    if (tempoUsuario > 3 * tempoPadrao) {
        console.log('KABUM')
    } else if (tempoUsuario < tempoPadrao) {
        console.log('TEMPO INSUFICIENTE')
    } else if (tempoUsuario > 2 * tempoPadrao) {
        console.log('FEIJÃO QUEIMOU')
    } else {
        console.log('PRATO PRONTO, BOM APETITE')
    }
}

// OPÇÃO 5: BRIGADEIRO - Tempo padrão 8s

else if (prato == 5) {
    console.log('BRIGADEIRO')
    if (tempoUsuario > 3 * tempoPadrao) {
        console.log('KABUM')
    } else if (tempoUsuario < tempoPadrao) {
        console.log('TEMPO INSUFICIENTE')
    } else if (tempoUsuario > 2 * tempoPadrao) {
        console.log('BRIGADEIRO QUEIMOU')
    } else {
        console.log('PRATO PRONTO, BOM APETITE')
    }
}
