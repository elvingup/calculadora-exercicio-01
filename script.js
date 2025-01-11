function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let expression = document.getElementById('display').value;
        expression = expression.replace("^", "**"); // Substitui ^ por ** para potenciação
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

function calculateRoot() {
    try {
        let base = parseFloat(prompt("Digite o radicando (número dentro da raiz):"));
        let index = parseFloat(prompt("Digite o índice da raiz (ex: 3 para raiz cúbica):"));

        if (isNaN(base) || isNaN(index)) {
            throw new Error("Entrada inválida. Digite números válidos.");
        }

        if (index === 0) {
            throw new Error("Índice da raiz não pode ser zero.");
        }

        if (base < 0 && index % 2 === 0) {
            throw new Error("Não é possível calcular raiz par de número negativo nos reais.");
        }
        
        let result = Math.pow(base, 1 / index);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = "Erro: " + error.message;
    }
}

function calculateSquareRoot() {
    try {
        let expression = document.getElementById('display').value;
        let result = Math.sqrt(eval(expression));
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

function calculateCubeRoot() {
    try {
        let expression = document.getElementById('display').value;
        let base = eval(expression);

        if (isNaN(base)) {
            throw new Error("Entrada inválida. Digite um número válido.");
        }

        let result = Math.cbrt(base); // Usando Math.cbrt() para raiz cúbica
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = "Erro: " + error.message;
    }
}

function calculatePower(){
    try{
        let expression = document.getElementById('display').value;
        let base = parseFloat(prompt("Digite a base"));
        let exponente = parseFloat(prompt("Digite o expoente"));

        if(isNaN(base) || isNaN(exponente)){
            throw new Error("Entrada inválida. Digite números válidos");
        }
        let result = Math.pow(base,exponente);
        document.getElementById('display').value = result;
    } catch(error){
        document.getElementById('display').value = 'Erro: ' + error.message;
    }
}

function calculatePowerOf2() {
    try {
        let expression = document.getElementById('display').value;
        let base = eval(expression);
        if (isNaN(base)) {
            throw new Error("Entrada inválida. Digite um número válido.");
        }
        let result = Math.pow(base, 2);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = "Erro: " + error.message;
    }
}

function calculatePowerOf3() {
    try {
        let expression = document.getElementById('display').value;
        let base = eval(expression);
        if (isNaN(base)) {
            throw new Error("Entrada inválida. Digite um número válido.");
        }
        let result = Math.pow(base, 3);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = "Erro: " + error.message;
    }
}
function calculatePercentage() {
    try {
        let expression = document.getElementById('display').value;
        let result = eval(expression) / 100;
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

