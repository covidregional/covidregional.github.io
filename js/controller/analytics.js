let colorChart,countRenderChartsDark=0,countRenderChartsDefault=0,Brasil=[],labelsSinteseUf=[],labelsCityConfirmed=[],labelsCityObito=[],dataConfirmed=[],dataObito=[],dataSintese=[],messageNotChart='\n<div class="message">\n    <h1>Gráficos indisponíveis <i class="fas fa-frown-open"></i></h1>\n    <p>Oops!..sinto muito mas os gráficos de estatistícas sobre as principais cidades regionais estão\n        indisponíveis\n        no momento, nós já estamos buscando resolver! <i class="far fa-smile-wink"></i> Agradeço sua\n        compreensão.\n    </p>\n</div>';const dataAllCitys=()=>{$("#btn_all_citys").prop("onclick",null).off("click"),$("#btn_all_citys").attr("disabled","disabled"),$("#btn_all_citys").html('<i class="fas fa-eye-slash"></i>&nbsp;Ver poucas cidades &nbsp;<i class="fas fa-retweet"></i>&nbsp;'),$("#list_cards").html(""),$("#message_view").html('<h1 style="color: #8498ae; line-height: 25px; font-family: CardTitle; font-weight: 500; text-align: center; margin: 0 20px 0 20px;">Isso pode demorar o tempo de tomar um cafézinho, aguarde... <i style="color: gray;" class="fas fa-redo fa-spin"></i></h1>'),renderAllCitys((e,o)=>{setTimeout(()=>{$("#list_cards").append(e),$("#message_view").html('<h1 style="color: #8498ae; line-height: 25px; font-family: CardTitle; font-weight: 500; text-align: center; margin: 0 20px 0 20px;">Todas cidades do Interior de SP foram listadas.</h1>'),document.querySelector("#btn_all_citys").addEventListener("click",function(){$("#btn_all_citys").html('<i class="fas fa-eye-slash"></i>&nbsp;Ver poucas cidades &nbsp;<i class="fas fa-redo fa-spin"></i>&nbsp;'),setTimeout(()=>{window.location.reload()},2e3)}),$("#btn_all_citys").removeAttr("disabled")},1e4),labelsCityObito=[],(labelsCityConfirmed=[]).push(o.nome),labelsCityObito.push(o.nome)})},dataCovid=()=>{const e=e=>e.toLocaleString("pt-BR"),o=()=>{new Chart(document.getElementById("chart_confirmados"),{type:"bar",data:{datasets:[{label:"Interior de SP",data:dataConfirmed,borderColor:"#0bbb8f",borderWidth:"3",backgroundColor:"#1da584",hoverBackgroundColor:"#ffbb00"}],labels:labelsCityConfirmed},options:{legend:{labels:{fontColor:colorChart}},scales:{yAxes:[{ticks:{fontColor:colorChart,suggestedMin:50,suggestedMax:100}}],xAxes:[{ticks:{beginAtZero:!1,min:50,max:100,fontColor:colorChart}}]},title:{display:!0,text:"Brasil",fontColor:colorChart},tooltips:{mode:"index",intersect:!1},hover:{mode:"index",intersect:!1}}}),new Chart(document.getElementById("chart_mortes"),{type:"bar",data:{datasets:[{label:"Interior de SP",data:dataObito,borderColor:"#e75050",borderWidth:"3",backgroundColor:"#d63434",hoverBackgroundColor:"#ff9100"}],labels:labelsCityObito},options:{legend:{labels:{fontColor:colorChart}},scales:{yAxes:[{ticks:{fontColor:colorChart,suggestedMin:50,suggestedMax:100}}],xAxes:[{ticks:{beginAtZero:!1,min:50,max:100,fontColor:colorChart}}]},title:{display:!0,text:"Brasil",fontColor:colorChart},tooltips:{mode:"index",intersect:!1},hover:{mode:"index",intersect:!1}}}),new Chart(document.getElementById("chart_brasil"),{type:"bar",data:{labels:["Recuperados","Infectados","Óbitos","Acompanhamento"],datasets:[{data:[dataSintese[0].RecuperadosnovosN,dataSintese[0].casosAcumuladoN,dataSintese[0].obitosAcumuladoN,dataSintese[0].emAcompanhamentoNovosN],label:"BR",backgroundColor:"#fc9a29cb",borderColor:"#fc7d29",fill:!1}]},options:{legend:{labels:{fontColor:colorChart}},title:{display:!0,text:"Brasil",fontColor:colorChart},scales:{yAxes:[{ticks:{fontColor:colorChart,suggestedMin:50,suggestedMax:100}}],xAxes:[{ticks:{beginAtZero:!1,min:50,max:100,fontColor:colorChart}}]},tooltips:{mode:"index",intersect:!1},hover:{mode:"index",intersect:!1}}}),new Chart(document.getElementById("chart_regionUf"),{type:"bar",data:{labels:["Infectados","Óbitos"],datasets:[{data:[dataSintese[1].casosAcumulado,dataSintese[1].obitosAcumulado],label:"Centro-Oeste",backgroundColor:"#cf5c189d",borderColor:"#cf5b18",fill:!1},{data:[dataSintese[2].casosAcumulado,dataSintese[2].obitosAcumulado],label:"Sul",backgroundColor:"#8e5ea28e",borderColor:"#8e5ea2",fill:!1},{data:[dataSintese[3].casosAcumulado,dataSintese[3].obitosAcumulado],label:"Norte",backgroundColor:"#ecdd0e9f",borderColor:"#ecde0e",fill:!1},{data:[dataSintese[4].casosAcumulado,dataSintese[4].obitosAcumulado],label:"Nordeste",backgroundColor:"#3cba9fd0",borderColor:"#3cba9f",fill:!1},{data:[dataSintese[5].casosAcumulado,dataSintese[5].obitosAcumulado],label:"Sudeste",backgroundColor:"#630eec91",borderColor:"#630eec",fill:!1}]},options:{legend:{labels:{fontColor:colorChart}},title:{display:!0,text:"Estados",fontColor:colorChart},scales:{yAxes:[{ticks:{fontColor:colorChart,suggestedMin:50,suggestedMax:100}}],xAxes:[{ticks:{beginAtZero:!1,min:50,max:100,fontColor:colorChart}}]},tooltips:{mode:"index",intersect:!1},hover:{mode:"index",intersect:!1}}})};$.get("https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalMunicipio").done(e=>{console.log(e),(e=>(renderCitys(e,!1,(e,o)=>{$("#list_cards").append(e),labelsCityConfirmed.push(o.nome),labelsCityObito.push(o.nome),dataConfirmed.push(o.casosAcumulado),dataObito.push(o.obitosAcumulado),$("#message_view").html('<h1 style="color: #8498ae; line-height: 25px; font-family: CardTitle; font-weight: 500; text-align: center; margin: 0 20px 0 20px;">Essas cidades são para a visualização padrão da página</h1>'),$("#btn_all_citys").on("click",function(){$("#btn_all_citys").prop("onclick",null).off("click"),$("#btn_all_citys").attr("disabled","disabled"),$("#btn_all_citys").html('<i class="fas fa-eye-slash"></i>&nbsp;Ver poucas cidades &nbsp;<i class="fas fa-retweet"></i>&nbsp;'),$("#list_cards").html(""),$("#message_view").html('<h1 style="color: #8498ae; line-height: 25px; font-family: CardTitle; font-weight: 500; text-align: center; margin: 0 20px 0 20px;">Isso pode demorar o tempo de tomar um cafézinho, aguarde... <i style="color: gray;" class="fas fa-redo fa-spin"></i></h1>'),renderAllCitys((e,o)=>{setTimeout(()=>{$("#list_cards").append(e),$("#message_view").html('<h1 style="color: #8498ae; line-height: 25px; font-family: CardTitle; font-weight: 500; text-align: center; margin: 0 20px 0 20px;">Todas cidades do Interior de SP foram listadas.</h1>'),document.querySelector("#btn_all_citys").addEventListener("click",function(){$("#btn_all_citys").html('<i class="fas fa-eye-slash"></i>&nbsp;Ver poucas cidades &nbsp;<i class="fas fa-redo fa-spin"></i>&nbsp;'),setTimeout(()=>{window.location.reload()},2e3)}),$("#btn_all_citys").removeAttr("disabled")},1e4),labelsCityObito=[],(labelsCityConfirmed=[]).push(o.nome),labelsCityObito.push(o.nome)})})}),new Promise((e,o)=>{dataConfirmed.length>=3?$.get("https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalSintese").done(o=>{console.log(o),o.map(e=>{"Brasil"==e.regiao&&Brasil.push(e),e._id&&labelsSinteseUf.push(e._id),e&&dataSintese.push(e)}),$("#latest_update").html(`${o[0].dataFormat}/${(new Date).getFullYear()}`),e()}):($(".group__charts").remove(),$("#chart_not").addClass("little__data"),$("#chart_not").html(messageNotChart))}).then(()=>{$(".loader__charts").remove(),o()})))(e)}).fail(()=>{console.log({error:"error request PortalMunicipio"})}),$.get("https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi").done(o=>{(o=>{console.log({api_gov_br:o}),$("#acumulados_brasil").html(e(Number(o.confirmados.total))),$("#registros_brasil").html(e(Number(o.confirmados.novos))),$("#acompanhamento_brasil").html(e(Number(o.confirmados.acompanhamento))),$("#recuperados_brasil").html(e(Number(o.confirmados.recuperados))),$("#incidencia_brasil").html(`${o.confirmados.incidencia}%`),$("#acumulados_obitos").html(e(Number(o.obitos.total))),$("#registros_obitos").html(e(Number(o.obitos.novos))),$("#letalidade_obitos").html(`${o.obitos.letalidade}%`),$("#mortalidade_obitos").html(`${o.obitos.mortalidade}%`)})(o)}).fail(()=>{console.log({error:"error request PortalMunicipio"})}),setInterval(()=>{1==localStorage.getItem("renderChart")&&(o(),localStorage.setItem("renderChart",0))},500)};dataCovid();