import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { RotateCcw } from '@/components/icons';

interface DatosPorBarrio {
  [barrio: string]: {
    [fecha: string]: number;
  };
}

const PreciosHistoricos = () => {
  const [datosPorBarrio, setDatosPorBarrio] = useState<DatosPorBarrio>({});
  const [fechas, setFechas] = useState<string[]>([]);
  const [barriosSeleccionados, setBarriosSeleccionados] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const urlCSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0oSQXV6RCr863YPJxN0aadlfxnwLNesemzBWCLQTkCcoy1KAb7eOx2_SYdv9QJXs_w8l8aWVgI-G8/pub?gid=0&single=true&output=csv';

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const response = await fetch(urlCSV);
        const data = await response.text();
        
        const lines = data.trim().split('\n');
        const headers = lines[0].split(',').slice(1); // Fechas
        
        const nuevasFechas = headers;
        const nuevosDatos: DatosPorBarrio = {};
        
        for (let i = 1; i < lines.length; i++) {
          const row = lines[i].split(',');
          const barrio = row[0];
          const precios = row.slice(1).map(p => parseFloat(p));
          
          nuevosDatos[barrio] = {};
          headers.forEach((fecha, idx) => {
            nuevosDatos[barrio][fecha] = precios[idx];
          });
        }
        
        setFechas(nuevasFechas);
        setDatosPorBarrio(nuevosDatos);
        setBarriosSeleccionados(Object.keys(nuevosDatos).slice(0, 5)); // Seleccionar primeros 5 por defecto
      } catch (error) {
        console.error('Error cargando datos:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, []);

  const toggleBarrio = (barrio: string) => {
    setBarriosSeleccionados(prev => 
      prev.includes(barrio) 
        ? prev.filter(b => b !== barrio)
        : [...prev, barrio]
    );
  };

  const selectAll = () => {
    setBarriosSeleccionados(Object.keys(datosPorBarrio));
  };

  const clearAll = () => {
    setBarriosSeleccionados([]);
  };

  const obtenerTrazas = () => {
    return barriosSeleccionados.map((barrio, index) => {
      const precios = fechas.map(f => datosPorBarrio[barrio][f] || null);
      const colors = [
        '#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6',
        '#06b6d4', '#f97316', '#84cc16', '#ec4899', '#6366f1'
      ];
      
      return {
        x: fechas,
        y: precios,
        type: 'scatter' as const,
        mode: 'lines+markers' as const,
        name: barrio,
        line: { 
          shape: 'spline' as const, 
          width: 3,
          color: colors[index % colors.length]
        },
        marker: { 
          size: 7,
          color: colors[index % colors.length]
        }
      };
    });
  };

  if (loading) {
    return (
      <Card className="w-full">
        <CardContent className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mx-auto mb-2"></div>
            <p className="text-neutral-600">Cargando datos históricos...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-light text-neutral-900">
            Evolución del Precio por m² - Buenos Aires
          </CardTitle>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={selectAll}
              className="px-3 py-1 text-xs bg-amber-100 text-amber-800 rounded-full hover:bg-amber-200 transition-colors"
            >
              Seleccionar todos
            </button>
            <button
              onClick={clearAll}
              className="px-3 py-1 text-xs bg-neutral-100 text-neutral-600 rounded-full hover:bg-neutral-200 transition-colors"
            >
              Limpiar selección
            </button>
            <Badge variant="secondary" className="text-xs">
              {barriosSeleccionados.length} barrios seleccionados
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
            {Object.keys(datosPorBarrio).map((barrio) => (
              <div key={barrio} className="flex items-center space-x-2">
                <Checkbox
                  id={barrio}
                  checked={barriosSeleccionados.includes(barrio)}
                  onCheckedChange={() => toggleBarrio(barrio)}
                />
                <label
                  htmlFor={barrio}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {barrio}
                </label>
              </div>
            ))}
          </div>
          
          {/* Aviso para móviles */}
          <div className="md:hidden mb-4">
            <Alert>
              <RotateCcw className="h-4 w-4" />
              <AlertDescription>
                Para una mejor visualización en móvil, gira tu dispositivo horizontalmente
              </AlertDescription>
            </Alert>
          </div>
          
          <div className="w-full h-96 border rounded-lg bg-white">
            <Plot
              data={obtenerTrazas()}
              layout={{
                title: {
                  text: '',
                  font: { size: 16 }
                },
                xaxis: { 
                  title: 'Fecha',
                  showgrid: true,
                  gridcolor: '#f3f4f6'
                },
                yaxis: { 
                  title: 'USD / m²',
                  showgrid: true,
                  gridcolor: '#f3f4f6'
                },
                margin: { t: 20, l: 60, r: 30, b: 80 },
                plot_bgcolor: 'white',
                paper_bgcolor: 'white',
                legend: {
                  orientation: 'h' as const,
                  y: -0.2,
                  x: 0.5,
                  xanchor: 'center' as const
                }
              }}
              config={{
                displayModeBar: false,
                responsive: true
              }}
              useResizeHandler
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreciosHistoricos;