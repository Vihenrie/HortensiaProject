const WHATSAPP_NUMBER = '5514910045472';

export function buildProductOrderLink(
  productName: string,
  qty: number,
  qtyLabel: string
): string {
  const message = `Olá! Gostaria de encomendar ${qty}x da vela '${productName}' (${qtyLabel}) no Ateliê Hortênsia Brasil. Poderia me passar os detalhes de envio?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildCustomOrderLink(
  eventType: string,
  quantity: string,
  fragrance: string,
  eventDate: string,
  notes: string
): string {
  const lines = [
    `Olá! Gostaria de solicitar um orçamento de Lembranças Personalizadas no Ateliê Hortênsia Brasil.`,
    ``,
    `• *Tipo de Evento:* ${eventType}`,
    `• *Quantidade estimada:* ${quantity} peças`,
    `• *Essência de preferência:* ${fragrance}`,
    eventDate ? `• *Data prevista:* ${eventDate}` : '',
    notes ? `• *Detalhes adicionais:* ${notes}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
}

export function buildDirectWhatsAppLink(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}`;
}

export function formatPrice(price: number | null): string {
  if (price === null) return 'Sob Consulta';
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
