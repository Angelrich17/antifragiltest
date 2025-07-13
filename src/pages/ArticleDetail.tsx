import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import bitcoinBuenosAires from "@/assets/bitcoin-buenos-aires.jpg";
import casaRosada from "@/assets/casa-rosada-buenos-aires.jpg";

const ArticleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // Datos de artículos (en una app real, esto vendría de una API o base de datos)
  const articles = {
    "microcentro-porteno-mejor-oportunidad-inmobiliaria-2025": {
      id: 5,
      title: "Por qué el Microcentro porteño es la mejor oportunidad inmobiliaria (2025)",
      excerpt: "Análisis completo del ciclo argentino, comparativas con Madrid y Barcelona, y cómo invertir en oficinas a reciclar con yields del 8-10%.",
      date: "13 Julio 2025",
      readTime: "12 min",
      category: "Análisis",
      image: "/lovable-uploads/8e194d38-6015-40a9-ae62-3263f4341d3a.png",
      content: `
        <div class="space-y-8">
          <!-- Intro destacado -->
          <div class="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p class="text-sm text-blue-700 font-medium mb-2">🏢 Actualizado: 13 de enero de 2025 | Nuevo ciclo económico argentino</p>
          </div>

          <!-- Imagen Casa Rosada -->
          <div class="w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={casaRosada} 
              alt="Casa Rosada Buenos Aires" 
              class="w-full h-full object-cover"
            />
          </div>

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-8 mb-4">
            El punto de partida: nuevo ciclo argentino
          </h2>
          <p class="text-lg leading-relaxed text-slate-700 mb-6">
            Desde la llegada de Javier Milei en diciembre 2023, Argentina recortó de raíz el déficit fiscal primario y estabilizó el tipo de cambio. <strong>El resultado es doble: el salario real en dólares casi se triplicó y los bancos volvieron a ofrecer crédito hipotecario en moneda dura</strong>. En paralelo, la oferta publicada de propiedades en venta viene cayendo desde 2020, mientras las escrituras suben trimestre a trimestre, creando un mercado en clara fase de absorción.
          </p>

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-12 mb-6">
            🏙️ Zonas prime versus zonas de valor
          </h2>
          ${isMobile ? `
          <div class="space-y-4 mb-8">
            <div class="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4">
              <h3 class="font-bold text-purple-800 mb-2">Puerto Madero</h3>
              <p class="text-purple-700 font-bold text-lg">~US$6.000/m²</p>
              <p class="text-purple-600 text-sm">Waterfront ultramoderno con torres de obra nueva y vistas al Río.</p>
            </div>
            
            <div class="bg-gradient-to-r from-indigo-50 to-indigo-100 border border-indigo-200 rounded-lg p-4">
              <h3 class="font-bold text-indigo-800 mb-2">Palermo Chico</h3>
              <p class="text-indigo-700 font-bold text-lg">~US$4.000/m²</p>
              <p class="text-indigo-600 text-sm">Barrio de las Embajadas, palacetes y parques.</p>
            </div>
            
            <div class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
              <h3 class="font-bold text-blue-800 mb-2">Palermo Soho/Hollywood y Núñez</h3>
              <p class="text-blue-700 font-bold text-lg">~US$3.000/m²</p>
              <p class="text-blue-600 text-sm">Polo gastronómico (Don Julio, La Carnicería) y vida nocturna.</p>
            </div>
            
            <div class="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-4">
              <h3 class="font-bold text-green-800 mb-2">Recoleta</h3>
              <p class="text-green-700 font-bold text-lg">~US$2.700/m²</p>
              <p class="text-green-600 text-sm">Arquitectura clásica y turismo cultural.</p>
            </div>
            
            <div class="bg-gradient-to-r from-amber-50 to-yellow-100 border-2 border-amber-300 rounded-lg p-4 shadow-md">
              <h3 class="font-bold text-amber-800 mb-2">🌟 Microcentro (San Nicolás/Monserrat)</h3>
              <p class="text-amber-700 font-bold text-xl">US$1.000-1.500/m²</p>
              <p class="text-amber-600 font-medium">Inventario masivo de plantas con techos altos, hoy a precio de remate.</p>
            </div>
          </div>
          ` : `
          <div class="overflow-x-auto shadow-lg rounded-lg mb-8">
            <table class="w-full bg-white">
              <thead class="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                <tr>
                  <th class="px-6 py-4 text-left font-semibold">Zona</th>
                  <th class="px-6 py-4 text-left font-semibold">Precio/m²</th>
                  <th class="px-6 py-4 text-left font-semibold">Características</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr class="hover:bg-purple-50 transition-colors">
                  <td class="px-6 py-4 font-medium text-purple-800">Puerto Madero</td>
                  <td class="px-6 py-4 text-purple-700 font-bold">~US$6.000/m²</td>
                  <td class="px-6 py-4 text-slate-600">Waterfront ultramoderno con torres de obra nueva y vistas al Río</td>
                </tr>
                <tr class="hover:bg-indigo-50 transition-colors">
                  <td class="px-6 py-4 font-medium text-indigo-800">Palermo Chico</td>
                  <td class="px-6 py-4 text-indigo-700 font-bold">~US$4.000/m²</td>
                  <td class="px-6 py-4 text-slate-600">Barrio de las Embajadas, palacetes y parques</td>
                </tr>
                <tr class="hover:bg-blue-50 transition-colors">
                  <td class="px-6 py-4 font-medium text-blue-800">Palermo Soho/Hollywood y Núñez</td>
                  <td class="px-6 py-4 text-blue-700 font-bold">~US$3.000/m²</td>
                  <td class="px-6 py-4 text-slate-600">Polo gastronómico (Don Julio, La Carnicería) y vida nocturna</td>
                </tr>
                <tr class="hover:bg-green-50 transition-colors">
                  <td class="px-6 py-4 font-medium text-green-800">Recoleta</td>
                  <td class="px-6 py-4 text-green-700 font-bold">~US$2.700/m²</td>
                  <td class="px-6 py-4 text-slate-600">Arquitectura clásica y turismo cultural</td>
                </tr>
                <tr class="hover:bg-amber-50 transition-colors bg-amber-25 border-l-4 border-amber-500">
                  <td class="px-6 py-4 font-bold text-amber-800">🌟 Microcentro (San Nicolás/Monserrat)</td>
                  <td class="px-6 py-4 text-amber-700 font-bold text-lg">US$1.000-1.500/m²</td>
                  <td class="px-6 py-4 text-amber-700 font-medium">Inventario masivo de plantas con techos altos, hoy a precio de remate</td>
                </tr>
              </tbody>
            </table>
          </div>
          `}

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-12 mb-6">
            📊 Radiografía del Microcentro porteño
          </h2>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 class="text-lg font-bold text-blue-800 mb-4">💰 Precios 2025</h3>
              <ul class="space-y-2 text-slate-700">
                <li>📈 <strong>San Nicolás (publicación):</strong> US$1.785/m²</li>
                <li>📈 <strong>Monserrat (publicación):</strong> US$2.121/m²</li>
                <li>🔥 <strong>Oficinas a reciclar:</strong> US$900-1.200/m²</li>
              </ul>
            </div>
            <div class="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 class="text-lg font-bold text-amber-800 mb-4">🎯 Motivos del descuento</h3>
              <ul class="space-y-2 text-slate-700">
                <li>📉 Sobre-oferta de oficinas tras la pandemia</li>
                <li>🏛️ Incentivos fiscales del plan municipal 'Microcentro 21'</li>
                <li>🏢 Propietarios corporativos urgidos por liquidar metros ociosos</li>
              </ul>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-12 mb-6">
            🌍 Madrid y Barcelona: comparativa de precios y yields
          </h2>
          ${isMobile ? `
          <div class="space-y-4 mb-8">
            <div class="bg-gradient-to-r from-green-50 to-emerald-100 border-2 border-green-300 rounded-lg p-4 shadow-md">
              <h3 class="font-bold text-green-800 mb-3">🇦🇷 Microcentro BA</h3>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-green-700">Precio:</span>
                  <span class="font-bold text-green-600">~US$1.200/m²</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-green-700">Renta (40m²):</span>
                  <span class="font-bold text-green-600">US$800-1.000/mes</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-green-700">Yield bruto:</span>
                  <span class="font-bold text-green-600 text-lg">8-10%</span>
                </div>
              </div>
            </div>
            
            <div class="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 class="font-bold text-red-800 mb-3">🇪🇸 Madrid Centro</h3>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-red-700">Precio:</span>
                  <span class="font-bold text-red-600">~US$7.900/m²</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-red-700">Renta (40m²):</span>
                  <span class="font-bold text-red-600">EUR1.040/mes</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-red-700">Yield bruto:</span>
                  <span class="font-bold text-red-600">3,9%</span>
                </div>
              </div>
            </div>
            
            <div class="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 class="font-bold text-orange-800 mb-3">🇪🇸 Barcelona Ciutat Vella</h3>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-orange-700">Precio:</span>
                  <span class="font-bold text-orange-600">~US$5.350/m²</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-orange-700">Renta (40m²):</span>
                  <span class="font-bold text-orange-600">EUR1.010/mes</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-orange-700">Yield bruto:</span>
                  <span class="font-bold text-orange-600">4,8%</span>
                </div>
              </div>
            </div>
          </div>
          ` : `
          <div class="overflow-x-auto shadow-lg rounded-lg mb-8">
            <table class="w-full bg-white">
              <thead class="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <tr>
                  <th class="px-6 py-4 text-left font-semibold">Ciudad</th>
                  <th class="px-6 py-4 text-left font-semibold">Precio/m²</th>
                  <th class="px-6 py-4 text-left font-semibold">Renta mensual (40m²)</th>
                  <th class="px-6 py-4 text-left font-semibold">Yield bruto</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr class="hover:bg-green-50 transition-colors bg-green-25 border-l-4 border-green-500">
                  <td class="px-6 py-4 font-bold text-green-800">🇦🇷 Microcentro BA</td>
                  <td class="px-6 py-4 text-green-600 font-bold">~US$1.200/m²</td>
                  <td class="px-6 py-4 text-green-600 font-bold">US$800-1.000</td>
                  <td class="px-6 py-4 text-green-600 font-bold text-lg">8-10%</td>
                </tr>
                <tr class="hover:bg-red-50 transition-colors">
                  <td class="px-6 py-4 font-medium text-red-800">🇪🇸 Madrid Centro</td>
                  <td class="px-6 py-4 text-red-600">~US$7.900/m²</td>
                  <td class="px-6 py-4 text-red-600">EUR1.040</td>
                  <td class="px-6 py-4 text-red-600">3,9%</td>
                </tr>
                <tr class="hover:bg-orange-50 transition-colors">
                  <td class="px-6 py-4 font-medium text-orange-800">🇪🇸 Barcelona Ciutat Vella</td>
                  <td class="px-6 py-4 text-orange-600">~US$5.350/m²</td>
                  <td class="px-6 py-4 text-orange-600">EUR1.010</td>
                  <td class="px-6 py-4 text-orange-600">4,8%</td>
                </tr>
              </tbody>
            </table>
          </div>
          `}
          
          <div class="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <h4 class="font-bold text-blue-800 mb-2">📈 Conclusión</h4>
            <p class="text-blue-700 text-lg">
              <strong>Cada dólar invertido en Microcentro brinda el doble de renta y cuatro veces más upside de apreciación frente a sus pares europeos.</strong>
            </p>
          </div>

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-12 mb-6">
            🏢 Caso práctico Antifragile Advisors
          </h2>
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-8">
            <h3 class="text-xl font-bold text-blue-800 mb-6">Compra oficina 120 m² sobre Av. Corrientes</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-bold text-slate-800 mb-4">💰 Inversión inicial</h4>
                <ul class="space-y-2 text-slate-700">
                  <li>🏢 <strong>Compra:</strong> US$135.000 (US$1.125/m²)</li>
                  <li>🔨 <strong>Reforma (2 studios + 1 loft):</strong> US$35.000</li>
                  <li>📊 <strong>Capital total:</strong> US$170.000</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-green-800 mb-4">📈 Rentabilidad</h4>
                <ul class="space-y-2 text-slate-700">
                  <li>🏨 <strong>Ingreso Airbnb:</strong> US$11.520/año</li>
                  <li>📊 <strong>Yield bruto primer año:</strong> 6,8%</li>
                  <li>🚀 <strong>Con ajuste tarifa 10%:</strong> 8%</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-12 mb-6">
            ⚠️ Riesgos y mitigación
          </h2>
          <div class="grid md:grid-cols-2 gap-4 mb-8">
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 class="font-bold text-yellow-800 mb-2">💱 Volatilidad cambiaria</h4>
              <p class="text-yellow-700 text-sm">Escrituras en USD y flujo en USD vía turismo</p>
            </div>
            <div class="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 class="font-bold text-orange-800 mb-2">🏨 Vacancia</h4>
              <p class="text-orange-700 text-sm">Ubicación 200 m de Av. 9 de Julio y perfil 'bleisure'</p>
            </div>
            <div class="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 class="font-bold text-red-800 mb-2">🔨 Obra</h4>
              <p class="text-red-700 text-sm">Contratos llave en mano a precio cerrado; seguimiento 100% propio</p>
            </div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 class="font-bold text-blue-800 mb-2">📋 Marco legal Airbnb</h4>
              <p class="text-blue-700 text-sm">Zonas habilitadas y gestión de licencias</p>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-12 mb-6">
            🏆 Veredicto: gran ganador 2025
          </h2>
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-8 mb-8">
            <h3 class="text-xl font-bold text-green-800 mb-4">🌟 Ganador absoluto: Reconversión de oficinas del Microcentro porteño</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <ul class="space-y-3 text-slate-700">
                <li class="flex items-start gap-2">
                  <span class="text-green-600 text-lg">💸</span>
                  <span><strong>Barreras de entrada bajas:</strong> US$1.200/m²</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-600 text-lg">📈</span>
                  <span><strong>Yield líder del mercado:</strong> 8-10% bruta</span>
                </li>
              </ul>
              <ul class="space-y-3 text-slate-700">
                <li class="flex items-start gap-2">
                  <span class="text-green-600 text-lg">🚀</span>
                  <span><strong>Potencial de apreciación:</strong> >100% al converger con valores de Recoleta</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-600 text-lg">🛡️</span>
                  <span><strong>Protección antiinflación:</strong> alquiler indexado en USD</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-12 mb-6">
            🚀 Próximos pasos con Antifragile Advisors
          </h2>
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-8">
            <ol class="space-y-4 text-slate-700">
              <li class="flex items-start gap-3">
                <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <span><strong>Selección de lotes candidatos</strong> y layout (studios vs loft)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <span><strong>Negociación a cash-a-puerta</strong> (<US$1.200/m²)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <span><strong>Gestión de CDI,</strong> poder notarial y escritura</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                <span><strong>Coordinación de obra</strong> y diseño apart-hotel</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                <span><strong>Publicación en Airbnb/Booking</strong> en 90 días</span>
              </li>
            </ol>
            
            <div class="mt-8">
              <button 
                onclick="window.location.href='/contacto'"
                class="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 px-6 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg text-lg"
              >
                💼 Listo para invertir
              </button>
              <p class="text-center text-slate-600 mt-3 text-sm">Contáctanos y recibe tu scouting personalizado en 48 h.</p>
            </div>
          </div>
        </div>
      `
    },
    "comprar-vivienda-buenos-aires-bitcoin": {
      id: 1,
      title: "Comprar una vivienda en Buenos Aires con Bitcoin sin venderlo",
      excerpt: "Cómo apalancar tu BTC al 5 % en DeFi, comprar metros a USD 1 000/m² y conservar el potencial alcista de la criptomoneda.",
      date: "10 Julio 2025",
      readTime: "8 min",
      category: "Guías",
      image: bitcoinBuenosAires,
      content: `
        <div class="space-y-8">
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
            📊 Opciones de financiación comparadas
          </h2>
          ${isMobile ? `
          <div class="space-y-4 mb-8">
            <div class="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <h3 class="font-bold text-slate-800 mb-3">Vender BTC y pagar al contado</h3>
              <div class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-slate-600">Tasa anual en USD:</span>
                  <span class="text-green-600 font-bold">0%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-600">¿Mantiene exposición a BTC?:</span>
                  <span class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">❌ No</span>
                </div>
                <div class="pt-2 border-t border-slate-100">
                  <span class="text-slate-600 text-sm">Requisitos:</span>
                  <p class="text-slate-700 text-sm mt-1">KYC e impuestos por plusvalías</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <h3 class="font-bold text-slate-800 mb-3">Hipoteca bancaria argentina</h3>
              <div class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-slate-600">Tasa anual en USD:</span>
                  <span class="text-red-600 font-bold">9%-10%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-600">¿Mantiene exposición a BTC?:</span>
                  <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">✅ Sí</span>
                </div>
                <div class="pt-2 border-t border-slate-100">
                  <span class="text-slate-600 text-sm">Requisitos:</span>
                  <p class="text-slate-700 text-sm mt-1">Residencia fiscal, historial crediticio local</p>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 shadow-md">
              <h3 class="font-bold text-blue-800 mb-3">🌟 Préstamo DeFi con BTC (Aave v3)</h3>
              <div class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-blue-700">Tasa anual en USD:</span>
                  <span class="text-blue-600 font-bold text-lg">≈ 5%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-blue-700">¿Mantiene exposición a BTC?:</span>
                  <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">✅ Sí</span>
                </div>
                <div class="pt-2 border-t border-blue-200">
                  <span class="text-blue-700 text-sm">Requisitos:</span>
                  <p class="text-blue-800 font-medium text-sm mt-1">Solo BTC como garantía on‑chain</p>
                </div>
              </div>
            </div>
          </div>
          ` : `
          <div class="overflow-x-auto shadow-lg rounded-lg mb-8">
            <table class="w-full bg-white">
              <thead class="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                <tr>
                  <th class="px-6 py-4 text-left font-semibold">Estrategia</th>
                  <th class="px-6 py-4 text-left font-semibold">Tasa anual en USD</th>
                  <th class="px-6 py-4 text-left font-semibold">¿Mantiene exposición a BTC?</th>
                  <th class="px-6 py-4 text-left font-semibold">Requisitos clave</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="px-6 py-4 font-medium">Vender BTC y pagar al contado</td>
                  <td class="px-6 py-4 text-green-600 font-bold">0%</td>
                  <td class="px-6 py-4"><span class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">❌ No</span></td>
                  <td class="px-6 py-4 text-slate-600">KYC e impuestos por plusvalías</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="px-6 py-4 font-medium">Hipoteca bancaria argentina</td>
                  <td class="px-6 py-4 text-red-600 font-bold">9%-10%</td>
                  <td class="px-6 py-4"><span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">✅ Sí</span></td>
                  <td class="px-6 py-4 text-slate-600">Residencia fiscal, historial crediticio local</td>
                </tr>
                <tr class="hover:bg-blue-50 transition-colors bg-blue-25 border-l-4 border-blue-500">
                  <td class="px-6 py-4 font-bold text-blue-800">Préstamo DeFi con BTC (Aave v3)</td>
                  <td class="px-6 py-4 text-blue-600 font-bold text-lg">≈ 5%</td>
                  <td class="px-6 py-4"><span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">✅ Sí</span></td>
                  <td class="px-6 py-4 text-blue-700 font-medium">Solo BTC como garantía on‑chain</td>
                </tr>
              </tbody>
            </table>
          </div>
          `}

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-12 mb-6">
            🏦 Panorama de financiación inmobiliaria 2025
          </h2>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 class="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                🏛️ Banca tradicional
              </h3>
              <ul class="space-y-2 text-slate-700">
                <li>📈 <strong>Tipo fijo en dólares:</strong> 9%-9,5%</li>
                <li>📊 <strong>LTV máximo:</strong> 70%</li>
                <li>⏰ <strong>Plazo:</strong> 15‑20 años</li>
              </ul>
            </div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 class="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                ⚡ Crédito DeFi con BTC
              </h3>
              <ul class="space-y-2 text-slate-700">
                <li>📉 <strong>Tasa variable USDC‑e (Aave v3):</strong> 4,5%-5,5%</li>
                <li>📊 <strong>LTV recomendado:</strong> ≤ 50%</li>
                <li>🔄 <strong>Plazo:</strong> abierto, sin penalización por cancelación</li>
              </ul>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-12 mb-6">
            ⚡ Banco tradicional vs. DeFi
          </h2>
          ${isMobile ? `
          <div class="space-y-4 mb-8">
            <div class="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <h3 class="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span>📊</span> Tasa nominal
              </h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-3 bg-red-50 rounded-lg">
                  <span class="text-xs text-slate-600 block">🏛️ Banco AR</span>
                  <span class="text-red-600 font-bold text-lg">9%</span>
                </div>
                <div class="text-center p-3 bg-green-50 rounded-lg">
                  <span class="text-xs text-slate-600 block">⚡ Aave / DeFi</span>
                  <span class="text-green-600 font-bold text-lg">≈ 5%</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <h3 class="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span>⏰</span> Plazo
              </h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-3 bg-red-50 rounded-lg">
                  <span class="text-xs text-slate-600 block">🏛️ Banco AR</span>
                  <span class="text-slate-700 font-medium">15‑20 años</span>
                </div>
                <div class="text-center p-3 bg-green-50 rounded-lg">
                  <span class="text-xs text-slate-600 block">⚡ Aave / DeFi</span>
                  <span class="text-green-600 font-medium">Abierto</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <h3 class="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span>💰</span> Comisión apertura
              </h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-3 bg-red-50 rounded-lg">
                  <span class="text-xs text-slate-600 block">🏛️ Banco AR</span>
                  <span class="text-red-600 font-bold">1%-2%</span>
                </div>
                <div class="text-center p-3 bg-green-50 rounded-lg">
                  <span class="text-xs text-slate-600 block">⚡ Aave / DeFi</span>
                  <span class="text-green-600 font-bold">0,09%</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <h3 class="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span>📋</span> Requisitos personales
              </h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-3 bg-red-50 rounded-lg">
                  <span class="text-xs text-slate-600 block">🏛️ Banco AR</span>
                  <span class="text-slate-700 text-sm">Residencia + ingresos</span>
                </div>
                <div class="text-center p-3 bg-blue-50 rounded-lg">
                  <span class="text-xs text-slate-600 block">⚡ Aave / DeFi</span>
                  <span class="text-blue-600 font-medium text-sm">Solo BTC</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <h3 class="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span>⚡</span> Velocidad de aprobación
              </h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-3 bg-red-50 rounded-lg">
                  <span class="text-xs text-slate-600 block">🏛️ Banco AR</span>
                  <span class="text-red-600 font-bold">4‑8 semanas</span>
                </div>
                <div class="text-center p-3 bg-green-50 rounded-lg">
                  <span class="text-xs text-slate-600 block">⚡ Aave / DeFi</span>
                  <span class="text-green-600 font-bold">15 minutos</span>
                </div>
              </div>
            </div>
          </div>
          ` : `
          <div class="overflow-x-auto shadow-lg rounded-lg mb-8">
            <table class="w-full bg-white">
              <thead class="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <tr>
                  <th class="px-6 py-4 text-left font-semibold">Concepto</th>
                  <th class="px-6 py-4 text-left font-semibold">🏛️ Banco AR</th>
                  <th class="px-6 py-4 text-left font-semibold">⚡ Aave / DeFi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="px-6 py-4 font-medium">Tasa nominal</td>
                  <td class="px-6 py-4 text-red-600 font-bold">9%</td>
                  <td class="px-6 py-4 text-green-600 font-bold">≈ 5%</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="px-6 py-4 font-medium">Plazo</td>
                  <td class="px-6 py-4">15‑20 años</td>
                  <td class="px-6 py-4 text-green-600 font-medium">Abierto</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="px-6 py-4 font-medium">Comisión apertura</td>
                  <td class="px-6 py-4 text-red-600">1%-2%</td>
                  <td class="px-6 py-4 text-green-600 font-bold">0,09%</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="px-6 py-4 font-medium">Requisitos personales</td>
                  <td class="px-6 py-4">Residencia + ingresos</td>
                  <td class="px-6 py-4 text-blue-600 font-medium">Solo BTC</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="px-6 py-4 font-medium">Velocidad de aprobación</td>
                  <td class="px-6 py-4 text-red-600">4‑8 semanas</td>
                  <td class="px-6 py-4 text-green-600 font-bold">15 minutos</td>
                </tr>
              </tbody>
            </table>
          </div>
          `}

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-12 mb-6">
            🏢 Ejemplo: oficina‑loft en el Microcentro a USD 1 000/m²
          </h2>
          <div class="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-8 mb-8">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-bold text-amber-800 mb-4 text-lg">📐 Detalles de la propiedad</h4>
                <ul class="space-y-2 text-slate-700">
                  <li>📏 <strong>Superficie:</strong> 80 m² (planta libre, techos 4 m)</li>
                  <li>💰 <strong>Precio compra:</strong> USD 80,000 (1,000 USD/m²)</li>
                  <li>🏗️ <strong>Coste reforma apart‑hotel:</strong> USD 20,000</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-blue-800 mb-4 text-lg">₿ Financiación DeFi</h4>
                <ul class="space-y-2 text-slate-700">
                  <li>💎 <strong>Colateral:</strong> 2 BTC (≈ USD 222,810)</li>
                  <li>📊 <strong>Préstamo (LTV 45%):</strong> USD 36,000 en USDC‑e</li>
                  <li>📈 <strong>Tasa DeFi estimada:</strong> 5%</li>
                  <li>💸 <strong>Interés anual:</strong> USD 1,800 (USD 150/mes)</li>
                </ul>
              </div>
            </div>
            <div class="mt-6 p-4 bg-green-100 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">📊 Rentabilidad proyectada</h4>
              <p class="text-green-700">
                <strong>Ingresos Airbnb:</strong> 45 USD/noche × 70% ocupación = <span class="text-xl font-bold">USD 11,500/año</span><br>
                <strong>Flujo neto antes de gastos fijos:</strong> <span class="text-xl font-bold text-green-600">~USD 9,700/año</span>
              </p>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-12 mb-6">
            🚀 Por qué la estrategia BTC‑apalancada es atractiva
          </h2>
          <div class="grid md:grid-cols-2 gap-4 mb-8">
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <h4 class="font-bold text-blue-800 mb-2">📈 Doble apreciación</h4>
              <p class="text-blue-700">Potencial alza de BTC + plusvalía inmobiliaria</p>
            </div>
            <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <h4 class="font-bold text-green-800 mb-2">💰 Menor coste</h4>
              <p class="text-green-700">Financiero inferior al bancario</p>
            </div>
            <div class="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <h4 class="font-bold text-purple-800 mb-2">🔄 Flexibilidad</h4>
              <p class="text-purple-700">Cancelación sin penalización</p>
            </div>
            <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <h4 class="font-bold text-amber-800 mb-2">💎 Ventaja fiscal</h4>
              <p class="text-amber-700">No se realiza plusvalía al no vender BTC</p>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-12 mb-6">
            ⚠️ Riesgos y mitigaciones
          </h2>
          <div class="space-y-4 mb-8">
            <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <h4 class="font-bold text-red-800 mb-2">📉 Volatilidad de BTC</h4>
              <p class="text-red-700">Mantener LTV bajo y buffer de colateral</p>
            </div>
            <div class="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
              <h4 class="font-bold text-orange-800 mb-2">🔧 Falla de protocolo</h4>
              <p class="text-orange-700">Usar plataformas auditadas (Aave)</p>
            </div>
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <h4 class="font-bold text-yellow-800 mb-2">⚖️ Riesgo regulatorio</h4>
              <p class="text-yellow-700">Stablecoins reguladas y servicio de cambio controlado</p>
            </div>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <h4 class="font-bold text-blue-800 mb-2">💱 Spread de conversión</h4>
              <p class="text-blue-700">Comisión total < 1,5% con Antifragile Advisors</p>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-12 mb-6">
            ✅ Checklist operativo (12 pasos)
          </h2>
          <div class="bg-slate-50 rounded-xl p-6 mb-8">
            <ol class="space-y-3">
              <li class="flex items-start gap-3">
                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <span class="text-slate-700">Transferir BTC a wallet propia</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <span class="text-slate-700">Convertir a wBTC</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <span class="text-slate-700">Depositar wBTC en Aave</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                <span class="text-slate-700">Solicitar USDC‑e (≤ 50% LTV)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                <span class="text-slate-700">Mandato de cambio con Antifragile Advisors</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">6</span>
                <span class="text-slate-700">Recepción de USD en escribanía</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">7</span>
                <span class="text-slate-700">Seña y refuerzo</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">8</span>
                <span class="text-slate-700">Firma de escritura</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">9</span>
                <span class="text-slate-700">Financiar reforma</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">10</span>
                <span class="text-slate-700">Alta en Airbnb</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">11</span>
                <span class="text-slate-700">Configurar alertas de LTV</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">12</span>
                <span class="text-slate-700">Amortizar cuando BTC suba o LTV baje al 20%</span>
              </li>
            </ol>
          </div>

          <div class="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-8 rounded-r-xl mt-12">
            <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-3">
              🎯 Conclusión
            </h3>
            <p class="text-lg leading-relaxed text-green-700">
              Financiar una propiedad en Buenos Aires con un préstamo DeFi garantizado por Bitcoin combina el <strong>potencial alcista del criptoactivo</strong>, la <strong>plusvalía inmobiliaria</strong> y un <strong>coste de financiación sensiblemente menor</strong> que el del sistema bancario argentino. Con la asistencia integral de Antifragile Advisors, el proceso se vuelve simple, rápido y seguro.
            </p>
            <div class="mt-6 p-4 bg-white rounded-lg shadow-sm">
              <p class="text-sm text-slate-600 italic">
                💡 <strong>Próximo paso:</strong> Contacta con nuestro equipo para una consulta personalizada sobre tu estrategia de inversión con Bitcoin.
              </p>
            </div>
          </div>
        </div>
      `
    },
    "2": {
      id: 2,
      title: "El momento perfecto para invertir en Buenos Aires",
      excerpt: "Análisis del contexto macroeconómico actual y por qué ahora es una oportunidad histórica para invertir en real estate porteño.",
      date: "15 Enero 2025",
      readTime: "8 min",
      category: "Análisis",
      image: "/lovable-uploads/b499d954-153b-4ff6-8f76-fb7776c58a03.png",
      content: "<p>Contenido del artículo aquí...</p>"
    },
    "3": {
      id: 3,
      title: "Guía completa: Cómo funciona la inversión inmobiliaria en Argentina",
      excerpt: "Todo lo que necesitas saber sobre el proceso de compra, documentación legal y aspectos fiscales para inversores extranjeros.",
      date: "12 Enero 2025",
      readTime: "12 min",
      category: "Guías",
      image: "/lovable-uploads/e355cc0f-59a3-456f-8360-e64ba6394c00.png",
      content: "<p>Contenido del artículo aquí...</p>"
    },
    "4": {
      id: 4,
      title: "Barrios emergentes: Dónde encontrar las mejores oportunidades",
      excerpt: "Análisis detallado de los barrios con mayor potencial de revalorización en Buenos Aires para los próximos 5 años.",
      date: "8 Enero 2025",
      readTime: "6 min",
      category: "Mercados",
      image: "/lovable-uploads/21e4c240-bc54-4cdd-97b6-0f61ba0c6be5.png",
      content: "<p>Contenido del artículo aquí...</p>"
    }
  };

  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Artículo no encontrado</h1>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="pt-32 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="mb-8 hover:bg-white/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Button>

          {/* Article Header */}
          <div className="mb-8">
            <Badge variant="default" className="mb-4">{article.category}</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              {article.excerpt}
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-slate-500 mb-8">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} lectura</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[16/9] overflow-hidden rounded-xl mb-8">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
            <div 
              className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-li:text-slate-600"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ArticleDetail;