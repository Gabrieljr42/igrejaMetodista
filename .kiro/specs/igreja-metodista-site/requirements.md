# Requirements Document

## Introduction

Este documento especifica os requisitos para o desenvolvimento de um site institucional para a Igreja Metodista em Ouro Branco, MG. O site deve servir como plataforma informativa para a comunidade, apresentando programações, ministérios, informações de contato e permitindo que visitantes agendem visitas.

## Glossary

- **Site_Igreja**: O sistema web da Igreja Metodista em Ouro Branco
- **Visitante**: Pessoa que acessa o site sem ser membro da igreja
- **Membro**: Pessoa que faz parte da comunidade da igreja
- **Programação**: Eventos e cultos regulares da igreja
- **Ministério**: Grupos organizados de atividades específicas da igreja
- **Agendamento**: Sistema para visitantes solicitarem visitas
- **WhatsApp_Integration**: Sistema de envio de mensagens via WhatsApp

## Requirements

### Requirement 1

**User Story:** Como visitante, eu quero visualizar informações básicas da igreja, para que eu possa conhecer a comunidade e sua localização.

#### Acceptance Criteria

1. THE Site_Igreja SHALL display church name "Igreja Metodista em Ouro Branco"
2. THE Site_Igreja SHALL display complete address "Rua Dedine, 481, Siderurgia, Ouro Branco, MG"
3. THE Site_Igreja SHALL display contact information prominently
4. THE Site_Igreja SHALL use Methodist church theme colors and fonts
5. THE Site_Igreja SHALL display banner images in header section

### Requirement 2

**User Story:** Como visitante, eu quero ver os horários das programações, para que eu possa planejar minha participação nos eventos.

#### Acceptance Criteria

1. THE Site_Igreja SHALL display Sunday service time "19:00"
2. THE Site_Igreja SHALL display Wednesday service time "19:30"
3. THE Site_Igreja SHALL display "Café dos homens" schedule "19:00 toda sexta"
4. THE Site_Igreja SHALL display "Chá das rosas" schedule "19:00 a cada 15 dias nas quintas"
5. THE Site_Igreja SHALL display youth service schedule "19:30 a cada 15 dias nos sábados"
6. THE Site_Igreja SHALL display prayer meeting schedule "19:00 toda segunda"
7. THE Site_Igreja SHALL display prayer week schedule "terça a sexta 06:30 às 07:30 na segunda semana de todo mês"

### Requirement 3

**User Story:** Como visitante, eu quero conhecer os ministérios da igreja, para que eu possa entender as atividades disponíveis.

#### Acceptance Criteria

1. THE Site_Igreja SHALL display ministries overview section
2. THE Site_Igreja SHALL present ministry information in organized format
3. THE Site_Igreja SHALL include descriptions for each ministry
4. THE Site_Igreja SHALL highlight community engagement activities

### Requirement 4

**User Story:** Como visitante, eu quero acessar as redes sociais da igreja, para que eu possa acompanhar as atividades online.

#### Acceptance Criteria

1. THE Site_Igreja SHALL display Instagram link "https://www.instagram.com/metodistaourobranco/"
2. THE Site_Igreja SHALL open social media links in new tab
3. THE Site_Igreja SHALL display social media icons prominently
4. THE Site_Igreja SHALL maintain consistent styling for social links

### Requirement 5

**User Story:** Como visitante, eu quero agendar uma visita à igreja, para que eu possa conhecer a comunidade pessoalmente.

#### Acceptance Criteria

1. THE Site_Igreja SHALL provide visit scheduling form
2. WHEN visitor submits form, THE Site_Igreja SHALL collect visitor name
3. WHEN visitor submits form, THE Site_Igreja SHALL collect visitor address
4. WHEN visitor submits form, THE Site_Igreja SHALL collect preferred visit time
5. WHEN visitor submits form, THE Site_Igreja SHALL collect visitor message
6. WHEN form is submitted, THE Site_Igreja SHALL generate WhatsApp message with visitor information
7. THE Site_Igreja SHALL redirect to WhatsApp with phone number "31982046279"
8. THE Site_Igreja SHALL format message with all collected information

### Requirement 6

**User Story:** Como administrador, eu quero que o site tenha design atrativo e profissional, para que represente adequadamente nossa igreja.

#### Acceptance Criteria

1. THE Site_Igreja SHALL implement responsive design for all devices
2. THE Site_Igreja SHALL use Methodist church color scheme
3. THE Site_Igreja SHALL use appropriate typography for religious content
4. THE Site_Igreja SHALL display images in organized gallery format
5. THE Site_Igreja SHALL maintain fast loading times
6. THE Site_Igreja SHALL ensure accessibility compliance