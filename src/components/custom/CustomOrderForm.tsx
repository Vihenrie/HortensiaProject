import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { EVENT_TYPES, FRAGRANCES } from '../../constants/customOrder';
import { WHATSAPP_DISPLAY } from '../../constants/navigation';
import { buildCustomOrderLink } from '../../utils/whatsapp';

export const CustomOrderForm: React.FC = () => {
  const [form, setForm] = useState({
    eventType: '',
    quantity: '',
    fragrance: '',
    eventDate: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValid = form.eventType && form.quantity && form.fragrance;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    const link = buildCustomOrderLink(
      form.eventType,
      form.quantity,
      form.fragrance,
      form.eventDate,
      form.notes
    );
    window.open(link, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const inputClasses =
    'w-full font-sans text-sm bg-white border border-[var(--color-kraft-dark)] rounded-2xl px-4 py-3.5 text-[var(--color-espresso)] focus:outline-none focus:border-[var(--color-espresso)] focus:ring-2 focus:ring-[var(--color-espresso)]/10 transition-all placeholder:text-[var(--color-charcoal-light)]';
  const selectClasses = `${inputClasses} cursor-pointer`;
  const labelClasses = 'block font-sans text-xs uppercase tracking-wider text-[var(--color-charcoal)] mb-1.5 font-bold';

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[var(--color-kraft-dark)] text-center animate-scale-in shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[var(--color-sage-pale)] text-[var(--color-sage)] flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={32} strokeWidth={2} />
        </div>
        <h3 className="font-sans font-extrabold text-2xl text-[var(--color-espresso)] mb-3 tracking-tight">
          Solicitação Enviada
        </h3>
        <p className="font-sans text-sm text-[var(--color-charcoal)] mb-8 leading-relaxed">
          Sua mensagem foi estruturada e aberta no WhatsApp do Ateliê Hortênsia Brasil. Em breve responderemos com a sua proposta personalizada.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="w-full font-sans text-sm font-bold px-6 py-3.5 rounded-full border-2 border-[var(--color-espresso)] text-[var(--color-espresso)] hover:bg-[var(--color-espresso)] hover:text-white transition-all duration-200 cursor-pointer"
        >
          Nova Solicitação
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-7 sm:p-9 border border-[var(--color-kraft-dark)] space-y-5 shadow-sm"
    >
      <div className="border-b border-[var(--color-kraft-dark)] pb-4 mb-2">
        <h3 className="font-sans font-extrabold text-2xl text-[var(--color-espresso)] tracking-tight">
          Solicite seu Orçamento
        </h3>
        <p className="font-sans text-xs text-[var(--color-charcoal-light)] mt-1">
          Preencha os dados e geraremos sua mensagem completa no WhatsApp
        </p>
      </div>

      <div>
        <label htmlFor="eventType" className={labelClasses}>
          Tipo de Evento *
        </label>
        <select
          id="eventType"
          name="eventType"
          value={form.eventType}
          onChange={handleChange}
          required
          className={selectClasses}
        >
          <option value="">Selecione o tipo de evento</option>
          {EVENT_TYPES.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="quantity" className={labelClasses}>
          Quantidade Estimada *
        </label>
        <input
          id="quantity"
          name="quantity"
          type="text"
          value={form.quantity}
          onChange={handleChange}
          required
          placeholder="Ex: 50 unidades"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="fragrance" className={labelClasses}>
          Essência de Preferência *
        </label>
        <select
          id="fragrance"
          name="fragrance"
          value={form.fragrance}
          onChange={handleChange}
          required
          className={selectClasses}
        >
          <option value="">Selecione uma essência</option>
          {FRAGRANCES.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="eventDate" className={labelClasses}>
          Data Prevista do Evento
        </label>
        <input
          id="eventDate"
          name="eventDate"
          type="date"
          value={form.eventDate}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="notes" className={labelClasses}>
          Detalhes Adicionais
        </label>
        <textarea
          id="notes"
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Tema da celebração, paleta de cores, referências ou dúvidas..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className={`w-full flex items-center justify-center gap-2 font-sans text-sm font-bold py-4 rounded-full transition-all duration-200 ${
          isValid
            ? 'bg-[var(--color-espresso)] text-white hover:bg-[var(--color-charcoal)] hover:shadow-lg cursor-pointer'
            : 'bg-[var(--color-kraft-dark)] text-[var(--color-charcoal-light)] cursor-not-allowed'
        }`}
      >
        <Send size={16} strokeWidth={2} />
        Solicitar Orçamento via WhatsApp
      </button>

      <p className="font-sans text-[11px] text-center text-[var(--color-charcoal-light)]">
        * Campos essenciais · Atendimento direto via WhatsApp {WHATSAPP_DISPLAY}
      </p>
    </form>
  );
};
