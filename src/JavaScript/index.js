const labelWrapper = document.querySelector('.wrapper-button');
const labelLight = document.querySelector('.wrapper-button__light');
const labelMedium = document.querySelector('.wrapper-button__medium');
const labelFull = document.querySelector('.wrapper-button__full');
const range = document.querySelector('#myRange');
const demo = document.querySelector('#demo');
const building = document.querySelector('#building');
const price = document.querySelector('#price');
const total = document.querySelector('#total');
const profileWrap = document.querySelector('#profile-wrap');
const labelAll = document.querySelector('#all-label');
const labelExtr = document.querySelector('#extr-label');
const labelIntr = document.querySelector('#intr-label');
const labelPublic = document.querySelector('#public-label');
const submit = document.querySelector('.wrap-second__form');
const exterior = document.querySelector('#exterior');
const interior = document.querySelector('#interior');
const public = document.querySelector('#public-figure');
const allfigure = document.querySelector('#all-figure');




labelWrapper.addEventListener('click', e => {
  if (e.target.checked == true && e.target.id == 'light') {
    labelLight.classList.add('active')
    price.value = 1000;
    total.value = building.value * price.value;
  } else labelLight.classList.remove('active')

  if (e.target.checked == true && e.target.id == 'medium') {
    labelMedium.classList.add('active')
    price.value = 2500;
    total.value = building.value * price.value;
  } else labelMedium.classList.remove('active');

  if (e.target.checked == true && e.target.id == 'full') {
    labelFull.classList.add('active')
    price.value = 5000;
    total.value = building.value * price.value;
  } else labelFull.classList.remove('active');
})

range.addEventListener('change', e => {
  demo.innerHTML = e.target.value;
  building.value = e.target.value
  total.value = building.value * price.value;
})


profileWrap.addEventListener('click', e => {
  if (e.target.checked == true && e.target.id == 'all') {
    labelAll.classList.add('active-all');
    allfigure.classList.add('active');
  } else {
  labelAll.classList.remove('active-all');
  allfigure.classList.remove('active');
  }
  if (e.target.checked == true && e.target.id == 'extr') {
    labelExtr.classList.add('active-extr');
    exterior.classList.add('active');
  } else {
  labelExtr.classList.remove('active-extr');
  exterior.classList.remove('active');
  }
  if (e.target.checked == true && e.target.id == 'intr') {
    labelIntr.classList.add('active-intr');
    interior.classList.add('active');
  } else {
  labelIntr.classList.remove('active-intr');
  interior.classList.remove('active');
  }
  if (e.target.checked == true && e.target.id == 'public') {
    labelPublic.classList.add('active-public');
    public.classList.add('active');
  } else {
  labelPublic.classList.remove('active-public');
  public.classList.remove('active');
  }
})

building.addEventListener('change', e => {
  total.value = building.value * price.value;
})

submit.addEventListener('submit', e => {
  e.preventDefault();
  alert('Заявка отправлена!')
})