const chronometer = new Chronometer();
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const splitsList = document.getElementById('splits');

function printTime() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  document.getElementById('time').innerHTML = `${minutes}:${seconds}`;
}

btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    chronometer.start(printTime);
    btnLeft.classList.replace('start', 'stop');
    btnLeft.innerHTML = 'STOP';
    btnRight.classList.replace('reset', 'split');
    btnRight.innerHTML = 'SPLIT';
  } else {
    chronometer.stop();
    btnLeft.classList.replace('stop', 'start');
    btnLeft.innerHTML = 'START';
    btnRight.classList.replace('split', 'reset');
    btnRight.innerHTML = 'RESET';
  }
});

btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('split')) {
    const splitItem = document.createElement('li');
    splitItem.innerHTML = chronometer.split();
    splitItem.classList.add('list-item');
    splitsList.appendChild(splitItem);
  } else {
    chronometer.reset();
    document.getElementById('time').innerHTML = '00:00';
    splitsList.innerHTML = ''; // Clear all splits
  }
});
