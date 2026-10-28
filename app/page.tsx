import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CalendarClock,
  Camera,
  Check,
  Clock3,
  Heart,
  MapPin,
  MessageCircle,
  Sparkles,
  Star,
} from 'lucide-react';
import { OrderForm } from '@/components/order-form';

const whatsapp =
  'https://wa.me/5511991567182?text=Oi%2C%20Ateli%C3%AA%20dos%20Fehs!%20Quero%20fazer%20uma%20encomenda.';

const products = [
  {
    number: '01',
    title: 'Bolos personalizados',
    description: 'Temas, cores e acabamentos pensados para aniversários, mesversários, casamentos e outras celebrações.',
    accent: 'bg-[#e9b6aa]',
  },
  {
    number: '02',
    title: 'Doces para a festa',
    description: 'Brigadeiros e doces artesanais para montar uma mesa bonita, gostosa e cheia de carinho.',
    accent: 'bg-[#d4a45d]',
  },
  {
    number: '03',
    title: 'Cookies & brownies',
    description: 'Opções macias, intensas e perfeitas para presentear, complementar a festa ou adoçar o dia.',
    accent: 'bg-[#9d6b55]',
  },
  {
    number: '04',
    title: 'Sazonais & presentes',
    description: 'Ovos de Páscoa, cones trufados e criações especiais em edições limitadas ao longo do ano.',
    accent: 'bg-[#c48586]',
  },
];

const gallery = [
  ['/gallery/bolo-rosa.png', 'Bolo rosa personalizado com decoração temática'],
  ['/gallery/bolo-frozen.png', 'Bolo personalizado inspirado em personagens de inverno'],
  ['/gallery/bolo-stitch.png', 'Bolo azul personalizado com tema divertido'],
  ['/gallery/bolo-heroi.png', 'Bolo azul e vermelho com tema de super-herói'],
  ['/gallery/bolo-minnie.png', 'Bolo colorido com tema infantil'],
  ['/gallery/bolo-elegante.png', 'Bolo artesanal com acabamento delicado'],
  ['/gallery/bolo-delicado.png', 'Bolo claro com decoração personalizada'],
  ['/gallery/bolo-colorido.png', 'Bolo vibrante para comemoração infantil'],
] as const;

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="Ateliê dos Fehs — início">
            <img
              src="/logo-atelie.png"
              alt="Logo do Ateliê dos Fehs"
              className="size-12 rounded-full border-2 border-[#fffaf7] object-cover shadow-md transition-transform group-hover:-rotate-3"
            />
            <span className="leading-tight">
              <span className="block font-serif text-lg font-bold text-[#3f241f]">Ateliê dos Fehs</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.19em] text-[#8a625b]">Confeitaria artesanal</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#5b403a] md:flex" aria-label="Navegação principal">
            <a href="#cardapio" className="transition-colors hover:text-[#b64f47]">Cardápio</a>
            <a href="#galeria" className="transition-colors hover:text-[#b64f47]">Galeria</a>
            <a href="#como-encomendar" className="transition-colors hover:text-[#b64f47]">Como encomendar</a>
          </nav>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#5f302a] px-5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(95,48,42,.18)] transition hover:-translate-y-0.5 hover:bg-[#48241f]"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Fazer encomenda</span>
            <span className="sm:hidden">Encomendar</span>
          </a>
        </div>
      </header>

      <section id="inicio" className="relative isolate min-h-[760px] bg-[#fbf0eb] pt-28 lg:min-h-[820px]">
        <div className="pointer-events-none absolute -left-24 top-40 size-80 rounded-full bg-[#f3c9c0]/55 blur-3xl" />
        <div className="pointer-events-none absolute bottom-12 right-[34%] size-56 rounded-full bg-[#d9ac75]/25 blur-3xl" />
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:px-12 lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e4b8ad] bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#75443d] backdrop-blur">
              <Star className="size-3.5 fill-[#dca44e] text-[#dca44e]" aria-hidden="true" />
              5,0 no Google · 26 avaliações
            </div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#b45850]">Bolos que viram parte da festa</p>
            <h1 className="max-w-[760px] font-serif text-[clamp(3.45rem,7vw,7.1rem)] font-semibold leading-[.85] tracking-[-0.055em] text-[#3f241f]">
              Feito à mão.<br />
              <span className="italic text-[#b44d45]">Do seu jeito.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#6e514b] sm:text-xl">
              Bolos personalizados e doces artesanais em Carapicuíba, preparados com sabor, capricho e pontualidade para deixar cada ocasião inesquecível.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#b64f47] px-7 font-bold text-white shadow-[0_14px_28px_rgba(182,79,71,.25)] transition hover:-translate-y-0.5 hover:bg-[#9d4039]"
              >
                Quero fazer uma encomenda
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </a>
              <a
                href="#galeria"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#d8aaa0] bg-white/60 px-7 font-bold text-[#5b332d] transition hover:bg-white"
              >
                Ver nossas criações
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#755750]">
              <span className="inline-flex items-center gap-2"><MapPin className="size-4 text-[#b64f47]" /> Vila Terezinha, Carapicuíba</span>
              <a href="https://instagram.com/ateliedosfehs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#b64f47]">
                <Camera className="size-4" /> @ateliedosfehs · 3,2 mil seguidores
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:mr-0">
            <div className="absolute -inset-4 rotate-3 rounded-[44%_56%_48%_52%/47%_41%_59%_53%] bg-[#e8b9ae]" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[44%_56%_48%_52%/47%_41%_59%_53%] border-[10px] border-[#fffaf6] bg-[#c6897d] shadow-[0_28px_80px_rgba(93,47,40,.22)]">
              <img src="/hero-cake.png" alt="Bolo temático personalizado do Ateliê dos Fehs" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#3f241f]/65 to-transparent" />
              <p className="absolute bottom-7 left-8 right-8 font-serif text-2xl font-semibold italic text-white">Cada detalhe pensado para a sua história.</p>
            </div>
            <div className="absolute -bottom-5 -left-2 rotate-[-5deg] rounded-2xl border border-[#efd3cb] bg-[#fffdfb] px-5 py-4 shadow-xl sm:-left-10">
              <p className="font-serif text-2xl font-bold text-[#4b2c27]">+3 mil</p>
              <p className="text-xs font-semibold uppercase tracking-[.12em] text-[#9a6c64]">pessoas acompanhando</p>
            </div>
          </div>
        </div>

        <div className="border-y border-[#ead1ca] bg-[#fffaf7]/75 backdrop-blur-sm">
          <div className="mx-auto grid max-w-[1320px] grid-cols-2 divide-x divide-[#ead1ca] px-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-6 lg:px-12">
            {['Bolos decorados', 'Cookies', 'Brownies', 'Doces artesanais', 'Ovos de Páscoa', 'Cones trufados'].map((item) => (
              <div key={item} className="flex min-h-20 items-center justify-center px-3 text-center font-serif text-sm font-bold text-[#66413a] sm:text-base">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="cardapio" className="relative bg-[#402722] py-24 text-[#fff9f5] sm:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.22em] text-[#e5a69a]">Nosso cardápio</p>
              <h2 className="mt-4 max-w-xl font-serif text-[clamp(3rem,5vw,5.4rem)] font-semibold leading-[.93] tracking-[-.05em]">
                Tem um doce para <span className="italic text-[#e5a69a]">cada momento.</span>
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#dfcbc5] lg:justify-self-end">
              Produção artesanal, feita sob encomenda e com atenção a cada detalhe. Escolha a categoria e conte sua ideia — ajudamos a montar a combinação ideal para a sua celebração.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.title} className="group relative min-h-[280px] bg-[#402722] p-7 transition-colors hover:bg-[#4b2d27] sm:p-9">
                <div className="flex items-start justify-between gap-6">
                  <span className={`grid size-14 place-items-center rounded-2xl ${product.accent} font-serif text-lg font-bold text-[#402722]`}>
                    {product.number}
                  </span>
                  <ArrowUpRight className="size-6 text-[#c9988d] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                </div>
                <h3 className="mt-10 font-serif text-3xl font-semibold tracking-[-.03em]">{product.title}</h3>
                <p className="mt-4 max-w-lg leading-7 text-[#cdb5af]">{product.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] bg-[#fff5ee] p-6 text-[#4a2d27] sm:p-9 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#b64f47]">Combinações queridinhas</p>
              <h3 className="mt-2 font-serif text-3xl font-bold tracking-[-.03em]">Um sabor que combina com a sua ideia</h3>
              <p className="mt-3 leading-7 text-[#74554e]">Consulte a disponibilidade e as opções do período. Ajudamos você a escolher massa, recheio e cobertura.</p>
            </div>
            <div className="mt-7 flex max-w-2xl flex-wrap gap-2 lg:mt-0 lg:justify-end">
              {['Chocolate & brigadeiro', 'Ninho com morango', 'Prestígio', 'Doce de leite', 'Beijinho', 'Opções sob consulta'].map((flavor) => (
                <span key={flavor} className="rounded-full border border-[#e1beb5] bg-white px-4 py-2.5 text-sm font-bold text-[#64423b]">
                  {flavor}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8e8e2] py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:px-12">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#b64f47] p-8 text-white shadow-[0_20px_60px_rgba(139,61,54,.18)] sm:p-11">
            <Sparkles className="absolute -right-5 -top-7 size-36 text-white/10" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#ffd8cf]">Datas especiais</p>
            <h2 className="mt-3 max-w-md font-serif text-4xl font-bold leading-tight tracking-[-.04em] sm:text-5xl">Páscoa, presentes e edições sazonais</h2>
            <p className="mt-5 max-w-lg leading-7 text-[#ffeae5]">Ovos recheados, cones trufados e criações que aparecem por tempo limitado. Acompanhe as novidades e reserve com antecedência.</p>
            <a href="https://instagram.com/ateliedosfehs" target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 font-bold text-[#9d4039] transition hover:-translate-y-0.5">
              Ver novidades no Instagram <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              ['Ovos de Páscoa', 'Cascas e recheios artesanais para presentear ou saborear.'],
              ['Cones trufados', 'Pequenos presentes cheios de sabor e capricho.'],
              ['Kits especiais', 'Combinações sazonais montadas em edições limitadas.'],
            ].map(([title, text], index) => (
              <article key={title} className={`rounded-[1.7rem] border border-[#e5c6bd] bg-[#fffaf6] p-6 ${index === 2 ? 'col-span-2 sm:col-span-1' : ''}`}>
                <span className="grid size-10 place-items-center rounded-full bg-[#f3d9d1] font-serif font-bold text-[#a2443d]">0{index + 1}</span>
                <h3 className="mt-7 font-serif text-2xl font-bold tracking-[-.03em] text-[#4b2e28]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#7b5d56]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="bg-[#fffaf6] py-24 sm:py-32">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.22em] text-[#b64f47]">Galeria</p>
              <h2 className="mt-4 max-w-2xl font-serif text-[clamp(3rem,5vw,5.2rem)] font-semibold leading-[.92] tracking-[-.05em] text-[#402722]">
                Sua ideia ganha <span className="italic text-[#b64f47]">forma e sabor.</span>
              </h2>
            </div>
            <a href="https://instagram.com/ateliedosfehs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 self-start rounded-full border border-[#dfbdb4] px-5 py-3 text-sm font-bold text-[#6b413a] transition hover:bg-[#f8e7e1] sm:self-auto">
              <Camera className="size-4" /> Ver mais no Instagram <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {gallery.map(([src, alt], index) => (
              <figure key={src} className={`group relative overflow-hidden rounded-[1.4rem] bg-[#ecd3cb] ${index === 0 || index === 5 ? 'row-span-2' : ''}`}>
                <img src={src} alt={alt} className={`w-full object-cover transition duration-500 group-hover:scale-105 ${index === 0 || index === 5 ? 'h-full min-h-[340px] sm:min-h-[520px]' : 'aspect-[4/5]'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a211c]/45 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e9d0c9] bg-[#f4ddd6] py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            <div className="mx-auto inline-flex items-center gap-1 rounded-full bg-white/70 px-4 py-2 text-[#9d4039]">
              {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="size-4 fill-current" />)}
            </div>
            <p className="mt-4 text-sm font-bold uppercase tracking-[.2em] text-[#9c5f55]">5,0 no Google · 26 avaliações</p>
            <h2 className="mx-auto mt-3 max-w-3xl font-serif text-4xl font-bold tracking-[-.04em] text-[#402722] sm:text-6xl">Carinho que aparece nos detalhes — e nas avaliações.</h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              [Heart, 'Sabor que fica na memória', 'Clientes destacam a textura, o recheio e o sabor marcante dos bolos e doces.'],
              [Award, 'Decoração como combinado', 'O cuidado no acabamento e a fidelidade à referência aparecem entre os principais elogios.'],
              [CalendarClock, 'Pontualidade e confiança', 'Encomendas entregues no prazo e atendimento paciente fazem clientes voltarem há anos.'],
            ].map(([Icon, title, text]) => {
              const ReviewIcon = Icon as typeof Heart;
              return (
                <article key={title as string} className="rounded-[1.7rem] border border-[#e0bdb4] bg-[#fffaf6] p-7 shadow-[0_14px_35px_rgba(102,56,48,.06)]">
                  <ReviewIcon className="size-7 text-[#b64f47]" aria-hidden="true" />
                  <h3 className="mt-6 font-serif text-2xl font-bold tracking-[-.03em] text-[#4b2d27]">{title as string}</h3>
                  <p className="mt-3 leading-7 text-[#795b54]">{text as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="como-encomendar" className="bg-[#fffaf6] py-24 sm:py-32">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
            <div className="lg:sticky lg:top-8 lg:self-start">
              <p className="text-sm font-bold uppercase tracking-[.22em] text-[#b64f47]">Como encomendar</p>
              <h2 className="mt-4 font-serif text-[clamp(3rem,5vw,5.3rem)] font-semibold leading-[.92] tracking-[-.05em] text-[#402722]">
                Menos mensagens.<br /><span className="italic text-[#b64f47]">Mais clareza.</span>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[#765850]">
                Preencha os detalhes essenciais e receba no WhatsApp uma mensagem pronta, organizada e fácil de responder.
              </p>

              <div className="mt-9 space-y-6">
                {[
                  ['1', 'Conte a ocasião', 'Informe data, produto, quantidade, sabor e a ideia de decoração.'],
                  ['2', 'Receba as opções', 'No WhatsApp, alinhamos disponibilidade, referências, valores e retirada ou entrega.'],
                  ['3', 'Confirme sua encomenda', 'Com tudo combinado, seu pedido entra na agenda e começa a ganhar forma.'],
                ].map(([step, title, text]) => (
                  <div key={step} className="flex gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#f0d0c8] font-serif font-bold text-[#9d4039]">{step}</span>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#4a2d27]">{title}</h3>
                      <p className="mt-1 max-w-md text-sm leading-6 text-[#81645d]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-[#ead1ca] bg-[#f9ebe6] p-5">
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-[#b64f47]" />
                  <p className="text-sm leading-6 text-[#674941]"><strong>Uma dica:</strong> quanto antes você chamar, mais fácil reservar a data e definir todos os detalhes com calma.</p>
                </div>
              </div>
            </div>

            <OrderForm />
          </div>
        </div>
      </section>

      <section className="bg-[#b64f47] py-16 text-white">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-5 sm:px-8 md:grid-cols-3 lg:px-12">
          {[
            ['5,0', 'Nota no Google', '26 avaliações'],
            ['3,2 mil', 'Seguidores', '@ateliedosfehs'],
            ['Sob encomenda', 'Produção artesanal', 'Feito especialmente para você'],
          ].map(([value, label, sub]) => (
            <div key={label} className="border-b border-white/20 pb-7 md:border-b-0 md:border-r md:pb-0 md:pr-8 last:border-0">
              <p className="font-serif text-4xl font-bold tracking-[-.04em]">{value}</p>
              <p className="mt-2 font-bold">{label}</p>
              <p className="mt-1 text-sm text-[#ffd8cf]">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#2e1b18] py-16 text-[#f7ebe7] sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr_.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/logo-atelie.png"
                  alt="Logo do Ateliê dos Fehs"
                  className="size-16 rounded-full border-2 border-[#f2d8d0] object-cover shadow-lg"
                />
                <div>
                  <p className="font-serif text-2xl font-bold">Ateliê dos Fehs</p>
                  <p className="text-xs uppercase tracking-[.18em] text-[#caa59c]">Confeitaria artesanal</p>
                </div>
              </div>
              <p className="mt-6 max-w-md leading-7 text-[#d2b9b2]">Bolos e doces artesanais em Carapicuíba, feitos sob encomenda com sabor, capricho e pontualidade.</p>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#b64f47] px-6 font-bold text-white transition hover:bg-[#c25f56]">
                Pedir pelo WhatsApp <ArrowUpRight className="size-4" />
              </a>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#d29e92]">Onde estamos</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Ateli%C3%AA%20dos%20Fehs%20%7C%20Bolos%20Decorados%20%7C%20Ovos%20de%20P%C3%A1scoa%20Carapicu%C3%ADba&query_place_id=ChIJFcyQcjYBz5QRBHZ2orw4K0c" target="_blank" rel="noreferrer" className="mt-5 flex gap-3 text-[#ead7d2] transition hover:text-white">
                <MapPin className="mt-1 size-5 shrink-0 text-[#db9184]" />
                <span>Av. Rui Barbosa, 233<br />esq. Rua Dr. João Veloso<br />Vila Terezinha, Carapicuíba — SP</span>
              </a>
              <div className="mt-5 flex gap-3 text-sm leading-6 text-[#cdb5af]">
                <Clock3 className="mt-1 size-5 shrink-0 text-[#db9184]" />
                <p>Seg a sex, 8h–18h<br />Sáb, 9h–17h · Dom fechado</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#d29e92]">Fale com a gente</p>
              <div className="mt-5 space-y-4">
                <a href="tel:+5511991567182" className="flex items-center justify-between border-b border-white/10 pb-4 font-bold hover:text-white">
                  (11) 99156-7182 <ArrowRight className="size-4" />
                </a>
                <a href="https://instagram.com/ateliedosfehs" target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-white/10 pb-4 font-bold hover:text-white">
                  @ateliedosfehs <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[#a98d86] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Ateliê dos Fehs. Todos os direitos reservados.</p>
            <p>Feito com cuidado — como cada encomenda.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
