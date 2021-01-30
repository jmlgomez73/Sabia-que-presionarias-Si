var bt_si = document.getElementById('bt_si');
var bt_no = document.getElementById('bt_no');

    bt_no.addEventListener('mouseenter', () => {
        console.log("mouse imput");
        var pos = coordenadas();
        bt_no.style.top = `${pos.posy}px`;
        bt_no.style.left = `${pos.posx}px`;
    })

    var coordenadas = () => {
        var ancho = screen.width - 200;
        var alto = screen.height - 200;
        var posx = Math.random() * (ancho - 0) + 0;
        var posy = Math.random() * (alto - 0) + 0;
        return { posx, posy }
    }

    bt_si.addEventListener('click', () => {
        alert('Eso pensaba :3');
    });