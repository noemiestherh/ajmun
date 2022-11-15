let preveiwContainer = document.querySelector('.lista-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.lista-container .btn').forEach(btn =>{
    btn.onclick = () =>{
        preveiwContainer.style.display = 'flex';
        let name = btn.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-circle-xmark').onclick =() =>{
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});