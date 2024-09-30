
import Input from './components/Inputs';
import Button from './components/Buttons';
import { Container,Content,Row } from "./styles";
import { useState } from 'react';


const  App = ()=> {
  const [currentNumber,setCurrentNumber] = useState('0');
  const [firstNumber, setFirstnumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstnumber('0')
    setOperation('')
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)

  }

  const handleSumNumber = () =>{
    if(firstNumber === '0'){
      setFirstnumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation('')
    
    }
    
  }

  const handleMinusNumber = () =>{
    if(firstNumber === '0'){
      setFirstnumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const sub = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sub));
      setOperation('')
    }
  }

  const handleMultNumber = () =>{
    if(firstNumber === '0'){
      setFirstnumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    }else{
      const mult = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mult));
      setOperation('')
    
    }
    
  }

  const handleDivNumber = () =>{
    if(firstNumber === '0'){
      setFirstnumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    }else{
      const div = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(div));
      setOperation('')
    }
  }

  const handleEquals = () =>{
    if(firstNumber != '0' && operation != '' && currentNumber != 0){
       switch (operation) {
        case '+':
          handleSumNumber()
          setFirstnumber('0')
          break;
        case '-':
          handleMinusNumber()
          setFirstnumber('0')
          break;
        case '/':
          handleDivNumber()
          setFirstnumber('0')
            break;
        case '*':
          handleMultNumber()
          setFirstnumber('0')
                break;
        default:
          break;
       }
    }
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row> 
            <Button label="*" onclick={handleMultNumber}/>
            <Button label="/" onclick={handleDivNumber}/>  
            <Button label="C" onclick={handleOnClear} />
            <Button label="x"/>
          </Row>

         <Row> 
           <Button  label="7" onclick={()=>handleAddNumber('7')}/>
           <Button  label="8" onclick={()=>handleAddNumber('8')}/>  
            <Button label="9" onclick={()=>handleAddNumber('9')}/>
            <Button label="-" onclick={handleMinusNumber}/>
          </Row>
          
          <Row>
            <Button label="4" onclick={()=>handleAddNumber('4')}/>
            <Button label="5" onclick={()=>handleAddNumber('5')}/>
            <Button label="6" onclick={()=>handleAddNumber('6')}/>
            <Button label="+" onclick={handleSumNumber}/>
          
          </Row>
        
          <Row>
            <Button label="1" onclick={()=>handleAddNumber('1')}/>
            <Button label="2" onclick={()=>handleAddNumber('2')}/>
            <Button label="3" onclick={()=>handleAddNumber('3')}/>
            <Button label="=" onclick={handleEquals}/>
          </Row>

      </Content>
    </Container>
  );
}

export default App;
