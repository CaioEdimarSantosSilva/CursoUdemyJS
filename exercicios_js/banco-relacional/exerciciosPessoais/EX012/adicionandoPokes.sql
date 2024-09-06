create table if not exists pokedex_tipo (
    pokedex_id int unsigned not null,
    tipo_id int unsigned not null,
    primary key (pokedex_id, tipo_id),
    foreign key (pokedex_id) references pokedex(id),
    foreign key (tipo_id) references tipo(id)
);

drop table pokedex_tipo
select * from tipo




select * from pokedex_tipo order by pokedex_id desc

-- Chespin
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (1, 9); -- Grass

-- Quilladin
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (2, 9); -- Grass

-- Chesnaught
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (3, 9); -- Grass
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (3, 11); -- Fighting

-- Fennekin
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (4, 7); -- Fire

-- Braixen
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (5, 7); -- Fire

-- Delphox
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (6, 7); -- Fire
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (6, 14); -- Psychic

-- Froakie
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (7, 2); -- Water

-- Frogadier
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (8, 2); -- Water

-- Greninja
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (9, 2); -- Water
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (9, 15); -- Dark

-- Bunnelby
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (10, 12); -- Normal

-- Diggersby
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (11, 12); -- Normal
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (11, 16); -- Ground

-- Zigzagoon
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (12, 12); -- Normal

-- Linoone
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (13, 12); -- Normal

-- Fletchling
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (14, 12); -- Normal
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (14, 18); -- Flying

-- Fletchinder
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (15, 7); -- Fire
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (15, 18); -- Flying

-- Talonflame
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (16, 7); -- Fire
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (16, 18); -- Flying

-- Pidgey
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (17, 12); -- Normal
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (17, 18); -- Flying

-- Pidgeotto
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (18, 12); -- Normal
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (18, 18); -- Flying

-- Pidgeot
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (19, 12); -- Normal
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (19, 18); -- Flying

-- Scatterbug
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (20, 10); -- Bug

-- Spewpa
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (21, 10); -- Bug

-- Vivillon
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (22, 10); -- Bug
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (22, 18); -- Flying

-- Caterpie
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (23, 10); -- Bug

-- Metapod
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (24, 10); -- Bug

-- Butterfree
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (25, 10); -- Bug
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (25, 18); -- Flying

-- Weedle
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (26, 10); -- Bug
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (26, 17); -- Poison

-- Kakuna
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (27, 10); -- Bug
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (27, 17); -- Poison

-- Beedrill
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (28, 10); -- Bug
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (28, 17); -- Poison

-- Pansage
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (29, 9); -- Grass

-- Simisage
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (30, 9); -- Grass

-- Pansear
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (31, 7); -- Fire

-- Simisear
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (32, 7); -- Fire

-- Panpour
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (33, 2); -- Water

-- Simipour
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (34, 2); -- Water

-- Pichu
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (35, 4); -- Electric

-- Pikachu
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (36, 4); -- Electric

-- Raichu
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (37, 4); -- Electric

-- Bidoof
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (38, 12); -- Normal

-- Bibarel
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (39, 12); -- Normal
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (39, 2); -- Water

-- Dunsparce
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (40, 12); -- Normal

-- Azurill
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (41, 12); -- Normal
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (41, 5); -- Fairy

-- Marill
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (42, 2); -- Water
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (42, 5); -- Fairy

-- Azumarill
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (43, 2); -- Water
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (43, 5); -- Fairy

-- Burmy
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (44, 10); -- Bug

-- Wormadam
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (45, 10); -- Bug
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (45, 9); -- Grass

-- Mothim
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (46, 10); -- Bug
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (46, 18); -- Flying

-- Surskit
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (47, 10); -- Bug
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (47, 2); -- Water

-- Masquerain
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (48, 10); -- Bug
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (48, 18); -- Flying

-- Magikarp
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (49, 2); -- Water

-- Gyarados
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (50, 2); -- Water
INSERT INTO pokedex_tipo (pokedex_id, tipo_id) VALUES (50, 18); -- Flying

