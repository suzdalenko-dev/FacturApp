function saveDataCompany(event) {
    event.preventDefault();
    let inputCompanyName = document.getElementById('inputCompanyName').value.trim();
    if(!inputCompanyName){ showM('Nombre empresa vacío'); return; }
    let inputPersonName = document.getElementById('inputPersonName').value.trim();
    if(!inputPersonName) { showM('Nombre de la persona vacío'); return; }
    let inpuEmailCustom = document.getElementById('inpuEmailCustom').value.trim();
    if(!inpuEmailCustom){ showM('Email cara cliente vacío'); return; }
    let inputCountry = document.getElementById('inputCountry').value.trim();
    if(!inputCountry){ showM('País vacío'); return; }
    let inputProvincy = document.getElementById('inputProvincy').value.trim();
    if(!inputProvincy){ showM('Provincia vacío'); return; }
    let inputZipCode = document.getElementById('inputZipCode').value.trim();
    if(!inputZipCode){ showM('Codígo postal'); return; }
    let inputCity = document.getElementById('inputCity').value.trim();
    if(!inputCity){ showM('Cuidad'); return; }
    let inputAddress = document.getElementById('inputAddress').value.trim();
    if(!inputAddress){ showM('Direccíon'); return; }
    let inputPhone1 = document.getElementById('inputPhone1').value.trim();
    if(!inputPhone1){ showM('Telefono principal'); return; }
    let inputPhone2 = document.getElementById('inputPhone2').value.trim(); 
    if(!inputPhone2){ showM('Telefono'); return; }
    let inputPriceHour = document.getElementById('inputPriceHour').value.trim();
    if(!inputPriceHour || parseInt(inputPriceHour) <= 0){ showM('Precío €/hora'); return; }

    let idSaveDataCompany = document.getElementById('idSaveDataCompany');
        idSaveDataCompany.innerHTML = '<i class="fas fa-save"></i> Guardando..';

    let formData = new FormData();
        formData.append('razon', inputCompanyName);
        formData.append('person_name', inputPersonName);
        formData.append('emailcompany', inpuEmailCustom);
        formData.append('country', inputCountry);
        formData.append('province', inputProvincy);
        formData.append('zipcode', inputZipCode);
        formData.append('city', inputCity);
        formData.append('address', inputAddress);
        formData.append('tlf', inputPhone1);
        formData.append('tlf2', inputPhone2);
        formData.append('price', inputPriceHour);


    postRequest('default/put/empresa/0', formData).then(dataEmpresa => {
        try{
            crearTablaEntidadPrincipal(dataEmpresa.res, {name:'empresa', title:'Mi Empresa'});
            idSaveDataCompany.innerHTML = '<i class="fas fa-save"></i> Guardar';
        } catch (error) {
            showM('Error actualización de empresa '+error);
        }
    });

    setTimeout(() => {
        idSaveDataCompany.innerHTML = '<i class="fas fa-save"></i> Guardar';
    }, 22000);
   
}