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

function calculateSquareRoot() {
    try {
        let expression = document.getElementById('display').value;
        let result = Math.sqrt(eval(expression));
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
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
function calculatePercentage() {
    try {
        let expression = document.getElementById('display').value;
        let result = eval(expression) / 100;
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}