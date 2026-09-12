/**
 * Weights, lookup tables and bank code lists used by the per bank account check digit rules.
 * The weights come from the "Regras de Validação de dígito verificador de agência e conta
 * corrente" compendium and were cross checked against independent open source validators.
 *
 * @see Based on: https://github.com/eduardokum/laravel-boleto/blob/master/manuais/Regras%20Validacao%20Conta%20Corrente%20VI_EPS.pdf
 * Icatu Seguros compendium of per bank agency/account check digit rules, mirrored in this repo.
 * @see Based on: https://github.com/ajmiciano/banktools-br/tree/master/lib/banktools-br/banks
 * @see Based on: https://github.com/luizalabs/heimdall/blob/main/heimdall_valid_bank/calculate_number_account.py
 * @see Based on: https://github.com/Xerpa/bran_checker/tree/master/lib/banks
 */

export const COMPE_CODES =
	"001003004007010011012014015016017018021024025029033036037040041047060062063064065066069070" +
	"074075076077078079080081082083084085088089093094095096097098099100101102104105107111113114" +
	"117119120121122124125126127128129130131132133134136138139140141142143144145146149157159173" +
	"174177180183184188189190191194195196197208212213217218222224233237241243246249250253254259" +
	"260265266268269270271272273274276278279280281283285288289290292293296298299300301306307309" +
	"310311312313318319320321322323324325326328329330331332334335336340341342343348349350352355" +
	"358359360362363364365366367368370371373374376377378379380381382383384385386387389390391393" +
	"394395396397398399400401402403404406407408410411412413414416418419421422423425426427428429" +
	"430433435438439440442443444445447448449450451452454455456457458459460461462463464465467468" +
	"469470471473475477478479481482484487488495505506507508509510511512513516518519521522523524" +
	"525526527528529530532534535536537539541545546600604610611612613623626630633634637643653654" +
	"655707712720739741743745746747748751752753754755756757";

export const SANTANDER_WEIGHTS = [9, 7, 3, 1, 0, 0, 9, 7, 1, 3, 1, 9, 7, 3];

export const BANRISUL_ACCOUNT_WEIGHTS = [3, 2, 4, 7, 6, 5, 4, 3, 2];

export const HSBC_AGENCY_ACCOUNT_WEIGHTS = [8, 9, 2, 3, 4, 5, 6, 7, 8, 9];

export const CITIBANK_ACCOUNT_WEIGHTS = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

export const VERHOEFF_MULTIPLICATION = [
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	[1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
	[2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
	[3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
	[4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
	[5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
	[6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
	[7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
	[8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
	[9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
];

export const VERHOEFF_PERMUTATION = [
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	[1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
	[5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
	[8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
	[9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
	[4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
	[2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
	[7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
];

export const VERHOEFF_INVERSE = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

export const STRUCTURE_ONLY_BANK_CODES = [
	"077",
	"085",
	"102",
	"136",
	"197",
	"208",
	"212",
	"290",
	"318",
	"323",
	"336",
	"380",
	"403",
	"623",
	"655",
	"707",
	"746",
	"748",
	"756",
];
