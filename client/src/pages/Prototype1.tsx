import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Truck, Award, ArrowLeft, ShoppingCart, Search, User } from "lucide-react";
import { useLocation } from "wouter";

export default function Prototype1() {
  const [, setLocation] = useLocation();

  const products = [
    { id: 1, name: "Pulseira Half-Persian", price: 189.90, image: "/product1.jpg", badge: "Bestseller" },
    { id: 2, name: "Pulseira Byzantine Azul", price: 225.90, image: "/product2.jpg", badge: "Novo" },
    { id: 3, name: "Pulseira European 4-1", price: 159.90, image: "/product3.jpg", badge: "Destaque" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            <Button 
              variant="ghost" 
              onClick={() => setLocation("/")}
              className="text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
            
            <div className="flex items-center gap-2">
              <img src="/logo-ablaze.webp" alt="ABLAZE" className="h-12" />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#produtos" className="text-slate-600 hover:text-orange-600 transition-colors">Produtos</a>
              <a href="#sobre" className="text-slate-600 hover:text-orange-600 transition-colors">Sobre</a>
              <a href="#contato" className="text-slate-600 hover:text-orange-600 transition-colors">Contato</a>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-slate-600">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-600">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-600">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-slate-50 py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">
                100% Aço Inoxidável
              </Badge>
              <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Acessórios Artesanais de Alta Qualidade
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Cada peça é cuidadosamente trabalhada à mão, utilizando técnicas tradicionais de chainmail 
                e materiais premium para garantir durabilidade e estilo único.
              </p>
              <div className="flex gap-4">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
                  Ver Coleção
                </Button>
                <Button variant="outline" className="border-slate-300 px-8 py-6 text-lg">
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/product1.jpg" 
                  alt="Pulseira artesanal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <p className="text-sm text-slate-600">Feito à mão</p>
                <p className="text-2xl font-bold text-orange-600">100%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Garantia de Qualidade</h3>
                <p className="text-sm text-slate-600">Aço inoxidável 304 certificado</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Frete Grátis</h3>
                <p className="text-sm text-slate-600">Acima de R$ 499 para todo Brasil</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Artesanato Premium</h3>
                <p className="text-sm text-slate-600">Peças únicas feitas sob medida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="produtos" className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Coleção em Destaque</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore nossa seleção de pulseiras artesanais, cada uma com design exclusivo e acabamento impecável.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow bg-white border-slate-200">
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-orange-600 text-white">
                    {product.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{product.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-slate-900">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-slate-500">ou 12x sem juros</span>
                  </div>
                  <p className="text-sm text-orange-600 font-medium mb-4">
                    R$ {(product.price * 0.95).toFixed(2)} com 5% de desconto no Pix
                  </p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Adicionar ao Carrinho
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Artesanato com Paixão</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Cada peça ABLAZE é resultado de horas de trabalho meticuloso, combinando técnicas ancestrais 
                de chainmail com design contemporâneo. Utilizamos apenas aço inoxidável 304 de alta qualidade, 
                garantindo durabilidade e resistência à corrosão.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nosso compromisso é criar acessórios que não apenas complementam seu estilo, mas contam uma 
                história de dedicação e excelência artesanal.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-600">100+</p>
                  <p className="text-sm text-slate-600">Peças Criadas</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-600">500+</p>
                  <p className="text-sm text-slate-600">Clientes Satisfeitos</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-600">5★</p>
                  <p className="text-sm text-slate-600">Avaliação Média</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/product2.jpg" alt="Processo" className="rounded-lg shadow-lg" />
              <img src="/product3.jpg" alt="Detalhe" className="rounded-lg shadow-lg mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/logo-ablaze.webp" alt="ABLAZE" className="h-16 mb-4" />
              <p className="text-slate-400 text-sm">
                Acessórios artesanais em aço inoxidável de alta qualidade.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Início</a></li>
                <li><a href="#produtos" className="hover:text-orange-400 transition-colors">Produtos</a></li>
                <li><a href="#sobre" className="hover:text-orange-400 transition-colors">Sobre</a></li>
                <li><a href="#contato" className="hover:text-orange-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Atendimento</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>WhatsApp: (31) 98818-5877</li>
                <li>Email: ablazechainmail@gmail.com</li>
                <li>Seg-Sex: 9h às 18h</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Pagamento Seguro</h4>
              <p className="text-sm text-slate-400 mb-4">
                Aceitamos todas as formas de pagamento com segurança SSL.
              </p>
              <div className="flex gap-2">
                <div className="w-10 h-6 bg-slate-700 rounded"></div>
                <div className="w-10 h-6 bg-slate-700 rounded"></div>
                <div className="w-10 h-6 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>© 2025 ABLAZE Chainmail. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
