function defaultController(action, entidad, id){
    pageTitle.innerText = entidad.title;
    let url = 'default/'+action+'/'+entidad.name+'/'+id;
    let formData = new FormData();
    
    postRequest(url, formData).then(data => {
        if(data && data.res){                                       
            crearTablaEntidadPrincipal(data.res, entidad);
            checkCompanyData(data.company);
            if(entidad.name == 'factura'){ 
                LISTADO_FACTURAS = data.res;
                showListInvoices(data);
            }
            FACTURA_CREATION_CLICKED = false;
        } else {
            showM('3. Error al traer datos '+ entidad.name, 'error');
        }
    }).catch(error => {
        showM('2. Error al traer datos '+ error, 'error');
        console.log('Error al traer datos 2 '+ entidad.name + error);
    });
}

defaultController(DEFAULT_ACTION, DEFAULT_ENTITY, 0);
// showFormInvoiceCreation()

/* button en left menu */
document.getElementById('facturaClick').addEventListener('click', () => {
    DEFAULT_ENTITY = {name:'factura', title:'Facturas'};
    defaultController('get', DEFAULT_ENTITY, 0);
});

document.getElementById('clienteClick').addEventListener('click', () => {
    DEFAULT_ENTITY = {name:'cliente', title:'Clientes'};
    defaultController('get', DEFAULT_ENTITY, 0);
});

document.getElementById('articuloClick').addEventListener('click', () => {
    DEFAULT_ENTITY = {name:'articulo', title:'Artículos'};
    defaultController('get', DEFAULT_ENTITY, 0);
});

document.getElementById('miEmpresaClick').addEventListener('click', () => {
    DEFAULT_ENTITY = {name:'empresa', title:'Mi Empresa'};
    defaultController('get', DEFAULT_ENTITY, 0);
});


/* botones +article, +customer +invoice */
document.getElementById('addArticleClick').addEventListener('click', () => {
    addNewArticleNewCustomer({'name':'articulo', 'title':'Crear Artículo'}, null);
});

document.getElementById('addCustomerClick').addEventListener('click', () => {
    addNewArticleNewCustomer({'name':'cliente', 'title':'Crear Cliente'}, null);
});

document.getElementById('addInvoiceClick').addEventListener('click', () => {
    showFormInvoiceCreation();
});



/* search input 
document.getElementById('searchInputId').addEventListener('input', () => {
    showM('En desarrollo..');
    document.getElementById('searchInputId').value = '';
});

*/