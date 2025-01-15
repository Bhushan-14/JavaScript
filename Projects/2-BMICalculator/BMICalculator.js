const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML =`please give a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML =`please give a valid wight ${weight}`;
    }else{
        const bmi = weight / ((height / 100) ** 2);
        results.innerHTML = `<span>${bmi}</span>`;
        let category = '';

        if (bmi < 18.6) {
            category = 'Underweight';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = 'Normal range';
        } else {
            category = 'Overweight';
        }

        results.innerHTML = `<span>Your BMI is ${bmi.toFixed(2)} (${category})</span>`;
    }    
});