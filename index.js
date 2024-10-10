const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const ranks = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
console.log("Lista de Ranks: ");
for (let i = 0; i < ranks.length; i++) {
	console.log(`- ${ranks[i]}`);
}

rl.question("Digite a quantidade de partidas vencidas: ", (vitorias) => {
	let qtdDeVitorias = parseInt(vitorias);
	rl.question("Digite a sua quantidade de partidas perdidas: ", (derrotas) => {
		let qtdDeDerrotas = parseInt(derrotas);

		function calcularTotalDePartidas(vitorias, derrotas) {
			totalDePartidas = vitorias + derrotas;
			return totalDePartidas;
		}

		function calcularSaldoDeVitorias(vitorias, derrotas) {
			calcularTotalDePartidas(qtdDeVitorias, qtdDeDerrotas);
			saldoDeVitorias = vitorias - derrotas;
			return saldoDeVitorias;
		}

		calcularSaldoDeVitorias(qtdDeVitorias, qtdDeDerrotas);

		let rank;
		if (saldoDeVitorias < 10) {
			rank = "Ferro";
		} else if (saldoDeVitorias <= 20) {
			rank = "Bronze";
		} else if (saldoDeVitorias <= 50) {
			rank = "Prata";
		} else if (saldoDeVitorias <= 80) {
			rank = "Ouro";
		} else if (saldoDeVitorias <= 90) {
			rank = "Diamante";
		} else if (saldoDeVitorias <= 100) {
			rank = "Lendário";
		} else {
			rank = "Imortal";
		}

		console.log(`O herói jogou um total de ${totalDePartidas} partidas e tem um saldo de ${saldoDeVitorias} vitórias e se encontra no rank ${rank}`);

		rl.close();
	});
});
