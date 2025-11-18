import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, User, Search, CheckCircle2, Sparkles } from "lucide-react";
import { useLocation } from "wouter";

export default function Prototype3() {
  const [, setLocation] = useLocation();

  const products = [
    { id: 1, name: "Pulseira Half-Persian", price: 189.90, image: `${import.meta.env.BASE_URL}product1.jpg` },
    { id: 2, name: "Pulseira Byzantine Azul", price: 225.90, image: `${import.meta.env.BASE_URL}product2.jpg` },
    { id: 3, name: "Pulseira European 4-1", price: 159.90, image: `${import.meta.env.BASE_URL}product3.jpg` },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="bg-orange-600 text-white py-2 text-center text-sm">
          <p>🔥 Frete Grátis acima de R$ 499 | Use o cupom ABLAZE5 na primeira compra</p>
        </div>
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Button 
              variant="ghost" 
              onClick={() => setLocation("/")}
              className="text-slate-600"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>

            <div className="flex items-center gap-2">
              <img src={`${import.meta.env.BASE_URL}logo-ablaze.webp`} alt="ABLAZE" className="h-12" />
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Editorial */}
      <section className="relative h-[700px] overflow-hidden bg-black">
        <img 
          src={`${import.meta.env.BASE_URL}product1.jpg`} 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="relative h-full flex items-end pb-20">
          <div className="container">
            <Badge className="mb-6 bg-orange-600 text-white border-0 text-base px-6 py-2">
              Edição Limitada 2025
            </Badge>
            <h1 className="text-7xl font-bold text-white mb-6 leading-tight max-w-3xl">
              A Arte do Chainmail Reinventada
            </h1>
            <p className="text-2xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              Tradição ancestral encontra design contemporâneo em cada elo cuidadosamente trabalhado
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-7 text-lg">
              Descobrir a Coleção
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <Sparkles className="h-12 w-12 text-orange-600 mb-4" />
                <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Cada Peça Conta uma História
                </h2>
              </div>
              <div className="prose prose-lg">
                <p className="text-xl text-slate-700 leading-relaxed mb-6">
                  O chainmail é uma técnica milenar que atravessou séculos, das armaduras medievais 
                  aos acessórios contemporâneos. Na ABLAZE, honramos essa tradição enquanto criamos 
                  peças únicas que expressam individualidade e estilo.
                </p>
                <p className="text-xl text-slate-700 leading-relaxed mb-6">
                  Utilizamos exclusivamente aço inoxidável 304, conhecido por sua durabilidade excepcional 
                  e resistência à corrosão. Cada elo é conectado manualmente, garantindo não apenas beleza 
                  estética, mas também integridade estrutural.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div>
                  <p className="text-4xl font-bold text-orange-600 mb-2">304</p>
                  <p className="text-sm text-slate-600">Aço Inoxidável Premium</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-orange-600 mb-2">100%</p>
                  <p className="text-sm text-slate-600">Feito à Mão</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-orange-600 mb-2">∞</p>
                  <p className="text-sm text-slate-600">Durabilidade</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={`${import.meta.env.BASE_URL}product2.jpg`} 
                  alt="Artesão trabalhando" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-orange-600 text-white p-8 rounded-xl shadow-xl max-w-xs">
                <p className="text-sm font-semibold mb-1">Garantia Vitalícia</p>
                <p className="text-xs opacity-90">Confiança em cada detalhe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Coleção Exclusiva</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Peças únicas que combinam técnica artesanal com design contemporâneo, 
              criadas para quem valoriza autenticidade e qualidade
            </p>
          </div>

          <div className="space-y-24">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <Badge className="mb-4 bg-orange-100 text-orange-700 border-0">
                    Destaque da Coleção
                  </Badge>
                  <h3 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h3>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    Técnica tradicional de chainmail aplicada com precisão artesanal. 
                    Cada elo é conectado manualmente para garantir durabilidade e conforto excepcional.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-orange-600" />
                      <span className="text-slate-700">Aço inoxidável 304 certificado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-orange-600" />
                      <span className="text-slate-700">Resistente à água e corrosão</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-orange-600" />
                      <span className="text-slate-700">Garantia vitalícia contra defeitos</span>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-5xl font-bold text-slate-900">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <span className="text-lg text-slate-500">ou 12x sem juros</span>
                  </div>
                  <p className="text-lg text-orange-600 font-semibold mb-6">
                    R$ {(product.price * 0.95).toFixed(2)} com 5% de desconto no Pix
                  </p>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-6 text-lg">
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <CheckCircle2 className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Garantia Vitalícia</h3>
              <p className="text-orange-100">Confiança em cada peça</p>
            </div>
            <div>
              <CheckCircle2 className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Frete Grátis</h3>
              <p className="text-orange-100">Acima de R$ 499</p>
            </div>
            <div>
              <CheckCircle2 className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Pagamento Seguro</h3>
              <p className="text-orange-100">SSL Certificado</p>
            </div>
            <div>
              <CheckCircle2 className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Suporte Dedicado</h3>
              <p className="text-orange-100">Atendimento personalizado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <h2 className="text-5xl font-bold text-center text-slate-900 mb-16">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white border-slate-200">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-orange-500 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    "Qualidade excepcional! A pulseira é ainda mais bonita pessoalmente. 
                    O trabalho artesanal é impecável e o acabamento é perfeito."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-slate-900">Cliente Satisfeito</p>
                      <p className="text-sm text-slate-500">Compra verificada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src={`${import.meta.env.BASE_URL}logo-ablaze.webp`} alt="ABLAZE" className="h-16 mb-4" />
              <p className="text-slate-400 leading-relaxed">
                Acessórios artesanais em aço inoxidável que combinam tradição e modernidade.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Navegação</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Início</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Coleção</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Atendimento</h4>
              <ul className="space-y-2 text-slate-400">
                <li>WhatsApp: (31) 98818-5877</li>
                <li>Email: ablazechainmail@gmail.com</li>
                <li>Seg-Sex: 9h às 18h</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Garantias</h4>
              <ul className="space-y-2 text-slate-400">
                <li>✓ Garantia vitalícia</li>
                <li>✓ Frete grátis acima de R$ 499</li>
                <li>✓ Pagamento 100% seguro</li>
                <li>✓ Troca em 30 dias</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>© 2025 ABLAZE Chainmail. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
