# PROJECT.md

# Venturo Jeri Off Road

## Objetivo

Desenvolver um site institucional moderno, rápido e responsivo para a empresa Venturo Jeri Off Road.

O objetivo principal é gerar novos clientes através da apresentação dos passeios e facilitar o contato imediato via WhatsApp.

Não haverá área de login, cadastro de usuários ou painel administrativo público.

O site deve transmitir aventura, segurança, natureza e experiência.

---

# Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- App Router
- Framer Motion (animações leves)
- SEO otimizado
- Mobile First

---

# Objetivos do site

O visitante deve conseguir em poucos segundos responder:

- Quem é a Venturo Jeri Off Road?
- Quais passeios oferece?
- Como funciona?
- Quanto tempo dura?
- Como contratar?
- Como entrar em contato?

Todo o site deve direcionar para o WhatsApp.

---

# Estrutura

## Home

### Hero

Imagem ou vídeo de fundo.

Título forte.

Exemplo:

"Explore Jericoacoara como ela deve ser explorada."

Subtítulo.

Botão principal:

➡ Reservar pelo WhatsApp

Botão secundário:

Ver Passeios

---

## Sobre

Apresentar a empresa.

Conteúdo:

- quem somos
- experiência
- atendimento personalizado
- passeios seguros
- veículos preparados
- guias experientes

---

## Como funciona

Explicar o processo.

1. Escolha o passeio
2. Entre em contato pelo WhatsApp
3. Defina a data
4. Receba todas as informações
5. Aproveite a experiência

Layout em cards.

---

## Passeios

Cada passeio deve possuir:

Imagem

Nome

Pequena descrição

Duração

Principais atrações

Botão

Reservar este passeio

Os passeios devem ser cadastrados através de um arquivo de constantes.

Exemplo:

lib/constants.ts

---

## Galeria

Grid de fotos.

Paisagens

Veículos

Clientes

Dunas

Lagoas

Pôr do sol

---

## Depoimentos

Cards simples.

Foto

Nome

Cidade

Comentário

---

## Perguntas Frequentes

Accordion.

Exemplos:

O passeio é seguro?

Posso levar crianças?

Qual roupa usar?

Onde ocorre o embarque?

Aceita PIX?

---

## Contato

Bloco com:

WhatsApp

Instagram

Localização

Horário de atendimento

CTA grande:

Reservar agora

---

## Footer

Logo

Menu

WhatsApp

Instagram

Direitos reservados

---

# Navegação

Home

Sobre

Passeios

Galeria

Contato

---

# Integrações

## WhatsApp

Botão flutuante.

Botões de CTA em todas as seções.

Todos apontam para:

https://wa.me/SEUNUMERO

Mensagem automática:

Olá! Gostaria de saber mais sobre os passeios da Venturo Jeri Off Road.

---

## Instagram

Ícone no Header.

Ícone no Footer.

CTA na seção Contato.

---

# SEO

Título otimizado.

Meta Description.

Open Graph.

Twitter Card.

Schema.org LocalBusiness.

URLs amigáveis.

Sitemap.

Robots.

---

# Performance

Lazy Loading de imagens.

Next Image.

Compressão.

Sem bibliotecas pesadas.

Lighthouse acima de 90.

---

# Design

Visual premium.

Inspirado em turismo de aventura.

Paleta:

Preto

Areia

Laranja

Azul

Muito espaço em branco.

Tipografia moderna.

Grandes imagens.

Cards arredondados.

Animações discretas.

---

# Responsividade

Mobile

Tablet

Desktop

Todos os botões devem ser facilmente clicáveis.

---

# Componentes

Hero

Header

Footer

SectionTitle

TourCard

Gallery

FAQ

Testimonials

CTA

WhatsAppButton

InstagramButton

---

# Dados estáticos

Criar em:

lib/constants.ts

Conter:

Empresa

Passeios

Redes sociais

Contato

Perguntas frequentes

Depoimentos

---

# Não implementar

❌ Login

❌ Cadastro

❌ Dashboard

❌ Área administrativa pública

❌ Banco de dados

❌ Autenticação

❌ Pagamento online

❌ Blog

❌ Sistema de usuários

---

# Prioridade

1. Landing page de alta conversão

2. Experiência mobile

3. SEO

4. Performance

5. CTA para WhatsApp

---

# Futuro sistema interno

Após a conclusão do site será desenvolvido um sistema simples separado para gestão da operação.

Esse sistema deverá conter:

- Cadastro de clientes
- Cadastro de reservas
- Agenda diária
- Controle de passeios
- Controle de veículos
- Controle de motoristas
- Histórico de clientes
- Financeiro básico
- Relatórios simples

Esse módulo NÃO faz parte desta primeira entrega.