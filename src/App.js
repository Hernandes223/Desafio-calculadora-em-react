
import Input from './components/Input'
import Button from './components/Buttons'
import { Container, Content, Row, Column } from "./styles";
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');


  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  }

  const handleSumNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }
  
  const handleSubtractionNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    }else {
      const subtraction = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(subtraction));
      setOperation('');
    }
  }
  
  const handleMultiplicationNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    }else {
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplication));
      setOperation('');
    }
  }
  
  const handleDivisionNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    }else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation('');
    }
  }

  const handleEquals = () => {
    if (firstNumber != '0' && operation != '' && setCurrentNumber != '0') {
     switch (operation) {
      case '+':
        handleSumNumber();
        break;
      case '-':
        handleSubtractionNumber();
        break;
      case 'x':
        handleMultiplicationNumber();
        break;
      case '/':
        handleDivisionNumber();
        break;
     
      default:
        break;
     }
    }
  }

  return (
    <Container>
      <Content>
      <Input value = {currentNumber}/>
      <Row>
        <Button label="x" onClick={handleMultiplicationNumber}/>
        <Button label="/" onClick={handleDivisionNumber}/>
        <Button label="C" onClick={handleOnClear}/>
        <Button label="." />
      </Row>
      <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label="-" onClick={handleSubtractionNumber}/>
      </Row>
      <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="+" onClick={handleSumNumber}/>
      </Row>
      <Row>
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="=" onClick={handleEquals} />
      </Row>
      </Content>
    </Container>
  );
}

export default App;
