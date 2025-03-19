# README - Projeto Site Clínica Alana Albuquerque

## Visão Geral
Este documento descreve a estrutura, arquitetura e tecnologias recomendadas para o desenvolvimento do site da **Clínica Alana Albuquerque**, uma clínica de estética feminina focada em serviços como drenagem linfática, criolipólise e outros procedimentos estéticos. O site será uma ferramenta informativa e de marketing, projetada para atrair clientes, detalhar serviços e facilitar o contato. Não há necessidade de banco de dados, pois o site será estático com conteúdo fixo.

---

## Objetivos do Site
- Apresentar a clínica e sua proposta de valor.
- Detalhar os serviços oferecidos com descrições claras e atrativas.
- Fornecer informações de contato e localização.
- Ser responsivo, intuitivo e visualmente atraente, com foco no público feminino.
- Otimizar para SEO (buscas relacionadas a estética feminina).

---

## Estrutura de Páginas
O site será composto pelas seguintes páginas, organizadas em uma navegação simples e funcional:

### 1. Home (Página Inicial)
- **Objetivo**: Apresentar a clínica de forma impactante e convidar o visitante a explorar os serviços.
- **Seções**:
  - **Banner Principal**: Imagem de destaque (ex.: mulher sorridente em um ambiente clean) com texto como "Transforme sua beleza com a Clínica Alana Albuquerque".
  - **Introdução**: Breve texto sobre a clínica (ex.: "Bem-vinda à Clínica Alana Albuquerque, seu espaço dedicado à estética e bem-estar feminino").
  - **Call-to-Action (CTA)**: Botão "Conheça Nossos Serviços" e "Agende Sua Consulta" (leva ao WhatsApp ou formulário de contato).
  - **Depoimentos**: Carrossel com 3-4 depoimentos curtos de clientes (ex.: "Amei o resultado da drenagem linfática!").
  - **Rodapé**: Links para outras páginas, endereço, telefone e redes sociais.

### 2. Sobre Nós
- **Objetivo**: Contar a história da clínica e transmitir confiança.
- **Seções**:
  - **História**: Texto sobre a fundadora Alana Albuquerque e a missão da clínica (ex.: "Com anos de experiência, Alana criou um espaço para realçar a beleza natural de cada mulher").
  - **Diferenciais**: Lista de 3-5 diferenciais (ex.: atendimento personalizado, técnicas modernas, ambiente acolhedor).
  - **Foto**: Imagem da equipe ou do espaço interno da clínica.
  - **CTA**: Botão "Entre em Contato".

### 3. Serviços
- **Objetivo**: Detalhar os procedimentos oferecidos com clareza e apelo visual.
- **Seções**:
  - **Lista de Serviços**: Cada serviço em um card ou seção expansível com:
    - **Drenagem Linfática**: Descrição (ex.: "Reduz inchaço e melhora a circulação"), benefícios e duração (ex.: 50 min).
    - **Criolipólise**: Descrição (ex.: "Elimina gordura localizada com tecnologia de congelamento"), benefícios e duração (ex.: 60 min).
    - **Outros Serviços**: Adicionar mais procedimentos como massagem modeladora, peeling, etc., conforme necessário.
  - **Fotos**: Imagens ilustrativas ao lado de cada serviço (ex.: antes e depois, se possível).
  - **CTA**: Botão "Agende Sua Sessão" (leva ao WhatsApp).

### 4. Contato
- **Objetivo**: Facilitar a comunicação com a clínica.
- **Seções**:
  - **Formulário Simples**: Campos para Nome, Telefone, Email e Mensagem (enviado por email ou integrado ao WhatsApp).
  - **Informações**:
    - Endereço físico (ex.: Rua das Flores, 123, Centro, Cidade).
    - Telefone e WhatsApp (ex.: (XX) 9 1234-5678).
    - Email (ex.: contato@clinicaalanaalbuquerque.com).
  - **Mapa**: Embed do Google Maps com a localização da clínica.
  - **Horário de Atendimento**: Ex.: Seg-Sex: 9h-18h, Sáb: 9h-13h.

### 5. Blog (Opcional)
- **Objetivo**: Melhorar SEO e engajar visitantes com dicas de estética e bem-estar.
- **Seções**:
  - **Artigos**: 3-5 posts iniciais (ex.: "Benefícios da Drenagem Linfática", "Como Funciona a Criolipólise").
  - **Estrutura de Post**: Título, imagem, texto e CTA no final.
  - **Nota**: Pode ser implementado como página estática ou expandido no futuro.

---

## Arquitetura do Site
- **Estrutura de Arquivos**:


clinica-alana-albuquerque/
├── index.html           # Página Inicial
├── sobre.html           # Sobre Nós
├── serviços.html        # Serviços
├── contato.html         # Contato
├── blog.html            # Blog (opcional)
├── css/
│   └── style.css        # Estilização global
├── js/
│   └── script.js        # Funcionalidades interativas
└── assets/
├── img/             # Imagens (banner, serviços, equipe, etc.)
└── favicon.ico      # Ícone do site



- **Navegação**:
  - Menu fixo no topo com links para: Home, Sobre, Serviços, Contato, Blog (se aplicável).
  - Menu hamburger em dispositivos móveis.

---

## Tecnologias Recomendadas
- **HTML5**: Estrutura semântica para melhor acessibilidade e SEO.
- **CSS3**: Estilização com:
  - **Framework**: Tailwind CSS ou Bootstrap para agilidade e responsividade.
  - **Customização**: Paleta de cores suave e feminina (ex.: tons de rosa, branco, dourado).
  - **Animações**: Efeitos sutis (ex.: hover em botões, fade-in em imagens).
- **JavaScript**: Funcionalidades leves como:
  - Carrossel de depoimentos.
  - Validação de formulário na página de contato.
  - Menu responsivo.
- **Hospedagem**: Sugestão de plataformas como Netlify, Vercel ou GitHub Pages (sites estáticos, gratuitos e simples).
- **SEO**: Uso de meta tags, alt text em imagens e URLs amigáveis (ex.: clinicaalanaalbuquerque.com/servicos).

---

## Diretrizes de Design
- **Paleta de Cores**: Rosa claro (#F5C6CB), branco (#FFFFFF), dourado (#D4AF37), cinza suave (#E5E5E5).
- **Tipografia**: Fontes elegantes e legíveis como Montserrat (títulos) e Open Sans (corpo).
- **Estilo Visual**: Clean, moderno, com foco em imagens de alta qualidade (mulheres, procedimentos, ambiente da clínica).
- **Responsividade**: Design mobile-first, adaptado para telas de 320px até desktops.

---

## Funcionalidades Específicas
- **WhatsApp Integrado**: Botão flutuante em todas as páginas, abrindo o WhatsApp com mensagem padrão (ex.: "Olá, gostaria de agendar uma consulta na Clínica Alana Albuquerque").
- **Formulário de Contato**: Envio simples via email (usar Formspree ou similar, sem backend complexo).
- **Carrossel**: Na Home para depoimentos, com transição automática e botões de navegação.

---

## Tarefas do Programador
1. Criar a estrutura de arquivos conforme a arquitetura acima.
2. Desenvolver as páginas com base nas seções detalhadas.
3. Implementar o design responsivo usando o framework escolhido.
4. Adicionar funcionalidades em JS (carrossel, formulário, menu).
5. Integrar o botão de WhatsApp e o formulário de contato.


---

## Observações Finais
- O conteúdo textual e imagens serão fornecidos pelo cliente (sugestão: contratar fotógrafo profissional para fotos do espaço e serviços).
