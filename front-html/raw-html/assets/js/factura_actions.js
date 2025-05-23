async function traerDatosClientArtFacturas(){
    postRequest('default/get/cliente/0', new FormData()).then(listadoClientes => {
        if(listadoClientes.res.length == 0){
            showM('Para crear factura al menos tiene que tener 1 cliente creado previamente..', 'warning');
        }
        LISTADO_CLIENTES_FACTURAS = [];
        LISTADO_CLIENTES_FACTURAS = listadoClientes.res;
    });
    postRequest('default/get/articulo/0', new FormData()).then(listadoArticles => {
        if(listadoArticles.res.length == 0){
            showM('Para crear factura al menos tiene que tener 1 artículo creado previamente..', 'warning');
        }
        LISTADO_ARTICULOS_FACTURAS = [];
        LISTADO_ARTICULOS_FACTURAS = listadoArticles.res;
    });
    postRequest('default/get/empresa/0', new FormData()).then(empresaData => {
        if(empresaData.res.length == 0){
            showM('Para crear factura al menos rellene los datos de la empresa..', 'warning');
        }
        EMPRESA_FACTURAS = {};
        EMPRESA_FACTURAS = empresaData.res[0];
        document.getElementById('precioManoObra').value = EMPRESA_FACTURAS.price;
    });
}

function showFormInvoiceCreation(){
    LINE_COUNTER = 0;
    /* traer listado de clientes y articulos */
    traerDatosClientArtFacturas();

    pageTitle.innerText = 'Crear Factura'
    let htmlTipeInvoice = '<select id="selectTypeInvoice" onchange="cambioTipoFacturaMano(event)">';
    INVOICES_LIST.forEach(invoiceLine => { htmlTipeInvoice += `<option value="${invoiceLine.letter}">${invoiceLine.title}</option>`; });
    htmlTipeInvoice += '</select>';
    let htmlSkeleton = `<div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="card shadow mb-3">
                                        <div class="card-header py-1">
                                            <h6 class="m-0 font-weight-bold text-primary">Tipo Factura</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="mt-0 mb-1 "><code>Tipo Ordinaria/Rectificativa/Abono</code></div>
                                            ${htmlTipeInvoice}
                                            <div id="espacioParaSelectTypeFactura"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="card shadow mb-3">
                                        <div class="card-header py-1">
                                            <h6 class="m-0 font-weight-bold text-primary">Datos cliente y tipo de factura</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-lg-3" style="display:none;">
                                                    <input type="text" id="clientIdDeveloper" disabled>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="mt-0 mb-0"><code>Número cliente</code></div>
                                                    <input type="text" id="clientNumber" disabled>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="mt-0 mb-0"><code>NIF CIF cliente</code></div>
                                                    <input type="text" id="inputNifCif" disabled>
                                                </div>
                                            </div>
                                            <div class="mt-2 mb-1 "><code>Razón o denominación social</code></div>
                                            <input type="text" id="autocomplete_input" placeholder="Nombre cliente" oninput="handleInputClient(event)">
                                            <div id="suggestions" class="suggestions-list"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="card shadow mb-3">
                                        <div class="card-header py-1">
                                            <h6 class="m-0 font-weight-bold text-primary">Datos vehículo</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="mt-0 mb-1 "><code>Matrícula</code></div>
                                            <input type="text" id="inputVehicleMatricula" value="">
                                            <div class="mt-2 mb-1 "><code>Marca/Modelo/Kilómetros</code></div>
                                            <input type="text" id="inputVehicleMarca" value="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                   <div class="card shadow mb-3">
                                        <div class="card-header py-1">
                                            <h6 class="m-0 font-weight-bold text-primary">Líneas de factura</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-lg-1"><code>Codígo Art.</code></div>
                                                <div class="col-lg-4"><code>Descripción Art.</code></div>
                                                <div class="col-lg-1"><code>Cantidad</code></div>
                                                <div class="col-lg-2"><code>Precio</code></div>
                                                <div class="col-lg-1"><code>% Dto. </code></div>
                                                <div class="col-lg-1"><code>Importe</code></div>
                                                <div class="col-lg-1"><code>IVA</code></div>
                                                <div class="col-lg-1"></div>
                                            </div>
                                            <div id="divContrainerNewLines">
                                                <div class="row mt-1" id="deleteDivNumber0" data-line_counter="0">
                                                    <div class="col-lg-1"><input type="number" class="suzdal_none" id="idArt0"><input type="number" disabled="" id="numberArt0"></div>
                                                    <div class="col-lg-4">
                                                        <input type="text" id="descriptionArt0" oninput="handleInputDescription(0, event)">
                                                        <div id="suggestionsArticles0" class="suggestions-list"></div>    
                                                    </div>
                                                    <div class="col-lg-1"><input type="number" id="cantidadArt0" value="1" oninput="invoiceCalculate()"></div>
                                                    <div class="col-lg-2"><input type="number" id="precioArt0" oninput="invoiceCalculate()"></div>
                                                    <div class="col-lg-1"><input type="number" value="0" id="descuentoArt0" oninput="invoiceCalculate()"></div>
                                                    <div class="col-lg-1"><input type="number" disabled="" id="totalArt0"></div>
                                                    <div class="col-lg-1" id="ivaArt0"><select class="factura_select" oninput="invoiceCalculate()" id="selectIva0"><option value="21"> 21 % </option><option value="10"> 10 % </option><option value="4"> 4 % </option><option value="0"> 0 % </option><option value="0EXENTO"> 0 EXENTO </option></select></div>
                                                    <div class="col-lg-1"> <i class="fa fa-trash" aria-hidden="true" onclick="deleteThisDiv(0)"></i></div>
                                                </div>
                                            </div>
                                            <div class="row mt-4">
                                                <div class="col-lg-1"><span class="simulate_link" onclick="idAddNewLine()"><i class="fa fa-plus" aria-hidden="true"></i> Linea</span></div>
                                            </div>
                                            <div class="row mt-1">
                                                <div class="col-lg-1"></div>
                                                <div class="col-lg-4"><input type="text" value="Mano de obra" disabled></div>
                                                <div class="col-lg-1"><input type="number" id="cantidadManoObra" value="" oninput="invoiceCalculate()"></div>
                                                <div class="col-lg-2"><input type="number" id="precioManoObra" oninput="invoiceCalculate()"></div>
                                                <div class="col-lg-1"><input type="number" value="" id="descuentoManoObra" oninput="invoiceCalculate()"></div>
                                                <div class="col-lg-1"><input type="number" disabled id="totalManoObra"></div>
                                                <div class="col-lg-1"><select class="factura_select" id="ivaManoObra" oninput="invoiceCalculate()"><option value="21"> 21 % </option><option value="10"> 10 % </option><option value="4"> 4 % </option><option value="0"> 0 % </option><option value="0EXENTO"> 0 EXENTO </option></select></div>
                                                <div class="col-lg-1"></div>
                                            </div>
                                            <br>
                                            <div class="row mb-1"><div class="col-lg-10"></div><div class="col-lg-2">
                                                <table cellpadding="1"><tbody>
                                                        <tr><td><code>Subtotal:</code></td><td class="align_right"><code id="idSubTotal">0</code></td></tr>
                                                        <tr><td><code>IVA:</code></td><td class="align_right"><code id="idIvaTotal">0</code></td></tr>
                                                        <tr><td><code>Total:</code></td><td class="align_right"><code id="idTotalFactura">0</code></td></tr>
                                                </tbody></table></div>
                                            </div>
                                            <div class="row mb-1">
                                                <div class="col-lg-5"><textarea placeholder="Observaciones" class="obstextarea" id="obstextareaid"></textarea></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#" class="btn btn-facebook" onclick="clickCreateInvoice()" id="idCreateInvoice"><i class="fas fa-save" aria-hidden="true"></i> Crear Factura</a>
                        </div>`;

    pageMainContent.innerHTML = htmlSkeleton;
}

function invoiceCalculate(){
    FACTURA_LINEAS = {lineas:[], manoObra:{}, factura:{}, cliente:{}, vehicle:{}, desglose:{}, observaciones:{}};
    let importeSubtotal = 0;
    let importeIvas     = 0;
   
    let divContrainerNewLines = document.getElementById('divContrainerNewLines');
    let childDivs = divContrainerNewLines.children;
    Array.from(childDivs).forEach((childDiv, index) => {
        let numLine    = childDiv.dataset.line_counter;
        let idArticle1 = document.getElementById('idArt'+numLine).value.trim();
        let description= document.getElementById('descriptionArt'+numLine).value.trim();
        let cantidad1  = document.getElementById('cantidadArt'+numLine).value.trim();
        let precio1    = document.getElementById('precioArt'+numLine).value.trim(); 
        let descPorc   = document.getElementById('descuentoArt'+numLine).value.trim();
            if(descPorc == '') descPorc = 0;
        let imp1Bruto  = cantidad1 * precio1;
        let desc1Valor = descPorc / 100 * imp1Bruto;
        let importe1   = imp1Bruto - desc1Valor;
            importeSubtotal += importe1;
        document.getElementById('totalArt'+numLine).value = parseFloat(importe1).toFixed(2);
        let ivaType    = document.getElementById('selectIva'+numLine).value.trim();
        let ivaPorcent = document.getElementById('selectIva'+numLine).value.trim() == '0EXENTO' ? 0 :  document.getElementById('selectIva'+numLine).value.trim();
        let ivaValLin1 = ivaPorcent / 100 * importe1;
            importeIvas += ivaValLin1;
        FACTURA_LINEAS.lineas.push({numLine, idArticle1, description, cantidad1, precio1, descPorc, imp1Bruto, desc1Valor, importe1, ivaPorcent, ivaValLin1, ivaType});
    });
    let canridadManoObra = document.getElementById('cantidadManoObra').value.trim();
        if(canridadManoObra == '') canridadManoObra = 0;
    let precioManoObra   = document.getElementById('precioManoObra').value.trim();
    let ivaPorcentManoOb = document.getElementById('ivaManoObra').value.trim() == '0EXENTO' ? 0 :  document.getElementById('ivaManoObra').value.trim();
    let tipoIvaManoObra  = document.getElementById('ivaManoObra').value.trim();
    let porcentajeDesMOb = document.getElementById('descuentoManoObra').value.trim();
                    
    /* linea mano de obra */
    let importeBrutoManoObra = canridadManoObra * precioManoObra;                                           
    let descManoObr          = porcentajeDesMOb / 100 * importeBrutoManoObra;                                     
    let importeManoObra      = importeBrutoManoObra - descManoObr;                                              
    document.getElementById('totalManoObra').value = parseFloat(importeManoObra).toFixed(2);

    document.getElementById('idSubTotal').innerText = parseFloat(importeManoObra + importeSubtotal).toFixed(2);           
    let valorIvaManoObra = ivaPorcentManoOb / 100 * importeManoObra                                   
    document.getElementById('idIvaTotal').innerText = parseFloat(valorIvaManoObra + importeIvas).toFixed(2);             
    let valorTotalFactura = valorIvaManoObra + importeManoObra + importeSubtotal + importeIvas;                                              
    document.getElementById('idTotalFactura').innerText =  parseFloat(valorTotalFactura).toFixed(2);

    FACTURA_LINEAS.manoObra = {canridadManoObra, precioManoObra, importeBrutoManoObra, descManoObr, importeManoObra, ivaPorcentManoOb, valorIvaManoObra, tipoIvaManoObra};
    FACTURA_LINEAS.factura = { idSubTotal: importeManoObra + importeSubtotal, idIvaTotal: valorIvaManoObra + importeIvas, idTotalFactura: valorTotalFactura };
    FACTURA_LINEAS.desglose = DESGLOSE;
}

function deleteThisDiv(x){
    let divDelete = document.getElementById('deleteDivNumber'+x);
    if(divDelete) divDelete.remove();
    invoiceCalculate();
}

function idAddNewLine(){
    LINE_COUNTER++;
    let divContrainerNewLines = document.getElementById('divContrainerNewLines');
    let tempDiv = document.createElement('div');
    let contenidoHTML = `<div class="row mt-1" id="deleteDivNumber${LINE_COUNTER}" data-line_counter="${LINE_COUNTER}">
                            <div class="col-lg-1"><input type="number" class="suzdal_none" id="idArt${LINE_COUNTER}"><input type="number" disabled id="numberArt${LINE_COUNTER}"></div>
                            <div class="col-lg-4">
                                <input type="text" id="descriptionArt${LINE_COUNTER}" oninput="handleInputDescription(${LINE_COUNTER}, event)">
                                <div id="suggestionsArticles${LINE_COUNTER}" class="suggestions-list"></div>    
                            </div>
                            <div class="col-lg-1"><input type="number" id="cantidadArt${LINE_COUNTER}" value="1" oninput="invoiceCalculate()"></div>
                            <div class="col-lg-2"><input type="number" id="precioArt${LINE_COUNTER}" oninput="invoiceCalculate()"></div>
                            <div class="col-lg-1"><input type="number" value="0" id="descuentoArt${LINE_COUNTER}" oninput="invoiceCalculate()"></div>
                            <div class="col-lg-1"><input type="number" disabled id="totalArt${LINE_COUNTER}"></div>
                            <div class="col-lg-1" id="ivaArt${LINE_COUNTER}"><select class="factura_select" oninput="invoiceCalculate()" id="selectIva${LINE_COUNTER}"><option value="21"> 21 % </option><option value="10"> 10 % </option><option value="4"> 4 % </option><option value="0"> 0 % </option><option value="0EXENTO"> 0 EXENTO </option></select></div>
                            <div class="col-lg-1"> <i class="fa fa-trash" aria-hidden="true" onclick="deleteThisDiv(${LINE_COUNTER})"></i></div>
                        </div>`;
    tempDiv.innerHTML = contenidoHTML;
    let newElement = tempDiv.firstElementChild;
    divContrainerNewLines.appendChild(newElement);
};

function returnIvaType(num, ivatype, iva){
    let selectedType = '';
    let htmlIva = `<select id="selectIva${num}" oninput="invoiceCalculate()" class="factura_select">`;
    IVAS_LIST.forEach(item => {
        if(ivatype == 'norm' && item.title == iva ){ selectedType = 'selected'; }
        if(ivatype == 'exento' && item.title == '0EXENTO') { selectedType = 'selected'; }
        htmlIva += `<option value="${item.title}" ${selectedType}>${item.percentage}</option>`;
        selectedType = '';
    });
    htmlIva += '</select>';
    return htmlIva;
}

function handleInputDescription(num, event){
    let query = event.target.value.toLowerCase();  
    let suggestionsArticles = document.getElementById('suggestionsArticles'+num);
    suggestionsArticles.innerHTML = '';
    if(query){
        let i = 0;
        let queryWords = query.split(' ');
        let filteredOptions = LISTADO_ARTICULOS_FACTURAS.filter(option => queryWords.every(word => String(option.description).toLowerCase().includes(word)));
        if (filteredOptions.length > 0) {
            suggestionsArticles.style.display = 'block';
            for(y = 0; y < filteredOptions.length; y++){
                let option = filteredOptions[y];                       
                if(i < 11){
                    let suggestionItem = document.createElement('div');
                    suggestionItem.classList.add('suggestion_item');
                    suggestionItem.textContent = option.description;
                    suggestionItem.addEventListener('click', function() {
                        document.getElementById('idArt'+num).value          = option.id;
                        document.getElementById('numberArt'+num).value      = option.artcode;
                        document.getElementById('descriptionArt'+num).value = option.description;
                        document.getElementById('precioArt'+num).value      = option.price;
                        document.getElementById('ivaArt'+num).innerHTML     = returnIvaType(num, option.ivatype, option.iva);
                        suggestionsArticles.innerHTML                       = '';
                        suggestionsArticles.style.display                   = 'none';
                        invoiceCalculate();
                    });
                    suggestionsArticles.appendChild(suggestionItem);
                } else {
                    break;
                }
                i++;
            };
        }
    }
    invoiceCalculate();
    document.getElementById('idArt'+num).value     = ''; // he seleccionado el  articulo, pero le cambio la descripcion
    document.getElementById('numberArt'+num).value = '';
}

function handleInputClient(event){
    let query = event.target.value.toLowerCase();   
    let suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = '';
    if (query) {
        let i = 0;
        let filteredOptions = LISTADO_CLIENTES_FACTURAS.filter(option => option.razon.toLowerCase().includes(query));
        if (filteredOptions.length > 0) {
            suggestionsContainer.style.display = 'block';
            for(y = 0; y < filteredOptions.length; y++){
                let option = filteredOptions[y];
                if(i < 11){
                    let suggestionItem = document.createElement('div');
                    suggestionItem.classList.add('suggestion_item');
                    suggestionItem.textContent = option.razon;
                    suggestionItem.addEventListener('click', function() {
                        document.getElementById('clientIdDeveloper').value  = option.id;
                        document.getElementById('clientNumber').value       = option.clientcode;
                        document.getElementById('inputNifCif').value        = option.cif_nif;
                        document.getElementById('autocomplete_input').value = option.razon;
                        suggestionsContainer.innerHTML = '';
                        suggestionsContainer.style.display = 'none';
                    });
                    suggestionsContainer.appendChild(suggestionItem);
                } else {
                    break;
                }
                i++;
            };
        }
    }
    document.getElementById('clientIdDeveloper').value = '';
    document.getElementById('clientNumber').value      = '';
    document.getElementById('inputNifCif').value       = '';
}

function clickCreateInvoice(){
    let tipo_factura = document.getElementById('selectTypeInvoice').value.trim();
    let name_factura = '';
    INVOICES_LIST.forEach(item => { if(item.letter == tipo_factura){ name_factura = item.name_factura; }});
    let apunta_facturaValor = document.getElementById('selectFacturaRectificar');
    if(apunta_facturaValor && apunta_facturaValor.value) { apunta_facturaValor = apunta_facturaValor.value.trim(); } else { apunta_facturaValor = ''; }
    let clientIdDeveloper = document.getElementById('clientIdDeveloper').value.trim();
    let clientNumber      = document.getElementById('clientNumber').value.trim();
    let clienteRazon      = document.getElementById('autocomplete_input').value.trim();
    if(!clientIdDeveloper || !clientNumber || !clienteRazon) { showM('Cliente no definido', 'warning'); return; }
    let inputVehicleMatricula = document.getElementById('inputVehicleMatricula').value.trim();
    let inputVehicleMarca     = document.getElementById('inputVehicleMarca').value.trim();
    let obstextareaid         = document.getElementById('obstextareaid').value.trim()

    if(!FACTURA_LINEAS || !FACTURA_LINEAS.lineas || FACTURA_LINEAS.lineas.length == 0) { showM('Añade lineas en la factura', 'warning'); return; }
    let error = false;
    FACTURA_LINEAS.lineas.forEach(linea => {
        if(!linea.description || linea.description.length < 3){ showM('Descripcion del artículo', 'warning'); error = true; return; }
        if(!linea.cantidad1 || linea.cantidad1 == 0 || linea.cantidad1.trim() == ''){ showM('Cantidad del artículo', 'warning'); error = true; return; }
        if(!linea.precio1 || linea.precio1 == 0 || linea.precio1.trim() == ''){ showM('Precio del artículo', 'warning'); error = true; return; }
    });
    if(error == true) { return; }
    FACTURA_LINEAS.cliente = {clientIdDeveloper, clientNumber, clienteRazon };
    FACTURA_LINEAS.vehicle = {inputVehicleMatricula, inputVehicleMarca};                                     
    FACTURA_LINEAS.factura.tipo_factura = tipo_factura; FACTURA_LINEAS.factura.name_factura = name_factura; FACTURA_LINEAS.factura.apunta_factura = apunta_facturaValor;
    FACTURA_LINEAS.observaciones = {obstextareaid}

    if(FACTURA_CREATION_CLICKED) { return; }
    FACTURA_CREATION_CLICKED = true;

    invoicePutRequest('invoice/put/0', FACTURA_LINEAS).then(response => {
        if(response && response.status == 'ok' && response.factura_id && response.factura_id > 0){
            DEFAULT_ENTITY = {name:'factura', title:'Facturas'};
            defaultController(DEFAULT_ACTION, DEFAULT_ENTITY, 0);
            showCustomPDF(response.factura_id, 'sent_email_action')
        } else {
            showM('Error al crear la factura..', 'error');
        }
        document.getElementById('idCreateInvoice').innerHTML = '<i class="fas fa-save" aria-hidden="true"></i> Grabando..'
    });
}

async function invoicePutRequest(url, data){
    try {
        data.credentials = {};
        data.credentials.company_id = window.localStorage.getItem('company_id');
        data.credentials.email      = window.localStorage.getItem('email');
        data.credentials.cif        = window.localStorage.getItem('cif');
        data.credentials.uid        = window.localStorage.getItem('uid');
        data.credentials.password   = window.localStorage.getItem('password');

        let uri = HTTP_URL + url;
        let response = await fetch(uri, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) });

        let responseData = await response.json();
        if(responseData && responseData.status == 'error'){
            setTimeout(() => { showM(responseData.message, 'warning'); }, 1000);
        }
        return responseData;
    } catch (error) {
        showM('Error 11 ' + error, 'error');
        console.error('There was a problem with the fetch operation:', error);
    }
}

function cambioTipoFacturaMano(event){
    let espacioParaSelectTypeFactura = document.getElementById('espacioParaSelectTypeFactura');
    let tipoFactura = document.getElementById(event.target.id).value.trim();
    
    if(tipoFactura == 'R'){
        let htmlOptions = '';
        LISTADO_FACTURAS.forEach(factura => {
            htmlOptions += `<option value="${factura.serie_fact} ${factura.fecha_expedicion}"> ${factura.serie_fact} ${factura.fecha_expedicion} </option>`;
        });
        let htmlData = `<div class="mt-1 mb-1 ">
                            <code>Numero factura a rectificar</code>
                            <select id="selectFacturaRectificar">
                                ${htmlOptions}
                            </select>
                        </div>`;
        espacioParaSelectTypeFactura.innerHTML = htmlData;
    } else {
        espacioParaSelectTypeFactura.innerHTML = '';
    }
   
}

