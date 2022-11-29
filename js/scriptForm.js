document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault()
})

function openModal(){
    const $inputBairro = document.querySelector("#inputBairro")
    const $observacao = document.querySelector("#observacao")
    const $fullName = document.querySelector("#inputName")
    const $inputDate = document.querySelector("#inputDate")
    const $inputEnder = document.querySelector("#inputEnder")
    const $inputCity = document.querySelector("#inputCity")
    const $inputState = document.querySelector("#inputState")
    const $cel = document.querySelector("#inputCel")
    const $inputTur = document.querySelector("#inputTur")
    const $dateVisit = document.querySelector("#dateVisit")
    const $dateRes = document.querySelector("#dateRes")
    const $nameRes = document.querySelector("#nameRes")
    
    
    const x = document.querySelector("#exampleModal")
    x.innerHTML = ""
    x.insertAdjacentHTML("afterbegin", `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul class="list-group list-group-flush" id="listModal">
                        <li class="list-group-item">Nome completo: ${$fullName.value}</li>
                        <li class="list-group-item">Data de nascimento: ${$inputDate.value}</li>
                        <li class="list-group-item">Endereço: ${$inputEnder.value}</li>
                        <li class="list-group-item">Cidade que reside: ${$inputCity.value}</li>
                        <li class="list-group-item">Bairro: ${$inputBairro.value}</li>
                        <li class="list-group-item">UF: ${$inputState.value}</li>
                        <li class="list-group-item">Celular: ${$cel.value}</li>
                        <li class="list-group-item">Ponto turístico: ${$inputTur.value}</li>
                        <li class="list-group-item">Data visita: ${$dateVisit.value}</li>
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
    if($nameRes != null && $dateRes != null){
        document.querySelector("#listModal").insertAdjacentHTML("beforeend", `
            <li class="list-group-item">Nome completo do responsável: ${$nameRes.value}</li>
            <li class="list-group-item">Data de nascimento do responsável: ${$dateRes.value}</li>
        `)
    }
}
function sendData(){
    const campos = [...document.querySelectorAll(".required")]
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

    for(let i in campos){
        campos[i].disabled = true
    }
    $inputBairro.disabled = true
    $observacao.disabled = true
}

let countError = 0

function validationInputs(){
    const y = document.querySelector("#exampleModal")
    y.innerHTML = ""
    y.insertAdjacentHTML("afterbegin", `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header justify-content-center">
                    <h1 class="align-items-center d-flex flex-column-reverse fs-5 modal-title text-danger" id="exampleModalLabel">Opss!
                        <lord-icon src="https://cdn.lordicon.com/bmnlikjh.json" 
                            trigger="loop" 
                            colors="primary:#e83a30"
                            style="width:32px;height:32px"
                            class="mx-4"
                            delay="1000"
                            >
                        </lord-icon>
                    </h1>
                    <button type="button" class="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close" style="right: 32px;"></button>
                </div>
                <div class="modal-body">
                    Preencha todos os campos em destaque.
                </div>
            </div>
        </div>
    `)

    const campos = [...document.querySelectorAll(".required")]
    countError = 0

    validationCel()

    for(let i in campos){
        if(campos[i].value == '' || campos[i].value == undefined || campos[i].value == null || campos[i].value.length < 2){
            campos[i].classList.add('is-invalid')
        }
        
        else{
            campos[i].classList.remove('is-invalid')
        }

        if(campos[i].classList[2] == 'is-invalid'){
            countError++
        }
    }
    
    console.log(countError);
    if(countError == 0){
        console.log("eeeh");
        openModal()
    }
}

function dateValidation(){
    const campos = [...document.querySelectorAll(".required")]
    
    const yearUser = parseInt(campos[1].value.substr(0,4))
    const dayUser = parseInt(campos[1].value.substr(8,9))
    const monthUser = parseInt(campos[1].value.substr(5,6))
    const newDateDay = new Date().getDate()
    const newDateYear = new Date().getFullYear()
    const newDateMonth = new Date().getMonth() + 1

    if(yearUser <= newDateYear && yearUser > (newDateYear - 100)){
        campos[1].classList.remove("is-invalid")
        const age = newDateYear - yearUser
    
        if(newDateMonth <= monthUser){
            if(newDateDay < dayUser){
                age--
                if(age < 18){
                    activeResponsibleField(true)
                }  
                else{
                    activeResponsibleField(false)
                }
            }
        }
        else{
            if(age < 18){
                activeResponsibleField(true)
            }  
            else{
                activeResponsibleField(false)
            }
        }
    }
    else{
        campos[1].classList.add("is-invalid")
        campos[1].value = ""
    }
}

function validationCel(){
    let $cel = document.querySelector("#inputCel")
    if($cel.value.length-5 <= 10){
        $cel.classList.add("is-invalid")
        $cel.value = ""
    }
    else{
        $cel.classList.remove("is-invalid")
    }
}


var cel = document.querySelector("#inputCel")
var maska = {
    mask : "(00) 0 0000 0000"
}
IMask(cel , maska)


function activeResponsibleField(age){
    const responsibleForm = document.querySelector("#responsibleField")
    if(age){
        responsibleForm.innerHTML = ""
        responsibleForm.insertAdjacentHTML("afterbegin", `
            <hr>
            <p class="text-muted mb-4 small">Você não é maior de idade, complete os campos a baixo</p>
            <div class="col-12 mt-3">
                <label for="nameRes" class="form-label">Nome completo do responsável <span
                        class="text-danger">*</span></label>
                <input type="text" class="form-control required" id="nameRes" autocomplete="true">
            </div>
            <div class="col-md-6 mt-3">
                <label for="dateRes" class="form-label">Data de nascimento do responsável <span
                        class="text-danger">*</span></label>
                <input type="date" class="form-control required" id="dateRes" onblur="validationDateResponsible()">
            </div>
            <hr>
        `)
    }
    else{
        responsibleForm.innerHTML = ""
    }
}

function validationDateResponsible(){
    let dateRes = document.querySelector("#dateRes")
    let yearRes = parseInt(dateRes.value.substr(0,4))
    let newDate = new Date().getFullYear()
    
    if(yearRes > (newDate - 18) || yearRes < (newDate - 100)){
        dateRes.classList.add("is-invalid")
    }
    else{
        dateRes.classList.remove("is-invalid")
    }
}