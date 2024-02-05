const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = (document.getElementById('height').value);
    // console.log(height);
    const weight = document.getElementById('weight').value;
    // console.log(weight);
    const result = document.getElementById('result');
    if (height == '' || height <= 0 || isNaN(height)) {
        result.innerHTML = 'Please enter a valid height'
    }
    else if (weight == '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = 'Please enter a valid weight'
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            result.innerHTML = `${bmi} you are under weight`
        }
        else if (bmi > 18.6 && bmi < 24.9) {
            result.innerHTML = `${bmi} you are in normal range`
        }
        else {
            result.innerHTML = `${bmi} you are over weight`
        }
    }
})