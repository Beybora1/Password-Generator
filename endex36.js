// Şifre oluşturma uygulaması

let btn = document.getElementById("btn");
let paragraf = document.getElementById("paragraf");


function şifre(){

    let fonk1 = ["a","b","ç","c","d","e","f","g","ğ","h", "i", "ı","j","k",
        "l","m","n","o","ö","p","r","s","ş","t","u","ü","v","y","z"
    ];

    let fonk2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    let fonk3 = ["!","#","&","_","-"];

    //let cc = ["c","d","f"];
    //dd = Math.floor(Math.random() * cc.length);
    //console.log(cc[dd]);
    //paragraf.textContent = dd;

    let a = Math.floor(Math.random() * fonk1.length);
    let b = Math.floor(Math.random() * fonk1.length);
    let c = Math.floor(Math.random() * fonk2.length);
    let d = Math.floor(Math.random() * fonk3.length);

    let a1 = Math.floor(Math.random() * fonk1.length);
    let b1 = Math.floor(Math.random() * fonk1.length);
    let c1 = Math.floor(Math.random() * fonk2.length);
    let d1 = Math.floor(Math.random() * fonk3.length);

    let a2 = Math.floor(Math.random() * fonk1.length);
    let b2 = Math.floor(Math.random() * fonk1.length);
    let c2 = Math.floor(Math.random() * fonk2.length);
    let d2 = Math.floor(Math.random() * fonk3.length);

    let a3 = Math.floor(Math.random() * fonk1.length);
    let b3 = Math.floor(Math.random() * fonk1.length);
    let c3 = Math.floor(Math.random() * fonk2.length);
    let d3 = Math.floor(Math.random() * fonk3.length);

    let a4 = Math.floor(Math.random() * fonk1.length);
    let b4 = Math.floor(Math.random() * fonk1.length);
    let c4 = Math.floor(Math.random() * fonk2.length);
    let d4 = Math.floor(Math.random() * fonk3.length);

    let a5 = Math.floor(Math.random() * fonk1.length);
    let b5 = Math.floor(Math.random() * fonk1.length);
    let c5 = Math.floor(Math.random() * fonk2.length);
    let d5 = Math.floor(Math.random() * fonk3.length);

    let a6 = Math.floor(Math.random() * fonk1.length);
    let b6 = Math.floor(Math.random() * fonk1.length);
    let c6 = Math.floor(Math.random() * fonk2.length);
    let d6 = Math.floor(Math.random() * fonk3.length);

    let a7 = Math.floor(Math.random() * fonk1.length);
    let b7 = Math.floor(Math.random() * fonk1.length);
    let c7 = Math.floor(Math.random() * fonk2.length);
    let d7 = Math.floor(Math.random() * fonk3.length);



    let fonk4 = [`${fonk1[a]}`, `${fonk1[b].toUpperCase()}`, `${fonk2[c]}`, `${fonk3[d]}`];
    let fonk5 = [`${fonk1[a1]}`, `${fonk1[b1].toUpperCase()}`, `${fonk2[c1]}`, `${fonk3[d1]}`];
    let fonk6 = [`${fonk1[a2]}`, `${fonk1[b2].toUpperCase()}`, `${fonk2[c2]}`, `${fonk3[d2]}`];
    let fonk7 = [`${fonk1[a3]}`, `${fonk1[b3].toUpperCase()}`, `${fonk2[c3]}`, `${fonk3[d3]}`];
    let fonk8 = [`${fonk1[a4]}`, `${fonk1[b4].toUpperCase()}`, `${fonk2[c4]}`, `${fonk3[d4]}`];
    let fonk9 = [`${fonk1[a5]}`, `${fonk1[b5].toUpperCase()}`, `${fonk2[c5]}`, `${fonk3[d5]}`];
    let fonk10 = [`${fonk1[a6]}`, `${fonk1[b6].toUpperCase()}`, `${fonk2[c6]}`, `${fonk3[d6]}`];
    let fonk11 = [`${fonk1[a7]}`, `${fonk1[b7].toUpperCase()}`, `${fonk2[c7]}`, `${fonk3[d7]}`];



    let y = Math.floor(Math.random() * fonk4.length);

    let z = Math.floor(Math.random() * fonk5.length);

    let k = Math.floor(Math.random() * fonk6.length);

    let t = Math.floor(Math.random() * fonk7.length);

    let q = Math.floor(Math.random() * fonk8.length);

    let w = Math.floor(Math.random() * fonk9.length);

    let o = Math.floor(Math.random() * fonk10.length);

    let g = Math.floor(Math.random() * fonk11.length);

    let x = `${fonk4[y]}${fonk5[z]}${fonk6[k]}${fonk7[t]}${fonk8[q]}${fonk9[w]}${fonk10[o]}${fonk11[g]}`;

    paragraf.textContent =  `8 haneli şifreniz = ${x} `;
    

}

btn.addEventListener("click", () =>{
    şifre()
})