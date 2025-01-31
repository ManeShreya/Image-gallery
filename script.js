let fiterItem = document.querySelector('.items-links');
let fileImages = document.querySelectorAll('.project-img');



window.addEventListener('load',()=>{
    fiterItem.addEventListener('click',(selectedItem)=>{
        if(selectedItem.target.classList.contains('item-link')){
            document.querySelector('.menu-active').classList.remove('menu-active');
            selectedItem.target.classList.add('menu-active');
            let FilterName = selectedItem.target.getAttribute('data-name');
            fileImages.forEach((image)=>{
                let filterImages = image.getAttribute('data-name');
                if((filterImages == FilterName) || FilterName == 'all'){
                    image.style.display = 'block'
                }else{
                    image.style.display = 'none'
                }
            })
        }

    })
})