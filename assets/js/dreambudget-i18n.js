// Spanish for the Dreambudget pages, applied in the browser so the rest of the
// site needs no i18n. English stays in the HTML; elements opt in with
// data-i18n="key" (inner HTML) or data-i18n-attr="attr:key;attr:key".
// Loaded at the top of <body>, before the content it translates.
(function () {
    var ES = {
        'meta.landing.title': 'Dreambudget',
        'meta.landing.description': 'Una app sencilla y rápida para gestionar tus finanzas',
        'meta.how.title': 'Cómo funciona un presupuesto con Dreambudget',
        'meta.how.description': '¿Nunca has hecho un presupuesto? Una guía paso a paso para planificar tu mes con Dreambudget, desde añadir tus cuentas hasta revisar adónde fue tu dinero.',

        'common.comingSoon': 'Próximamente',
        'common.skip': 'Saltar al contenido principal',
        'store.appStoreLabel': 'Próximamente en la App Store',
        'store.googlePlayLabel': 'Próximamente en Google Play',

        'nav.budgets': 'Presupuestos',
        'nav.transactions': 'Transacciones',
        'nav.accounts': 'Cuentas',
        'nav.payees': 'Beneficiarios',
        'nav.reports': 'Informes',
        'nav.howItWorks': 'Cómo funciona',
        'nav.language': 'Idioma',

        'footer.follow': 'Sígueme en <a href="https://www.instagram.com/edbrsk/">Instagram</a>',
        'footer.email': 'Email profesional',

        'landing.hero.title': 'Por fin, una visión clara <span class="db-grad">de tu dinero.</span>',
        'landing.hero.lead': 'Dreambudget es la app sencilla y potente que reúne todas tus cuentas, presupuestos y gastos en un solo lugar. Toma el control de tus finanzas y construye tu futuro con confianza.',
        'landing.hero.tour': 'Descubre lo que incluye ↓',
        'landing.hero.howItWorks': '¿Nunca has hecho un presupuesto? Así funciona →',
        'landing.hero.alt': 'La pantalla de presupuestos de Dreambudget para septiembre, con cada factura y lo que queda por gastar',

        'landing.budgets.mark': 'Presupuestos',
        'landing.budgets.title': 'Domina tu dinero <span class="db-grad">con presupuestos inteligentes</span>',
        'landing.budgets.lead': 'Deja de preguntarte adónde se fue tu dinero. Crea presupuestos sencillos y flexibles para controlar tus gastos, dejar de gastar de más y alcanzar por fin tus objetivos financieros.',

        'landing.transactions.mark': 'Transacciones',
        'landing.transactions.title': 'Registra transacciones <span class="db-grad">en segundos</span>',
        'landing.transactions.lead': 'Un presupuesto solo es tan bueno como los datos que le das. Registra cada gasto en un momento para mantener tus presupuestos al día y decidir cómo gastar con confianza.',
        'landing.transactions.alt': 'Añadiendo una transacción en Dreambudget',

        'landing.accounts.mark': 'Cuentas',
        'landing.accounts.title': 'Todas tus cuentas, <span class="db-grad">en una sola vista</span>',
        'landing.accounts.lead': 'Deja de saltar entre varias apps. Conecta tus cuentas bancarias de forma segura y ten una visión completa y en tiempo real de tus finanzas en un solo lugar. Sincronizar tus transacciones está a un clic.',
        'landing.accounts.alt': 'Cuentas corrientes, de ahorro, tarjeta de crédito e hipoteca con sus saldos',

        'landing.payees.mark': 'Beneficiarios',
        'landing.payees.title': 'Controla a tus <span class="db-grad">beneficiarios</span>',
        'landing.payees.lead': '¿Quién se lleva el trozo más grande del pastel? Ten todos tus beneficiarios en una lista, desde tu cafetería favorita hasta tus suscripciones mensuales, y mira exactamente adónde va tu dinero.',
        'landing.payees.alt': 'La lista de beneficiarios de Dreambudget',

        'landing.reports.mark': 'Informes',
        'landing.reports.title': 'Informes útiles, <span class="db-grad">visión clara</span>',
        'landing.reports.lead': 'Convierte tus datos financieros en una historia clara. Nuestros gráficos e informes te ayudan a ver tus patrones de gasto y a tener la claridad que necesitas para ahorrar más.',
        'landing.reports.alt': 'Informes con los gastos de este mes por categoría y un resumen del valor neto',

        'landing.design.mark': 'Modo oscuro',
        'landing.design.title': 'Diseñada <span class="db-grad">para ti</span>',
        'landing.design.lead': 'Tu experiencia importa. Activa el modo oscuro para descansar la vista y usa dreambudget en el idioma que prefieras.',
        'landing.design.alt': 'La pantalla de presupuestos en modo oscuro',

        'how.intro.mark': 'Cómo funciona',
        'how.intro.title': 'Presupuestar, <span class="db-grad">paso a paso.</span>',
        'how.intro.lead': '¿Nunca has hecho un presupuesto? Dreambudget se basa en una idea sencilla: decidir para qué es tu dinero antes de gastarlo. Así funciona en la app, desde tu primera cuenta hasta el final del mes.',
        'how.video.label': 'Vídeo: cómo funciona un presupuesto con Dreambudget',

        'how.accounts.step': 'Añade tus cuentas',
        'how.accounts.mark': 'Empieza con lo que tienes',
        'how.accounts.title': 'Añade tus <span class="db-grad">cuentas</span>',
        'how.accounts.lead': 'Añade tus cuentas corrientes y de ahorro, tarjetas de crédito y préstamos, o conecta tu banco para traer tus saldos y transacciones. Dreambudget las agrupa por tipo, para que veas todo tu dinero en un solo lugar antes de planificar nada.',
        'how.accounts.alt': 'Cuentas corrientes, de ahorro, tarjeta de crédito e hipoteca con sus saldos',

        'how.assign.step': 'Dale un trabajo a cada euro',
        'how.assign.mark': 'La idea clave',
        'how.assign.title': 'Dale un trabajo <span class="db-grad">a cada euro</span>',
        'how.assign.lead': 'Crea una categoría para cada cosa en la que gastas, como el alquiler, la compra o el seguro del coche, y agrúpalas, por ejemplo en Facturas y Necesidades. Después asigna a cada categoría lo que piensas gastar este mes. Esa cantidad es el presupuesto de la categoría.',
        'how.assign.lead2': 'Cada categoría muestra entonces cuánto te queda disponible para gastar, y su barra se acorta a medida que gastas:',
        'how.assign.legendOk': '<b>Verde</b> queda más de una quinta parte del presupuesto',
        'how.assign.legendLow': '<b>Naranja</b> queda una quinta parte o menos',
        'how.assign.legendOut': '<b>Rojo</b> el presupuesto se ha agotado o has gastado más de lo que tenía',
        'how.assign.alt': 'La pantalla de presupuestos, con las categorías agrupadas en Facturas y Necesidades y lo disponible en cada una',

        'how.spend.step': 'Registra lo que gastas',
        'how.spend.mark': 'Día a día',
        'how.spend.title': 'Registra lo <span class="db-grad">que gastas</span>',
        'how.spend.lead': 'Cada vez que entra o sale dinero, añade una transacción: el importe, a quién pagaste, la categoría y la cuenta. Lo disponible en la categoría se actualiza al momento. Si tu banco está conectado, sincronízalo para traer las transacciones sin tener que escribirlas.',
        'how.spend.chipsLabel': 'También en cada transacción',
        'how.spend.chipFlow': 'Salida o entrada',
        'how.spend.chipCleared': 'Marcar como real',
        'how.spend.chipRepeat': 'Repetir cada mes',
        'how.spend.chipFlags': 'Marcas y notas',
        'how.spend.alt': 'Añadiendo una transacción: importe, beneficiario, categoría, cuenta y fecha',

        'how.adjust.step': 'Ajusta cuando cambien los planes',
        'how.adjust.mark': 'Cuando surgen imprevistos',
        'how.adjust.title': 'Ajusta cuando <span class="db-grad">cambien los planes</span>',
        'how.adjust.lead': '¿Has gastado más en la compra de lo previsto? Es normal, y no significa que el presupuesto haya fallado. Pasa dinero de una categoría a la que aún le quede a la que se ha quedado corta, o cambia lo que tiene asignado una categoría. Tu plan sigue siendo realista sin empezar de cero.',
        'how.adjust.mockTitle': 'Transferir entre presupuestos',
        'how.adjust.mockFrom': 'Desde<b>Restaurantes</b>',
        'how.adjust.mockTo': 'A<b>Compra</b>',
        'how.adjust.mockResult': 'Compra vuelve a 0,00€ y a Restaurantes le quedan 55,00€.',

        'how.plan.step': 'Planifica con antelación',
        'how.plan.mark': 'Mirando más lejos',
        'how.plan.title': 'Planifica <span class="db-grad">con antelación</span>',
        'how.plan.lead': 'Algunos gastos no llegan cada mes, y para algunas cosas hace falta ahorrar durante un tiempo. Hay dos herramientas para eso.',
        'how.plan.targetsTitle': 'Objetivos',
        'how.plan.targetsText': 'Dile a una categoría lo que necesita, como «Necesito 300€ cada mes», o un total para una fecha concreta. Puedes fijarlos semanales, mensuales, anuales o con una frecuencia personalizada, para saber cuánto debe recibir cada categoría.',
        'how.plan.piggyTitle': 'Huchas',
        'how.plan.piggyText': 'Aparta dinero dentro de una cuenta para algo concreto, como unas vacaciones o un portátil nuevo. Si cambian tus prioridades, pasa dinero de una hucha a otra.',

        'how.review.step': 'Revisa el mes',
        'how.review.mark': 'Final de mes',
        'how.review.title': 'Revisa <span class="db-grad">el mes</span>',
        'how.review.lead': 'Los informes muestran adónde fue el dinero de este mes, categoría por categoría, y cómo queda tu valor neto teniendo en cuenta tus deudas. Usa lo que aprendas al asignar el presupuesto del mes siguiente: más donde siempre te quedas corto y menos donde te sobra dinero.',
        'how.review.alt': 'Informes con los gastos de este mes por categoría y un resumen del valor neto',

        'how.routine.mark': 'En resumen',
        'how.routine.title': 'Cada mes, <span class="db-grad">cuatro pasos</span>',
        'how.routine.assignTitle': 'Asigna',
        'how.routine.assignText': 'Da a cada categoría lo que piensas gastar.',
        'how.routine.logTitle': 'Registra',
        'how.routine.logText': 'Añade o sincroniza cada transacción cuando ocurra.',
        'how.routine.adjustTitle': 'Ajusta',
        'how.routine.adjustText': 'Mueve dinero entre categorías cuando cambien los planes.',
        'how.routine.reviewTitle': 'Revisa',
        'how.routine.reviewText': 'Consulta los informes y planifica el mes siguiente.',
        'how.routine.cta': 'Ver la app'
    };

    var STORAGE_KEY = 'dreambudget-lang';
    var root = document.documentElement;

    function readStored() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }

    function store(lang) {
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode: choice lasts for this page only */ }
    }

    function initialLang() {
        var fromUrl = new URLSearchParams(location.search).get('lang');
        if (fromUrl === 'es' || fromUrl === 'en') return fromUrl;
        var stored = readStored();
        if (stored === 'es' || stored === 'en') return stored;
        var browser = (navigator.languages && navigator.languages[0]) || navigator.language || '';
        return browser.toLowerCase().indexOf('es') === 0 ? 'es' : 'en';
    }

    var lang = initialLang();

    // Hide the page until Spanish is in place, so English doesn't flash first.
    // The timeout keeps the page visible if anything below throws.
    if (lang === 'es') {
        root.classList.add('db-i18n-pending');
        setTimeout(function () { root.classList.remove('db-i18n-pending'); }, 2000);
    }

    var originalHtml = new Map();
    var originalAttr = new Map();
    var original = {};

    function apply(next) {
        var dict = next === 'es' ? ES : null;
        var page = (document.querySelector('[data-db-page]') || {}).dataset;
        var pageKey = page ? page.dbPage : null;

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            if (!originalHtml.has(el)) originalHtml.set(el, el.innerHTML);
            var value = dict && dict[el.dataset.i18n];
            el.innerHTML = value != null ? value : originalHtml.get(el);
        });

        document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
            el.dataset.i18nAttr.split(';').forEach(function (pair) {
                var parts = pair.split(':');
                var attr = parts[0].trim();
                var key = parts[1].trim();
                var id = attr + '|' + key;
                if (!originalAttr.has(el)) originalAttr.set(el, {});
                var saved = originalAttr.get(el);
                if (!(id in saved)) saved[id] = el.getAttribute(attr);
                var value = dict && dict[key];
                el.setAttribute(attr, value != null ? value : saved[id]);
            });
        });

        var description = document.querySelector('meta[name="description"]');
        if (!('lang' in original)) {
            original.lang = root.getAttribute('lang');
            original.title = document.title;
            original.description = description ? description.getAttribute('content') : null;
        }
        root.setAttribute('lang', next === 'es' ? 'es' : original.lang);
        var esTitle = dict && pageKey && dict['meta.' + pageKey + '.title'];
        var esDescription = dict && pageKey && dict['meta.' + pageKey + '.description'];
        // The theme may add the site name around the page title, so only the page's own title is swapped.
        document.title = esTitle && page.dbTitle ? original.title.replace(page.dbTitle, esTitle) : original.title;
        if (description) description.setAttribute('content', esDescription || original.description);

        document.querySelectorAll('video track').forEach(function (track) {
            track.track.mode = track.srclang === next ? 'showing' : 'disabled';
        });

        document.querySelectorAll('[data-db-lang]').forEach(function (button) {
            button.setAttribute('aria-pressed', String(button.dataset.dbLang === next));
        });

        lang = next;
    }

    document.addEventListener('DOMContentLoaded', function () {
        apply(lang);
        root.classList.remove('db-i18n-pending');

        document.querySelectorAll('[data-db-lang]').forEach(function (button) {
            button.addEventListener('click', function () {
                var next = button.dataset.dbLang;
                if (next === lang) return;
                store(next);
                apply(next);
            });
        });
    });
})();
