const doc = {
    'Nome Completo': 'Diane da Costa',
    'Telefone': '31 998675432',
    'E-mail': 'dianecc@email.com',
    'CEP': '32613000',
    'Endereço': 'Rua das flores, 211',
    'Cidade': 'Belo Horizonte',
    'Estado': 'Minas Gerais',
    'Nome do Titular': 'Diane da Costa',
    'Número do Cartão': '4501 1417 7301 3717',
    'Data de Validade': '3/2028',
    'CVV': '443'
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function emailCheck(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function dataNormalize(data) {
    const regex = /^(\d{1,2})\/(\d{2,4})$/;
    const match = data.match(regex);

    if (!match) {
      throw new Error("Formato de data inválido");
    }

    let [ , mes, ano ] = match;

    if (mes.length === 1) {
      mes = '0' + mes;
    }

    if (ano.length === 2) {
      ano = '20' + ano;
    }

    return `${mes}/${ano}`;
}

function checkFunctionExists(functionName) {
    return typeof window[functionName] === 'function';
}
  
function checkFunctionExists(functionName) {
    return typeof window[functionName] === 'function';
}
  
async function insertData(data, debug=true) {
    document.querySelectorAll('.input-field').forEach(div => {
        const label = div.querySelector('label');
        const input = div.querySelector('input');

        if (label && input) {
            const fieldName = label.innerText.trim();
        
            if (data.hasOwnProperty(fieldName)) {
                const value = data[fieldName];

                if (fieldName === 'E-mail') {
                    if (!emailCheck(value)) {
                        alert('Formato de email inválido!');
                        throw new Error('Formato de email inválido');
                    }
                } else if (fieldName === 'Data de Validade') {
                    input.value = dataNormalize(value);
                    return;
                }

                input.value = value;
            }
        }
    });

    if(debug){
        document.querySelectorAll('.form-step').forEach(div => { div.style.display = 'block' });
        await sleep(1000);
    }

    if (checkFunctionExists('submitForm')) {
        window.submitForm();
    } else if (checkFunctionExists('nextPrev')) {
        window.nextPrev(3);
    } else {
        for (let i = 0; i < 3; i++) {
            document.getElementById('next-btn').click();
        }
    }
}