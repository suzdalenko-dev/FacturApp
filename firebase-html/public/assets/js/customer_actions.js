function saveNewCustomer(event, client_id){
    event.preventDefault();
    let inputCifCliente   = document.getElementById('inputCifCliente').value.trim();         if(!inputCifCliente) { showM('CIF NIF', 'warning'); return; }
    let inputRazonCliente = document.getElementById('inputRazonCliente').value.trim();       if(!inputRazonCliente) { showM('Razón o denominación social', 'warning'); return; }
    let inputPersonName = document.getElementById('inputPersonName').value.trim();           if(!inputPersonName) { showM('Nombre y apellidos persona', 'warning'); return; }

    let inputEmailCliente = document.getElementById('inputEmailCliente').value.trim();       if(!inputEmailCliente) { showM('Email', 'warning'); return; }
    let inputPhoneCliente = document.getElementById('inputPhoneCliente').value.trim();       if(!inputPhoneCliente) { showM('Teléfono', 'warning'); return; }

    let inputCountryCliente  = document.getElementById('inputCountryCliente').value.trim();  if(!inputCountryCliente) { showM('País', 'warning'); return; }
    let inputProvincyCliente = document.getElementById('inputProvincyCliente').value.trim(); if(!inputProvincyCliente) { showM('Provincia', 'warning'); return; }
    let inputZipCodeCliente  = document.getElementById('inputZipCodeCliente').value.trim();  if(!inputZipCodeCliente) { showM('Código postal', 'warning'); return; }
    let inputCityCliente     = document.getElementById('inputCityCliente').value.trim();     if(!inputCityCliente) { showM('Cuidad', 'warning'); return; }
    let inputAddressCliente  = document.getElementById('inputAddressCliente').value.trim();  if(!inputAddressCliente) { showM('Dirección', 'warning'); return; }

    let idSaveNewCustomer = document.getElementById('idSaveNewCustomer')
        idSaveNewCustomer.innerHTML = '<i class="fas fa-save"></i> Guardando..';

    let formData = new FormData();
        formData.append('cif_nif', inputCifCliente);    
        formData.append('razon', inputRazonCliente);
        formData.append('person_name', inputPersonName);
        formData.append('emailcustomer', inputEmailCliente);
        formData.append('phone', inputPhoneCliente);

        formData.append('country', inputCountryCliente);
        formData.append('province', inputProvincyCliente);
        formData.append('zipcode', inputZipCodeCliente);
        formData.append('city', inputCityCliente);
        formData.append('address', inputAddressCliente);

    postRequest('default/put/cliente/'+client_id, formData).then(dataArticle => {
        try{
            DEFAULT_ENTITY = {name:'cliente', title:'Clientes'};
            defaultController('get', DEFAULT_ENTITY, 0);
        } catch (error) {
            showM('Error al grabar artículo '+error, 'error');
        }
    });

    setTimeout(() => {
        if(idSaveNewCustomer){
            idSaveNewCustomer.innerHTML = '<i class="fas fa-save"></i> Guardar';
        }
    }, 11000);   
}


function showCustomClient(clienteId){
    let formData = new FormData();
    postRequest('default/get/cliente/'+clienteId, formData).then(dataCliente => {
        try{
            let titleView = 'Cliente '+dataCliente.res[0].razon;
            addNewArticleNewCustomer({'name':'cliente', 'title':titleView}, dataCliente);
        } catch (error) {
            showM('Error al grabar cliente '+error, 'error');
        }
    });
}


function showCustomArticle(articleId){
    let formData = new FormData();
    postRequest('default/get/articulo/'+articleId, formData).then(dataArticle => {
        try{
            let titleView = 'Artículo '+dataArticle.res[0].description;
            addNewArticleNewCustomer({'name':'articulo', 'title':titleView}, dataArticle);
        } catch (error) {
            showM('Error al grabar artículo '+error, 'error');
        }
    });
}