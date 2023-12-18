var listPlayer = [];

var elementoTabela = document.getElementById("tabelaJogadores");

function adicionarVitoria(index) {
  listPlayer[index].vitoria++;
  listPlayer[index].pontos = listPlayer[index].pontos + 3;
  exibirNaTela();
}

function adicionarDerrota(index) {
  listPlayer[index].derrota++;
  exibirNaTela();
}

function removerVitoria(index) {
  if (listPlayer[index].vitoria > 0) {
    listPlayer[index].vitoria--;
    listPlayer[index].pontos = listPlayer[index].pontos - 3;
    exibirNaTela();
  } else {
    alert("O jogador não possui vitórias e serem removidas.");
  }
}

function removerDerrota(index) {
  if (listPlayer[index].derrota > 0) {
    listPlayer[index].derrota--;
    // Supondo que remover uma derrota não altera os pontos (pode ser diferente dependendo da lógica do seu aplicativo)
    exibirNaTela();
  } else {
    alert("O jogador não possui derrotas a serem removidas.");
  }
}

function finalizarPartida() {
  let btn = document.getElementById("btn_finalizar");
  const params = { nickname: [].join("&") };
  const data = {
    score_player_1: 3,
    score_player_2: 0,
  };
  btn.addEventListener("click", () => {
    axios.post(data, {params});
    .then(res => {
      console.log("res:", res.data);
    });
    .catch(function (error) {
      console.log(error);
    });
  });
  listPlayer = [];
  exibirNaTela();
}

function exibirNaTela() {
  elementoTabela.innerHTML = "";

  listPlayer.forEach((jogador, index) => {
    console.log(jogador);

    elementoTabela.innerHTML += `
    <tr>
        <td>${jogador.name}</td>
        <td>${jogador.vitoria}</td>
        <td>${jogador.pontos}</td>
        
        <td>
        <button class="winner" onClick="adicionarVitoria(${index})">Vitória</button>
        </td>
        
    </tr>
`;
  });
}

function addPlayer() {
  const jogador1 = document.getElementById("name1").value.trim();
  const jogador2 = document.getElementById("name2").value.trim();

  if (jogador1 === "" || jogador2 === "") {
    alert("Por favor, preencha o nome de ambos os jogadores.");
    return;
  }

  const tabelaJogadores = document.getElementById("tabelaJogadores");

  // Primeira linha
  const firstRow = tabelaJogadores.insertRow();
  const cell1 = firstRow.insertCell(0);
  cell1.innerHTML = jogador1;

  const cell2 = firstRow.insertCell(1);
  cell2.innerHTML = "0"; // Vitórias - inicializado com 0

  const cell3 = firstRow.insertCell(2);
  cell3.innerHTML = "0"; // Pontos - inicializado com 0

  const cell4 = firstRow.insertCell(3);
  const button = document.createElement("button");
  button.textContent = "Vitória";
  button.onclick = function () {
    const index = Array.from(tabelaJogadores.rows).indexOf(firstRow) - 1;
    listPlayer[index].vitoria++;
    listPlayer[index].pontos = listPlayer[index].pontos += 3;
    // Coloque aqui a lógica que deseja para a ação de vitória
    // Por exemplo, incrementar o número de vitórias ou pontos
    alert(`Vitória de ${jogador1}!`);
  };
  cell4.appendChild(button);

  // Segunda linha
  const secondRow = tabelaJogadores.insertRow();
  const cell5 = secondRow.insertCell(0);
  cell5.innerHTML = jogador2;

  const cell6 = secondRow.insertCell(1);
  cell6.innerHTML = "0"; // Vitórias - inicializado com 0

  const cell7 = secondRow.insertCell(2);
  cell7.innerHTML = "0"; // Pontos - inicializado com 0

  const cell8 = secondRow.insertCell(3);
  const button2 = document.createElement("button");
  button2.textContent = "Vitória";
  button2.onclick = function () {
    const index = Array.from(tabelaJogadores.rows).indexOf(secondRow) - 1;
    listPlayer[index].vitoria++;
    listPlayer[index].pontos = listPlayer[index].pontos + 3;
    // Coloque aqui a lógica que deseja para a ação de vitória
    // Por exemplo, incrementar o número de vitórias ou pontos
    alert(`Vitória de ${jogador2}!`);
  };
  cell8.appendChild(button2);

  // Limpa os inputs após adicionar à tabela
  document.getElementById("name1").value = "";
  document.getElementById("name2").value = "";
}

const jogador1 = "Nome Jogador 1";
const jogador2 = "Nome Jogador 2";

const partida = {
  score_player_1: 3,
  score_player_2: 0,
};

axios
  .post("http://localhost:3000/matches", {
    params: { nickname: [jogador1.jogador2] },
    data: partida,
  })
  .then(function (response) {
    console.log("Partida iniciada com sucesso:", response.data);
  });
// .catch(function ())
