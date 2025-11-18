import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-slate-100">
      <div className="container py-16">
        <div className="text-center mb-12">
          <img src={`${import.meta.env.BASE_URL}logo-ablaze.webp`} alt="ABLAZE Chainmail" className="h-24 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            ABLAZE Chainmail - Protótipos
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore três propostas diferentes de design para o site de vendas da loja de correntes artesanais.
            Cada protótipo mantém a identidade visual original, mas oferece uma abordagem única de layout e experiência do usuário.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <Card className="hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setLocation("/prototype1")}>
            <CardHeader>
              <CardTitle className="text-2xl">Protótipo 1</CardTitle>
              <CardDescription>Minimalista Premium</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-to-br from-white to-orange-50 rounded-lg mb-4 flex items-center justify-center border-2 border-orange-200">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">✨</div>
                  <p className="text-sm text-slate-600">Layout limpo e elegante</p>
                </div>
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Fundo claro com cards sutis</li>
                <li>• Grid assimétrico moderno</li>
                <li>• Sombras suaves e espaçamento generoso</li>
                <li>• Foco em qualidade premium</li>
              </ul>
              <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                Ver Protótipo 1
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setLocation("/prototype2")}>
            <CardHeader>
              <CardTitle className="text-2xl">Protótipo 2</CardTitle>
              <CardDescription>Dark Moderno</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg mb-4 flex items-center justify-center border-2 border-orange-600">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">🔥</div>
                  <p className="text-sm text-orange-400">Design ousado e impactante</p>
                </div>
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Fundo escuro com acentos laranja</li>
                <li>• Sidebar de navegação fixa</li>
                <li>• Alto contraste visual</li>
                <li>• Estilo urbano e contemporâneo</li>
              </ul>
              <Button className="w-full mt-4 bg-slate-900 hover:bg-slate-800">
                Ver Protótipo 2
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setLocation("/prototype3")}>
            <CardHeader>
              <CardTitle className="text-2xl">Protótipo 3</CardTitle>
              <CardDescription>Magazine Editorial</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg mb-4 flex items-center justify-center border-2 border-slate-900">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">📰</div>
                  <p className="text-sm text-white">Storytelling visual</p>
                </div>
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Hero grande com imagem impactante</li>
                <li>• Tipografia destacada e editorial</li>
                <li>• Seções alternadas com ritmo visual</li>
                <li>• Narrativa do processo artesanal</li>
              </ul>
              <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                Ver Protótipo 3
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setLocation("/prototype4")}>
            <CardHeader>
              <CardTitle className="text-2xl">Protótipo 4</CardTitle>
              <CardDescription>Dashboard Administrativo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-4 flex items-center justify-center border-2 border-slate-300">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-sm text-slate-600">Análise de vendas e KPIs</p>
                </div>
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Dashboard com métricas de vendas</li>
                <li>• KPIs do marketplace em tempo real</li>
                <li>• Análise por categoria de produtos</li>
                <li>• Gráficos e visualizações de dados</li>
              </ul>
              <Button className="w-full mt-4 bg-slate-700 hover:bg-slate-800">
                Ver Protótipo 4
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-lg shadow-md p-6 max-w-2xl">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Sobre o Projeto</h2>
            <p className="text-slate-600">
              Estes protótipos foram desenvolvidos para apresentar diferentes abordagens de design
              para o site da ABLAZE Chainmail, mantendo a identidade visual com laranja vibrante (#FF6600)
              e preto, mas adicionando elementos que transmitem maior segurança, confiança e profissionalismo
              para aumentar a conversão de vendas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
