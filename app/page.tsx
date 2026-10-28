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
  Star,
} from 'lucide-react';
import { OrderForm } from '@/components/order-form';
import { ProductCatalog } from '@/components/product-catalog';

const whatsapp =
  'https://wa.me/5511991567182?text=Oi%2C%20Ateli%C3%AA%20dos%20Fehs!%20Quero%20fazer%20uma%20encomenda.';

const gallery = [
  ['/catalog/bolo-aranha.webp', 'Bolo personalizado azul com tema de super-herói'],
  ['/catalog/doces-gourmet.webp', 'Seleção de brigadeiros gourmet artesanais'],
  ['/catalog/bolo-frozen.webp', 'Bolo personalizado com tema de personagens de inverno'],
  ['/catalog/cookie-bueno.webp', 'Cookie artesanal recheado de Bueno'],
  ['/catalog/bolo-gisele.webp', 'Bolo colorido personalizado para aniversário infantil'],
  ['/catalog/doces-azuis.webp', 'Doces artesanais azuis e brigadeiros para festa'],
  ['/catalog/coxinha-morango.webp', 'Coxinha de morango com brigadeiro e chocolate'],
  ['/catalog/bolo-pistache.webp', 'Bolo artesanal de pistache com acabamento em chantilly'],
] as const;

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background pb-[calc(5.5rem+env(safe-area-inset-bottom))] text-foreground md:pb-0">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-4 sm:px-8 sm:py-5 lg:px-12">
          <a href="#inicio" className="group flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Ateliê dos Fehs — início">
            <img
              src="/logo-atelie.png"
              alt="Logo do Ateliê dos Fehs"
              className="size-10 shrink-0 rounded-full border-2 border-[#fffaf7] object-cover shadow-md transition-transform group-hover:-rotate-3 sm:size-12"
            />
            <span className="hidden min-[390px]:block leading-tight">
              <span className="block whitespace-nowrap font-serif text-base font-bold text-[#3f241f] sm:text-lg">Ateliê dos Fehs</span>
              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.19em] text-[#8a625b] sm:block">Confeitaria artesanal</span>
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
            className="inline-flex min-h-11 shrink-0 touch-manipulation items-center gap-2 whitespace-nowrap rounded-full bg-[#5f302a] px-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(95,48,42,.18)] transition hover:-translate-y-0.5 hover:bg-[#48241f] sm:px-5"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Fazer encomenda</span>
            <span className="hidden min-[390px]:inline sm:hidden">Encomendar</span>
            <span className="min-[390px]:hidden">Pedir</span>
          </a>
        </div>
      </header>

      <section id="inicio" className="relative isolate min-h-[760px] scroll-mt-20 bg-[#fbf0eb] pt-20 sm:pt-28 lg:min-h-[820px]">
        <div className="pointer-events-none absolute -left-24 top-40 size-80 rounded-full bg-[#f3c9c0]/55 blur-3xl" />
        <div className="pointer-events-none absolute bottom-12 right-[34%] size-56 rounded-full bg-[#d9ac75]/25 blur-3xl" />
        <div className="mx-auto grid max-w-[1320px] items-center gap-9 px-4 py-10 sm:gap-10 sm:px-8 sm:py-12 lg:grid-cols-[1.02fr_.98fr] lg:px-12 lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e4b8ad] bg-white/70 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#75443d] backdrop-blur sm:mb-7 sm:px-4 sm:text-xs sm:tracking-[0.14em]">
              <Star className="size-3.5 fill-[#dca44e] text-[#dca44e]" aria-hidden="true" />
              5,0 no Google · 26 avaliações
            </div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b45850] sm:mb-4 sm:text-sm sm:tracking-[0.24em]">Bolos que viram parte da festa</p>
            <h1 className="max-w-[760px] font-serif text-[clamp(2.9rem,13.2vw,3.4rem)] font-semibold leading-[.9] tracking-[-0.055em] text-[#3f241f] sm:text-[clamp(3.8rem,9vw,7.1rem)] sm:leading-[.85]">
              Feito à mão.<br />
              <span className="italic text-[#b44d45]">Do seu jeito.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#6e514b] sm:mt-7 sm:text-xl sm:leading-8">
              Bolos personalizados e doces artesanais em Carapicuíba, preparados com sabor, capricho e pontualidade para deixar cada ocasião inesquecível.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 touch-manipulation items-center justify-center gap-3 rounded-full bg-[#b64f47] px-5 text-center font-bold text-white shadow-[0_14px_28px_rgba(182,79,71,.25)] transition hover:-translate-y-0.5 hover:bg-[#9d4039] sm:px-7"
              >
                Quero fazer uma encomenda
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </a>
              <a
                href="#galeria"
                className="inline-flex min-h-14 touch-manipulation items-center justify-center rounded-full border border-[#d8aaa0] bg-white/60 px-5 text-center font-bold text-[#5b332d] transition hover:bg-white sm:px-7"
              >
                Ver nossas criações
              </a>
            </div>

            <div className="mt-7 flex flex-col items-start gap-3 text-sm text-[#755750] sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-x-7">
              <span className="inline-flex items-center gap-2"><MapPin className="size-4 text-[#b64f47]" /> Vila Terezinha, Carapicuíba</span>
              <a href="https://instagram.com/ateliedosfehs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#b64f47]">
                <Camera className="size-4" /> @ateliedosfehs · 3,2 mil seguidores
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[430px] sm:max-w-[560px] lg:mr-0">
            <div className="absolute -inset-4 rotate-3 rounded-[44%_56%_48%_52%/47%_41%_59%_53%] bg-[#e8b9ae]" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[44%_56%_48%_52%/47%_41%_59%_53%] border-[6px] border-[#fffaf6] bg-[#c6897d] shadow-[0_28px_80px_rgba(93,47,40,.22)] sm:border-[10px]">
              <img src="/catalog/bolo-floral.webp" alt="Bolo personalizado com flores feito pelo Ateliê dos Fehs" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#3f241f]/65 to-transparent" />
              <p className="absolute bottom-5 left-6 right-6 font-serif text-xl font-semibold italic text-white sm:bottom-7 sm:left-8 sm:right-8 sm:text-2xl">Cada detalhe pensado para a sua história.</p>
            </div>
            <div className="absolute -bottom-4 left-0 rotate-[-5deg] rounded-2xl border border-[#efd3cb] bg-[#fffdfb] px-4 py-3 shadow-xl sm:-bottom-5 sm:-left-10 sm:px-5 sm:py-4">
              <p className="font-serif text-xl font-bold text-[#4b2c27] sm:text-2xl">+3 mil</p>
              <p className="text-xs font-semibold uppercase tracking-[.12em] text-[#9a6c64]">pessoas acompanhando</p>
            </div>
          </div>
        </div>

        <div className="border-y border-[#ead1ca] bg-[#fffaf7]/75 backdrop-blur-sm">
          <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-px bg-[#ead1ca] sm:grid-cols-3 lg:grid-cols-6">
            {['Bolos decorados', 'Cookies', 'Brownies', 'Doces artesanais', 'Ovos de Páscoa', 'Cones trufados'].map((item) => (
              <div key={item} className="flex min-h-16 items-center justify-center bg-[#fffaf7]/95 px-3 text-center font-serif text-sm font-bold text-[#66413a] sm:min-h-20 sm:text-base">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <ProductCatalog />

      <section id="galeria" className="scroll-mt-20 bg-[#fffaf6] py-20 sm:py-32">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.22em] text-[#b64f47]">Galeria</p>
              <h2 className="mt-4 max-w-2xl font-serif text-[clamp(2.75rem,12vw,3.2rem)] font-semibold leading-[.94] tracking-[-.05em] text-[#402722] sm:text-[clamp(3.2rem,5vw,5.2rem)] sm:leading-[.92]">
                Sua ideia ganha <span className="italic text-[#b64f47]">forma e sabor.</span>
              </h2>
            </div>
            <a href="https://instagram.com/ateliedosfehs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 self-start rounded-full border border-[#dfbdb4] px-5 py-3 text-sm font-bold text-[#6b413a] transition hover:bg-[#f8e7e1] sm:self-auto">
              <Camera className="size-4" /> Ver mais no Instagram <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-2.5 sm:mt-12 sm:grid-cols-4 sm:gap-4">
            {gallery.map(([src, alt], index) => (
              <figure key={src} className={`group relative overflow-hidden rounded-[1.1rem] bg-[#ecd3cb] sm:rounded-[1.4rem] ${index === 0 || index === 5 ? 'row-span-2' : ''}`}>
                <img src={src} alt={alt} className={`w-full object-cover transition duration-500 group-hover:scale-105 ${index === 0 || index === 5 ? 'h-full min-h-[300px] sm:min-h-[520px]' : 'aspect-[4/5]'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a211c]/45 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e9d0c9] bg-[#f4ddd6] py-16 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
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
                <article key={title as string} className="rounded-[1.5rem] border border-[#e0bdb4] bg-[#fffaf6] p-5 shadow-[0_14px_35px_rgba(102,56,48,.06)] sm:rounded-[1.7rem] sm:p-7">
                  <ReviewIcon className="size-7 text-[#b64f47]" aria-hidden="true" />
                  <h3 className="mt-6 font-serif text-2xl font-bold tracking-[-.03em] text-[#4b2d27]">{title as string}</h3>
                  <p className="mt-3 leading-7 text-[#795b54]">{text as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="como-encomendar" className="scroll-mt-20 bg-[#fffaf6] py-20 sm:py-32">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
            <div className="lg:sticky lg:top-8 lg:self-start">
              <p className="text-sm font-bold uppercase tracking-[.22em] text-[#b64f47]">Como encomendar</p>
              <h2 className="mt-4 font-serif text-[clamp(2.75rem,12vw,3.2rem)] font-semibold leading-[.94] tracking-[-.05em] text-[#402722] sm:text-[clamp(3.2rem,5vw,5.3rem)] sm:leading-[.92]">
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

      <section className="bg-[#b64f47] py-12 text-white sm:py-16">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-4 sm:px-8 md:grid-cols-3 lg:px-12">
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

      <footer className="bg-[#2e1b18] py-14 text-[#f7ebe7] sm:py-20">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
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

      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed inset-x-3 bottom-[calc(.75rem+env(safe-area-inset-bottom))] z-50 inline-flex min-h-14 touch-manipulation items-center justify-center gap-2 rounded-full border border-white/20 bg-[#5f302a] px-5 text-sm font-bold text-white shadow-[0_16px_40px_rgba(48,22,18,.35)] md:hidden"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        Pedir orçamento no WhatsApp
      </a>
    </main>
  );
}
