const inputNome = document.querySelector(".input-nome");
const inputTelefone = document.querySelector(".input-telefone");
const botaoCadastrar = document.querySelector(".btn-cadastrar");
const tbody = document.querySelector("tbody");

botaoCadastrar.addEventListener("click", () => {
  const nome = inputNome.value.trim();
  const telefone = inputTelefone.value.trim();

  // Validação de preenchimento
  if (nome === "" || telefone === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Remove tudo que não for número
  const telefoneNumerico = telefone.replace(/\D/g, "");

  // Validação de quantidade de dígitos
  if (telefoneNumerico.length !== 11) {
    alert("O telefone deve ser um número válido. Digite novamente por favor.");
    return;
  }

  // Formatação para (XX) XXXXX-XXXX
  const telefoneFormatado = `(${telefoneNumerico.slice(0, 2)}) ${telefoneNumerico.slice(2, 7)}-${telefoneNumerico.slice(7)}`;

  // Criação da linha na tabela
  const tr = document.createElement("tr");
  const tdNome = document.createElement("td");
  const tdTelefone = document.createElement("td");

  tdNome.textContent = nome;
  tdTelefone.textContent = telefoneFormatado;

  tr.appendChild(tdNome);
  tr.appendChild(tdTelefone);
  tbody.appendChild(tr);

  // Limpa os campos
  inputNome.value = "";
  inputTelefone.value = "";
});
