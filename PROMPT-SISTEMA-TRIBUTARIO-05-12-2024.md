[DEFINICAO DO PROMPT 

#PERSONA
Você é um desenvolvedor de software [frontend(html,css,vanilla javascript)],
com vasto conhecimnento na escrita de código limpo, desenvolvimento ágil e SOLID.
Solid significa:
S - Single-responsibility Principle (Princípio da responsabilidade única)
O - Open-closed Principle (Princípio do aberto-fechado)
L - Liskov Substitution Principle (Princípio da substituição de Liskov)
I - Interface Segregation Principle (Princípio da segregação de interfaces)
D - Dependency Inversion Principle (Princípio da inversão de dependência)

#TAREFA
Crie um sistema que execute uma lista de passos através de páginas, onde cada passo será uma página no software.
Para cada pagina criada, deve conter uma chamada de api com as 4 operações CRUD, onde que 
CRUD é o acrônimo para Create (criar), Read (ler), Update (atualizar) e Delete (apagar).
Cada uma das paginas deve conter uma consulta, assim como um botão de nome "novo" que deve abrir um formulario
com todos os campos da pagina.
A API do sistema deve fazer chamadas para a biblioteca do banco de dados [Supabase](https://supabase.com/).

[FORMATO]
As páginas devem ser escritas somente nas linguagens de programação html,css e vanilla javascript, utilize a biblioteca
vite e crie o arquivo de variavel de ambiente.

[CONTEXTO]
#PAGINA DE LOGIN
Crie uma pagina de login que apos o usuario informar e-mail e senha, acesse a pagina principal do sistema.
Esta pagina tambem deve conter um botao para criar um novo usuario no sistema.
Ao clicar em criar novo usuario devem conter as informações abaixo:
- Nome Completo
- E-mail
- Senha 
- Confirmação de Senha

Ao clicar em um botão de nome "Confirmar", o sistema deve inserir os dados chamando a api do [Supabase].

#PAGINA INICIAL DO SISTEMA
A pagina inicial do sistema deve ter apenas um botão para carregar um novo arquivo xml de notas 
que vai conter os seguintes Campos:
[Fornecedor]
- CPF/CNPJ:57.867.386/0001-70
- Razão Social:Empresa de testes 01
- Estado:SC
- Cidade:Rio do Sul
[Destinatario]
- CPF/CNPJ:57.867.386/0001-50
- Razão Social:Empresa de testes 02
- Cidade:Taió

[Produtos]
- produto 01:
	id=1
	descricao=Computador
	quantidade=10
	valorunitario=4500,00
	ncmsh=154264
	taxaimposto=17
	totalliquido=450000,00
	totalcomimposto=450000,00

- produto 02:
	id=2
	descricao=Teclado
	quantidade=10
	valorunitario=45,00
	ncmsh=154264
	taxaimposto=17
	totalliquido=450,00
	totalcomimposto=450,00

[Impostos]
- ICMS = Valor total dos impostos de ICMS.
- IPI = Valor total dos impostos de IPI.
- PIS = Valor total dos impostos de PIS.
- COFINS = Valor total dos impostos de COFINS.

[#abaixo finalizar
[#abaixo finalizar
[#abaixo finalizar
[#abaixo finalizar
[#abaixo finalizar
[#abaixo finalizar
[#abaixo finalizar

[PROMPT FINALIZADO

Alteracao 00 - Captação das Notas
Adicionar a pesquisa das notas enviadas(Manifestação de Notas), pela api da Tecnospeed
Nota de serviço e Nota de produto.
Com estas notas pode pegar elas e fazer o calculo automatico, atraves do documento XML.

Alteracao 01
Adicionar uma forma de ler um arquivo json, que sera a simulação do retorno do arquivo
com os produtos da nota fiscal

Alteracao 02
Adicionar um local pra informar a margem de lucro por ncmsh.

Alteracao 03
Calcular automaticamente o preco de venda, e mostrar na consulta de produtos.

Alteracao 04
Adicionar Integracao com a aplicação de Autenticação

Alteracao 05
Adicionar Integração com a Inteligencia Artificial Gratis - Claude.ai

Alteracao 06
Criar os relatorios de preços sugeridos conforme as tributações e margem de lucro ao final.

Alteracao 10
Criar uma tabela de Preços de Custo baixo inicial/ou alto....

Alteracao 11
Adicionar o fluxograma na IA - Napkin.ai.

[empresa de integracao de notas[Manifestacao do Destinatario com API da Tecnospeed]
Integracao com tecnospeed e sistema parecido com arquivei (https://qive.com.br/) 
e conectra sistemas.






