function saveNewArticle(event, articleId){
    event.preventDefault();

    let inputArticleName = document.getElementById('inputArticleName').value.trim();
    if(!inputArticleName) { showM('Nombre', 'warning'); return; }
    let inputArticlePrice = document.getElementById('inputArticlePrice').value.trim();
    if(!inputArticlePrice || parseFloat(inputArticlePrice) == 0 ) { showM('Precío', 'warning'); return; }
    let inputArticleIva = document.getElementById('inputArticleIva').value.trim();
    if(!inputArticleIva) { showM('IVA', 'warning'); return; }
    let idNewArticle = document.getElementById('idNewArticle')
        idNewArticle.innerHTML = '<i class="fas fa-save"></i> Guardando..';
    let ivatype = 'norm';
    if(inputArticleIva == '0EXENTO'){ inputArticleIva = 0; ivatype = 'exento'; }

    let formData = new FormData();
        formData.append('description', inputArticleName);
        formData.append('price', inputArticlePrice);
        formData.append('iva', inputArticleIva);
        formData.append('ivatype', ivatype);

    postRequest('default/put/articulo/'+articleId, formData).then(dataArticle => {
        try{
            DEFAULT_ENTITY = {name:'articulo', title:'Artículos'};
            defaultController('get', DEFAULT_ENTITY, 0);
        } catch (error) {
            showM('Error al grabar artículo '+error, 'error');
        }
    });

    setTimeout(() => {
        if(idNewArticle){
            idNewArticle.innerHTML = '<i class="fas fa-save"></i> Guardar';
        }
    }, 11000);
}


function editArticleClick(article_obj){
    showM('En desarrollo..', 'warning');
}

function deleteArticleClick(article_obj){
    showM('En desarrollo..', 'warning');
}