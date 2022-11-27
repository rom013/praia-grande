document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault()
    openModal(true)
})

const inputDateUser = document.querySelector("#inputDate")
inputDateUser.addEventListener("blur", ()=>{
    calculateAge(inputDateUser)
})

function openModal(a){
    const $inputBairro = document.querySelector("#inputBairro")
    const $observacao = document.querySelector("#observacao")
    const valuesInputs = readInput()   

    const x = document.querySelector("#exampleModal")
    x.innerHTML = ""
    if(a){
        x.insertAdjacentHTML("afterbegin", `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul class="list-group list-group-flush" id="listModal">
                            <li class="list-group-item">Nome completo: ${valuesInputs.$fullName.value}</li>
                            <li class="list-group-item">Data de nascimento: ${valuesInputs.$inputDate.value}</li>
                            <li class="list-group-item">Endereço: ${valuesInputs.$inputEnder.value}</li>
                            <li class="list-group-item">Cidade que reside: ${valuesInputs.$inputCity.value}</li>
                            <li class="list-group-item">Bairro: ${$inputBairro.value}</li>
                            <li class="list-group-item">UF: ${valuesInputs.$inputState.value}</li>
                            <li class="list-group-item">Celular: ${valuesInputs.$cel.value}</li>
                            <li class="list-group-item">Ponto turístico: ${valuesInputs.$inputTur.value}</li>
                            <li class="list-group-item">Data visita: ${valuesInputs.$dateVisit.value}</li>
                            <li class="list-group-item">Observação: ${$observacao.value}</li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Corrigir</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick="sendData()">Agendar</button>
                    </div>
                </div>
            </div>
        `)
        if(valuesInputs.$nameRes != ''){
            document.querySelector('#listModal').insertAdjacentHTML("beforeend", `
                <li class="list-group-item">Nome completo do responsavel: ${valuesInputs.$nameRes.value}</li>
                <li class="list-group-item">Data de nascimento do responsavel: ${valuesInputs.$dateRes.value}</li>
            `)
        }

    }
}
function sendData(){
    const $inputBairro = document.querySelector("#inputBairro")
    const $observacao = document.querySelector("#observacao")

    document.body.insertAdjacentHTML("afterbegin", `
        <div class="w-100 position-fixed bottom-0 d-flex justify-content-center" style="z-index: 999999" id="successAlert">
            <div class="alert alert-success w-50 d-flex align-items-center" role="alert">
                <lord-icon src="https://cdn.lordicon.com/egiwmiit.json" 
                    trigger="loop" 
                    colors="primary:#0f5132"
                    style="width:32px;height:32px"
                    class="mx-4"
                    delay="1000"
                >
                </lord-icon>
                <span>A sua visita foi agendada, fique atento para não perder a data marcada.</span>
            </div>
        </div>
    `)
    setTimeout(()=>{
        document.querySelector("#successAlert").classList.add("show-alert")
        setTimeout(()=>{
            window.location.reload()
        }, 6000)
    }, 10000)
    let valuesInputs = readInput()
    for(let i in valuesInputs){
        valuesInputs[i].disabled = true
    }
    $inputBairro.disabled = true
    $observacao.disabled = true
}
function validationInputs(){
    let values = readInput()
    
    for(let i in values){
        if(values[i].value == '' || values[i].value == null || values[i].value == undefined){
            values[i].classList.add("is-invalid")
        }
        else{
            values[i].classList.remove("is-invalid")
        }
    }


    let returnDateValidation = validDateBirth(values.$inputDate)

    if(returnDateValidation == '' || !returnDateValidation){
        values.$inputDate.classList.add("is-invalid")
        console.log("dad");
    }
    else{
        console.log("daaw");
        values.$inputDate.classList.remove("is-invalid")
    }
    if(values.$cel.value.length-5 <= 10){
        values.$cel.classList.add("is-invalid")
        values.$cel.value = ""
    }
    else{
        values.$cel.classList.remove("is-invalid")
    }
}

function validDateBirth(a){
    let dateUser = parseInt(a.value.substr(0,4))
    let newDate = new Date().getFullYear()

    if(dateUser < (newDate - 100) || dateUser > newDate || a.value == ''){
        return false
    }
    else {
        return true
    }
}
function validDateVisit(dateVisit){
    const yearVisitChosen = parseInt(dateVisit.value.substr(0,4))
    const dayVisitChosen = parseInt(dateVisit.value.substr(8,9))
    const monthVisitChosen = parseInt(dateVisit.value.substr(5,6))
    const newDateDay = new Date().getDate()
    const newDateYear = new Date().getFullYear()
    const newDateMonth = new Date().getMonth() + 1

    if(yearVisitChosen < newDateYear || monthVisitChosen < newDateMonth || (dayVisitChosen < newDateDay && monthVisitChosen <= newDateMonth)){
        dateVisit.classList.add("is-invalid")
    }  
    if(yearVisitChosen > newDateYear){
        dateVisit.classList.remove("is-invalid")   
    }
}

function readInput(){
    return {
        $fullName : document.querySelector("#inputName"),
        $inputDate : document.querySelector("#inputDate"),
        $inputEnder : document.querySelector("#inputEnder"),
        $inputCity : document.querySelector("#inputCity"),
        $inputState : document.querySelector("#inputState"),
        $cel : document.querySelector("#inputCel"),
        $inputTur : document.querySelector("#inputTur"),
        $dateVisit : document.querySelector("#dateVisit"),
        $dateRes : document.querySelector("#dateRes"),
        $nameRes : document.querySelector("#nameRes"),
    }
}

function calculateAge(date){
    const responsibleField = document.querySelector("#responsibleField")
    const $dateRes = document.querySelector("#dateRes")
    const $nameRes = document.querySelector("#nameRes")
    const dateUser = parseInt(date.value.substr(0,4))
    const newDate = new Date().getFullYear()
    const age = newDate - dateUser

    if(validDateBirth(date)){
        if(age < 18){
            responsibleField.classList.remove('d-none')
            $dateRes.setAttribute("required", true)
            $nameRes.setAttribute("required", true)
        }
        else{
            responsibleField.classList.add('d-none')
            $dateRes.removeAttribute('required')
            $nameRes.removeAttribute('required')
        }
    }
}


var cel = document.querySelector("#inputCel")
var maska = {
    mask : "(00) 0 0000 0000"
}

IMask(cel , maska)