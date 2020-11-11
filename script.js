const photo1 = document.getElementById('photo-1');
const photo2 = document.getElementById('photo-2');
const test1 = document.getElementById('testimonial-text-1');
const test2 = document.getElementById('testimonial-text-2');
const name1 = document.getElementById('testimonial-name-1');
const name2 = document.getElementById('testimonial-name-2');
const rank1 = document.getElementById('testimonial-rank-1');
const rank2 = document.getElementById('testimonial-rank-2');

function next() {
    console.log('next');
    if (photo1.style.display !== 'none') {
        photo1.style.display = 'none';
        photo2.style.display = 'block';
        test1.style.display = 'none';
        test2.style.display = 'block';
        name1.style.display = 'none';
        name2.style.display = 'inline-block';
        rank1.style.display = 'none';
        rank2.style.display = 'inline-block';
    }
    else {
        alert('There are no more testimonials left');
    }
};

function prev() {
    console.log('next');
    if (photo2.style.display !== 'none') {
        photo2.style.display = 'none';
        photo1.style.display = 'block';
        test2.style.display = 'none';
        test1.style.display = 'block';
        name2.style.display = 'none';
        name1.style.display = 'inline-block';
        rank2.style.display = 'none';
        rank1.style.display = 'inline-block';
    }
    else {
        alert('This is the first testimonial');
    }
};


document.getElementById('next-bg').addEventListener('click', next);
document.getElementById('next-arrow').addEventListener('click', next);
document.getElementById('prev-bg').addEventListener('click', prev);
document.getElementById('prev-arrow').addEventListener('click', prev);