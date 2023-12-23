const btnSI = document.getElementById('si'), btnNO = document.getElementById('no');

document.addEventListener('click', e => {
    if(e.target === btnSI){
        Swal.fire({
            title: 'Ya me esperaba esa respuesta mi Musa 😍',
            confirmButtonText: 'Dale click 😁',
            with: '60vw',
            padding: '2em',
            color: '#716add',
            background: 'rgba(207, 208, 218, 1)',
            imageUrl: 'img/totorofeliz-unscreen.gif',
            imageAlt: 'Totoro feliz', 
            imageHeight: '30vh', 
        }).then((result) =>{
            if(result.isConfirmed){
                let url = "https://api.whatsapp.com/send?phone=59161298210&text="+"Si acepto mi amor 🥰🥰😘 a seguir adelante. TE DEBO UNA COMIDA🍝";
                window.open(url);
            }
        })
    }
})

document.addEventListener('mouseover', e => {
    if(e.target == btnNO){
        btnNO.style.left = `${numeroRandon(left1, left2, 'left')}%`;
        btnNO.style.top = `${numeroRandon(top1, top2, 'top')}%`;
    }
})

let left1 = 0, left2 = 0, top1, top2;
let numeroRandon = (x1, x2, direccion) =>{
    let nRamdom = Math.floor(Math.random() * (+90 +1 - +0)) + +0;
    x1 = nRamdom;
    if((x1 - x2) <= 10 && (x1 - x2) >= 0){
        if((x1 + 10) > 90){
            x1 -= 8;
        }
        else{
            x1 += 8;
        }
    }
    if((x1 - x2) >= -10 && (x1 - x2) <= 0){
        if((x1 + 20) > 90){
            x1 -= 20;
        }
        else{
            x1 += 20;
        }
    }

    if (direccion === "left"){
        left1 = x1;
        left2 = x1;
        return left1;
    }
    if (direccion === "top"){
        top1 = x1;
        top2 = x1;
        return top1;
    }
    return x1;
}