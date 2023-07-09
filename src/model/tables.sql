create table (
  id integer primary key auto_increment, 
  email varchar(100) not null unique, 
  hash varchar(1000)
  );