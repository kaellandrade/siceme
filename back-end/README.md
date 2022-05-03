# Como rodar com docker-compose


# Alguns Comandos Úteis
## Eslint
Corrige um código com base no padrão escolhido no ESLint:
```npx eslint --fix arquivo.js```

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

Criando uma seed
```npx sequelize-cli seed:generate --name demo-material```

Executando uma seed
```npx sequelize-cli db:seed:all```

Desfazendo a últia seed
```npx sequelize-cli db:seed:undo```

