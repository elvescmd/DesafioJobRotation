const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const calcularFaturamentoTotal = (faturamentos) => Object.values(faturamentos).reduce((acc, curr) => acc + curr);

const calcularPercentualRepresentacao = (faturamento, faturamentoTotal) => (faturamento / faturamentoTotal) * 100;

const calcularRepresentacaoPorEstado = (faturamentos) => {
    const faturamentoTotal = calcularFaturamentoTotal(faturamentos);
    const representacaoPorEstado = {};

    for (const estado in faturamentos) {
        const faturamento = faturamentos[estado];
        const percentual = calcularPercentualRepresentacao(faturamento, faturamentoTotal);
        representacaoPorEstado[estado] = percentual;
    }

    return representacaoPorEstado;
};

const imprimirPercentualRepresentacao = (representacaoPorEstado) => {
    for (const estado in representacaoPorEstado) {
        const percentual = representacaoPorEstado[estado];
        console.log(`${estado}: ${percentual.toFixed(2)}%`);
    }
};

const main = () => {
    const representacaoPorEstado = calcularRepresentacaoPorEstado(faturamentoPorEstado);
    imprimirPercentualRepresentacao(representacaoPorEstado);
};

main();
