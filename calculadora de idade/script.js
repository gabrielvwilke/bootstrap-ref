        function calcularIdade() {
            // Obtendo o nome e o ano de nascimento
            let nome = document.getElementById("nome").value;
            let anoNascimento = document.getElementById("anoNascimento").value;

            // Verificando se os campos não estão vazios
            if (nome === "" || anoNascimento === "") {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            // Convertendo ano de nascimento para número
            anoNascimento = Number(anoNascimento);

            // Obtendo o ano atual
            let dataAtual = new Date();
            let anoAtual = dataAtual.getFullYear();

            // Calculando a idade
            let idade = anoAtual - anoNascimento;

            // Verificando se a idade é válida
            if (idade < 0) {
                alert("Ano de nascimento inválido.");
                return;
            }

            // Exibindo a mensagem
            let mensagem = "Olá, " + nome + "! Você tem " + idade + " anos.";
            document.getElementById("resultado").innerHTML = mensagem;
        }