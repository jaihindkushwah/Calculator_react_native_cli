import {useState} from 'react';

function isFloat(n: number): boolean {
  return Number(n) === n && n % 1 !== 0;
}

export function useCalculator() {
  const [numbers, setNumber] = useState('');
  const [numbers1, setNumber1] = useState('');
  const [result, setResult] = useState('0');
  const [operators, setOperator] = useState('');

  const clearHandler = () => {
    setNumber('');
    setNumber1('');
    setOperator('');
    setResult('0');
  };
  const setNumberHandler = (value: string) => {
    if (numbers1 && !operators) {
      setNumber1(numbers1 + value);
    } else {
      if (numbers === '' && value === '0') {
        return;
      }
      setNumber(numbers + value);
    }
  };

  const calculate = () => {
    if (numbers && operators) {
      let results = 0;
      switch (operators) {
        case '+':
          results = +numbers1 + +numbers;
          break;
        case '-':
          results = +numbers1 - +numbers;
          break;
        case '*':
          results = +numbers1 * +numbers;
          break;
        case '/':
          results = +numbers1 / +numbers;
          break;
        default:
          break;
      }
      if (isFloat(results)) {
        setResult(results.toFixed(2));
        setNumber1(results.toFixed(2));
      } else {
        setResult(results.toString());
        setNumber1(results.toString());
      }
    }
  };
  const operatorHandler = (value: string) => {
    if (value === '.') {
      if (numbers) {
        if (numbers.includes('.')) {
          return;
        } else {
          setNumber(numbers + value);
          return;
        }
      } else if (operators || !numbers1) {
        setNumber('0' + value);
      }

      if (numbers1 && numbers1.includes('.')) {
        return;
      } else if (numbers1 && !numbers1.includes('.')) {
        setNumber1(numbers1 + '.');
        return;
      }
      setOperator('' as string);
      return;
    }

    if (result !== '0' && !operators) {
      setOperator(value);
    }
    if (!numbers) {
      return;
    }

    if (numbers1 && operators) {
      calculate();
      setNumber('');
      setOperator(value);
    } else if (numbers1 !== result.toString()) {
      setNumber1(numbers);
      setNumber('');
      setOperator(value);
    }
  };
  const clearOneByOneHandler = () => {
    if (numbers) {
      setNumber(numbers.slice(0, -1));
    } else if (operators) {
      setOperator('');
    } else if (numbers1) {
      setNumber1(numbers1.slice(0, -1));
    } else if (result) {
      setResult('0');
    }
  };

  return {
    result,
    numbers,
    setNumber,
    clearHandler,
    operator: operators,
    operatorHandler,
    numbers1,
    setNumber1,
    setNumberHandler,
    calculate,
    setOperator,
    clearOneByOneHandler,
  };
}
