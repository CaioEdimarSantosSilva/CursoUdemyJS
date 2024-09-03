-- Criando a Tabela Pokemons de Kalos

create table if not exists pokedex (
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    tipo1 varchar(255) not null,
    tipo2 varchar(255),
    altura decimal(10,2) unsigned not null,
    peso decimal(10,2) unsigned not null,
    primary key (id),
    unique key (nome)
);

