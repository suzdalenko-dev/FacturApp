let pageUrlD = window.location.href;


if(pageUrlD.includes('register')){
    setInterval(() => {
        document.title = 'Registrar una cuenta - Factura App '+globalCurrentDate();
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Software de gestión de las facturas y clientes para pequeño comercio, taller, autónomo '+globalCurrentDate());
        }
    }, 1000);
} else if (pageUrlD.includes('forgot-password')){
    setInterval(() => {
        document.title = '¿Ha olvidado su contraseña? - Factura App '+globalCurrentDate();
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Software de gestión de las facturas y clientes para pequeño comercio, taller, autónomo '+globalCurrentDate());
        }
    }, 1000);
} else if(pageUrlD.includes('dashboard')){
    setInterval(() => {
        document.title = 'Dashboard - Factura App '+globalCurrentDate();
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Software de gestión de las facturas y clientes para pequeño comercio, taller, autónomo '+globalCurrentDate());
        }
    }, 5000);
} else {
    document.title = 'FacturApp Factura App '+globalCurrentDate();
    setInterval(() => {
        document.title = 'FacturApp '+globalCurrentDate()+ ' Factura App';
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Software de gestión de las facturas y clientes para pequeño comercio, taller, autónomo '+globalCurrentDate());
        }
    }, 1000);
}
