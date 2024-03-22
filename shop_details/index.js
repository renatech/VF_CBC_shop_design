document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.accordion-item');

    items.forEach(item => {
        item.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                this.children[0].children[1].children[0].src = "./icons/down-arrow.png"
            } else {
                items.forEach(el => {
                    el.classList.remove('active')
                    el.children[0].children[1].children[0].src = "./icons/down-arrow.png"
                });
                this.children[0].children[1].children[0].src = "./icons/upload.png"
                this.classList.add('active');
            }
        });
    });
});

const qty = document.getElementById('qty')
const update_qty=action=>{
   const value = parseInt(qty.innerText)
   if(action === "dec" && value !== 1){
    qty.innerText = value - 1
   }else if(action === "add"){
    qty.innerText = value + 1
   } 
}