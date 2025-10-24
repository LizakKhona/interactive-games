const function2 = function(){
    const slides = Array.from(document.querySelectorAll('.slider-slide'));
    const backBtn = document.getElementById('backBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsWrap = document.getElementById('dotsWrap');
    const total = slides.length;
    let index = 0;

    for(let i=0;i<total;i++){
      const dot = document.createElement('span');
      dot.className = 'dot' + (i===0 ? ' active' : '');
      dot.dataset.index = i;
      dotsWrap.appendChild(dot);
}

const dots = Array.from(dotsWrap.children);

function showSlide(newIndex){
      index = ((newIndex % total) + total) % total;
      slides.forEach(slide => slide.hidden = true);
      slides[index].hidden = false;
     

dots.forEach(dot => dot.classList.remove('active'));
dots[index].classList.add('active');

slides[index].querySelector('.slider-subtitle')?.focus?.();
}


backBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

dots.forEach(dot => dot.addEventListener('click', e => showSlide(Number(e.currentTarget.dataset.index))));

showSlide(0);
};


console.log(function2());

