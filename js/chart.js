function openChart(id){
    let ctx = document.getElementById(`${id}_CHART`);

    if(ctx.id == `IDHM_CHART`){

        //chart IDHM

        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [1991, 2000, 2010],
                datasets: [{
                    data: ["0.538","0.686","0.754"],
                }]
            },
            options: {
                elements:{
                    point: {
                        borderColor: 'rgba(5,199,242,.3)',
                        borderWidth: 8,
                        hoverBorderWidth: 18,
                        hitRadius: 9,
                        backgroundColor: "#07F9A0"
                    },  
                    line:{
                        borderColor: 'rgb(5,199,242)',
                        borderWidth: 2,
                        lineTension: 0
                    }
                },
                plugins:{
                    legend: {
                        display: false,
                    },
                    tooltip:{
                        padding: 15,
                        backgroundColor: 'rgba(0,0,0, .8)',
                        titleColor: "#07F9A0",
                        usePointStyle: true,
                        callbacks: {
                            labelPointStyle: function() {
                                return {
                                    pointStyle: 'star',
                                    rotation: 0,
                                };
                            },
                        }
                    }       
                }    
            }
        });
    }
    else if(ctx.id == `MortInfa_CHART`){

        //chart mortalidade infantil

        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
                datasets: [{
                    data: ["15.16","22.65","16.71","19.52","12.47","13.84","14.24","14.48","12.3","17.32","13.73","13.83","13.3","16.25","10.52"],
                }]
            },
            options: {
                elements:{
                    point: {
                        borderColor: 'rgba(5,199,242,.3)',
                        borderWidth: 8,
                        hoverBorderWidth: 18,
                        hitRadius: 9,
                        backgroundColor: "#07F9A0"
                    },  
                    line:{
                        borderColor: 'rgb(5,199,242)',
                        borderWidth: 2,
                        lineTension: 0
                    }
                },
                plugins:{
                    legend: {
                        display: false,
                    },
                    tooltip:{
                        padding: 15,
                        backgroundColor: 'rgba(0,0,0, .8)',
                        titleColor: "#07F9A0",
                        usePointStyle: true,
                        callbacks: {
                            labelPointStyle: function() {
                                return {
                                    pointStyle: 'star',
                                    rotation: 0,
                                };
                            },
                            label: function(tooltipItem){
                                return `${tooltipItem.formattedValue} óbitos por mil nascidos vivos`;   
                            }
                        }
                    }       
                }    
            }
        });
    }
    else if(ctx.id == `ReceReal_CHART`){

        //chard Receitas realizadas
        
        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["2013","2014","2015","2016","2017"],
                datasets: [{
                    data: ["982805.10391","1116688.79457","1218574.06128","1381909.93092","1416820.99938"],
                }]
            },
            options: {
                elements:{
                    point: {
                        borderColor: 'rgba(5,199,242,.3)',
                        borderWidth: 8,
                        hoverBorderWidth: 18,
                        hitRadius: 9,
                        backgroundColor: "#07F9A0"
                    },  
                    line:{
                        borderColor: 'rgb(5,199,242)',
                        borderWidth: 2,
                        lineTension: 0
                    }
                },
                plugins:{
                    legend: {
                        display: false,
                    },
                    tooltip:{
                        padding: 15,
                        backgroundColor: 'rgba(0,0,0, .8)',
                        titleColor: "#07F9A0",
                        usePointStyle: true,
                        callbacks: {
                            labelPointStyle: function() {
                                return {
                                    pointStyle: 'star',
                                    rotation: 0,
                                };
                            },
                            label: function(tooltipItem){
                                return `R$ ${tooltipItem.formattedValue}`
                            }
                        }
                    }       
                }    
            }
        });
    }
    else if(ctx.id == `PIB_CHART`){

        //chard PIB

        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"],
                datasets: [{
                    data: ["12565.38","13842.00","15832.18","17246.48","18767.21","21198.42","20338.38","21589.86","22065.35","23432.68"],
                }]
            },
            options: {
                elements:{
                    point: {
                        borderColor: 'rgba(5,199,242,.3)',
                        borderWidth: 8,
                        hoverBorderWidth: 18,
                        hitRadius: 9,
                        backgroundColor: "#07F9A0"
                    },  
                    line:{
                        borderColor: 'rgb(5,199,242)',
                        borderWidth: 2,
                        lineTension: 0
                    }
                },
                plugins:{
                    legend: {
                        display: false,
                    },
                    tooltip:{
                        padding: 15,
                        backgroundColor: 'rgba(0,0,0, .8)',
                        titleColor: "#07F9A0",
                        usePointStyle: true,
                        callbacks: {
                            labelPointStyle: function() {
                                return {
                                    pointStyle: 'star',
                                    rotation: 0,
                                };
                            },
                            label: function(tooltipItem){
                                return `R$ ${tooltipItem.formattedValue}`
                            }
                        }
                    }       
                }    
            }
        });
    }
    else if(ctx.id == `DespEmpen_CHART`){

        //cahrd Despesas_empenhadas

        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["2013","2014","2015","2016","2017"],
                datasets: [{
                    data: ["898841.2974","1013324.27969","1140178.79349","1260392.87994","1282662.66264"],
                }]
            },
            
            options: {
                elements:{
                    point: {
                        borderColor: 'rgba(5,199,242,.3)',
                        borderWidth: 8,
                        hoverBorderWidth: 18,
                        hitRadius: 9,
                        backgroundColor: "#07F9A0"
                    },  
                    line:{
                        borderColor: 'rgb(5,199,242)',
                        borderWidth: 2,
                        lineTension: 0
                    }
                },
                plugins:{
                    legend: {
                        display: false,
                    },
                    tooltip:{
                        padding: 15,
                        backgroundColor: 'rgba(0,0,0, .8)',
                        titleColor: "#07F9A0",
                        usePointStyle: true,
                        callbacks: {
                            labelPointStyle: function() {
                                return {
                                    pointStyle: 'star',
                                    rotation: 0,
                                };
                            },
                            label: function(tooltipItem){
                                return `R$ ${tooltipItem.formattedValue}`
                            }
                        }
                    }       
                }    
            }
        });
    }
}