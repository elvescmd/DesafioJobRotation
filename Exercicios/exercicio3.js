const fs = require('fs');

const loadJsonFile = (filePath) => {
    try {
        const jsonData = JSON.parse(fs.readFileSync(filePath));
        return jsonData.filter((item) => item.valor && typeof item.valor === 'number');
    } catch (error) {
        console.error(`Erro ao carregar o arquivo JSON: ${error.message}`);
        process.exit(1);
    }
};

const getDailyRevenues = (jsonData) => {
    return jsonData.map((item) => item.valor);
};

const calculateMonthlyStatistics = (dailyRevenues) => {
    const validDailyRevenues = dailyRevenues.filter((revenue) => revenue > 0);
    const daysWithRevenueAboveAverage = validDailyRevenues.filter((revenue) => revenue > calculateMonthlyAverage(validDailyRevenues)).length;
    return {
        menorFaturamento: Math.min(...validDailyRevenues),
        maiorFaturamento: Math.max(...validDailyRevenues),
        diasAcimaDaMedia: daysWithRevenueAboveAverage
    };
};

const calculateMonthlyAverage = (dailyRevenues) => {
    const validDailyRevenues = dailyRevenues.filter((revenue) => revenue > 0);
    return validDailyRevenues.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / validDailyRevenues.length;
};

const formatCurrencyValue = (value) => {
    return `R$ ${value.toFixed(2)}`;
};

const printMonthlyStatistics = (monthlyStatistics) => {
    console.log(`Menor valor de faturamento diário: ${formatCurrencyValue(monthlyStatistics.menorFaturamento)}`);
    console.log(`Maior valor de faturamento diário: ${formatCurrencyValue(monthlyStatistics.maiorFaturamento)}`);
    console.log(`Número de dias com faturamento acima da média mensal: ${monthlyStatistics.diasAcimaDaMedia}`);
};

const main = () => {
    const jsonData = loadJsonFile('./Dados/dadosE3.json');
    const dailyRevenues = getDailyRevenues(jsonData);
    const monthlyStatistics = calculateMonthlyStatistics(dailyRevenues);
    printMonthlyStatistics(monthlyStatistics);
};

main();
