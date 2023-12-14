// Função para preencher a tabela
function preencherTabela(data) {
  const tableBests = document.getElementById("tableBests");
  tableBests.innerHTML = ""; // Limpa a tabela antes de preencher novamente

  data.forEach((item) => {
    const row = document.createElement("tr");
    console.log("item", item);
    row.innerHTML = `
      <td>${item.nickname}</td>
      <td>${item.total_wins}</td>
      <td>${item.total_loses}</td>
      <td>${item.total_points}</td>
    `;
    tableBests.appendChild(row);
  });
  console.log("tableBests", tableBests);
}

// Faz a requisição GET usando Axios
axios
  .get("http://localhost:3000/matches/bests")
  .then(function (response) {
    // Manipula o sucesso da requisição
    const data = response.data; // Assume-se que response.data é uma array de objetos com os campos especificados no payload
    console.log("data", data);
    preencherTabela(data); // Chama a função para preencher a tabela com os dados recebidos
  })
  .catch(function (error) {
    // Manipula erros da requisição
    console.error("Ocorreu um erro:", error);
  });

  let listPlayer = []; // Suponha que listPlayer seja o array que contém informações dos jogadores

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
          listPlayer[index].pontos += 3;
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
          listPlayer[index].pontos += 3;
          alert(`Vitória de ${jogador2}!`);
      };
      cell8.appendChild(button2);
  
      // Limpa os inputs após adicionar à tabela
      document.getElementById("name1").value = "";
      document.getElementById("name2").value = "";
  }
