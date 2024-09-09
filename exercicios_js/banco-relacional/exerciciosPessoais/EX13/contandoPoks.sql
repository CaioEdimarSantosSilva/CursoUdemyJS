select COUNT(*)
from pokedex
join pokedex_tipo on pokedex.id = pokedex_id
join tipo on pokedex_tipo.tipo_id = tipo.id
where tipo.nome = 'sombrio'
GROUP BY `pokedex`.id, `pokedex`.nome
