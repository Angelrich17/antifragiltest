import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.why-argentina': 'Por qué Argentina',
    'nav.services': 'Servicios',
    'nav.process': 'Proceso',
    'nav.case-studies': 'Casos Reales',
    'nav.resources': 'Recursos',
    'nav.pricing': 'Tarifas',
    'nav.blog': 'Blog',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'header.schedule-consultation': 'Agenda consulta',
    
    // Hero Section
    'hero.title.part1': 'Tu acceso al',
    'hero.title.part2': 'futuro inmobiliario',
    'hero.title.part3': 'de Buenos Aires',
    'hero.subtitle': 'Navegamos la complejidad del mercado argentino para transformar las dudas en oportunidades de renta excepcionales. Acompañamiento integral desde la estrategia hasta la ejecución.',
    'hero.schedule-consultation': 'Agenda tu consulta',
    'hero.watch-presentation': 'Ver presentación',
    'hero.free-consultation': 'Consulta inicial sin costo',
    'hero.total-transparency': 'Transparencia total',
    'hero.secure-remote': 'Operación remota segura',
    'hero.play-teaser': 'Reproducir teaser',
    'hero.teaser-description': 'Descubre cómo convertimos la volatilidad argentina en rentabilidad predecible',
    'hero.average-roi': 'ROI promedio',
    'hero.upside-potential': 'Potencial alcista',
    
    // Data Section
    'data.title': 'Los números no mienten',
    'data.subtitle': 'Datos comparativos que demuestran el momento excepcional para invertir en Buenos Aires',
    'data.international-comparison': 'Comparativa internacional (USD/m²)',
    
    // Philosophy Section
    'philosophy.badge': 'Filosofía Antifragile',
    'philosophy.title.part1': 'Prosperamos en la',
    'philosophy.title.part2': 'incertidumbre',
    'philosophy.subtitle': 'Mientras otros temen la volatilidad, nosotros la aprovechamos. Buenos Aires ofrece oportunidades únicas para inversionistas que entienden cómo navegar la complejidad.',
    'philosophy.exceptional-returns.title': 'Retornos Excepcionales',
    'philosophy.exceptional-returns.description': 'ROI del 8-15% anual en USD. Precios 60% por debajo de máximos históricos crean oportunidades irrepetibles.',
    'philosophy.exceptional-returns.stat': 'potencial de apreciación',
    'philosophy.legal-security.title': 'Seguridad Jurídica',
    'philosophy.legal-security.description': 'Due diligence exhaustivo, escribano certificado y poder notarial para operaciones 100% remotas y seguras.',
    'philosophy.legal-security.stat': 'operaciones exitosas',
    'philosophy.boutique-service.title': 'Servicio Boutique',
    'philosophy.boutique-service.description': 'Desde estrategia hasta gestión de renta. Un equipo especializado dedicado exclusivamente a tu éxito.',
    'philosophy.boutique-service.stat': 'acompañamiento integral',
    

    // Testimonials
    'testimonials.badge': 'Casos de Éxito',
    'testimonials.title': 'Inversionistas que confiaron',
    'testimonials.subtitle': 'Profesionales de todo el mundo han elegido nuestra expertise para sus inversiones en Buenos Aires',
    'testimonials.see-more': 'Ver más casos de éxito',
    'testimonials.quote1': '"ROI del 14% en el primer año. El proceso fue impecablemente profesional y completamente transparente desde el inicio."',
    'testimonials.quote2': '"Operación 100% remota desde Madrid. Seguridad jurídica absoluta y acompañamiento en cada detalle del proceso."',
    'testimonials.quote3': '"Mejor decisión de inversión en años. Combina rentabilidad excepcional con un servicio verdaderamente boutique."',

    // Blog Page
    'blog.title': 'Insights & Análisis',
    'blog.subtitle': 'Perspectivas profundas sobre inversiones inmobiliarias en Argentina',
    'blog.featured-articles': 'Artículos destacados',
    'blog.all-articles': 'Todos los artículos',
    'blog.newsletter.title': 'Mantente informado',
    'blog.newsletter.subtitle': 'Recibe análisis exclusivos y oportunidades de inversión directamente en tu email',
    'blog.newsletter.placeholder': 'Tu email',
    'blog.newsletter.subscribe': 'Suscribirse',
    'blog.newsletter.success': '¡Suscripción exitosa!',
    'blog.newsletter.success.description': 'Te has suscrito correctamente a nuestro newsletter',
    'blog.newsletter.error': 'Error',
    'blog.newsletter.error.invalid': 'Por favor ingresa un email válido',
    'blog.newsletter.error.general': 'Hubo un error al suscribirse. Inténtalo nuevamente.',
    'blog.read-more': 'Leer más',
    'blog.back-to-blog': 'Volver al blog',
    'blog.reading-time': 'lectura',

    // Why Argentina Page
    'why-argentina.title': '¿Por qué Argentina ahora?',
    'why-argentina.subtitle': 'Una tesis de inversión respaldada por datos duros, ciclos económicos y una oportunidad histórica de comprar activos de calidad mundial a precios de mercados emergentes.',
    'why-argentina.watch-analysis': 'Ver análisis completo',
    'why-argentina.download-pdf': 'Descargar PDF gratuito',
    'why-argentina.macroeconomic-data': 'Datos macroeconómicos',
    'why-argentina.historical-cycles': 'Ciclos históricos',
    'why-argentina.expert-analysis': 'Análisis experto',
    'why-argentina.historic-opportunity': 'Oportunidad histórica',
    'why-argentina.play-analysis': 'Reproducir análisis',
    'why-argentina.potential-multiplier': 'Multiplicador potencial',
    'why-argentina.video-version': 'Versión video',
    'why-argentina.complete-analysis': 'Análisis completo (5-7 min)',
    'why-argentina.executive-pdf': 'PDF ejecutivo',
    'why-argentina.free-download': 'Descarga gratuita',
    'why-argentina.numbers-dont-lie': 'Los números no mienten',
    'why-argentina.numbers-subtitle': 'Datos comparativos que demuestran el momento excepcional para invertir en Buenos Aires',
    'why-argentina.international-comparison': 'Comparativa internacional (USD/m²)',
    'why-argentina.catalysts-title': 'Catalizadores de crecimiento',
    'why-argentina.catalysts-subtitle': 'Factores macro que impulsan la revalorización inmobiliaria en el mediano plazo',
    'why-argentina.political-cycle': 'Ciclo Político',
    'why-argentina.political-cycle.description': 'Nuevo gobierno pro-mercado. Políticas de apertura económica y normalización del tipo de cambio.',
    'why-argentina.vaca-muerta': 'Vaca Muerta',
    'why-argentina.vaca-muerta.description': 'Segundo yacimiento de gas no convencional del mundo. Potencial de ingresos por $200B+ en 20 años.',
    'why-argentina.exchange-rate': 'Tipo de Cambio',
    'why-argentina.exchange-rate.description': 'Unificación cambiaria inminente. Corrección hacia equilibrio de largo plazo favorece activos locales.',
    'why-argentina.risks-title': '¿Riesgos y cómo los mitigamos?',
    'why-argentina.risks-subtitle': 'Transparencia total sobre los desafíos y nuestras estrategias de mitigación',
    'why-argentina.risk1.title': 'Riesgo: Inestabilidad política / económica',
    'why-argentina.risk1.mitigation': 'Inversión en activos físicos (ladrillo) denominados en USD. Diversificación por barrios y tipos de propiedad. Contratos de alquiler en moneda dura.',
    'why-argentina.risk2.title': 'Riesgo: Regulaciones de alquiler',
    'why-argentina.risk2.mitigation': 'Estructuras legales robustas. Monitoreo regulatorio constante. Flexibilidad entre alquiler tradicional y temporario (Airbnb) según cambios normativos.',
    'why-argentina.risk3.title': 'Riesgo: Liquidez y salida',
    'why-argentina.risk3.mitigation': 'Selección de propiedades en zonas prime con alta demanda. Red de compradores locales e internacionales. Estrategia de salida planificada desde el día 1.',
    'why-argentina.schedule-consultation': 'Agenda una consulta',
    
    // Footer
    'footer.company': 'Empresa',
    'footer.company-description': 'Transformamos la incertidumbre del mercado argentino en oportunidades de inversión excepcionales. Expertise boutique para inversionistas sofisticados.',
    'footer.services': 'Servicios',
    'footer.service.strategic-consulting': 'Consultoría Estratégica',
    'footer.service.property-curation': 'Curación de Inmuebles',
    'footer.service.financial-structuring': 'Estructuración Financiera',
    'footer.service.legal-due-diligence': 'Due Diligence Legal',
    'footer.service.asset-optimization': 'Optimización de Activos',
    'footer.service.integral-management': 'Gestión Integral',
    'footer.resources': 'Recursos',
    'footer.resource.investment-thesis': 'Tesis de Inversión',
    'footer.resource.research-analysis': 'Research & Análisis',
    'footer.resource.market-intelligence': 'Market Intelligence',
    'footer.resource.roi-calculator': 'Calculadora ROI',
    'footer.resource.success-cases': 'Casos de Éxito',
    'footer.resource.team': 'Equipo',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter-subtitle': 'Mantente al día con insights exclusivos',
    'footer.email-placeholder': 'Tu email',
    'footer.subscribe': 'Suscribirse',
    'footer.rights': 'Todos los derechos reservados',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',

    // Services Page
    'services.title': 'Servicios 360°',
    'services.subtitle': 'Todo lo que necesitas para invertir exitosamente en Buenos Aires. Desde la primera consulta hasta la gestión de alquiler, nos encargamos de cada detalle.',
    'services.main-title': 'Servicios principales',
    'services.main-subtitle': 'Cada servicio está diseñado para eliminar fricciones y maximizar tu retorno de inversión',
    'services.advisory.title': 'Asesoría 1-a-1',
    'services.advisory.price': '300 USD/hora',
    'services.advisory.description': 'Consultoría personalizada con expertos locales. Análisis de tu perfil de inversión y recomendaciones específicas.',
    'services.advisory.feature1': 'Análisis de perfil de riesgo',
    'services.advisory.feature2': 'Recomendaciones de barrios',
    'services.advisory.feature3': 'Estrategia de financiamiento',
    'services.advisory.feature4': 'Proyección de ROI personalizada',
    'services.search.title': 'Zona & Búsqueda',
    'services.search.price': 'Incluido en packs',
    'services.search.description': 'Investigación profunda de barrios y búsqueda activa de propiedades que cumplan tus criterios específicos.',
    'services.search.feature1': 'Análisis demográfico detallado',
    'services.search.feature2': 'Proyección de crecimiento urbano',
    'services.search.feature3': 'Búsqueda activa de propiedades',
    'services.search.feature4': 'Due diligence completo',
    'services.exchange.title': 'Cambio de Divisas',
    'services.exchange.price': 'Mejor rate del mercado',
    'services.exchange.description': 'Conversión USDT/crypto a USD billete o ARS al mejor tipo de cambio. Proceso seguro y trazable.',
    'services.exchange.feature1': 'USDT → USD billete',
    'services.exchange.feature2': 'Crypto → ARS',
    'services.exchange.feature3': 'Rate competitivo garantizado',
    'services.exchange.feature4': 'Transferencias seguras y rápidas',
    'services.legal.title': 'Documentación Legal',
    'services.legal.price': 'Pack integral',
    'services.legal.description': 'Gestión completa de CUIT/CDI, documentación fiscal y estructuras legales para inversores extranjeros.',
    'services.legal.feature1': 'Tramitación CUIT/CDI',
    'services.legal.feature2': 'Apertura cuenta bancaria',
    'services.legal.feature3': 'Estructuras fiscales óptimas',
    'services.legal.feature4': 'Documentación apostillada',
    'services.notary.title': 'Escribano & Poder',
    'services.notary.price': 'Cierre remoto seguro',
    'services.notary.description': 'Escribano certificado y poder notarial para compra remota. Cierre 100% a distancia con garantías legales.',
    'services.notary.feature1': 'Escribano de confianza',
    'services.notary.feature2': 'Poder notarial internacional',
    'services.notary.feature3': 'Verificación de títulos',
    'services.notary.feature4': 'Cierre remoto certificado',
    'services.renovation.title': 'Remodelación Turnkey',
    'services.renovation.price': 'Proyecto integral',
    'services.renovation.description': 'Diseño, remodelación e interiorismo completo. De la compra al alquiler sin que tengas que viajar.',
    'services.renovation.feature1': 'Diseño arquitectónico',
    'services.renovation.feature2': 'Gestión de obra completa',
    'services.renovation.feature3': 'Interiorismo profesional',
    'services.renovation.feature4': 'Entrega llave en mano',
    'services.rental-title': 'Gestión de Alquiler',
    'services.rental-subtitle': 'Dos modalidades de alquiler para maximizar tu retorno según tu perfil de riesgo y objetivos',
    'services.traditional.title': 'Alquiler Tradicional',
    'services.traditional.description': 'Gestión de alquiler residencial de largo plazo. Máxima estabilidad y previsibilidad de ingresos.',
    'services.traditional.feature1': 'Contratos 2-3 años',
    'services.traditional.feature2': 'Inquilinos verificados',
    'services.traditional.feature3': 'Garantías sólidas',
    'services.traditional.feature4': 'Administración completa',
    'services.airbnb.title': 'Airbnb / Estudiantes',
    'services.airbnb.description': 'Alquiler temporario y a estudiantes internacionales. Mayor rotación pero yields superiores.',
    'services.airbnb.feature1': 'Gestión Airbnb completa',
    'services.airbnb.feature2': 'Alquiler a estudiantes',
    'services.airbnb.feature3': 'Yields 15-25% superiores',
    'services.airbnb.feature4': 'Mantenimiento incluido',
    'services.rental-question': '¿No estás seguro cuál modalidad te conviene más?',
    'services.rental-button': 'Consulta personalizada gratuita',
    'services.rental-button-mobile': 'Consulta personalizada',
    'services.guarantee-title': 'Garantía de satisfacción 100%',
    'services.guarantee-subtitle': 'Si no estás completamente satisfecho con nuestro servicio en los primeros 30 días, te devolvemos el 100% de tu inversión. Sin preguntas.',
    'services.guarantee-stat1': '100%',
    'services.guarantee-label1': 'Operaciones exitosas',
    'services.guarantee-stat2': '24/7',
    'services.guarantee-label2': 'Soporte disponible',
    'services.guarantee-stat3': '30 días',
    'services.guarantee-label3': 'Garantía de devolución',


    // Process Page
    'process.badge': 'Proceso Comprobado',
    'process.title.part1': 'Un proceso que',
    'process.title.part2': 'funciona',
    'process.title': 'Nuestro Proceso',
    'process.subtitle': 'Un proceso probado que te lleva de la idea inicial a generar renta pasiva en menos de 3 meses. Transparente, predecible y con seguimiento paso a paso.',
    'process.average-time-title': 'Tiempo promedio',
    'process.average-time-value': '8-12 semanas',
    'process.average-time-desc': 'De consulta inicial a primer alquiler',
    'process.success-rate-title': 'Tasa de éxito',
    'process.success-rate-value': '100%',
    'process.success-rate-desc': 'Operaciones completadas exitosamente',
    'process.satisfaction-title': 'Satisfacción',
    'process.satisfaction-value': '100%',
    'process.satisfaction-desc': 'Clientes que recomiendan nuestro servicio',
    'process.steps-title': '5 pasos hacia tu inversión exitosa',
    'process.steps-subtitle': 'Cada paso está diseñado para minimizar riesgos y maximizar transparencia',
    'process.step1.title': 'Discovery Call Gratuita',
    'process.step1.duration': '15 minutos',
    'process.step1.description': 'Conocemos tus objetivos, presupuesto y perfil de riesgo. Definimos estrategia inicial y expectativas realistas.',
    'process.step1.detail1': 'Análisis de perfil de inversión',
    'process.step1.detail2': 'Definición de presupuesto disponible',
    'process.step1.detail3': 'Objetivos de rentabilidad y plazo',
    'process.step1.detail4': 'Recomendaciones iniciales de barrios',
    'process.step2.title': 'Mandato & Due Diligence',
    'process.step2.duration': '2-4 semanas',
    'process.step2.description': 'Búsqueda activa y análisis profundo de propiedades. Verificación legal, técnica y financiera completa.',
    'process.step2.detail1': 'Búsqueda activa en base a criterios',
    'process.step2.detail2': 'Verificación de títulos y documentación',
    'process.step2.detail3': 'Inspección técnica detallada',
    'process.step2.detail4': 'Análisis de rentabilidad proyectada',
    'process.step3.title': 'Oferta & Cierre Notarial',
    'process.step3.duration': '1-2 semanas',
    'process.step3.description': 'Negociación, oferta formal y cierre notarial remoto. Transferencia segura con poder certificado.',
    'process.step3.detail1': 'Negociación de precio y condiciones',
    'process.step3.detail2': 'Preparación de documentación legal',
    'process.step3.detail3': 'Cierre notarial con poder remoto',
    'process.step3.detail4': 'Transferencia de fondos segura',
    'process.step4.title': 'Proyecto de Obra',
    'process.step4.duration': '4-8 semanas',
    'process.step4.description': 'Diseño, remodelación e interiorismo turnkey. Supervisión completa hasta entrega llave en mano.',
    'process.step4.detail1': 'Diseño arquitectónico y decorativo',
    'process.step4.detail2': 'Gestión de permisos y contratistas',
    'process.step4.detail3': 'Supervisión de obra diaria',
    'process.step4.detail4': 'Entrega con mobiliario incluido',
    'process.step5.title': 'Administración Post-Compra',
    'process.step5.duration': 'Ongoing',
    'process.step5.description': 'Gestión completa del alquiler, mantenimiento y administración. Reportes mensuales de performance.',
    'process.step5.detail1': 'Búsqueda y verificación de inquilinos',
    'process.step5.detail2': 'Gestión de contratos y cobros',
    'process.step5.detail3': 'Mantenimiento preventivo y correctivo',
    'process.step5.detail4': 'Reportes mensuales de rentabilidad',
    'process.includes': 'Incluye:',
    'process.timeline-title': 'Timeline típico de proyecto',
    'process.timeline-subtitle': 'Cronograma semanal desde el primer contacto hasta generar renta',
    'process.timeline.week1': 'Semana 1',
    'process.timeline.milestone1': 'Discovery call + Mandato de búsqueda',
    'process.timeline.week2': 'Semana 2-3',
    'process.timeline.milestone2': 'Presentación de opciones preseleccionadas',
    'process.timeline.week3': 'Semana 4',
    'process.timeline.milestone3': 'Due diligence + Oferta formal',
    'process.timeline.week4': 'Semana 5',
    'process.timeline.milestone4': 'Cierre notarial + Transferencia',
    'process.timeline.week5': 'Semana 6-12',
    'process.timeline.milestone5': 'Proyecto de obra + Remodelación',
    'process.timeline.week6': 'Semana 13',
    'process.timeline.milestone6': 'Puesta a renta + Primer inquilino',
    'process.final-title': '¡Tu propiedad generando renta!',
    'process.final-description': 'Al final del proceso tendrás un activo de calidad generando ingresos pasivos en USD.',
    'process.cta-title': '¿Listo para comenzar?',
    'process.cta-subtitle': 'El primer paso es siempre una consulta gratuita de 15 minutos. Sin compromiso, solo para conocerte y ver si somos el fit correcto.',
    'process.cta-button': 'Agenda tu consulta gratuita',
    'process.cta-button-mobile': 'Agenda tu consulta',
    'process.cta-pricing': 'Ver tarifas y packs',
    'process.cta-benefit1': 'Sin compromiso inicial',
    'process.cta-benefit2': 'Consulta 100% gratuita',
    'process.cta-benefit3': 'Respuesta en 24h',
    'process.explore-methodology': 'Explorar metodología completa',

    // Case Studies Page
    'case-studies.badge': 'Portfolio de Éxito',
    'case-studies.title': 'Casos Reales',
    'case-studies.subtitle': 'Análisis detallado de operaciones exitosas. Casos de estudio con métricas reales, ROI obtenido y lecciones aprendidas de inversionistas que confiaron en nuestra expertise.',
    'case-studies.back-home': 'Volver al inicio',

    // Resources Page
    'resources.badge': 'Intelligence Hub',
    'resources.title': 'Research & Herramientas',
    'resources.subtitle': 'Análisis profundo del mercado argentino, herramientas de evaluación y recursos exclusivos para inversionistas sofisticados.',
    'resources.market-analysis': 'Análisis de Mercado',
    'resources.back-home': 'Volver al inicio',

    // Pricing Page
    'pricing.badge': 'Estructura de Inversión',
    'pricing.title': 'Tarifas & Servicios',
    'pricing.subtitle': 'Estructura de fees transparente y paquetes diseñados para cada perfil de inversionista. Alineación total de intereses con resultados medibles.',
    'pricing.personal-shopper.title': 'Personal Shopper Inmobiliario',
    'pricing.personal-shopper.description': 'Nos especializamos en encontrar la propiedad ideal para ti, basada en tus gustos, objetivos de inversión y presupuesto.',
    'pricing.personal-shopper.feature1': 'Análisis de zonas con mayor potencial de revalorización',
    'pricing.personal-shopper.feature2': 'Grabación de propiedades e informe de viabilidad',
    'pricing.personal-shopper.feature3': 'Negociación del mejor precio con datos actualizados',
    'pricing.personal-shopper.feature4': 'Gestión CDI/CUIL y tramitación de poder notarial',
    'pricing.personal-shopper.feature5': 'Asistencia legal, registral y documental integral',
    'pricing.personal-shopper.commission': 'Comisión:',
    'pricing.personal-shopper.rate': '2%',
    'pricing.personal-shopper.note': 'sobre el valor de compra',
    'pricing.crypto-exchange.title': 'Ingreso de Divisas vía Crypto',
    'pricing.crypto-exchange.description': 'Ofrecemos un servicio ágil y seguro para traer tus dólares al país mediante criptomonedas, con tarifas ultra competitivas.',
    'pricing.crypto-exchange.feature1': 'Proceso ágil y seguro',
    'pricing.crypto-exchange.feature2': 'Tarifas ultra competitivas',
    'pricing.crypto-exchange.feature3': 'Depende de condiciones de mercado',
    'pricing.crypto-exchange.feature4': 'Según volumen operado',
    'pricing.crypto-exchange.commission': 'Comisión:',
    'pricing.crypto-exchange.rate': '0%',
    'pricing.crypto-exchange.note': 'según condiciones de mercado',
    'pricing.airbnb.title': 'Gestión Airbnb',
    'pricing.airbnb.badge': '⭐ Superanfitrión',
    'pricing.airbnb.description': '¿Compraste para alquilar? Nos ocupamos de todo el proceso de gestión de tu propiedad.',
    'pricing.airbnb.feature1': 'Publicación profesional del anuncio',
    'pricing.airbnb.feature2': 'Gestión de reservas y atención huéspedes',
    'pricing.airbnb.feature3': 'Comunicación 24/7',
    'pricing.airbnb.feature4': 'Optimización de ingresos',
    'pricing.airbnb.feature5': 'Check-in, check-out y coordinación limpieza',
    'pricing.airbnb.commission': 'Comisión:',
    'pricing.airbnb.rate': '15%',
    'pricing.airbnb.note': 'del ingreso bruto mensual + limpieza',
    'pricing.back-home': 'Volver al inicio',

    // About Page
    'about.badge': 'Nuestro Equipo',
    'about.title': 'Filosofía Antifragile',
    'about.subtitle': 'Somos especialistas que prosperan en la incertidumbre. Nuestro equipo boutique combina expertise local con visión global para transformar la volatilidad argentina en oportunidades excepcionales.',
    'about.multidisciplinary.title': 'Expertise Multidisciplinario',
    'about.multidisciplinary.description': 'Combinamos conocimiento profundo del mercado local con experiencia internacional en estructuración de inversiones complejas.',
    'about.boutique.title': 'Enfoque Boutique',
    'about.boutique.description': 'Atención personalizada y exclusiva. Cada cliente recibe un servicio a medida diseñado específicamente para sus objetivos únicos.',
    'about.excellence.title': 'Excelencia Comprobada',
    'about.excellence.description': 'Historial de éxito en operaciones complejas. Transparencia total y alineación de intereses con cada cliente.',
    'about.back-home': 'Volver al inicio',

    // Contact Page
    'contact.badge': 'Comenzar Conversación',
    'contact.title': 'Contacto',
    'contact.subtitle': 'Agenda tu consulta estratégica inicial sin costo. Discutiremos tus objetivos y exploraremos las oportunidades más relevantes para tu perfil de inversor.',
    'contact.strategic-consultation.title': 'Consulta Estratégica',
    'contact.strategic-consultation.description': 'Sesión inicial de 30 minutos para evaluar objetivos y oportunidades. Calendario disponible próximamente.',
    'contact.direct-contact.title': 'Contacto Directo',
    'contact.direct-contact.description': 'Para consultas específicas o información adicional. Click aquí para contactar por WhatsApp.',
    'contact.form.title': 'Formulario de Contacto',
    'contact.form.subtitle': 'Envíanos tu consulta y te responderemos a la brevedad',
    'contact.form.name': 'Nombre completo',
    'contact.form.name-placeholder': 'Tu nombre completo',
    'contact.form.email': 'Correo electrónico',
    'contact.form.email-placeholder': 'tu@email.com',
    'contact.form.message': 'Mensaje',
    'contact.form.message-placeholder': 'Cuéntanos sobre tu consulta o interés en inversiones inmobiliarias...',
    'contact.form.submit': 'Enviar mensaje',
    'contact.whatsapp-message': 'Hola, me interesa conocer más sobre las oportunidades de inversión en Buenos Aires.',
    'contact.back-home': 'Volver al inicio',

    // Blog Articles 
    'articles.microcentro.title': 'Por qué el Microcentro porteño es la mejor oportunidad inmobiliaria (2025)',
    'articles.microcentro.excerpt': 'Análisis completo del ciclo argentino, comparativas con Madrid y Barcelona, y cómo invertir en oficinas a reciclar con yields del 8-10%.',
    'articles.microcentro.content': `El mercado inmobiliario argentino está viviendo uno de sus momentos más interesantes de la última década. Mientras el país atraviesa una nueva fase de estabilización económica bajo la administración Milei, el Microcentro porteño emerge como la oportunidad de inversión más atractiva para 2025.

## El Contexto Macroeconómico Actual

Argentina se encuentra en una fase de transición crucial. Las políticas de dolarización parcial y estabilización han generado un escenario único donde los activos en dólares mantienen su valor mientras el peso se estabiliza gradualmente. Esta dinámica crea una ventana de oportunidad excepcional para inversores con visión a largo plazo.

## Microcentro: El Diamante en Bruto

### Ubicación Estratégica
El Microcentro porteño concentra:
- **Conectividad**: Centro neurálgico del transporte público
- **Infraestructura**: Servicios consolidados y acceso total
- **Historia**: Arquitectura patrimonial con potencial de reciclaje
- **Futuro**: Planes de revitalización urbana en marcha

### Oportunidad de Reciclaje
Las oficinas del Microcentro presentan características únicas:
- **Precios**: USD 800-1,200 por m² (vs USD 3,000+ en Palermo)
- **Potencial**: Conversión a viviendas de lujo
- **Yields**: 8-10% anual en dólares
- **Apreciación**: Potencial de revalorización del 200-300%

## Comparativa Internacional

### Madrid - Distrito Centro
- **Precio**: €4,000-6,000/m²
- **Yield**: 3-4%
- **Crecimiento**: Limitado por saturación

### Barcelona - Ciutat Vella
- **Precio**: €3,500-5,500/m²
- **Yield**: 3-5%
- **Regulación**: Restricciones crecientes

### Buenos Aires - Microcentro
- **Precio**: USD 800-1,200/m²
- **Yield**: 8-10%
- **Potencial**: Massive upside potential

## Estrategia de Inversión

### Fase 1: Adquisición (2025)
- Identificar edificios con potencial de reciclaje
- Negociar precios en el valle del ciclo
- Asegurar financiamiento en pesos a tasas favorables

### Fase 2: Desarrollo (2025-2026)
- Reciclaje a estándares internacionales
- Certificaciones sustentables
- Amenities de clase mundial

### Fase 3: Monetización (2027+)
- Venta a precios de mercado corregidos
- Alquiler a yields normalizados
- Exit strategy flexible

## Factores de Riesgo

### Políticos
- Cambios en regulaciones urbanas
- Modificaciones fiscales
- Inestabilidad institucional

### Económicos
- Volatilidad del tipo de cambio
- Inflación residual
- Acceso al crédito

### De Mercado
- Competencia de otros desarrolladores
- Cambios en preferencias de ubicación
- Saturación del segmento

## Conclusión

El Microcentro porteño representa una oportunidad única que combina:
- **Timing perfecto**: Fondo del ciclo inmobiliario
- **Fundamentals sólidos**: Ubicación y conectividad
- **Upside masivo**: Potencial de revalorización excepcional
- **Yields atractivos**: Rentabilidad inmediata en dólares

Para inversores con horizonte de 3-5 años y tolerancia al riesgo moderada, esta oportunidad puede generar retornos excepcionales mientras contribuye a la revitalización de una zona histórica de Buenos Aires.

*La información contenida en este análisis es de carácter educativo y no constituye asesoramiento financiero personalizado.*`,
    'articles.bitcoin.title': 'Comprar una vivienda en Buenos Aires con Bitcoin sin venderlo',
    'articles.bitcoin.excerpt': 'Cómo apalancar tu BTC al 5% en DeFi, comprar metros a USD 1,000/m² y conservar el potencial alcista de la criptomoneda.',
    'articles.bitcoin.content': `<div class="space-y-8">
          <!-- Intro destacado -->
          <div class="bg-gradient-to-r from-blue-50 to-amber-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p class="text-sm text-blue-700 font-medium mb-2">📈 Actualizado: 10 de julio de 2025 | Precio de referencia de Bitcoin: <strong>USD 111,405</strong></p>
          </div>

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-8 mb-4">
            🏠 Introducción: cuando el bitcoiner quiere ladrillos
          </h2>
          <p class="text-lg leading-relaxed text-slate-700 mb-6">
            Bitcoin ha sido uno de los activos con mejor rendimiento de la última década. Muchos holders desean diversificar hacia bienes tangibles, pero <strong>vender BTC supone perder exposición futura y pagar impuestos sobre plusvalías</strong>. Las hipotecas bancarias argentinas exigen tipos cercanos al 9% y trámites complejos. 
          </p>
          <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-8">
            <p class="text-green-800">💡 <strong>La solución:</strong> Con un préstamo DeFi garantizado con BTC (por ejemplo en Aave v3) se puede obtener liquidez al 5%, manteniendo la exposición a la criptomoneda y cerrando la compra en efectivo en Buenos Aires.</p>
          </div>

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-12 mb-6">
            🔢 Ejemplo numérico: apartamento de 90 m² en Recoleta
          </h2>
        </div>`,

    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Error',
    'common.success': 'Éxito',
    'common.contact': 'Contacto',
    'common.email': 'Email',
    'common.phone': 'Teléfono',
    'common.name': 'Nombre',
    'common.send': 'Enviar',
    'common.read-more': 'Leer más',
    'common.learn-more': 'Saber más',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.why-argentina': 'Why Argentina',
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.case-studies': 'Case Studies',
    'nav.resources': 'Resources',
    'nav.pricing': 'Pricing',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'header.schedule-consultation': 'Schedule consultation',
    
    // Hero Section
    'hero.title.part1': 'Your gateway to',
    'hero.title.part2': 'Buenos Aires',
    'hero.title.part3': 'real estate future',
    'hero.subtitle': 'We navigate the complexity of the Argentine market to transform doubts into exceptional rental opportunities. Comprehensive support from strategy to execution.',
    'hero.schedule-consultation': 'Schedule your consultation',
    'hero.watch-presentation': 'Watch presentation',
    'hero.free-consultation': 'Free initial consultation',
    'hero.total-transparency': 'Total transparency',
    'hero.secure-remote': 'Secure remote operation',
    'hero.play-teaser': 'Play teaser',
    'hero.teaser-description': 'Discover how we turn Argentine volatility into predictable profitability',
    'hero.average-roi': 'Average ROI',
    'hero.upside-potential': 'Upside potential',
    
    // Data Section
    'data.title': 'Numbers don\'t lie',
    'data.subtitle': 'Comparative data demonstrating the exceptional moment to invest in Buenos Aires',
    'data.international-comparison': 'International comparison (USD/m²)',
    
    // Philosophy Section
    'philosophy.badge': 'Antifragile Philosophy',
    'philosophy.title.part1': 'We thrive in',
    'philosophy.title.part2': 'uncertainty',
    'philosophy.subtitle': 'While others fear volatility, we leverage it. Buenos Aires offers unique opportunities for investors who understand how to navigate complexity.',
    'philosophy.exceptional-returns.title': 'Exceptional Returns',
    'philosophy.exceptional-returns.description': '8-15% annual ROI in USD. Prices 60% below historical peaks create unrepeatable opportunities.',
    'philosophy.exceptional-returns.stat': 'appreciation potential',
    'philosophy.legal-security.title': 'Legal Security',
    'philosophy.legal-security.description': 'Exhaustive due diligence, certified notary and power of attorney for 100% remote and secure operations.',
    'philosophy.legal-security.stat': 'successful operations',
    'philosophy.boutique-service.title': 'Boutique Service',
    'philosophy.boutique-service.description': 'From strategy to rental management. A specialized team dedicated exclusively to your success.',
    'philosophy.boutique-service.stat': 'comprehensive support',
    

    // Testimonials
    'testimonials.badge': 'Success Stories',
    'testimonials.title': 'Investors who trusted',
    'testimonials.subtitle': 'Professionals from around the world have chosen our expertise for their investments in Buenos Aires',
    'testimonials.see-more': 'See more success stories',
    'testimonials.quote1': '"14% ROI in the first year. The process was impeccably professional and completely transparent from the start."',
    'testimonials.quote2': '"100% remote operation from Madrid. Absolute legal security and support in every detail of the process."',
    'testimonials.quote3': '"Best investment decision in years. Combines exceptional profitability with truly boutique service."',

    // Blog Page
    'blog.title': 'Insights & Analysis',
    'blog.subtitle': 'Deep perspectives on real estate investments in Argentina',
    'blog.featured-articles': 'Featured articles',
    'blog.all-articles': 'All articles',
    'blog.newsletter.title': 'Stay informed',
    'blog.newsletter.subtitle': 'Receive exclusive analysis and investment opportunities directly in your email',
    'blog.newsletter.placeholder': 'Your email',
    'blog.newsletter.subscribe': 'Subscribe',
    'blog.newsletter.success': 'Subscription successful!',
    'blog.newsletter.success.description': 'You have successfully subscribed to our newsletter',
    'blog.newsletter.error': 'Error',
    'blog.newsletter.error.invalid': 'Please enter a valid email',
    'blog.newsletter.error.general': 'There was an error subscribing. Please try again.',
    'blog.read-more': 'Read more',
    'blog.back-to-blog': 'Back to blog',
    'blog.reading-time': 'read',

    // Why Argentina Page
    'why-argentina.title': 'Why Argentina now?',
    'why-argentina.subtitle': 'An investment thesis backed by hard data, economic cycles and a historic opportunity to buy world-class assets at emerging market prices.',
    'why-argentina.watch-analysis': 'Watch complete analysis',
    'why-argentina.download-pdf': 'Download free PDF',
    'why-argentina.macroeconomic-data': 'Macroeconomic data',
    'why-argentina.historical-cycles': 'Historical cycles',
    'why-argentina.expert-analysis': 'Expert analysis',
    'why-argentina.historic-opportunity': 'Historic opportunity',
    'why-argentina.play-analysis': 'Play analysis',
    'why-argentina.potential-multiplier': 'Potential multiplier',
    'why-argentina.video-version': 'Video version',
    'why-argentina.complete-analysis': 'Complete analysis (5-7 min)',
    'why-argentina.executive-pdf': 'Executive PDF',
    'why-argentina.free-download': 'Free download',
    'why-argentina.numbers-dont-lie': 'Numbers don\'t lie',
    'why-argentina.numbers-subtitle': 'Comparative data demonstrating the exceptional moment to invest in Buenos Aires',
    'why-argentina.international-comparison': 'International comparison (USD/m²)',
    'why-argentina.catalysts-title': 'Growth Catalysts',
    'why-argentina.catalysts-subtitle': 'Macro factors driving real estate appreciation in the medium term',
    'why-argentina.political-cycle': 'Political Cycle',
    'why-argentina.political-cycle.description': 'New pro-market government. Economic opening policies and exchange rate normalization.',
    'why-argentina.vaca-muerta': 'Vaca Muerta',
    'why-argentina.vaca-muerta.description': 'Second largest unconventional gas field in the world. Revenue potential of $200B+ over 20 years.',
    'why-argentina.exchange-rate': 'Exchange Rate',
    'why-argentina.exchange-rate.description': 'Imminent currency unification. Long-term equilibrium correction favors local assets.',
    'why-argentina.risks-title': 'Risks and how we mitigate them?',
    'why-argentina.risks-subtitle': 'Total transparency about challenges and our mitigation strategies',
    'why-argentina.risk1.title': 'Risk: Political/economic instability',
    'why-argentina.risk1.mitigation': 'Mitigation: Investment in physical assets (brick) denominated in USD. Diversification by neighborhoods and property types. Rental contracts in hard currency.',
    'why-argentina.risk2.title': 'Risk: Rental regulations',
    'why-argentina.risk2.mitigation': 'Mitigation: Robust legal structures. Constant regulatory monitoring. Flexibility between traditional rental and temporary (Airbnb) according to regulatory changes.',
    'why-argentina.risk3.title': 'Risk: Liquidity and exit',
    'why-argentina.risk3.mitigation': 'Mitigation: Selection of properties in prime areas with high demand. Network of local and international buyers. Exit strategy planned from day 1.',
    'why-argentina.schedule-consultation': 'Schedule a consultation',
    
    // Footer
    'footer.company': 'Company',
    'footer.company-description': 'We transform the uncertainty of the Argentine market into exceptional investment opportunities. Boutique expertise for sophisticated investors.',
    'footer.services': 'Services',
    'footer.service.strategic-consulting': 'Strategic Consulting',
    'footer.service.property-curation': 'Property Curation',
    'footer.service.financial-structuring': 'Financial Structuring',
    'footer.service.legal-due-diligence': 'Legal Due Diligence',
    'footer.service.asset-optimization': 'Asset Optimization',
    'footer.service.integral-management': 'Integral Management',
    'footer.resources': 'Resources',
    'footer.resource.investment-thesis': 'Investment Thesis',
    'footer.resource.research-analysis': 'Research & Analysis',
    'footer.resource.market-intelligence': 'Market Intelligence',
    'footer.resource.roi-calculator': 'ROI Calculator',
    'footer.resource.success-cases': 'Success Cases',
    'footer.resource.team': 'Team',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter-subtitle': 'Stay updated with exclusive insights',
    'footer.email-placeholder': 'Your email',
    'footer.subscribe': 'Subscribe',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Services Page
    'services.title': '360° Services',
    'services.subtitle': 'Everything you need to successfully invest in Buenos Aires. From initial consultation to rental management, we handle every detail.',
    'services.main-title': 'Main Services',
    'services.main-subtitle': 'Each service is designed to eliminate friction and maximize your return on investment',
    'services.advisory.title': '1-on-1 Advisory',
    'services.advisory.price': '300 USD/hour',
    'services.advisory.description': 'Personalized consulting with local experts. Investment profile analysis and specific recommendations.',
    'services.advisory.feature1': 'Risk profile analysis',
    'services.advisory.feature2': 'Neighborhood recommendations',
    'services.advisory.feature3': 'Financing strategy',
    'services.advisory.feature4': 'Personalized ROI projection',
    'services.search.title': 'Area & Search',
    'services.search.price': 'Included in packages',
    'services.search.description': 'In-depth neighborhood research and active property search that meets your specific criteria.',
    'services.search.feature1': 'Detailed demographic analysis',
    'services.search.feature2': 'Urban growth projection',
    'services.search.feature3': 'Active property search',
    'services.search.feature4': 'Complete due diligence',
    'services.exchange.title': 'Currency Exchange',
    'services.exchange.price': 'Best market rate',
    'services.exchange.description': 'USDT/crypto to USD cash or ARS conversion at the best exchange rate. Secure and traceable process.',
    'services.exchange.feature1': 'USDT → USD cash',
    'services.exchange.feature2': 'Crypto → ARS',
    'services.exchange.feature3': 'Guaranteed competitive rate',
    'services.exchange.feature4': 'Secure and fast transfers',
    'services.legal.title': 'Legal Documentation',
    'services.legal.price': 'Comprehensive package',
    'services.legal.description': 'Complete CUIT/CDI management, tax documentation and legal structures for foreign investors.',
    'services.legal.feature1': 'CUIT/CDI processing',
    'services.legal.feature2': 'Bank account opening',
    'services.legal.feature3': 'Optimal tax structures',
    'services.legal.feature4': 'Apostilled documentation',
    'services.notary.title': 'Notary & Power of Attorney',
    'services.notary.price': 'Secure remote closing',
    'services.notary.description': 'Certified notary and power of attorney for remote purchase. 100% remote closing with legal guarantees.',
    'services.notary.feature1': 'Trusted notary',
    'services.notary.feature2': 'International power of attorney',
    'services.notary.feature3': 'Title verification',
    'services.notary.feature4': 'Certified remote closing',
    'services.renovation.title': 'Turnkey Renovation',
    'services.renovation.price': 'Comprehensive project',
    'services.renovation.description': 'Complete design, renovation and interior design. From purchase to rental without you having to travel.',
    'services.renovation.feature1': 'Architectural design',
    'services.renovation.feature2': 'Complete project management',
    'services.renovation.feature3': 'Professional interior design',
    'services.renovation.feature4': 'Turnkey delivery',
    'services.rental-title': 'Rental Management',
    'services.rental-subtitle': 'Two rental modalities to maximize your return according to your risk profile and objectives',
    'services.traditional.title': 'Traditional Rental',
    'services.traditional.description': 'Long-term residential rental management. Maximum stability and income predictability.',
    'services.traditional.feature1': '2-3 year contracts',
    'services.traditional.feature2': 'Verified tenants',
    'services.traditional.feature3': 'Solid guarantees',
    'services.traditional.feature4': 'Complete administration',
    'services.airbnb.title': 'Airbnb / Students',
    'services.airbnb.description': 'Temporary rental and international students. Higher rotation but superior yields.',
    'services.airbnb.feature1': 'Complete Airbnb management',
    'services.airbnb.feature2': 'Student rentals',
    'services.airbnb.feature3': '15-25% higher yields',
    'services.airbnb.feature4': 'Maintenance included',
    'services.rental-question': 'Not sure which modality suits you best?',
    'services.rental-button': 'Free personalized consultation',
    'services.rental-button-mobile': 'Personalized consultation',
    'services.guarantee-title': '100% Satisfaction Guarantee',
    'services.guarantee-subtitle': 'If you\'re not completely satisfied with our service in the first 30 days, we\'ll refund 100% of your investment. No questions asked.',
    'services.guarantee-stat1': '100%',
    'services.guarantee-label1': 'Successful operations',
    'services.guarantee-stat2': '24/7',
    'services.guarantee-label2': 'Available support',
    'services.guarantee-stat3': '30 days',
    'services.guarantee-label3': 'Money-back guarantee',


    // Process Page
    'process.badge': 'Proven Process',
    'process.title.part1': 'A process that',
    'process.title.part2': 'works',
    'process.title': 'Our Process',
    'process.subtitle': 'A proven process that takes you from initial idea to generating passive income in less than 3 months. Transparent, predictable and with step-by-step tracking.',
    'process.average-time-title': 'Average time',
    'process.average-time-value': '8-12 weeks',
    'process.average-time-desc': 'From initial consultation to first rental',
    'process.success-rate-title': 'Success rate',
    'process.success-rate-value': '100%',
    'process.success-rate-desc': 'Operations completed successfully',
    'process.satisfaction-title': 'Satisfaction',
    'process.satisfaction-value': '100%',
    'process.satisfaction-desc': 'Clients who recommend our service',
    'process.steps-title': '5 steps towards your successful investment',
    'process.steps-subtitle': 'Each step is designed to minimize risks and maximize transparency',
    'process.step1.title': 'Free Discovery Call',
    'process.step1.duration': '15 minutes',
    'process.step1.description': 'We learn about your objectives, budget and risk profile. We define initial strategy and realistic expectations.',
    'process.step1.detail1': 'Investment profile analysis',
    'process.step1.detail2': 'Available budget definition',
    'process.step1.detail3': 'Profitability and timeline objectives',
    'process.step1.detail4': 'Initial neighborhood recommendations',
    'process.step2.title': 'Mandate & Due Diligence',
    'process.step2.duration': '2-4 weeks',
    'process.step2.description': 'Active search and deep property analysis. Complete legal, technical and financial verification.',
    'process.step2.detail1': 'Active search based on criteria',
    'process.step2.detail2': 'Title and documentation verification',
    'process.step2.detail3': 'Detailed technical inspection',
    'process.step2.detail4': 'Projected profitability analysis',
    'process.step3.title': 'Offer & Notarial Closing',
    'process.step3.duration': '1-2 weeks',
    'process.step3.description': 'Negotiation, formal offer and remote notarial closing. Secure transfer with certified power of attorney.',
    'process.step3.detail1': 'Price and conditions negotiation',
    'process.step3.detail2': 'Legal documentation preparation',
    'process.step3.detail3': 'Notarial closing with remote power',
    'process.step3.detail4': 'Secure funds transfer',
    'process.step4.title': 'Construction Project',
    'process.step4.duration': '4-8 weeks',
    'process.step4.description': 'Turnkey design, renovation and interior design. Complete supervision until turnkey delivery.',
    'process.step4.detail1': 'Architectural and decorative design',
    'process.step4.detail2': 'Permits and contractors management',
    'process.step4.detail3': 'Daily construction supervision',
    'process.step4.detail4': 'Delivery with furniture included',
    'process.step5.title': 'Post-Purchase Administration',
    'process.step5.duration': 'Ongoing',
    'process.step5.description': 'Complete rental, maintenance and administration management. Monthly performance reports.',
    'process.step5.detail1': 'Tenant search and verification',
    'process.step5.detail2': 'Contract and collection management',
    'process.step5.detail3': 'Preventive and corrective maintenance',
    'process.step5.detail4': 'Monthly profitability reports',
    'process.includes': 'Includes:',
    'process.timeline-title': 'Typical project timeline',
    'process.timeline-subtitle': 'Weekly schedule from first contact to generating rent',
    'process.timeline.week1': 'Week 1',
    'process.timeline.milestone1': 'Discovery call + Search mandate',
    'process.timeline.week2': 'Week 2-3',
    'process.timeline.milestone2': 'Presentation of pre-selected options',
    'process.timeline.week3': 'Week 4',
    'process.timeline.milestone3': 'Due diligence + Formal offer',
    'process.timeline.week4': 'Week 5',
    'process.timeline.milestone4': 'Notarial closing + Transfer',
    'process.timeline.week5': 'Week 6-12',
    'process.timeline.milestone5': 'Construction project + Renovation',
    'process.timeline.week6': 'Week 13',
    'process.timeline.milestone6': 'Put to rent + First tenant',
    'process.final-title': 'Your property generating rent!',
    'process.final-description': 'At the end of the process you will have a quality asset generating passive income in USD.',
    'process.cta-title': 'Ready to get started?',
    'process.cta-subtitle': 'The first step is always a free 15-minute consultation. No commitment, just to get to know you and see if we are the right fit.',
    'process.cta-button': 'Schedule your free consultation',
    'process.cta-button-mobile': 'Schedule consultation',
    'process.cta-pricing': 'View rates and packages',
    'process.cta-benefit1': 'No initial commitment',
    'process.cta-benefit2': '100% free consultation',
    'process.cta-benefit3': 'Response within 24h',
    'process.explore-methodology': 'Explore complete methodology',

    // Case Studies Page
    'case-studies.badge': 'Success Portfolio',
    'case-studies.title': 'Case Studies',
    'case-studies.subtitle': 'Detailed analysis of successful operations. Case studies with real metrics, ROI obtained and lessons learned from investors who trusted our expertise.',
    'case-studies.back-home': 'Back to home',

    // Resources Page
    'resources.badge': 'Intelligence Hub',
    'resources.title': 'Research & Tools',
    'resources.subtitle': 'In-depth analysis of the Argentine market, evaluation tools and exclusive resources for sophisticated investors.',
    'resources.market-analysis': 'Market Analysis',
    'resources.back-home': 'Back to home',

    // Pricing Page
    'pricing.badge': 'Investment Structure',
    'pricing.title': 'Pricing & Services',
    'pricing.subtitle': 'Transparent fee structure and packages designed for each investor profile. Total alignment of interests with measurable results.',
    'pricing.personal-shopper.title': 'Real Estate Personal Shopper',
    'pricing.personal-shopper.description': 'We specialize in finding the ideal property for you, based on your tastes, investment objectives and budget.',
    'pricing.personal-shopper.feature1': 'Analysis of areas with highest revaluation potential',
    'pricing.personal-shopper.feature2': 'Property recording and viability report',
    'pricing.personal-shopper.feature3': 'Best price negotiation with updated data',
    'pricing.personal-shopper.feature4': 'CDI/CUIL management and notarial power processing',
    'pricing.personal-shopper.feature5': 'Comprehensive legal, registry and documentary assistance',
    'pricing.personal-shopper.commission': 'Commission:',
    'pricing.personal-shopper.rate': '2%',
    'pricing.personal-shopper.note': 'on purchase value',
    'pricing.crypto-exchange.title': 'Currency Exchange via Crypto',
    'pricing.crypto-exchange.description': 'We offer an agile and secure service to bring your dollars to the country through cryptocurrencies, with ultra-competitive rates.',
    'pricing.crypto-exchange.feature1': 'Agile and secure process',
    'pricing.crypto-exchange.feature2': 'Ultra competitive rates',
    'pricing.crypto-exchange.feature3': 'Depends on market conditions',
    'pricing.crypto-exchange.feature4': 'According to volume traded',
    'pricing.crypto-exchange.commission': 'Commission:',
    'pricing.crypto-exchange.rate': '0%',
    'pricing.crypto-exchange.note': 'according to market conditions',
    'pricing.airbnb.title': 'Airbnb Management',
    'pricing.airbnb.badge': '⭐ Superhost',
    'pricing.airbnb.description': 'Did you buy to rent? We take care of the entire management process of your property.',
    'pricing.airbnb.feature1': 'Professional listing publication',
    'pricing.airbnb.feature2': 'Booking management and guest service',
    'pricing.airbnb.feature3': '24/7 communication',
    'pricing.airbnb.feature4': 'Revenue optimization',
    'pricing.airbnb.feature5': 'Check-in, check-out and cleaning coordination',
    'pricing.airbnb.commission': 'Commission:',
    'pricing.airbnb.rate': '15%',
    'pricing.airbnb.note': 'of monthly gross income + cleaning',
    'pricing.back-home': 'Back to home',

    // About Page
    'about.badge': 'Our Team',
    'about.title': 'Antifragile Philosophy',
    'about.subtitle': 'We are specialists who thrive in uncertainty. Our boutique team combines local expertise with global vision to transform Argentine volatility into exceptional opportunities.',
    'about.multidisciplinary.title': 'Multidisciplinary Expertise',
    'about.multidisciplinary.description': 'We combine deep knowledge of the local market with international experience in structuring complex investments.',
    'about.boutique.title': 'Boutique Approach',
    'about.boutique.description': 'Personalized and exclusive attention. Each client receives a tailor-made service designed specifically for their unique objectives.',
    'about.excellence.title': 'Proven Excellence',
    'about.excellence.description': 'Track record of success in complex operations. Total transparency and alignment of interests with each client.',
    'about.back-home': 'Back to home',

    // Contact Page
    'contact.badge': 'Start Conversation',
    'contact.title': 'Contact',
    'contact.subtitle': 'Schedule your initial strategic consultation at no cost. We will discuss your objectives and explore the most relevant opportunities for your investor profile.',
    'contact.strategic-consultation.title': 'Strategic Consultation',
    'contact.strategic-consultation.description': '30-minute initial session to evaluate objectives and opportunities. Calendar available soon.',
    'contact.direct-contact.title': 'Direct Contact',
    'contact.direct-contact.description': 'For specific queries or additional information. Click here to contact via WhatsApp.',
    'contact.form.title': 'Contact Form',
    'contact.form.subtitle': 'Send us your query and we will respond shortly',
    'contact.form.name': 'Full name',
    'contact.form.name-placeholder': 'Your full name',
    'contact.form.email': 'Email',
    'contact.form.email-placeholder': 'your@email.com',
    'contact.form.message': 'Message',
    'contact.form.message-placeholder': 'Tell us about your query or interest in real estate investments...',
    'contact.form.submit': 'Send message',
    'contact.whatsapp-message': 'Hello, I am interested in learning more about investment opportunities in Buenos Aires.',
    'contact.back-home': 'Back to home',

    // Blog Articles
    'articles.microcentro.title': 'Why Buenos Aires Downtown is the best real estate opportunity (2025)',
    'articles.microcentro.excerpt': 'Complete analysis of the Argentine cycle, comparisons with Madrid and Barcelona, and how to invest in offices to recycle with 8-10% yields.',
    'articles.microcentro.content': `The Argentine real estate market is experiencing one of its most interesting moments of the last decade. While the country goes through a new phase of economic stabilization under the Milei administration, Buenos Aires Downtown emerges as the most attractive investment opportunity for 2025.

## Current Macroeconomic Context

Argentina is in a crucial transition phase. Partial dollarization and stabilization policies have generated a unique scenario where dollar-denominated assets maintain their value while the peso gradually stabilizes. This dynamic creates an exceptional window of opportunity for long-term investors.

## Downtown: The Diamond in the Rough

### Strategic Location
Buenos Aires Downtown concentrates:
- **Connectivity**: Nerve center of public transportation
- **Infrastructure**: Consolidated services and total access
- **History**: Heritage architecture with recycling potential
- **Future**: Urban revitalization plans underway

### Recycling Opportunity
Downtown offices present unique characteristics:
- **Prices**: USD 800-1,200 per m² (vs USD 3,000+ in Palermo)
- **Potential**: Conversion to luxury housing
- **Yields**: 8-10% annually in dollars
- **Appreciation**: 200-300% revaluation potential

## International Comparison

### Madrid - Centro District
- **Price**: €4,000-6,000/m²
- **Yield**: 3-4%
- **Growth**: Limited by saturation

### Barcelona - Ciutat Vella
- **Price**: €3,500-5,500/m²
- **Yield**: 3-5%
- **Regulation**: Growing restrictions

### Buenos Aires - Downtown
- **Price**: USD 800-1,200/m²
- **Yield**: 8-10%
- **Potential**: Massive upside potential

## Investment Strategy

### Phase 1: Acquisition (2025)
- Identify buildings with recycling potential
- Negotiate prices at the cycle bottom
- Secure peso financing at favorable rates

### Phase 2: Development (2025-2026)
- Recycling to international standards
- Sustainable certifications
- World-class amenities

### Phase 3: Monetization (2027+)
- Sale at corrected market prices
- Rental at normalized yields
- Flexible exit strategy

## Risk Factors

### Political
- Changes in urban regulations
- Tax modifications
- Institutional instability

### Economic
- Exchange rate volatility
- Residual inflation
- Credit access

### Market
- Competition from other developers
- Changes in location preferences
- Segment saturation

## Conclusion

Buenos Aires Downtown represents a unique opportunity that combines:
- **Perfect timing**: Real estate cycle bottom
- **Solid fundamentals**: Location and connectivity
- **Massive upside**: Exceptional revaluation potential
- **Attractive yields**: Immediate dollar profitability

For investors with a 3-5 year horizon and moderate risk tolerance, this opportunity can generate exceptional returns while contributing to the revitalization of a historic area of Buenos Aires.

*The information contained in this analysis is educational in nature and does not constitute personalized financial advice.*`,
    'articles.bitcoin.title': 'Buy a home in Buenos Aires with Bitcoin without selling it',
    'articles.bitcoin.excerpt': 'How to leverage your BTC at 5% in DeFi, buy square meters at USD 1,000/m² and preserve the upside potential of cryptocurrency.',
    'articles.bitcoin.content': `<div class="space-y-8">
          <!-- Featured intro -->
          <div class="bg-gradient-to-r from-blue-50 to-amber-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p class="text-sm text-blue-700 font-medium mb-2">📈 Updated: July 10, 2025 | Bitcoin reference price: <strong>USD 111,405</strong></p>
          </div>

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-8 mb-4">
            🏠 Introduction: when the bitcoiner wants bricks
          </h2>
          <p class="text-lg leading-relaxed text-slate-700 mb-6">
            Bitcoin has been one of the best-performing assets of the last decade. Many holders want to diversify into tangible assets, but <strong>selling BTC means losing future exposure and paying capital gains taxes</strong>. Argentine bank mortgages require rates close to 9% and complex procedures.
          </p>
          <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-8">
            <p class="text-green-800">💡 <strong>The solution:</strong> With a DeFi loan secured with BTC (for example on Aave v3) you can obtain liquidity at 5%, maintaining exposure to cryptocurrency and closing the purchase in cash in Buenos Aires.</p>
          </div>

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-12 mb-6">
            🔢 Numerical example: 90 m² apartment in Recoleta
          </h2>
        </div>`,

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.contact': 'Contact',
    'common.email': 'Email',
    'common.phone': 'Phone',
    'common.name': 'Name',
    'common.send': 'Send',
    'common.read-more': 'Read more',
    'common.learn-more': 'Learn more',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [language, setLanguage] = useState<Language>(() => {
    // First try to get from URL parameter
    if (lang === 'es' || lang === 'en') {
      return lang;
    }
    // Fallback to localStorage or default
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'es';
  });

  // Update language when URL parameter changes
  useEffect(() => {
    if (lang === 'es' || lang === 'en') {
      setLanguage(lang);
    }
  }, [lang]);

  // Save to localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const handleSetLanguage = (newLang: Language) => {
    if (newLang !== language) {
      // Update URL with new language
      const currentPath = location.pathname;
      const pathWithoutLang = currentPath.replace(/^\/(es|en)/, '');
      const newPath = `/${newLang}${pathWithoutLang || '/'}`;
      navigate(newPath, { replace: true });
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};