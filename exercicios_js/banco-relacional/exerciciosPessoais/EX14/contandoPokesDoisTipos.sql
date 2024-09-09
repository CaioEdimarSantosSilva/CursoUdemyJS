SELECT 
    p.nome AS pokemon_nome,
    GROUP_CONCAT(t.nome SEPARATOR ', ') AS tipos
FROM pokedex p
JOIN pokedex_tipo pt ON p.id = pt.pokedex_id
JOIN tipo t ON pt.tipo_id = t.id
GROUP BY p.id, p.nome
having 
    sum(t.nome = 'normal') > 0
    and sum(t.nome = 'voador') >0





SELECT 
    pokedex.nome AS pokemon_nome,
    GROUP_CONCAT(tipo.nome SEPARATOR ', ') AS tipos
FROM pokedex 
JOIN pokedex_tipo ON pokedex.id = pokedex_tipo.pokedex_id
JOIN tipo ON pokedex_tipo.tipo_id = tipo.id
WHERE pokedex.id IN (
    SELECT pokedex_tipo.pokedex_id 
    FROM pokedex_tipo
    JOIN tipo ON pokedex_tipo.tipo_id = tipo.id
    WHERE tipo.nome = 'normal'
)
AND pokedex.id IN (
    SELECT pokedex_tipo.pokedex_id 
    FROM pokedex_tipo
    JOIN tipo ON pokedex_tipo.tipo_id = tipo.id
    WHERE tipo.nome = 'voador'
)
GROUP BY pokedex.id, pokedex.nome



