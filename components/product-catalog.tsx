'use client';

import { ArrowRight, CakeSlice, Check, Cookie, Gift, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categories = [
  {
    id: 'bolos',
    label: 'Bolos personalizados',
    icon: CakeSlice,
    title: 'Bolos que contam a história da sua festa',
    description: 'Tema, cores, nome, idade e acabamento são combinados para criar um bolo único, do tamanho certo para a sua celebração.',
    image: '/catalog/bolo-floral.webp',
    alt: 'Bolo personalizado branco e lilás com flores, feito pelo Ateliê dos Fehs',
    products: [
      {
        name: 'Bolo temático personalizado',
        description: 'Decoração criada a partir do tema da festa, com nome, idade, cores e topo personalizado.',
        details: ['Chocolate ou baunilha', 'Recheios sob consulta', 'Tamanho personalizado'],
        orderValue: 'Bolo personalizado',
      },
      {
        name: 'Bolo clássico de celebração',
        description: 'Acabamento delicado para aniversários adultos, casamentos, chá de bebê e comemorações especiais.',
        details: ['Flores e detalhes elegantes', 'Cores à sua escolha', 'Sob encomenda'],
        orderValue: 'Bolo personalizado',
      },
      {
        name: 'Bolo para mesversário',
        description: 'Uma versão afetiva e personalizada para registrar cada mês do bebê com muito sabor.',
        details: ['Temas infantis', 'Tamanho compacto', 'Nome e mês personalizados'],
        orderValue: 'Bolo personalizado',
      },
    ],
  },
  {
    id: 'doces',
    label: 'Doces especiais',
    icon: Sparkles,
    title: 'Docinhos que completam a mesa',
    description: 'Produção artesanal para festas, presentes e aquele momento em que dá vontade de comer algo realmente especial.',
    image: '/catalog/doces-gourmet.webp',
    alt: 'Seleção de brigadeiros gourmet do Ateliê dos Fehs',
    products: [
      {
        name: 'Brigadeiros gourmet',
        description: 'Doces cremosos e finalizados um a um para compor mesas de festa e caixas especiais.',
        details: ['Meio amargo', 'Dois amores', 'Limão e maracujá'],
        orderValue: 'Doces / brigadeiros',
      },
      {
        name: 'Coxinha de morango',
        description: 'Morango inteiro envolvido em brigadeiro e finalizado com chocolate — uma das queridinhas do Ateliê.',
        details: ['Morango fresco', 'Brigadeiro cremoso', 'Chocolate'],
        orderValue: 'Doces / brigadeiros',
      },
      {
        name: 'Doces para mesa de festa',
        description: 'Combinações de sabores e cores pensadas para conversar com a decoração da comemoração.',
        details: ['Brigadeiro ao leite', 'Brigadeiro de Ninho', 'Quantidade sob consulta'],
        orderValue: 'Doces / brigadeiros',
      },
    ],
  },
  {
    id: 'cookies',
    label: 'Cookies & brownies',
    icon: Cookie,
    title: 'Crocante por fora, recheado por dentro',
    description: 'Opções intensas, macias e generosas para presentear, montar kits ou adoçar o café da tarde.',
    image: '/catalog/cookie-bueno.webp',
    alt: 'Cookie recheado de Bueno produzido pelo Ateliê dos Fehs',
    products: [
      {
        name: 'Cookie de Bueno',
        description: 'Cookie artesanal com massa macia, pedaços de chocolate e recheio bem cremoso.',
        details: ['Recheado', 'Feito artesanalmente', 'Venda sob encomenda'],
        orderValue: 'Cookies ou brownies',
      },
      {
        name: 'Cookies recheados',
        description: 'Sabores e recheios variam durante o ano — consulte as opções disponíveis no período.',
        details: ['Unidades ou kits', 'Sabores sazonais', 'Ótimo para presentear'],
        orderValue: 'Cookies ou brownies',
      },
      {
        name: 'Brownies artesanais',
        description: 'Chocolate intenso e textura úmida, em porções para servir ou montar lembranças.',
        details: ['Chocolate intenso', 'Porções individuais', 'Kits sob consulta'],
        orderValue: 'Cookies ou brownies',
      },
    ],
  },
  {
    id: 'sazonais',
    label: 'Sazonais & presentes',
    icon: Gift,
    title: 'Edições especiais para presentear',
    description: 'Produtos que acompanham a época do ano e aparecem por tempo limitado. As opções e a agenda mudam conforme a data.',
    image: '/catalog/coxinha-morango.webp',
    alt: 'Doce artesanal de morango com chocolate do Ateliê dos Fehs',
    products: [
      {
        name: 'Ovos de Páscoa',
        description: 'Cascas e recheios artesanais preparados em edição limitada para a Páscoa.',
        details: ['Sabores do período', 'Produção limitada', 'Reserva antecipada'],
        orderValue: 'Ovo de Páscoa',
      },
      {
        name: 'Cones trufados',
        description: 'Uma opção prática, bonita e cheia de recheio para lembranças e pequenos presentes.',
        details: ['Recheios variados', 'Embalagem para presente', 'Sob encomenda'],
        orderValue: 'Cone trufado',
      },
      {
        name: 'Kits e Festa na Caixa',
        description: 'Combinações de doces para presentear ou comemorar de um jeito mais íntimo e especial.',
        details: ['Montagem personalizada', 'Datas comemorativas', 'Itens sob consulta'],
        orderValue: 'Outro',
      },
    ],
  },
] as const;

type CatalogItem = (typeof categories)[number]['products'][number];

function chooseProduct(item: CatalogItem) {
  window.dispatchEvent(
    new CustomEvent('catalog:select-product', {
      detail: { product: item.orderValue, itemName: item.name },
    }),
  );
  document.getElementById('como-encomendar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function ProductCatalog() {
  return (
    <section id="cardapio" className="relative bg-[#402722] py-24 text-[#fff9f5] sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.22em] text-[#e5a69a]">Cardápio artesanal</p>
            <h2 className="mt-4 max-w-xl font-serif text-[clamp(3rem,5vw,5.4rem)] font-semibold leading-[.93] tracking-[-.05em]">
              Escolha pelo <span className="italic text-[#e5a69a]">tipo de desejo.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#dfcbc5] lg:justify-self-end">
            Explore as categorias, conheça as opções e selecione o produto que mais combina com a ocasião. Todos os itens são feitos sob encomenda.
          </p>
        </div>

        <Tabs defaultValue="bolos" className="mt-12 gap-7">
          <div className="-mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
            <TabsList className="h-auto min-w-max gap-2 rounded-full border border-white/10 bg-white/5 p-1.5">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="h-12 flex-none gap-2 rounded-full px-4 text-[#d7c0ba] hover:text-white data-active:bg-[#fff5ee] data-active:text-[#5b332d] sm:px-5"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {category.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="catalog-panel">
              <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#4b2d27] shadow-[0_28px_80px_rgba(20,8,6,.18)] lg:grid-cols-[.78fr_1.22fr]">
                <div className="catalog-photo relative min-h-[440px] overflow-hidden lg:min-h-[680px]">
                  <img src={category.image} alt={category.alt} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b1511]/90 via-[#2b1511]/12 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                    <span className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#71433b] backdrop-blur">
                      Foto real do portfólio
                    </span>
                    <h3 className="mt-4 max-w-lg font-serif text-4xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl">{category.title}</h3>
                    <p className="mt-4 max-w-lg leading-7 text-[#f0dcd6]">{category.description}</p>
                  </div>
                </div>

                <div className="grid gap-px bg-white/10 md:grid-cols-3 lg:grid-cols-1">
                  {category.products.map((product, index) => (
                    <article key={product.name} className="catalog-item group flex flex-col bg-[#fff8f3] p-6 text-[#4a2d27] sm:p-7 lg:min-h-[225px] lg:flex-row lg:items-center lg:gap-8">
                      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#efd3cb] font-serif font-bold text-[#a2443d]">0{index + 1}</span>
                      <div className="mt-5 min-w-0 flex-1 lg:mt-0">
                        <h4 className="font-serif text-2xl font-bold tracking-[-.03em]">{product.name}</h4>
                        <p className="mt-2 max-w-xl text-sm leading-6 text-[#775952]">{product.description}</p>
                        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                          {product.details.map((detail) => (
                            <span key={detail} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#775952]">
                              <Check className="size-3.5 text-[#b64f47]" aria-hidden="true" /> {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => chooseProduct(product)}
                        className="mt-6 inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-[#d8aaa0] px-5 text-sm font-bold text-[#773f38] transition hover:-translate-y-0.5 hover:bg-[#f2ddd7] lg:mt-0"
                      >
                        Escolher <ArrowRight className="size-4" aria-hidden="true" />
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 rounded-[2rem] bg-[#fff5ee] p-6 text-[#4a2d27] sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#b64f47]">Sabores que aparecem no portfólio</p>
            <h3 className="mt-2 font-serif text-3xl font-bold tracking-[-.03em]">Massa, recheio e acabamento do seu jeito</h3>
            <p className="mt-3 leading-7 text-[#74554e]">A disponibilidade varia conforme o produto e a data. A combinação final é confirmada no WhatsApp.</p>
          </div>
          <div className="mt-7 flex max-w-2xl flex-wrap gap-2 lg:mt-0 lg:justify-end">
            {['Chocolate & brigadeiro', 'Ninho com morango', 'Belga com abacaxi', 'Prestígio', 'Pistache', 'Dois amores'].map((flavor) => (
              <span key={flavor} className="rounded-full border border-[#e1beb5] bg-white px-4 py-2.5 text-sm font-bold text-[#64423b]">{flavor}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
