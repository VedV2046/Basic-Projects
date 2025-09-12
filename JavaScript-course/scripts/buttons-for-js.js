function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('is-toggled')) {
    turnOffButton();
    button.classList.add('is-toggled');
  } 
  else {
    button.classList.remove('is-toggled');
  }
}

function turnOffButton() {
    const offButton = document.querySelector('.is-toggled');
    if(offButton) {
        offButton.classList.remove('is-toggled');
    }
}

function calculateTotal () {
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value)*100;

    if(cost < 4000) {
        cost = cost + 1000;
    }

    document.querySelector('.js-total-cost')
        .innerHTML = '';
    document.querySelector('.js-error-message')
        .innerHTML = '';

    if(cost < 1000-0) {
        document.querySelector('.js-error-message')
            .innerHTML = 'Error: Cost cannot Be Less Than $0';
        return;
    }

    document.querySelector('.js-total-cost')
        .innerHTML = `$${cost/100}`;
}
function updateButton() {
    const StartButton = document.querySelector('.js-start')
    
    setInterval(function() {
        StartButton.innerHTML = 'Finished!';
    }, 2000);

    StartButton.innerHTML = 'Loading...';
}

let timeoutId;
function addCart() {
    const cart = document.querySelector('.js-added');
    cart.innerHTML = 'Added';

    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(function() {
        cart.innerHTML = ''
    }, 2000);
}