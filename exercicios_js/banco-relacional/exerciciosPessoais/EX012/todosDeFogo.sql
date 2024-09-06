SELECT 
    p.nome AS pokemon_nome,
    GROUP_CONCAT(t.nome SEPARATOR ', ') AS tipos
FROM pokedex p
JOIN pokedex_tipo pt ON p.id = pt.pokedex_id
JOIN tipo t ON pt.tipo_id = t.id
WHERE t.nome = 'sombrio'
GROUP BY p.id, p.nome;


