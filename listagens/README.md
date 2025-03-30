# Listagens

Esta pasta contém as funcionalidades relacionadas às listagens da aplicação.

## Estrutura

Os arquivos nesta pasta são responsáveis por:

- Gerenciar a exibição de listas de dados.
- Implementar lógica de filtragem, paginação e ordenação.
- Fornecer componentes reutilizáveis para exibição de listas.

## Configuração do Tailwind CSS

Certifique-se de que o Tailwind CSS está configurado para incluir os arquivos desta pasta no escopo de conteúdo. No arquivo `tailwind.config.ts`, o caminho foi adicionado:

```typescript
content: [
  // ...existing code...
  "./listagens/**/*.{tsx,jsx,ts,js}",
],
```

## Como Contribuir

1. Adicione novos arquivos ou componentes relacionados a listagens nesta pasta.
2. Certifique-se de seguir os padrões de codificação do projeto.
3. Teste suas alterações antes de enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](../LICENSE).
