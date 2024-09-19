
import Input from './components/Inputs';
import Button from './components/Buttons';
import { Container,Content,Row } from "./styles";
import { useState } from 'react';


const  App = ()=> {
  const [currentNumber,setCurrentNumber] = useState('0');

  const handleOnClear = () => {setCurrentNumber('0')}

  const handleAddNumber = (number) => {setCurrentNumber(prev => `${number}${prev === '0' ? '' : prev}`)
}
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row> 
            <Button label="*"/>
            <Button label="/"/>  
            <Button label="C" onclick={handleOnClear}/>
            <Button label="x"/>
          </Row>

         <Row> 
           <Button  label="7" onclick={()=>handleAddNumber('7')}/>
           <Button  label="8" onclick={()=>handleAddNumber('8')}/>  
            <Button label="9" onclick={()=>handleAddNumber('9')}/>
            <Button label="-"/>
          </Row>
          
          <Row>
            <Button label="4" onclick={()=>handleAddNumber('4')}/>
            <Button label="5" onclick={()=>handleAddNumber('5')}/>
            <Button label="6" onclick={()=>handleAddNumber('6')}/>
            <Button label="+"/>
          
          </Row>
        
          <Row>
            <Button label="1" onclick={()=>handleAddNumber('1')}/>
            <Button label="2" onclick={()=>handleAddNumber('2')}/>
            <Button label="3" onclick={()=>handleAddNumber('3')}/>
            <Button label="="/>
          </Row>

      </Content>
    </Container>
  );
}

export default App;
