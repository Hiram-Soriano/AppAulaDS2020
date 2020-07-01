
CREATE DATABASE dbaulads DEFAULT CHARACTER SET utf8 ;
USE dbaulads ;

CREATE TABLE categorias (
  idcategoria INT(11) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(60) NOT NULL,
  ativo VARCHAR(1) NOT NULL,
  datacriacao DATETIME NOT NULL,
  datamodificacao DATETIME NOT NULL,
  PRIMARY KEY (idcategoria))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE clientes (
  idcliente INT(11) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(60) NOT NULL,
  email VARCHAR(100) NULL DEFAULT NULL,
  telefone VARCHAR(15) NULL DEFAULT NULL,
  ativo CHAR(1) NOT NULL,
  datacriacao DATETIME NOT NULL,
  datamodificacao DATETIME NOT NULL,
  PRIMARY KEY (idcliente))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE formas_pagamento (
  idformas_pagamento INT(11) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  tera_troco CHAR(1) NOT NULL,
  tera_parcelamento CHAR(1) NOT NULL,
  ativo CHAR(1) NOT NULL,
  datacriacao DATETIME NOT NULL,
  datamodificacao DATETIME NOT NULL,
  PRIMARY KEY (idformas_pagamento))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE produtos (
  idproduto INT(11) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  descricao TEXT NOT NULL,
  estoque INT(11) NOT NULL,
  estoque_min INT(11) NOT NULL,
  valor DECIMAL(7,2) NOT NULL,
  ativo CHAR(1) NOT NULL,
  idcategoria INT(11) NOT NULL,
  imagem VARCHAR(255) NULL,
  datacriacao DATETIME NOT NULL,
  datamodificacao DATETIME NOT NULL,
  PRIMARY KEY (idproduto),
  INDEX fk_produtos_categorias_idx (idcategoria ASC) ,
  CONSTRAINT fk_produtos_categorias
    FOREIGN KEY (idcategoria)
    REFERENCES categorias (idcategoria))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE vendas (
  idvenda INT(11) NOT NULL AUTO_INCREMENT,
  data_venda DATETIME NOT NULL,
  total_venda DECIMAL(7,2) NOT NULL,
  situacao CHAR(1) NOT NULL,
  idcliente INT(11) NOT NULL,
  idformas_pagamento INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (idvenda),
  INDEX fk_vendas_clientes_idx (idcliente ASC) ,
  INDEX fk_vendas_formas_pagamento_idx (idformas_pagamento ASC),
  CONSTRAINT fk_vendas_clientes
    FOREIGN KEY (idcliente)
    REFERENCES clientes (idcliente),
  CONSTRAINT fk_vendas_formas_pagamento
    FOREIGN KEY (idformas_pagamento)
    REFERENCES formas_pagamento (idformas_pagamento))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE itens_venda (
  iditens_venda INT(11) NOT NULL AUTO_INCREMENT,
  idvenda INT(11) NOT NULL,
  idproduto INT(11) NOT NULL,
  quantidade INT(11) NOT NULL,
  valor_unitario DECIMAL(7,2) NOT NULL,
  subtotal DECIMAL(7,2) NOT NULL,
  PRIMARY KEY (iditens_venda),
  INDEX fk_vendas_produtos_produtos_idx (idproduto ASC),
  INDEX fk_vendas_produtos_vendas_idx (idvenda ASC),
  CONSTRAINT fk_vendas_produtos_produtos
    FOREIGN KEY (idproduto)
    REFERENCES produtos (idproduto),
  CONSTRAINT fk_vendas_produtos_vendas
    FOREIGN KEY (idvenda)
    REFERENCES vendas (idvenda))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;
