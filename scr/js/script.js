

const btnbuy = document.getElementById('btn-buy');
const cartForm = document.getElementById('cartForm');

const cbtMin = document.getElementById('btnMin');
const cbtMax = document.getElementById('btnMax');
const ciQtdTicket = document.getElementById('qtdTicket');
const cdprice = document.getElementById('price');


var iQtdTck = 0, iParseQtdTicket = 0;
var dprice = 0.00, dParsePrice = 0.00;

function somaPrice(fiQtdTck) {
    dParsePrice = parseFloat(cdprice.innerText);
    //console.log("function", fiQtdTck);
    dprice = 90.00 * fiQtdTck;
    cdprice.innerText = dprice.toFixed(2).replace(".",",");    
}


btnbuy.addEventListener("click", (e) => {
    (e).preventDefault();
    const cNome = cartForm.nome.value;
    const cEmail = cartForm.email.value;
    const cQtdTicketTotal = ciQtdTicket.innerText;

    window.localStorage.setItem('nome',cNome);
    window.localStorage.setItem('email',cEmail);
    window.localStorage.setItem('qtdTotal',cQtdTicketTotal);

    console.log('', cNome);
    console.log('', cEmail);
    console.log('', cQtdTicketTotal);

    if (cNome == "" || cEmail == "") {
        alert("Campos invalidos! Verifique se o nome, email estão preenchidos corretamente.")
        
    } else {
        window.location.href = "finalizacao.html";
        return    
    }    
})

cbtMin.addEventListener("click", (e) => {
    e.preventDefault();
    iParseQtdTicket = parseInt(ciQtdTicket.innerText);
    iQtdTck = iParseQtdTicket - 1;

    if (iQtdTck > 0) {
        ciQtdTicket.innerText = iQtdTck;
        
        somaPrice(iQtdTck);
        return   
    }
    else{
        ciQtdTicket.innerText = 1;
        dprice = 90;
        cdprice.innerText = dprice.toFixed(2).replace(".",",");
        return   
    }    
})

cbtMax.addEventListener("click", (e) => {
    e.preventDefault();
    
    iParseQtdTicket = parseInt(ciQtdTicket.innerText);
    iQtdTck = iParseQtdTicket + 1;
    ciQtdTicket.innerText = iQtdTck;    

    somaPrice(iQtdTck);    
})




 

