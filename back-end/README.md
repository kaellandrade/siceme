# Como rodar com docker-compose


# Alguns Comandos Úteis
## Eslint
Corrige um código com base no padrão escolhido no ESLint:
```npx exlint --fix arquivo.js```

## Docker
Entrar no container:
```docker exec -it id_conteiner bash```

## Sequelize
Cria uma migration:
```npx sequelize migration:create --name=nome_da_migration```

Executa a migration
```npx sequelize db:migrate```

Desfaz a última operação feita
```npx sequelize db:migrate:undo```
