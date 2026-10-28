'use client';

import { FormEvent } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Textarea } from '@/components/ui/textarea';

export function OrderForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'Oi, Ateliê dos Fehs! Quero pedir um orçamento 🍰',
      '',
      `*Nome:* ${data.get('nome')}`,
      `*Data da ocasião:* ${data.get('data')}`,
      `*Ocasião:* ${data.get('ocasiao')}`,
      `*Produto:* ${data.get('produto')}`,
      `*Tamanho/quantidade:* ${data.get('tamanho')}`,
      `*Sabor:* ${data.get('sabor')}`,
      `*Ideia e detalhes:* ${data.get('detalhes')}`,
      '',
      'Podem me ajudar com as opções e valores?',
    ].join('\n');

    window.open(`https://wa.me/5511991567182?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  const control =
    'h-12 rounded-xl border-[#ddc0b8] bg-[#fffdfb] px-4 text-[#4b2d27] shadow-sm focus-visible:ring-[#b64f47]/20';

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[#ead1ca] bg-white p-5 shadow-[0_24px_70px_rgba(80,42,35,.10)] sm:p-8">
      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#b64f47]">Seu pedido, bem explicadinho</p>
          <h3 className="mt-2 font-serif text-3xl font-bold tracking-[-.03em] text-[#3f241f]">Conte como você imagina</h3>
        </div>
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#f6dfd8] text-[#b64f47]">
          <MessageCircle className="size-5" aria-hidden="true" />
        </span>
      </div>

      <FieldGroup className="gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="nome" className="text-[#5a3933]">Seu nome</FieldLabel>
            <Input id="nome" name="nome" required placeholder="Como podemos te chamar?" className={control} />
          </Field>
          <Field>
            <FieldLabel htmlFor="data" className="text-[#5a3933]">Data da ocasião</FieldLabel>
            <Input id="data" name="data" type="date" required className={control} />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="ocasiao" className="text-[#5a3933]">Qual é a ocasião?</FieldLabel>
            <Input id="ocasiao" name="ocasiao" required placeholder="Aniversário, casamento..." className={control} />
          </Field>
          <Field>
            <FieldLabel htmlFor="produto" className="text-[#5a3933]">O que você quer encomendar?</FieldLabel>
            <NativeSelect id="produto" name="produto" required className="w-full [&_select]:h-12 [&_select]:rounded-xl [&_select]:border-[#ddc0b8] [&_select]:bg-[#fffdfb] [&_select]:px-4">
              <NativeSelectOption value="">Selecione uma opção</NativeSelectOption>
              <NativeSelectOption value="Bolo personalizado">Bolo personalizado</NativeSelectOption>
              <NativeSelectOption value="Doces / brigadeiros">Doces / brigadeiros</NativeSelectOption>
              <NativeSelectOption value="Cookies ou brownies">Cookies ou brownies</NativeSelectOption>
              <NativeSelectOption value="Ovo de Páscoa">Ovo de Páscoa</NativeSelectOption>
              <NativeSelectOption value="Cone trufado">Cone trufado</NativeSelectOption>
              <NativeSelectOption value="Outro">Outro</NativeSelectOption>
            </NativeSelect>
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="tamanho" className="text-[#5a3933]">Tamanho ou quantidade</FieldLabel>
            <Input id="tamanho" name="tamanho" required placeholder="Ex.: 20 pessoas ou 50 doces" className={control} />
          </Field>
          <Field>
            <FieldLabel htmlFor="sabor" className="text-[#5a3933]">Sabor preferido</FieldLabel>
            <NativeSelect id="sabor" name="sabor" required className="w-full [&_select]:h-12 [&_select]:rounded-xl [&_select]:border-[#ddc0b8] [&_select]:bg-[#fffdfb] [&_select]:px-4">
              <NativeSelectOption value="">Selecione ou escolha “a decidir”</NativeSelectOption>
              <NativeSelectOption value="Chocolate / brigadeiro">Chocolate / brigadeiro</NativeSelectOption>
              <NativeSelectOption value="Ninho com morango">Ninho com morango</NativeSelectOption>
              <NativeSelectOption value="Prestígio">Prestígio</NativeSelectOption>
              <NativeSelectOption value="Doce de leite">Doce de leite</NativeSelectOption>
              <NativeSelectOption value="Beijinho">Beijinho</NativeSelectOption>
              <NativeSelectOption value="Quero ver outras opções">Quero ver outras opções</NativeSelectOption>
            </NativeSelect>
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="detalhes" className="text-[#5a3933]">Tema, cores e detalhes importantes</FieldLabel>
          <Textarea id="detalhes" name="detalhes" required placeholder="Conte o tema, as cores, o nome e a idade. Se tiver uma referência, você pode enviar a foto no WhatsApp depois." className="min-h-28 rounded-xl border-[#ddc0b8] bg-[#fffdfb] p-4 text-[#4b2d27] shadow-sm focus-visible:ring-[#b64f47]/20" />
        </Field>

        <button type="submit" className="mt-2 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#b64f47] px-6 font-bold text-white shadow-[0_14px_28px_rgba(182,79,71,.24)] transition hover:-translate-y-0.5 hover:bg-[#9d4039] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#b64f47]/25">
          Montar mensagem no WhatsApp
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </button>
      </FieldGroup>

      <p className="mt-4 text-center text-xs leading-5 text-[#8a6b64]">
        Ao clicar, seu pedido será organizado em uma mensagem. O orçamento é confirmado diretamente pelo WhatsApp.
      </p>
    </form>
  );
}
