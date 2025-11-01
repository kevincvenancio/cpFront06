# 📚 Top Front-end Books

Projeto desenvolvido como **Checkpoint** da matéria de **Front-end** da faculdade.

## 👨‍💻 Autor

**Kevin Carvalho Venancio**  
**RM: 561459**

## 🌐 Demonstração

🔗 **[Acesse o projeto no GitHub Pages](SEU_LINK_GITHUB_PAGES_AQUI)**

## 📖 Sobre o Projeto

Uma aplicação web moderna e responsiva que exibe uma coleção dos melhores livros sobre desenvolvimento front-end. O projeto consome uma API externa para buscar informações dos livros e apresenta os dados em um layout atraente com animações suaves e design focado na paleta de cores amarela.

## ✨ Funcionalidades

- ✅ **Design Responsivo** - Layout adaptável para mobile, tablet e desktop
- ✅ **Consumo de API** - Integração com API externa para buscar dados dos livros
- ✅ **Animações Suaves** - Transições e efeitos visuais modernos
- ✅ **Cards Interativos** - Cards com efeitos hover e transformações
- ✅ **Navegação Suave** - Scroll suave entre seções
- ✅ **Indicador de Carregamento** - Feedback visual durante o carregamento dos dados
- ✅ **Tratamento de Erros** - Mensagens amigáveis em caso de falha na requisição

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e animações customizadas
- **JavaScript (ES6+)** - Lógica e consumo de API
- **Tailwind CSS** - Framework CSS utilitário para design rápido
- **Fetch API** - Requisições HTTP assíncronas

## 📡 API Utilizada

O projeto consome a seguinte API para obter os dados dos livros:

```
https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json
```

## 🎨 Design

- **Paleta de Cores**: Baseada em tons de amarelo (yellow-400, yellow-500, yellow-600, etc.)
- **Tipografia**: Hierarquia clara com tamanhos responsivos
- **Animações**: 
  - Fade-in
  - Slide-up
  - Float
  - Hover effects com scale
  - Animações escalonadas (stagger)

## 📁 Estrutura do Projeto

```
cpFront/
│
├── index.html      # Página principal com estrutura HTML
├── app.js          # Lógica JavaScript para consumo de API
└── README.md       # Documentação do projeto
```

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/SEU_USUARIO/cpFront.git
   ```

2. **Navegue até o diretório**:
   ```bash
   cd cpFront
   ```

3. **Abra o arquivo `index.html` no navegador**:
   - Opção 1: Abra diretamente pelo explorador de arquivos
   - Opção 2: Use um servidor local:
     ```bash
     # Com Python
     python -m http.server 8000
     
     # Com Node.js (http-server)
     npx http-server
     ```

4. **Acesse no navegador**:
   - Se usar servidor local: `http://localhost:8000`
   - Ou simplesmente abra o `index.html` diretamente

## 📱 Responsividade

O projeto foi desenvolvido com foco em responsividade, utilizando breakpoints do Tailwind CSS:

- **Mobile**: Layout em coluna única
- **Tablet (md)**: 2 colunas para cards de livros
- **Desktop (lg)**: 3 colunas para cards de livros
- **Large Desktop (xl)**: 4 colunas para cards de livros

## 🎯 Seções da Página

1. **Header** - Cabeçalho fixo com navegação
2. **Sobre** - Informações sobre a coleção
3. **Livros** - Grid responsivo com cards dos livros
4. **Contato** - Seção de contato
5. **Footer** - Rodapé da página

## 🔄 Funcionalidades Técnicas

### Consumo de API
- Utiliza `fetch()` para buscar dados da API
- Tratamento de erros com `.catch()`
- Loading state durante o carregamento
- Renderização dinâmica dos cards

### Animações
- Animações de entrada escalonadas para os cards
- Efeitos hover interativos
- Transições suaves
- Animações infinitas (float)

## 📝 Checklist de Requisitos

- [x] Design responsivo
- [x] Alinhamentos corretos
- [x] Cards estilizados
- [x] Tipografia adequada
- [x] Transformações CSS
- [x] Animações
- [x] Consumo de API
- [x] Tratamento de erros
- [x] Layout moderno
- [x] Paleta de cores amarela

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do Checkpoint da matéria de Front-end.

---


