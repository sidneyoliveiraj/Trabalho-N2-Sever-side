# Trabalho-N2-Sever-side
Desenvolver uma API em nodejs que contenha as operações CRUD para manipular dados de peças de veículo: id_peca, nome_peca e descr_peca. Além do CRUD para peças, implemente um end-point para a busca por nome_peca. Lembre-se de organizar o código em camadas/módulos.

Xampp 

Entre no Mysql:
mysql -u root

Crie o banco de dados:
create database peca

Selecione o banco:
use peca

Crie a Tabela com as informações(id_peca,nome_peca,descr_peca):
CREATE TABLE pecas (
    id_peca INT AUTO_INCREMENT PRIMARY KEY,
    nome_peca VARCHAR(255) NOT NULL,
    descr_peca TEXT
);


Caso queria preencher tabela:
INSERT INTO pecas (nome_peca, descr_peca) VALUES ('Pastilha de Freio', 'Pastilha de freio dianteira para carros populares');
