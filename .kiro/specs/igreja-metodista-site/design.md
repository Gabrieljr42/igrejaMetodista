# Design Document - Site Igreja Metodista Ouro Branco

## Overview

O site da Igreja Metodista em Ouro Branco será desenvolvido como uma aplicação web responsiva, focada em fornecer informações claras sobre a igreja, suas programações e permitir interação através de agendamento de visitas. O design seguirá a identidade visual metodista com cores tradicionais e layout acessível.

## Architecture

### Frontend Architecture
- **Framework**: HTML5, CSS3, JavaScript vanilla para simplicidade e performance
- **Responsive Design**: Mobile-first approach com breakpoints para tablet e desktop
- **Structure**: Single Page Application (SPA) com seções organizadas
- **Assets**: Pasta dedicada para imagens, ícones e recursos visuais

### Integration Points
- **WhatsApp API**: Integração via URL scheme para envio de mensagens
- **Social Media**: Links diretos para Instagram
- **Form Handling**: JavaScript para processamento e formatação de dados

## Components and Interfaces

### 1. Header Component
```
- Logo/Nome da Igreja
- Menu de navegação (Home, Programações, Ministérios, Contato, Agendar Visita)
- Banner principal com imagem
- Informações de contato destacadas
```

### 2. Hero Section
```
- Banner principal com imagem da igreja
- Título: "Igreja Metodista em Ouro Branco"
- Subtítulo com mensagem de boas-vindas
- Call-to-action para agendamento de visita
```

### 3. Information Section
```
- Endereço completo com destaque visual
- Horários de funcionamento
- Informações de contato
- Mapa ou indicações de localização
```

### 4. Schedule Section (Programações)
```
- Grid responsivo com cards para cada programação:
  * Culto Domingo - 19:00
  * Culto Quarta - 19:30
  * Café dos Homens - Sexta 19:00
  * Chá das Rosas - Quintas (quinzenal) 19:00
  * Culto de Jovens - Sábados (quinzenal) 19:30
  * Reunião de Intercessão - Segunda 19:00
  * Semana de Oração - Terça a Sexta 06:30-07:30 (segunda semana do mês)
```

### 5. Ministries Section
```
- Cards organizados para cada ministério
- Descrições breves e atrativas
- Ícones representativos
- Informações de contato específicas quando aplicável
```

### 6. Visit Scheduling Form
```
Form Fields:
- Nome completo (required)
- Endereço completo (required)
- Telefone (optional)
- Horário preferido (select/dropdown)
- Mensagem adicional (textarea)
- Botão de envio
```

### 7. Footer Component
```
- Links para redes sociais
- Informações de contato resumidas
- Copyright e informações legais
- Links úteis
```

## Data Models

### Visit Request Model
```javascript
{
  name: string,
  address: string,
  phone: string (optional),
  preferredTime: string,
  message: string,
  timestamp: Date
}
```

### Schedule Event Model
```javascript
{
  name: string,
  day: string,
  time: string,
  frequency: string,
  description: string
}
```

### Ministry Model
```javascript
{
  name: string,
  description: string,
  icon: string,
  contact: string (optional)
}
```

## Visual Design System

### Color Palette (Methodist Theme - Official Colors)
```css
Primary Colors:
- Methodist Red: #E60005 (Pantone 172 C - R: 230, G: 0, B: 5)
- Methodist Black: #000000 (Pantone Process Black C - R: 0, G: 0, B: 0)
- Methodist Gray: #B0AFB5 (Pantone Cool Gray 5 C - R: 176, G: 175, B: 181)
- White: #FFFFFF

CMYK Values:
- Red: C: 0 | M: 100 | Y: 100 | K: 0
- Black: C: 0 | M: 0 | Y: 0 | K: 100
- Gray: C: 0 | M: 0 | Y: 0 | K: 40

Usage Guidelines:
- Primary Red (#E60005): Headers, call-to-action buttons, highlights
- Black (#000000): Main text, navigation, important content
- Gray (#B0AFB5): Secondary text, borders, subtle backgrounds
- White (#FFFFFF): Background, contrast elements
```

### Typography
```css
Primary Font: 'Open Sans', sans-serif
Headings: 'Merriweather', serif
Body Text: 16px line-height 1.6
Headings: Bold weights (600-700)
```

### Layout Grid
- Container max-width: 1200px
- Grid system: 12 columns
- Gutters: 20px
- Mobile breakpoint: 768px
- Tablet breakpoint: 992px

## Error Handling

### Form Validation
- Client-side validation for required fields
- Real-time feedback for invalid inputs
- Clear error messages in Portuguese
- Prevention of empty form submissions

### WhatsApp Integration Fallback
- Check for WhatsApp availability
- Fallback to SMS or email if WhatsApp unavailable
- Error message for unsupported devices
- Manual contact information display

### Image Loading
- Lazy loading for performance
- Placeholder images during load
- Alt text for accessibility
- Fallback for missing images

## Testing Strategy

### Functionality Testing
- Form submission and validation
- WhatsApp integration across devices
- Responsive design on multiple screen sizes
- Social media links functionality

### Performance Testing
- Page load speed optimization
- Image compression and optimization
- Mobile performance validation
- Cross-browser compatibility

### Accessibility Testing
- Screen reader compatibility
- Keyboard navigation
- Color contrast validation
- WCAG 2.1 compliance

### User Experience Testing
- Navigation flow validation
- Form usability testing
- Mobile touch interaction
- Content readability assessment

## Implementation Notes

### WhatsApp Integration Details
```javascript
// WhatsApp URL format
const whatsappURL = `https://wa.me/5531982046279?text=${encodeURIComponent(message)}`;

// Message template
const messageTemplate = `
Olá! Gostaria de agendar uma visita à Igreja Metodista.

Nome: ${name}
Endereço: ${address}
Horário preferido: ${preferredTime}
Mensagem: ${message}

Aguardo retorno. Obrigado!
`;
```

### Responsive Breakpoints
```css
/* Mobile First */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 992px) { /* Desktop */ }
@media (min-width: 1200px) { /* Large Desktop */ }
```

### Performance Optimizations
- Image optimization (WebP format with fallbacks)
- CSS and JS minification
- Critical CSS inlining
- Lazy loading for non-critical content
- CDN for external resources