# 💄 Melissa Gomes | Curso Prático de Automaquiagem

Este projeto é uma Landing Page premium e totalmente responsiva desenvolvida para promover e agendar o **Curso Presencial e Prático de Automaquiagem** ministrado pela maquiadora profissional **Melissa Gomes**.

O site foi construído focando em uma estética de alto padrão (luxo/premium), com paleta de cores harmoniosa, efeitos de glassmorphism, bordas e detalhes em dourado, animações sutis de rolagem e alta taxa de conversão para agendamentos via WhatsApp.

---

## 🚀 Tecnologias Utilizadas

* **HTML5**: Estrutura semântica otimizada para SEO.
* **CSS3 (Vanilla)**: Design personalizado, variáveis CSS para fácil manutenção, layouts com Grid/Flexbox e efeitos visuais avançados (desfoque, gradientes e sombras).
* **JavaScript (ES6)**: Interatividade, animações dinâmicas de revelação, menus colapsáveis e controle de consentimento.
* **Google Analytics 4 (GA4)**: Monitoramento de audiência e rastreamento de conversão.

---

## 💎 Funcionalidades e Diferenciais

1. **Estética Visual Premium**: 
   * Tema escuro luxuoso com tons de dourado e nude.
   * Efeito *glassmorphism* (fundo de vidro fosco com desfoque) em painéis e cards.
   * Transições suaves e animações de entrada ao rolar a página (*Scroll Reveal* com `IntersectionObserver`).

2. **Otimização para Mobile**:
   * Layout 100% responsivo (otimizado para smartphones, tablets e desktops).
   * Carrosséis horizontais nativos para dispositivos móveis nas seções de dores e diferenciais.
   * **CTA Fixo Flutuante** do WhatsApp no canto inferior da tela, que só aparece após o usuário rolar a dobra principal (*hero*).

3. **Seções Estruturadas para Vendas**:
   * **Hero**: Chamada principal forte com CTA direto.
   * **Identificação da Dor**: Painéis interativos sobre dificuldades comuns com maquiagem.
   * **Autoridade**: Biografia expansível da especialista Melissa Gomes.
   * **Metodologia**: Destaques práticos do curso (duração, flexibilidade, etc.).
   * **Conteúdo Programático**: Cronograma expansível mostrando o passo a passo da aula.
   * **Experiência Completa**: Lista dos diferenciais inclusos (apostila, material, coffee break, etc.).
   * **Planos e Preços**: Exibição dos pacotes VIP (Individual) e Em Dupla, com botões dedicados de agendamento.
   * **FAQ / Regras**: Sanamento de dúvidas comuns e regras importantes de cancelamento ou reagendamento.

4. **LGPD & Privacidade**:
   * Banner moderno e elegante de **Consentimento de Cookies** integrado com `localStorage`. O banner é exibido apenas na primeira visita com uma animação de deslize suave após 1.5s.

5. **Analytics & Rastreamento de Conversões**:
   * Integração direta com a tag global do GA4 (`G-5WDMD939T4`).
   * Rastreamento inteligente e personalizado de cliques em botões do WhatsApp (`click_whatsapp`), enviando a origem exata do clique (Plano VIP, Plano em Dupla, Sticky Mobile ou Rodapé).

6. **Otimizações de SEO e Acessibilidade**:
   * **Meta Tags Otimizadas**: Configuração de metadados cruciais (`description`, `keywords`, `author`) para melhor indexação nos mecanismos de busca.
   * **Metadados Sociais (Open Graph & Twitter Cards)**: Tags `og:*` e `twitter:*` integradas para garantir que compartilhamentos em redes sociais (como WhatsApp, Instagram, Facebook, Twitter) gerem cartões de visualização prévia profissionais com título, descrição e imagem.
   * **Hierarquia Semântica**: Estruturação lógica de cabeçalhos (`<h1>`, `<h2>`, `<h3>`) e uso de elementos semânticos do HTML5 (`<header>`, `<section>`, `<footer>`), melhorando o escaneamento do robô do Google.
   * **Imagens Alt-Text**: Atributos `alt` definidos em todas as imagens relevantes para indexação de buscas por imagens e acessibilidade para leitores de tela.
   * **Performance (Carregamento Rápido)**: Código limpo e otimizado sem bibliotecas ou frameworks pesados de terceiros, garantindo ótima velocidade de carregamento (essencial para a pontuação do Google PageSpeed).

---

## 📂 Estrutura de Arquivos

```bash
├── assets/                  # Imagens, fotos e logotipo oficial
├── index.html               # Estrutura e marcação semântica do site
├── style.css                # Folha de estilo e variáveis de design
├── script.js                # Lógica e rastreamento de eventos
└── README.md                # Documentação do projeto (este arquivo)
```

---

## ⚙️ Como Customizar e Configurar

### Alterar o Número do WhatsApp
Para atualizar o número do WhatsApp de destino ou as mensagens padrão dos botões, edite os links `href` no arquivo `index.html` buscando pela URL `https://api.whatsapp.com/send?phone=...` nos seguintes IDs:
* `#header-cta` (Menu superior)
* `#cta-vip` (Card de preço VIP)
* `#cta-dupla` (Card de preço Em Dupla)
* `#footer-whatsapp` (Ícone de rodapé)
* `#mobile-sticky-cta-btn` (Botão flutuante mobile)

### Alterar a Tag do Google Analytics (GA4)
No `<head>` do arquivo `index.html`, substitua o ID `G-5WDMD939T4` pelo seu ID do Google Analytics nas linhas 14 e 20.

---

## 💻 Como Executar Localmente

Como o projeto é estático (HTML/CSS/JS puros), não é necessária nenhuma compilação:
1. Faça o clone do repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` diretamente em qualquer navegador moderno.
3. Para uma experiência ideal de desenvolvimento com recarregamento em tempo real (*live reload*), você pode abrir a pasta em editores como VS Code e utilizar a extensão **Live Server**.
