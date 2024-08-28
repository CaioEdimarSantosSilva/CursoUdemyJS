select * from estados -- puxando o banco de dandos inteiro

select sigla, nome as 'Nome do Estados' from estados -- puxando o banco de dandos somente sigla e nome
where regiao = 'Sul'    -- puxando atraves do where só as cidades do sul

select nome, regiao from estados -- puxando o banco de dandos somente nome e regiao
where populacao >= 10   -- puxando atraves do where só as cidades com a populacao maior que 10
order by populacao desc -- ordenado por ordem decrecente 