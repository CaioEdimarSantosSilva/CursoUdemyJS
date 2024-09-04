alter table pokedex
add constraint fk_pokedex_tipo_um -- esse add constraint é um nome que referencia a foreing key, não é obrigatorio por, mas se usar fica mais facil fazer mudanças,
foreign key (tipo1) references tipo(nome), 
add constraint fk_pokedex_tipo_dois -- se nao usar ela, o bando de dados cria uma aleatoria, deixando mais complicado acessar
foreign key (tipo2) references tipo(nome);

