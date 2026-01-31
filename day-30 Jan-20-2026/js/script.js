const data = document.getElementById('data');
const msg = document.getElementById('msg');
const classicGame = document.getElementById('classicGame');


data.setAttribute('data-msg', 'This attr value was set by the js');
msg.textContent = data.getAttribute('data-msg');
data.removeAttribute('data-game');
msg.style.width = 'max-content';
msg.style.backgroundColor = 'yellow';

classicGame.classList.add('font-semibold', 'text-xl');
// classicGame.classList.remove('text-red-600');
// classicGame.classList.toggle('bg-green-300');
if(classicGame.classList.contains('text-red-600')){
    classicGame.classList.add('text-green-600');
}else{
    classicGame.classList.add('text-red-600');
}

classicGame.addEventListener('click', () => {
    if(msg.textContent === 'This attr value was set by the js') {
        msg.textContent = 'You clicked the classic game div';
    }else{
        msg.textContent = data.getAttribute('data-msg');
    }
})

/**
 * click
 * dblclick
 * mouseover
 * mouseout
 * keydown
 * keyup
 * keypress
 * submit
 */

const addCityBtn = document.getElementById('addCityBtn');
const cityList = document.getElementById('cityList');
let cityCount = 1;
addCityBtn.addEventListener('click', () => {
    if(cityCount % 2 != 0 && cityCount < 6){
        const li = document.createElement('li');
        li.textContent = `Cumillah ${cityCount}`;
        cityList.append(li);
        cityCount++;
    }else if(cityCount % 2 == 0 && cityCount < 6){
        const li = document.createElement('li');
        li.textContent = `Cumillah ${cityCount}`;
        cityList.prepend(li);
        cityCount++;
    }else{
        // cityList.removeChild(cityList.lastElementChild)
        cityList.innerHTML = '<li>Dhaka</li>';
        cityCount = 1;
    }
});