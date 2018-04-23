# SimplesEventos
simples api rest de eventos feita para estudos usando nodejs express e mongoDB

# iniciando ... .. .

primeiro caso ainda não posssua instale o nodeJS no seu computador pelo site https://nodejs.org/

# segundo passo

va no diretorio onde baixou essa api rest pelo terminal ou cmd e digite os comandos abaixo:

npm init
node index.js

# acessando a api

abra o seu navegador preferido no endereço https://localhost:12345/postagem

# testando melhor a api

se preferir testar melhor baixe o Postman acessando o endereço https://www.getpostman.com/ 

# como funciona

a api Rest SimplesEventos como o nome sugere tem, foco de maneira simples em enventos suportando os seguintes campos:

titulo

local

descricao

# roteamento

metodo get: https://localhost:12345/postagem => retorna uma json com todos os eventos(postagens) salvas no banco de dados

metodo post: https://localhost:12345/postagem => permite a criação de um novo evento(postagem)

metodo get: https://localhost:12345/postagem/:id => retorna um unico evento(postagem) a busca é feita pelo id

metodo put: https://localhost:12345/postagem/:id => atualisa um evento(postagem)  pelo id

metdo delete: https://localhost:12345/postagem/:id => apaga um envento(postagem) pelo id

# futuras versões

-- -- metodo de autenticação
        
-- -- interface grafica propria para o CRUD

-- -- melhores formas de consulta os eventos

-- -- suporte a usuarios e integralos a cada evento

-- -- suporte a administradores de eventos
 
 
