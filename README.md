# Site da Igreja Metodista em Ouro Branco

Site institucional da Igreja Metodista em Ouro Branco, MG - Uma plataforma moderna e responsiva para conectar a comunidade com a igreja.

## 📋 Sobre o Projeto

Este site foi desenvolvido para servir como plataforma informativa da Igreja Metodista em Ouro Branco, apresentando programações, ministérios, calendário de eventos e permitindo que visitantes agendem visitas através do WhatsApp.

## ✨ Funcionalidades

- **Hero Sections**: Duas seções de destaque com imagens de alta qualidade
- **Informações da Igreja**: Localização, contato e horários principais
- **Calendário Mensal Dinâmico**: 
  - Navegação entre meses
  - Eventos automáticos baseados no dia da semana
  - Destaque para eventos especiais (Semana de Oração, eventos quinzenais)
  - Totalmente responsivo
- **Programações Detalhadas**: Cards com todos os eventos semanais
- **Ministérios**: Apresentação dos diferentes ministérios da igreja
- **Formulário de Agendamento**: 
  - Duas opções: participar de eventos ou horário livre
  - Integração direta com WhatsApp
  - Validação de campos
- **Redes Sociais**: Links para Instagram
- **Design Responsivo**: Otimizado para desktop, tablet e mobile

## 🎨 Design

O site utiliza as cores oficiais da Igreja Metodista:
- **Vermelho Metodista**: #E60005 (Pantone 172 C)
- **Preto Metodista**: #000000 (Pantone Process Black C)
- **Cinza Metodista**: #B0AFB5 (Pantone Cool Gray 5 C)

### Tipografia
- **Títulos**: Merriweather (serif)
- **Corpo**: Open Sans (sans-serif)

## 📅 Programações

### Eventos Semanais
- **Domingo 19:00** - Culto Dominical
- **Segunda 19:00** - Reunião de Intercessão
- **Quarta 19:30** - Culto de Oração
- **Sexta 19:00** - Café dos Homens

### Eventos Quinzenais
- **Quinta 19:00** - Chá das Rosas (semanas 1 e 3)
- **Sábado 19:30** - Culto de Jovens (semanas 2 e 4)

### Evento Mensal
- **Terça a Sexta 06:30-07:30** - Semana de Oração (segunda semana do mês)

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização e responsividade
- **JavaScript**: Interatividade e calendário dinâmico
- **Google Fonts**: Merriweather e Open Sans
- **WhatsApp API**: Integração para agendamento

## 📁 Estrutura de Arquivos

```
church/
├── index.html              # Página principal
├── styles.css              # Estilos CSS
├── script.js               # JavaScript (calendário e formulário)
├── convert_pdf.py          # Script para converter PDF em imagem
├── README.md               # Este arquivo
├── imgs/                   # Pasta de imagens
│   ├── hero-pdf.png       # Imagem principal dos heroes (convertida do PDF)
│   ├── hero1.jpg          # Imagem alternativa
│   ├── hero 2.jpg         # Imagem alternativa
│   └── hero3.pdf          # PDF original
└── logos/                  # Pasta de logos
    └── Logos/
        ├── Logo_Igreja_Metodista-Horizontal.png
        ├── Logo_Igreja_Metodista.png
        └── ... (outros formatos)
```

## 🚀 Como Usar

1. **Clone ou baixe o repositório**
2. **Abra o arquivo `index.html`** em um navegador moderno
3. **Pronto!** O site está funcionando localmente

### Para converter o PDF em imagem (opcional):

```bash
# Instalar dependências Python
pip install PyMuPDF Pillow

# Executar o script de conversão
python convert_pdf.py
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px
- **Mobile Pequeno**: < 480px

## 🔗 Contato da Igreja

- **Endereço**: Rua Dedine, 481, Siderurgia, Ouro Branco, MG
- **WhatsApp**: (31) 98204-6279
- **Instagram**: [@metodistaourobranco](https://www.instagram.com/metodistaourobranco/)

## 📝 Funcionalidades do Calendário

O calendário é gerado dinamicamente em JavaScript e inclui:
- Navegação entre meses (botões anterior/próximo)
- Destaque do dia atual
- Destaque dos domingos
- Eventos automáticos baseados em:
  - Dia da semana
  - Semana do mês
  - Eventos quinzenais
- Legenda com código de cores
- Totalmente responsivo para mobile

## 🎯 Formulário de Agendamento

O formulário permite duas opções de visita:

1. **Participar de um culto/evento**
   - Seleção de evento específico
   - Lista completa de programações

2. **Horário livre para conversar**
   - Campo de texto livre
   - Visitante informa sua disponibilidade

Ao enviar, o formulário:
- Valida todos os campos obrigatórios
- Formata uma mensagem personalizada
- Redireciona para WhatsApp com a mensagem pronta

## 🌟 Características Especiais

- **Performance**: Imagens otimizadas e código minimalista
- **Acessibilidade**: Estrutura semântica e navegação por teclado
- **SEO**: Meta tags e estrutura otimizada
- **UX**: Animações suaves e feedback visual
- **Mobile First**: Design pensado primeiro para dispositivos móveis

## 📄 Licença

Este projeto foi desenvolvido para a Igreja Metodista em Ouro Branco.

## 👨‍💻 Desenvolvimento

Desenvolvido com ❤️ para a comunidade da Igreja Metodista em Ouro Branco.

---

**Última atualização**: Outubro 2025
**Desenvolvido por João Gabriel**