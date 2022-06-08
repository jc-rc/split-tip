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


/////

btnCalc.onclick = ()=>{

    if(iptBill.value != 0  && iptCustomer != 0){

        bill=iptBill.value;
        tip=(iptTip.value)/100;
        custCount = iptCustomer.value;

        console.log(bill, tip, custCount);

        txtTotalEqual.innerHTML = "$" + (bill * (1+tip)).toFixed(2)
        txtTipEqual.innerHTML = `$${(bill*tip).toFixed(2)}`
        txtPerCustEqual.innerHTML = `$${(((bill * (1+tip)))/custCount).toFixed(2)}`

        ShowDiv(divNav)
        
        customers.innerHTML = "";

        for(let i=0; i<iptCustomer.value; i++){
            customers.insertAdjacentHTML("beforeend", `

            <div class="col-sm-6">
            <div class="input-group">
                <span class="input-group-text">Customer ${i+1}</span>
                <input id="ipt-contribution-${i+1}" type="number" class="form-control" placeholder="Contribution" aria-label="Contribution"
                    aria-describedby="basic-addon1" min="0" pattern="\d*">
            </div>
        </div>
        <div class="col-6 col-sm-3 text-sm-center text-end">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="ipt-bill-${i+1}"
                    value="option1">
                <label class="form-check-label" for="ipt-bill-${i+1}">Cover Bill</label>
            </div>
        </div>
        <div class="col-6 col-sm-3 text-sm-center text-start mb-3 mb-sm-3">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="ipt-tip-${i+1}"
                    value="option2">
                <label class="form-check-label" for="ipt-tip-${i+1}">Cover Tip</label>
            </div>
        </div>
            `)
        }
    }
    else{
        alert("Please fill every field.")
    }
    
}



btnNavEqual.onclick = ()=>{
    HideDIv(divCustom)
    HideDIv(divResultsCustom)
    ShowDiv(divEqual)
    ShowDiv(divResultsEqual)
}

btnNavCustom.onclick = ()=>{
    HideDIv(divEqual)
    HideDIv(divResultsEqual)
    ShowDiv(divCustom)
    ShowDiv(divResultsCustom)
}

function HideDIv(e){
    e.style.display = "none"
}

function ShowDiv(e){
    e.style.display = "block"
}