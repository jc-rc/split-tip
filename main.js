const divNav = document.querySelector("#div-nav")
const btnNavEqual = document.querySelector("#btnradio1")
const btnNavCustom = document.querySelector("#btnradio2")
const btnCalc = document.querySelector("#btn-calc")

const divEqual = document.querySelector("#div-equal-split")
const divCustom = document.querySelector("#div-custom-split")
const divResultsEqual = document.querySelector("#div-results-equal")
const divResultsCustom = document.querySelector("#div-results-custom")

const iptBill = document.querySelector("#ipt-bill")
const iptTip = document.querySelector("#ipt-tip")
const iptCustomer = document.querySelector("#ipt-customer")

const customers = document.querySelector("#customers")

const txtTotalEqual = document.querySelector("#txt-total-equal")
const txtTipEqual = document.querySelector("#txt-tip-equal")
const txtPerCustEqual = document.querySelector("#txt-percust-equal")
const txtRemainCustom = document.querySelector("#txt-remain-custom")


divNav.style.display = "none";
divEqual.style.display = "none";
divCustom.style.display = "none";
divResultsEqual.style.display = "none";
divResultsCustom.style.display = "none";


/////

var bill 
var tip 
var custCount 

var total 
var tipCalc 
var perCustEqual 
var remainingCustom 

/////

btnCalc.onclick = () => {

    if (iptBill.value != 0 && iptCustomer != 0) {

        bill = iptBill.value;
        tip = (iptTip.value) / 100;
        custCount = iptCustomer.value;

        total = (bill * (1 + tip))
        tipCalc = bill * tip
        perCustEqual = total / custCount
        remainingCustom = total;

        console.log(bill, tip, custCount);

        txtTotalEqual.innerHTML = "$" + total.toFixed(2)
        txtTipEqual.innerHTML = `$${tipCalc.toFixed(2)}`
        txtPerCustEqual.innerHTML = `$${perCustEqual.toFixed(2)}`
        txtRemainCustom.innerHTML = `$${remainingCustom.toFixed(2)}`

        ShowDiv(divNav)
        btnNavEqual.click()

        customers.innerHTML = "";

        for (let i = 0; i < iptCustomer.value; i++) {
            customers.insertAdjacentHTML("beforeend", `

            <div class="col-12 mx-auto my-2">
                <div class="input-group">
                <span class="input-group-text">Customer ${i + 1}</span>
                <input oninput="customFunc(this)" id="ipt-contribution-${i + 1}" type="number" class="form-control" placeholder="${perCustEqual.toFixed(2)}" aria-label="Contribution" aria-describedby="basic-addon1" min="0" pattern="\d*">
                </div>
            </div>
    
            `)
        }
    }
    else {
        alert("Please fill required (*) fields.")
    }

}



btnNavEqual.onclick = () => {
    HideDIv(divCustom)
    HideDIv(divResultsCustom)
    ShowDiv(divEqual)
    ShowDiv(divResultsEqual)
}

btnNavCustom.onclick = () => {
    HideDIv(divEqual)
    HideDIv(divResultsEqual)
    ShowDiv(divCustom)
    ShowDiv(divResultsCustom)
}

function customFunc(e){
    
    let tempRemain =  e.value;
    if(remainingCustom>=0){
        remainingCustom -= tempRemain;
        // txtRemainCustom.innerHTML = `$${remainingCustom.toFixed(2)}`
        console.log(e.id, tempRemain, remainingCustom)
        }
    
}

function HideDIv(e) {
    e.style.display = "none"
}

function ShowDiv(e) {
    e.style.display = "block"
}