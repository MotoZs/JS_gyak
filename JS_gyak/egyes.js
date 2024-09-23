function szamol(){
    let a = 10.4;
    let b = 13.5;
    let c = 8.2;

    let terulet = 2*(a*b+b*c+c*a);
    let kotet = a*b*c;
    let ki = "<p>A háromszög területe:" + (terulet) + "cm</p><br><p>A háromszög kötete:" + (kotet) + "cm</p>";

    document.getElementById("eredmeny").innerHTML = ki;
}