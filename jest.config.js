const moment = require('moment');

// Função para obter a data e hora atual formatada
const getDateTime = () => moment().format('DD-MM-YYYY_HH-mm-ss');

module.exports = {
  // Diretórios que contêm os arquivos de teste
  roots: ["jest/__tests__"],
  
  // Extensões de arquivos de teste que o Jest procurará
  testMatch: ["**/*.test.js"],
  
  // Relatório de cobertura de código
  collectCoverage: true,
  coverageDirectory: `<rootDir>/coverage/${getDateTime()}`,
  
  // Lista de reporters utilizados
  reporters: [
    "default",
    ["jest-html-reporters", {
      publicPath: `./jest/reports/${getDateTime()}`,
      filename: "report.html",
      expand: true
    }]
  ]
};
