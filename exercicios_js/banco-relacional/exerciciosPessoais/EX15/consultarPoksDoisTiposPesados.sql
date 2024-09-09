select * from `pokedex`
WHERE tipo2 is not null
order by peso desc
LIMIT 10


select     
    pokedex.nome AS pokemon_nome,
    GROUP_CONCAT(tipo.nome SEPARATOR ', ') AS tipos,
    pokedex.peso as peso
from pokedex  
join pokedex_tipo on pokedex.id = pokedex_id
join tipo on pokedex_tipo.tipo_id = tipo.id
GROUP BY pokedex.id, pokedex.nome
having
    count(distinct tipo.id) > 1
order by pokedex.peso desc

