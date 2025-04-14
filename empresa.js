document.addEventListener("DOMContentLoaded", function () {
    const gastosIniciais = [
        { item: "Fachada e Identidade Visual", valor: 8000 },
        { item: "Aluguel (1º mês + caução)", valor: 15000 },
        { item: "Móveis e Escritório", valor: 10000 },
        { item: "Computadores (Dell x5)", valor: 22500 },
        { item: "Celulares (Samsung x10)", valor: 20000 },
        { item: "Software e Licenças", valor: 5000 },
        { item: "Carro 1 (Toyota Corolla)", valor: 120000 },
        { item: "Carro 2 (Honda Civic)", valor: 110000 }
    ];

    const gastosMensais = [
        { item: "Aluguel", valor: 5000 },
        { item: "Energia e Água", valor: 1500 },
        { item: "Internet e Telefonia", valor: 600 },
        { item: "Salários Funcionários(x8)", valor: 40000 },
        { item: "Limpeza e Manutenção", valor: 1000 },
        { item: "Gasolina (Carros da Empresa)", valor: 2500 },
        { item: "Manutenção dos Carros", valor: 1500 }
    ];

    let totalGastosIniciais = gastosIniciais.reduce((total, gasto) => total + gasto.valor, 0);
    let totalGastosMensais = gastosMensais.reduce((total, gasto) => total + gasto.valor, 0);

    document.getElementById("tabela-gastos-iniciais").innerHTML = gastosIniciais.map(gasto =>
        `<tr><td>${gasto.item}</td><td>R$ ${gasto.valor.toLocaleString('pt-BR')}</td></tr>`
    ).join("");

    document.getElementById("tabela-gastos-mensais").innerHTML = gastosMensais.map(gasto =>
        `<tr><td>${gasto.item}</td><td>R$ ${gasto.valor.toLocaleString('pt-BR')}</td></tr>`
    ).join("");

    document.getElementById("total-gastos-iniciais").innerText = `R$ ${totalGastosIniciais.toLocaleString('pt-BR')}`;
    document.getElementById("total-gastos-mensais").innerText = `R$ ${totalGastosMensais.toLocaleString('pt-BR')}`;

    const planos = [
        { nome: "Plano Básico", preco: 500 },
        { nome: "Plano Intermediário", preco: 1000 },
        { nome: "Plano Avançado", preco: 2000 }
    ];

    document.getElementById("tabela-clientes").innerHTML = planos.map(plano =>
        `<tr><td>${plano.nome}</td><td>R$ ${plano.preco.toLocaleString('pt-BR')}</td><td>${Math.ceil(totalGastosMensais / plano.preco)} clientes</td></tr>`
    ).join("");

    const ctx = document.getElementById('graficoGastos').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Gastos Iniciais", "Gastos Mensais"],
            datasets: [{
                data: [totalGastosIniciais, totalGastosMensais],
                backgroundColor: ["#0077b6", "#ff4d4d"]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
