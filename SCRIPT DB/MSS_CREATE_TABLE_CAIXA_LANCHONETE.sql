-- Criar a tabela CAIXA_LANCHONETE
		CREATE TABLE CAIXA_LANCHONETE (
			codigo VARCHAR(255) PRIMARY KEY,
			descricao VARCHAR(255),
			valor DECIMAL(10, 2)
		);

		-- Inserir os dados
		INSERT INTO CAIXA_LANCHONETE (codigo, descricao, valor)
		VALUES
			('cafe', 'Café', 3.00),
			('chantily', 'Chantily (extra do Café)', 1.50),
			('suco', 'Suco Natural', 6.20),
			('sanduiche', 'Sanduíche', 6.50),
			('queijo', 'Queijo (extra do Sanduíche)', 2.00),
			('salgado', 'Salgado', 7.25),
			('combo1', '1 Suco e 1 Sanduíche', 9.50),
			('combo2', '1 Café e 1 Sanduíche', 7.50);