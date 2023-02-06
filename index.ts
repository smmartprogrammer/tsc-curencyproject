#! /usr/bin/env node

import inquirer from 'inquirer';

const UsdTOPkr = 228.43;
const PkrTOUsd = 0.0044;
const EuToPkr = 239.85;
const PkrToEu = 0.0042;
const EuTOUsd = 1.05;
const UsdTOEu = 0.95;
let repeat = false;

async function Converter() {
  do {
    let answer: { CurrencyFrom: string; CurrencyTo: string; Amount: number } =
      await inquirer.prompt([
        {
          name: 'CurrencyFrom',
          type: 'list',
          choices: ['USD', 'PKR', 'EU'],
          message: 'Select from which currency you want to convert',
        },
        {
          name: 'CurrencyTo',
          type: 'list',
          choices: ['USD', 'PKR', 'EU'],
          message: 'Select to which currency you want to convert',
        },
        {
          name: 'Amount',
          type: 'number',
          message: 'Enter Value',
        },
      ]);
    switch (answer.CurrencyFrom) {
      case 'USD':
        if (answer.CurrencyTo === 'PKR') {
          let amount = answer.Amount * UsdTOPkr;
          console.log(amount);
        } else if (answer.CurrencyTo === 'EU') {
          let amount = answer.Amount * UsdTOEu;
          console.log(amount);
        } else {
          console.log(answer.Amount);
        }
        break;
      case 'PKR':
        if (answer.CurrencyTo === 'USD') {
          let amount = answer.Amount * PkrTOUsd;
          console.log(amount);
        } else if (answer.CurrencyTo === 'EU') {
          let amount = answer.Amount * PkrToEu;
          console.log(amount);
        } else {
          console.log(answer.Amount);
        }
        break;
      case 'EU':
        if (answer.CurrencyTo === 'USD') {
          let amount = answer.Amount * EuTOUsd;
          console.log(amount);
        } else if (answer.CurrencyTo === 'EU') {
          let amount = answer.Amount * EuToPkr;
          console.log(amount);
        } else {
          console.log(answer.Amount);
        }
        break;
    }
    repeat = await Repeat();
  } while (repeat == true);
}

async function Repeat() {
  let again = await inquirer.prompt([
    {
      name: 'repeat',
      type: 'list',
      choices: ['y', 'n'],
      message: 'Do you want to restart it again',
    },
  ]);
  return again.repeat === 'y' ? true : false;
}
Converter();
