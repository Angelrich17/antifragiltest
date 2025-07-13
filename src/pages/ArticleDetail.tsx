import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import bitcoinBuenosAires from "@/assets/bitcoin-buenos-aires.jpg";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Datos de artículos (en una app real, esto vendría de una API o base de datos)
  const articles = {
    "1": {
      id: 1,
      title: "Comprar una vivienda en Buenos Aires con Bitcoin sin venderlo",
      excerpt: "Cómo apalancar tu BTC al 5 % en DeFi, comprar metros a USD 1 000/m² y conservar el potencial alcista de la criptomoneda.",
      date: "10 Julio 2025",
      readTime: "8 min",
      category: "Guías",
      image: bitcoinBuenosAires,
      content: `
        <h2>Comprar una vivienda en Buenos Aires con Bitcoin sin venderlo</h2>
        <p><strong>Cómo apalancar tu BTC al 5 % en DeFi, comprar metros a USD 1 000/m² y conservar el potencial alcista de la criptomoneda</strong></p>
        <p><em>Actualizado: 10 de julio de 2025 | Precio de referencia de Bitcoin: USD 111,405</em></p>

        <h3>Introducción: cuando el bitcoiner quiere ladrillos</h3>
        <p>Bitcoin ha sido uno de los activos con mejor rendimiento de la última década. Muchos holders desean diversificar hacia bienes tangibles, pero vender BTC supone perder exposición futura y pagar impuestos sobre plusvalías. Las hipotecas bancarias argentinas exigen tipos cercanos al 9 % y trámites complejos. Con un préstamo DeFi garantizado con BTC (por ejemplo en Aave v3) se puede obtener liquidez al 5 %, manteniendo la exposición a la criptomoneda y cerrando la compra en efectivo en Buenos Aires.</p>

        <h3>Opciones de financiación comparadas</h3>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-slate-300 mb-6">
            <thead>
              <tr class="bg-slate-100">
                <th class="border border-slate-300 p-3 text-left">Estrategia</th>
                <th class="border border-slate-300 p-3 text-left">Tasa anual en USD</th>
                <th class="border border-slate-300 p-3 text-left">¿Mantiene exposición a BTC?</th>
                <th class="border border-slate-300 p-3 text-left">Requisitos clave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-300 p-3">Vender BTC y pagar al contado</td>
                <td class="border border-slate-300 p-3">0 %</td>
                <td class="border border-slate-300 p-3">No</td>
                <td class="border border-slate-300 p-3">KYC e impuestos por plusvalías</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-3">Hipoteca bancaria argentina</td>
                <td class="border border-slate-300 p-3">9 %-10 %</td>
                <td class="border border-slate-300 p-3">Sí</td>
                <td class="border border-slate-300 p-3">Residencia fiscal, historial crediticio local</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-3">Préstamo DeFi con BTC (Aave v3)</td>
                <td class="border border-slate-300 p-3">≈ 5 %</td>
                <td class="border border-slate-300 p-3">Sí</td>
                <td class="border border-slate-300 p-3">Solo BTC como garantía on‑chain</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Panorama de financiación inmobiliaria 2025</h3>
        <ul class="mb-6">
          <li><strong>Banca tradicional:</strong><br>Tipo fijo en dólares: 9 %-9,5 %<br>LTV máximo: 70 %<br>Plazo: 15‑20 años</li>
          <li><strong>Crédito DeFi con BTC:</strong><br>Tasa variable USDC‑e (Aave v3): 4,5 %-5,5 %<br>LTV recomendado: ≤ 50 %<br>Plazo: abierto, sin penalización por cancelación</li>
        </ul>

        <h3>Banco tradicional vs. DeFi</h3>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-slate-300 mb-6">
            <thead>
              <tr class="bg-slate-100">
                <th class="border border-slate-300 p-3 text-left">Concepto</th>
                <th class="border border-slate-300 p-3 text-left">Banco AR</th>
                <th class="border border-slate-300 p-3 text-left">Aave / DeFi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-300 p-3">Tasa nominal</td>
                <td class="border border-slate-300 p-3">9 %</td>
                <td class="border border-slate-300 p-3">≈ 5 %</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-3">Plazo</td>
                <td class="border border-slate-300 p-3">15‑20 años</td>
                <td class="border border-slate-300 p-3">Abierto</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-3">Comisión apertura</td>
                <td class="border border-slate-300 p-3">1 %-2 %</td>
                <td class="border border-slate-300 p-3">0,09 %</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-3">Requisitos personales</td>
                <td class="border border-slate-300 p-3">Residencia + ingresos</td>
                <td class="border border-slate-300 p-3">Solo BTC</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-3">Velocidad de aprobación</td>
                <td class="border border-slate-300 p-3">4‑8 semanas</td>
                <td class="border border-slate-300 p-3">15 minutos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Ejemplo: oficina‑loft en el Microcentro a USD 1 000/m²</h3>
        <ul class="mb-6">
          <li>Superficie: 80 m² (planta libre, techos 4 m).</li>
          <li>Precio compra: USD 80 000 (1 000 USD/m²).</li>
          <li>Colateral: 2 BTC (≈ USD 222,810).</li>
          <li>Préstamo solicitado (LTV 45 %): USD 36 000 en USDC‑e.</li>
          <li>Tasa DeFi estimada: 5 %.</li>
          <li>Interés anual: USD 1 800 (USD 150/mes).</li>
          <li>Coste reforma apart‑hotel: USD 20 000.</li>
          <li>Ingresos Airbnb: 45 USD/noche × 70 % ocupación = USD 11 500/año.</li>
          <li>Flujo neto antes de gastos fijos: ~USD 9 700/año.</li>
        </ul>

        <h3>Por qué la estrategia BTC‑apalancada es atractiva</h3>
        <ul class="mb-6">
          <li>Doble apreciación: potencial alza de BTC + plusvalía inmobiliaria.</li>
          <li>Coste financiero inferior al bancario.</li>
          <li>Flexibilidad: cancelación sin penalización.</li>
          <li>Ventaja fiscal: no se realiza plusvalía al no vender BTC.</li>
        </ul>

        <h3>Riesgos y mitigaciones</h3>
        <ul class="mb-6">
          <li><strong>Volatilidad de BTC</strong> – mantener LTV bajo y buffer de colateral.</li>
          <li><strong>Falla de protocolo</strong> – usar plataformas auditadas (Aave).</li>
          <li><strong>Riesgo regulatorio</strong> – stablecoins reguladas y servicio de cambio controlado.</li>
          <li><strong>Spread de conversión</strong> – comisión total < 1,5 % con Antifragile Advisors.</li>
        </ul>

        <h3>Checklist operativo (12 pasos)</h3>
        <ol class="mb-6">
          <li>Transferir BTC a wallet propia.</li>
          <li>Convertir a wBTC.</li>
          <li>Depositar wBTC en Aave.</li>
          <li>Solicitar USDC‑e (≤ 50 % LTV).</li>
          <li>Mandato de cambio con Antifragile Advisors.</li>
          <li>Recepción de USD en escribanía.</li>
          <li>Seña y refuerzo.</li>
          <li>Firma de escritura.</li>
          <li>Financiar reforma.</li>
          <li>Alta en Airbnb.</li>
          <li>Configurar alertas de LTV.</li>
          <li>Amortizar cuando BTC suba o LTV baje al 20 %.</li>
        </ol>

        <h3>Conclusión</h3>
        <p>Financiar una propiedad en Buenos Aires con un préstamo DeFi garantizado por Bitcoin combina el potencial alcista del criptoactivo, la plusvalía inmobiliaria y un coste de financiación sensiblemente menor que el del sistema bancario argentino. Con la asistencia integral de Antifragile Advisors, el proceso se vuelve simple, rápido y seguro.</p>
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

  const article = articles[id as keyof typeof articles];

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