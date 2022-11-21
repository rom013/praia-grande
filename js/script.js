let inputsTypedata = [...document.querySelectorAll("input[type=radio]")]
inputsTypedata.forEach((e)=>{
    e.addEventListener("change", ()=>{
        changeDataChart(e.id)
    })
})

function changeDataChart(id){
    let readCanvas = document.querySelector("canvas")
    let readTitle = document.querySelector("#titleTypeData")
    
    if(id === "IDHM"){
        readTitle.textContent = "IDHM (Índice de desenvolvimento humano de município)"
        addCanvas(id, 2010)
    }
    else if(id == "MortInfa"){ 
        readTitle.textContent = "Mortalidade infantil"
        addCanvas(id, 2020)
    }
    else if(id == "ReceReal"){
        readTitle.textContent = "Receitas realizadas"
        addCanvas(id, 2017)
    }
    else if(id == "DespEmpen"){
        readTitle.textContent = "Despesas empenhadas"
        addCanvas(id, 2017)
    }
    else if(id == "PIB"){
        readTitle.textContent = "PIB per capita"
        addCanvas(id, 2019)
    }
    else if(id == "DadosGeo"){
        let areaChart = document.querySelector("#areaChart")
        readTitle.textContent = "Mais Dados"
        areaChart.textContent = ""
    }
}

function addCanvas(id, year){
    let areaChart = document.querySelector("#areaChart")
    areaChart.textContent = ""
    areaChart.insertAdjacentHTML("afterbegin", `
        <canvas class="my-4 w-100" id="${id}_CHART" width="900" height="380"></canvas>
        <span class="text-muted">Font: IBGE/ ${year}</span>
    `)
    openChart(id)
}



// start slide eventos
const btnR = document.querySelector(".btnRight")
let index = 0
const btns = [...document.querySelectorAll('.btn-nav')]
const slide = document.querySelectorAll('.slide')
btns.forEach((e) => {
    e.addEventListener("click", () => {
        const r = e.classList.contains('btnRight')
        if (r) {
            index += 1
        }
        else {
            index -= 1
        }
        if (index >= (slide.length)) {
            index = 0
        }

        if (index < 0) {
            index = slide.length - 1
        }
        slide[index].scrollIntoView({
            inline: "center",
            block: "center"
        })
    })
})
//end slide eventos