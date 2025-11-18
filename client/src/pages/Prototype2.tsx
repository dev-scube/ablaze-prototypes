import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Package, Mail, Shield, Star, ArrowLeft, ShoppingCart, Menu } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

export default function Prototype2() {
  const [, setLocation] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const products = [
    { id: 1, name: "Pulseira Half-Persian", price: 189.90, image: `${import.meta.env.BASE_URL}product1.jpg`, rating: 5 },
    { id: 2, name: "Pulseira Byzantine Azul", price: 225.90, image: `${import.meta.env.BASE_URL}product2.jpg`, rating: 5 },
    { id: 3, name: "Pulseira European 4-1", price: 159.90, image: `${import.meta.env.BASE_URL}product3.jpg`, rating: 5 },
    { id: 4, name: "Pulseira Japanese 6-1", price: 199.90, image: `${import.meta.env.BASE_URL}product1.jpg`, rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 bg-black border-r border-slate-800 flex-shrink-0 overflow-hidden`}>
        <div className="p-6">
            <div className="mb-8">
            <img src={`${import.meta.env.BASE_URL}logo-ablaze.webp`} alt="ABLAZE Chainmail" className="h-20" />
          </div>

          <nav className="space-y-2">
            <a href="#inicio" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-orange-600 text-white">
              <Home className="h-5 w-5" />
              <span>Início</span>
            </a>
            <a href="#produtos" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-900 text-slate-400 hover:text-white transition-colors">
              <Package className="h-5 w-5" />
              <span>Produtos</span>
            </a>
            <a href="#contato" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-900 text-slate-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <span>Contato</span>
            </a>
          </nav>

          <div className="mt-8 p-4 bg-slate-900 rounded-lg border border-orange-600/20">
            <Shield className="h-8 w-8 text-orange-500 mb-2" />
            <p className="text-sm font-semibold mb-1">Compra Segura</p>
            <p className="text-xs text-slate-400">SSL & Pagamento Criptografado</p>
          </div>

          <Button 
            variant="ghost" 
            onClick={() => setLocation("/")}
            className="w-full mt-6 text-slate-400 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos Protótipos
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Bar */}
        <div className="bg-black border-b border-slate-800 sticky top-0 z-40">
          <div className="px-8 py-4 flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-slate-400 hover:text-white"
            >
              <Menu className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-4">
              <Badge className="bg-orange-600 text-white border-0">
                Frete Grátis acima de R$ 499
              </Badge>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Carrinho (0)
              </Button>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-slate-900/50 to-transparent z-10"></div>
          <img 
            src={`${import.meta.env.BASE_URL}product1.jpg`} 
            alt="Hero" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-20 h-full flex items-center px-8">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-orange-600 text-white border-0 text-sm px-4 py-1">
                Nova Coleção 2025
              </Badge>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Correntes que<br />
                <span className="text-orange-500">Contam Histórias</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Artesanato em aço inoxidável 304. Cada peça é única, 
                trabalhada à mão com técnicas tradicionais de chainmail.
              </p>
              <div className="flex gap-4">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
                  Explorar Coleção
                </Button>
                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-lg">
                  Ver Vídeo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-8">
          <div className="px-8 grid grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-sm text-orange-100">Artesanal</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">500+</p>
              <p className="text-sm text-orange-100">Clientes</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">5★</p>
              <p className="text-sm text-orange-100">Avaliação</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">304</p>
              <p className="text-sm text-orange-100">Aço Inox Premium</p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="produtos" className="px-8 py-16">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Produtos em Destaque</h2>
            <p className="text-slate-400 text-lg">
              Explore nossa coleção exclusiva de pulseiras artesanais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="bg-slate-900 border-slate-800 overflow-hidden hover:border-orange-600 transition-all group">
                <div className="relative aspect-square overflow-hidden bg-slate-800">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-1 mb-2">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-white">
                      R$ {product.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-orange-400 font-medium mb-4">
                    R$ {(product.price * 0.95).toFixed(2)} no Pix
                  </p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Comprar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className="px-8 py-16 bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Por Que Escolher ABLAZE?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Garantia Vitalícia</h3>
                <p className="text-slate-400">
                  Aço inoxidável 304 com garantia contra defeitos de fabricação
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Qualidade Premium</h3>
                <p className="text-slate-400">
                  Cada peça passa por rigoroso controle de qualidade
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Entrega Segura</h3>
                <p className="text-slate-400">
                  Embalagem especial e rastreamento em tempo real
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-slate-800 px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={`${import.meta.env.BASE_URL}logo-ablaze.webp`} alt="ABLAZE Chainmail" className="h-16 mb-4" />
              <p className="text-sm text-slate-400">
                Acessórios artesanais em aço inoxidável de alta qualidade, 
                feitos à mão com paixão e dedicação.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>WhatsApp: (31) 98818-5877</li>
                <li>Email: ablazechainmail@gmail.com</li>
                <li>Horário: Seg-Sex 9h às 18h</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Pagamento Seguro</h4>
              <p className="text-sm text-slate-400 mb-4">
                Ambiente 100% seguro com certificado SSL
              </p>
              <div className="flex gap-2">
                <div className="w-12 h-8 bg-slate-800 rounded border border-slate-700"></div>
                <div className="w-12 h-8 bg-slate-800 rounded border border-slate-700"></div>
                <div className="w-12 h-8 bg-slate-800 rounded border border-slate-700"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>© 2025 ABLAZE Chainmail. Todos os direitos reservados.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
