import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown,
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package,
  Calendar,
  Download,
  Filter
} from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

export default function Prototype4() {
  const [, setLocation] = useLocation();
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  // Dados simulados de vendas
  const salesData = [
    { id: 1, date: "2025-01-10", product: "Pulseira Half-Persian", category: "Pulseira", value: 189.90, status: "Concluída" },
    { id: 2, date: "2025-01-10", product: "Corrente Byzantine", category: "Corrente", value: 263.90, status: "Concluída" },
    { id: 3, date: "2025-01-09", product: "Pulseira European 4-1", category: "Pulseira", value: 159.90, status: "Concluída" },
    { id: 4, date: "2025-01-09", product: "Pulseira Japanese 6-1", category: "Pulseira", value: 199.90, status: "Pendente" },
    { id: 5, date: "2025-01-08", product: "Corrente Box Chain", category: "Corrente", value: 225.90, status: "Concluída" },
    { id: 6, date: "2025-01-08", product: "Pulseira Byzantine Azul", category: "Pulseira", value: 225.90, status: "Concluída" },
    { id: 7, date: "2025-01-07", product: "Corrente King's Mail", category: "Corrente", value: 549.90, status: "Concluída" },
    { id: 8, date: "2025-01-07", product: "Pulseira Half-Persian", category: "Pulseira", value: 189.90, status: "Cancelada" },
  ];

  // Cálculo de KPIs
  const totalRevenue = salesData
    .filter(s => s.status === "Concluída")
    .reduce((acc, sale) => acc + sale.value, 0);
  
  const totalOrders = salesData.filter(s => s.status === "Concluída").length;
  const averageTicket = totalRevenue / totalOrders;
  const conversionRate = 68.5; // Simulado

  // Vendas por categoria
  const salesByCategory = salesData
    .filter(s => s.status === "Concluída")
    .reduce((acc, sale) => {
      acc[sale.category] = (acc[sale.category] || 0) + sale.value;
      return acc;
    }, {} as Record<string, number>);

  const categoryData = Object.entries(salesByCategory).map(([name, value]) => ({
    name,
    value,
    percentage: (value / totalRevenue) * 100
  }));

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                onClick={() => setLocation("/")}
                className="text-slate-600"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
              <div className="h-8 w-px bg-slate-200"></div>
              <img src="/logo-ablaze.webp" alt="ABLAZE" className="h-12" />
              <div>
                <h1 className="text-xl font-bold text-slate-900">Dashboard</h1>
                <p className="text-xs text-slate-500">Análise de Vendas e Performance</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                <Button 
                  variant={selectedPeriod === "7d" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedPeriod("7d")}
                  className={selectedPeriod === "7d" ? "bg-orange-600 hover:bg-orange-700" : ""}
                >
                  7 dias
                </Button>
                <Button 
                  variant={selectedPeriod === "30d" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedPeriod("30d")}
                  className={selectedPeriod === "30d" ? "bg-orange-600 hover:bg-orange-700" : ""}
                >
                  30 dias
                </Button>
                <Button 
                  variant={selectedPeriod === "90d" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedPeriod("90d")}
                  className={selectedPeriod === "90d" ? "bg-orange-600 hover:bg-orange-700" : ""}
                >
                  90 dias
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Exportar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container py-8">
        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-orange-600" />
                </div>
                <Badge className="bg-green-100 text-green-700 border-0">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12.5%
                </Badge>
              </div>
              <p className="text-sm text-slate-600 mb-1">Receita Total</p>
              <p className="text-3xl font-bold text-slate-900">
                R$ {totalRevenue.toFixed(2)}
              </p>
              <p className="text-xs text-slate-500 mt-2">Últimos {selectedPeriod === "7d" ? "7" : selectedPeriod === "30d" ? "30" : "90"} dias</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-blue-600" />
                </div>
                <Badge className="bg-green-100 text-green-700 border-0">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8.3%
                </Badge>
              </div>
              <p className="text-sm text-slate-600 mb-1">Total de Vendas</p>
              <p className="text-3xl font-bold text-slate-900">{totalOrders}</p>
              <p className="text-xs text-slate-500 mt-2">Pedidos concluídos</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-purple-600" />
                </div>
                <Badge className="bg-green-100 text-green-700 border-0">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +5.7%
                </Badge>
              </div>
              <p className="text-sm text-slate-600 mb-1">Ticket Médio</p>
              <p className="text-3xl font-bold text-slate-900">
                R$ {averageTicket.toFixed(2)}
              </p>
              <p className="text-xs text-slate-500 mt-2">Por pedido</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <Badge className="bg-red-100 text-red-700 border-0">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  -2.1%
                </Badge>
              </div>
              <p className="text-sm text-slate-600 mb-1">Taxa de Conversão</p>
              <p className="text-3xl font-bold text-slate-900">{conversionRate}%</p>
              <p className="text-xs text-slate-500 mt-2">Visitantes → Compradores</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Vendas por Categoria */}
          <Card className="md:col-span-2 bg-white border-slate-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Vendas por Categoria</CardTitle>
                <Button variant="ghost" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {categoryData.map((category) => (
                  <div key={category.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${category.name === "Pulseira" ? "bg-orange-600" : "bg-slate-800"}`}></div>
                        <span className="font-medium text-slate-900">{category.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-slate-900">R$ {category.value.toFixed(2)}</p>
                        <p className="text-xs text-slate-500">{category.percentage.toFixed(1)}%</p>
                      </div>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full ${category.name === "Pulseira" ? "bg-orange-600" : "bg-slate-800"} transition-all duration-500`}
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Categoria Mais Vendida</p>
                    <p className="text-lg font-bold text-slate-900">
                      {categoryData[0]?.name || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Crescimento Mensal</p>
                    <p className="text-lg font-bold text-green-600">+18.5%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Produtos */}
          <Card className="bg-white border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg">Top Produtos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Corrente King's Mail", sales: 12, revenue: 6598.80 },
                  { name: "Pulseira Byzantine", sales: 18, revenue: 4066.20 },
                  { name: "Pulseira Half-Persian", sales: 15, revenue: 2848.50 },
                  { name: "Corrente Box Chain", sales: 8, revenue: 1807.20 },
                ].map((product, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">#{index + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 text-sm truncate">{product.name}</p>
                      <p className="text-xs text-slate-500">{product.sales} vendas</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-900">
                        R$ {product.revenue.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabela de Vendas */}
        <Card className="bg-white border-slate-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Histórico de Vendas</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  Filtrar por Data
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Categoria
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">ID</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Data</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Produto</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Categoria</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Valor</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-slate-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.map((sale) => (
                    <tr key={sale.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 text-sm text-slate-600">#{sale.id}</td>
                      <td className="py-3 px-4 text-sm text-slate-600">
                        {new Date(sale.date).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="py-3 px-4 text-sm font-medium text-slate-900">{sale.product}</td>
                      <td className="py-3 px-4">
                        <Badge 
                          className={`${
                            sale.category === "Pulseira" 
                              ? "bg-orange-100 text-orange-700" 
                              : "bg-slate-100 text-slate-700"
                          } border-0`}
                        >
                          {sale.category}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-sm font-bold text-slate-900 text-right">
                        R$ {sale.value.toFixed(2)}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Badge 
                          className={`${
                            sale.status === "Concluída" 
                              ? "bg-green-100 text-green-700" 
                              : sale.status === "Pendente"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          } border-0`}
                        >
                          {sale.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Dashboard atualizado em tempo real • Última atualização: {new Date().toLocaleString('pt-BR')}
          </p>
        </div>
      </div>
    </div>
  );
}
