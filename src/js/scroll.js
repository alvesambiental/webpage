const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkboxes);

checkboxes()

function checkboxes() {
    const triggerBottom = window.innerHeight / 5 * 3;
    const triggerTop = window.innerHeight / 5 * 6;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        
        //console.log(boxTop)
        //console.log(triggerTop)
        //console.log(triggerBottom)
        console.log(scrollY)
        

//        if(boxTop < triggerBottom) {
        if(scrollY > 4700 && scrollY < 5100) {
            box.classList.remove('exit');
            box.classList.add('enter');
        } else {
            box.classList.remove('enter');
            box.classList.add('exit');
        }

//        if(boxTop > triggerTop) {

//if(scrollY > 3500 && scrollY < 4700){
//            box.classList.add('exit');
//        } else {
//            box.classList.remove('exit');
//        }
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
