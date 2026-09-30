# POC · Git hooks em projeto Angular com Husky

Prova de conceito para garantir qualidade **antes do código chegar ao repositório**: hooks de Git que formatam, validam e testam o projeto automaticamente a cada commit e push.

## O que foi testado

- **Husky** para registrar hooks de Git versionados junto com o projeto (pasta `.husky/`), sem depender de configuração manual em cada máquina.
- **lint-staged + Prettier** no `pre-commit`: formata apenas os arquivos alterados, deixando o commit rápido.
- **Commitlint** no `commit-msg`: bloqueia mensagens fora do padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/) (`feat:`, `fix:`, `test:`...).
- **Testes no `pre-push`**: roda os testes unitários em modo headless e impede o push se algum falhar.
- Projeto base em **Angular 18 com SSR**.

## Fluxo

```
git commit  →  pre-commit: Prettier nos arquivos alterados
            →  commit-msg: valida o padrão da mensagem
git push    →  pre-push: roda os testes unitários
```

## Como rodar

Pré-requisitos: Node.js 18+ e npm.

```bash
npm install     # o script "prepare" instala os hooks do Husky automaticamente
npm start       # aplicação em http://localhost:4200
```

Para ver os hooks em ação:

```bash
git commit -m "mensagem qualquer"      # recusado pelo commitlint
git commit -m "feat: teste de hooks"   # aceito
```

## Stack

Angular 18 · TypeScript · Husky · lint-staged · Prettier · Commitlint · Jasmine/Karma
