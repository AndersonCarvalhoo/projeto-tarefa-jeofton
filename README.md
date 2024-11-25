# backend projeto
## Como Utilizar

### Pré-requisitos
Certifique-se de que você tem os seguintes programas instalados em sua máquina:
* Node.js 
* npm

### Passo a Passo

1. Clone o repositório e acesse:
```git clone https://github.com/AndersonCarvalhoo/projeto-tarefa-jeofton.git```
```cd projeto-tarefa-jeofton```

2. Acesse a branch backend:
```git checkout backend```

3. Instale as dependências
```npm install```

4. Configure as variáveis de ambiente
Configure o arquivo .env com o seu banco de dados:
```DATABASE_URL="mongodb+srv *://<usuario>:<senha>@<cluster>/<database>?retryWrites=true&w=majority"```

5. Configurar o banco de dados
Para configurar o banco de dados com o Prisma:
```npx prisma db push```

6. Execute a aplicação
```npm run dev```

7. Acesse a aplicação
Abra o navegador e acesse:
```http://localhost:3333/teste```

8. Testando a API
Utilize ferramentas como Postman ou Insomnia para testar a API
