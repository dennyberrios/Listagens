# Listagens

Este projeto é uma aplicação construída utilizando **Next.js**, **Node.js** e **Tailwind CSS**. Ele inclui funcionalidades de listagem e um sistema de formulários estilizado com Tailwind.

## Estrutura do Projeto

- **app/**: Contém os arquivos relacionados às páginas e rotas do Next.js.
- **src/**: Contém os arquivos principais da aplicação, como componentes e utilitários.
- **components/**: Contém os componentes reutilizáveis da aplicação.
- **listagens/**: Contém as funcionalidades relacionadas às listagens.

## Configuração do Tailwind CSS

O arquivo `tailwind.config.ts` foi configurado para incluir os seguintes caminhos de conteúdo:

```typescript
content: [
  "./app/**/*.{tsx,jsx,ts,js}",
  "./src/**/*.{tsx,jsx,ts,js}",
  "./components/**/*.{tsx,jsx,ts,js}",
  "./listagens/**/*.{tsx,jsx,ts,js}",
],
```

Além disso, foram adicionadas cores personalizadas para o tema:

- **emeraldTeal**: `#038C7F`
- **softAqu**: `#A9D9D0`
- **warmSand**: `#F2E7DC`
- **onyxBlack**: `#0D0D0D`
- **coralRed**: `#FF6B6B`
- **pureWhite**: `#FFFFFF`
- **danger**: `#FF6B6B`
- **darkDanger**: `#FF4F4F`

## Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone git@github.com:dennyberrios/Listagens.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
