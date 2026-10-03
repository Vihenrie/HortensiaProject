# Ateliê Hortênsia Brasil — Velas Artesanais

Aplicação web do **Ateliê Hortênsia Brasil**, especializada em velas aromáticas artesanais com cera 100% vegetal, aromas finos e produção manual afetiva. O projeto oferece catálogo interativo com pirâmide olfativa, storytelling da marca e integração para pedidos personalizados via WhatsApp.

---

## Tecnologias

- **[React 19](https://react.dev/)** — Biblioteca para interfaces reativas modernas
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática e segurança de código
- **[Vite](https://vite.dev/)** — Build tool e servidor de desenvolvimento ultrarrápido
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Framework utilitário de estilização
- **[Lucide React](https://lucide.dev/)** — Conjunto de ícones minimalistas
- **[Oxlint](https://oxc.rs/)** — Linter ultrarrápido baseado em Rust

---

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- **[Node.js](https://nodejs.org/)** (versão 18.x ou superior recomendada; testado com Node 20+)
- **npm** (incluso com o Node.js) ou outro gerenciador de sua preferência (`pnpm`, `yarn` ou `bun`)

---

## Como Iniciar o Projeto

### 1. Clonar ou acessar o diretório do projeto

Se estiver clonando o repositório:
```bash
git clone https://github.com/Vihenrie/HortenciaProject.git
cd HortenciaProject
```

Caso já esteja na pasta do projeto:
```bash
cd f:\HortensiaProject
```

---

### 2. Instalar as dependências

Instale todos os pacotes necessários executando:

```bash
npm install
```

---

### 3. Iniciar o servidor de desenvolvimento

Execute o comando:

```bash
npm run dev
```

Após a inicialização, o terminal exibirá o endereço local. Abra em seu navegador:

**[http://localhost:5173](http://localhost:5173)**

O servidor conta com **Hot Module Replacement (HMR)**: qualquer alteração no código será refletida instantaneamente no navegador.

---

## Scripts Disponíveis

No arquivo `package.json`, estão configurados os seguintes comandos:

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local de desenvolvimento com Vite |
| `npm run build` | Valida a tipagem TypeScript (`tsc -b`) e compila os arquivos de produção para a pasta `dist/` |
| `npm run preview` | Roda um servidor local para visualizar o build gerado em `dist/` |
| `npm run lint` | Executa o Oxlint para verificar erros estáticos e qualidade do código |

---

## Estrutura do Projeto

```text
HortensiaProject/
├── public/                # Arquivos estáticos e favicon
├── src/
│   ├── components/        # Componentes modulares da interface
│   │   ├── catalog/       # Grid de produtos, filtros e pirâmide olfativa
│   │   ├── common/        # Componentes reutilizáveis (botões, divisores, ícones)
│   │   ├── custom/        # Seção e formulário para pedidos sob medida
│   │   ├── home/          # Seções da página inicial (Hero, História da Marca)
│   │   ├── layout/        # Navbar e Footer
│   │   └── product/       # Modal de detalhes e especificações do produto
│   ├── constants/         # Textos fixos, rotas e opções de personalização
│   ├── data/              # Dados estáticos do catálogo de produtos
│   ├── hooks/             # Custom hooks (scroll, atalhos de teclado, modal lock)
│   ├── types/             # Definições de tipos TypeScript
│   ├── utils/             # Funções utilitárias (formatação, WhatsApp)
│   ├── App.tsx            # Componente raiz da aplicação
│   ├── index.css          # Estilos globais e tokens de cores
│   └── main.tsx           # Ponto de entrada do React
├── index.html             # Template HTML principal
├── package.json           # Dependências e scripts do projeto
├── tsconfig.json          # Configurações do compilador TypeScript
└── vite.config.ts         # Configurações do Vite e plugins
```

---

## Dicas e Soluções de Problemas

- **Porta em uso (`Port 5173 is in use`)**: O Vite automaticamente tentará a próxima porta disponível (ex: `5174`). Você também pode especificar uma porta explicitamente com `npm run dev -- --port 3000`.
- **Limpeza de cache/reinstalação**: Caso encontre algum erro de módulo, execute:
  ```bash
  # Windows PowerShell
  Remove-Item -Recurse -Force node_modules
  npm install
  ```
  ---
