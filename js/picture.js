const container = document.querySelector('.container');
const images = document.querySelector('.image');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = container.querySelector('.dots');

for (let i = 0; i < slides.length - 1; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
}
const dots = dotsContainer.querySelectorAll('.dot');
dots[0].classList.add('active');

let currentIndex = 0;
let autoPlayIntervalId = null; // 自动播放计时器ID

function moveToSlide(index) {
    images.style.transition = 'transform 0.5s ease-in-out';
    
    images.style.transform = `translateX(calc(-${index}*${100 / slides.length}%))`;
    
}

function updateDots(index) {
    if (!dots || !dots.length || typeof index !== 'number' || index < 0 || index >= dots.length) {
        return;
    }

    dots.forEach(dot => {
        if (dot.classList.contains('active')) {
            dot.classList.remove('active');
        }
    });
    dots[index].classList.add('active');

}

function startAutoPlay() {
    autoPlayIntervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToSlide(currentIndex);
        if (currentIndex == slides.length - 1) {
            setTimeout(
                () => {
                    images.style.transition = 'none';
                    images.style.transform = 'translateX(0)';
                }, 500
            )
            currentIndex = 0;
        }
        updateDots(currentIndex);
    }, 2000);
}

function stopAutoPlay() {
    clearInterval(autoPlayIntervalId);
}

prevBtn.addEventListener('click', () => {
    stopAutoPlay();
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 2;
    }
    moveToSlide(currentIndex);
    updateDots(currentIndex);
});

nextBtn.addEventListener('click', () => {
    stopAutoPlay();
    currentIndex++;
    if (currentIndex >= slides.length - 1) {
        currentIndex = 0;
    }
    moveToSlide(currentIndex);
    updateDots(currentIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopAutoPlay();
        currentIndex = index;
        moveToSlide(currentIndex);
        updateDots(currentIndex);
    });
});

// 鼠标悬停轮播图时，显示左右箭头按钮和小圆点
container.addEventListener('mouseenter', () => {
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    dots.forEach(dot => dot.style.display = 'inline-block');
    stopAutoPlay(); // 暂停自动播放
});

// 在鼠标移开轮播图时，隐藏左右箭头按钮和小圆点
container.addEventListener('mouseleave', () => {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    dots.forEach(dot => dot.style.display = 'none');
    startAutoPlay(); // 启动自动播放
});

// 启动自动播放
startAutoPlay();