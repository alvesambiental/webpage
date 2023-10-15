const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkboxes);

checkboxes()

function checkboxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        
        console.log(boxTop)
        console.log(triggerBottom)
            
        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })

    
    //console.log(boxes)
    
}



/*
const observer = new IntersectionObserver(entries => {
    console.log(entries)

    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('init-hidden-off')
        }
    })
}, {
    threshold: [0, .5, 1]
})

Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})
*/
