const renderCitys=(o,l,r)=>{const a=o=>o.toLocaleString("pt-BR");o.map(o=>{let t="",e=o.nome,c=o.cod.substr(0,2);l?35==c&&(t+=`\n                <div ${1==localStorage.getItem("dark")?'style="background-color: #202020;"':'style="background-color: #FFFFFF"'} class="card__covid" id="city_${o.cod}">\n                    <div class="card__title">\n                        <h1 ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>${o.nome}&nbsp;<i style="color: #8498ae; font-size: 18px;" class="fas fa-map-marker-alt"></i></h1>\n                    </div>\n                    <div class="card__content">\n                        <div class="card_column__info">\n                            <h1 ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>${a(Number(o.casosAcumulado))}</h1>\n                            <p ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>Casos confirmados</p>\n                        </div>\n                        <div class="card_column__info">\n                            <h1 ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>${a(Number(o.obitosAcumulado))}</h1>\n                            <p ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>Óbitos</p>\n                        </div>\n                        <div class="card_column__info">\n                            <h1 ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>São Paulo</h1>\n                            <p ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>Estado</p>\n                        </div>\n                    </div>\n                </div>`,r(t,o)):("Garça"===e&&35==c||"Marília"===e&&35==c||"São Carlos"===e&&35==c||"Hortolândia"===e&&35==c||"Bauru"===e&&35==c||"Fernão"===e&&35==c||"Vera Cruz"===e&&35==c||"Lins"===e&&35==c||"Pompéia"===e&&35==c||"Duartina"===e&&35==c||"Campinas"===e&&35==c||"Jaú"===e&&35==c||"Piratininga"===e&&35==c||"Pirajuí"===e&&35==c||"Gália"===e&&35==c||"Álvaro de Carvalho"===e&&35==c)&&(t+=`\n                <div ${1==localStorage.getItem("dark")?'style="background-color: #202020;"':'style="background-color: #FFFFFF"'} class="card__covid" id="city_${o.cod}">\n                    <div class="card__title">\n                        <h1 ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>${o.nome}&nbsp;<i style="color: #8498ae; font-size: 18px;" class="fas fa-map-marker-alt"></i></h1>\n                    </div>\n                    <div class="card__content">\n                        <div class="card_column__info">\n                            <h1 ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>${a(Number(o.casosAcumulado))}</h1>\n                            <p ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>Casos confirmados</p>\n                        </div>\n                        <div class="card_column__info">\n                            <h1 ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>${a(Number(o.obitosAcumulado))}</h1>\n                            <p ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>Óbitos</p>\n                        </div>\n                        <div class="card_column__info">\n                            <h1 ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>São Paulo</h1>\n                            <p ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>Estado</p>\n                        </div>\n                    </div>\n                </div>`,r(t,o))})},renderAllCitys=o=>{$.get("https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalMunicipio").done(l=>{const r=o=>o.toLocaleString("pt-BR");l.map(l=>{let a="";35==l.cod.substr(0,2)&&(a+=`\n                    <div ${1==localStorage.getItem("dark")?'style="background-color: #202020;"':'style="background-color: #FFFFFF"'} class="card__covid" id="city_${l.cod}">\n                        <div class="card__title">\n                            <h1 ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>${l.nome}&nbsp;<i style="color: #8498ae; font-size: 18px;" class="fas fa-map-marker-alt"></i></h1>\n                        </div>\n                        <div class="card__content">\n                            <div class="card_column__info">\n                                <h1 ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>${r(Number(l.casosAcumulado))}</h1>\n                                <p ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>Casos confirmados</p>\n                            </div>\n                            <div class="card_column__info">\n                                <h1 ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>${r(Number(l.obitosAcumulado))}</h1>\n                                <p ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>Óbitos</p>\n                            </div>\n                            <div class="card_column__info">\n                                <h1 ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>São Paulo</h1>\n                                <p ${1==localStorage.getItem("dark")?'style="color: rgb(240, 240, 240)"':'style="color: #000000"'}>Estado</p>\n                            </div>\n                        </div>\n                    </div>`,o(a,l))})}).fail(()=>{console.log({error:"error request PortalMunicipio"})})};