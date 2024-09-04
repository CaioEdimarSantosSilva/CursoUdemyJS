create table if not exists tipo (
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    primary key (id),
    unique key (nome)
);