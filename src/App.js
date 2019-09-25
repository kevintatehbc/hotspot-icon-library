import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import IconSection from './components/IconSection/IconSection';
import Icon from './components/Icon/Icon';
import PlusIcon from './components/PlusIcon/PlusIcon';
import NumberedIcon from './components/NumberedIcon/NumberedIcon';

function App() {
  return (
    <section id="icons">
      <Title />

      <IconSection>
        <PlusIcon />
      </IconSection>
      <IconSection>
        <div>
          <NumberedIcon number={1} classList={"mr25"}/>
          <NumberedIcon number={2} classList={"mr25"}/>
          <NumberedIcon number={3} classList={"mr25"}/>
        </div>
      </IconSection>
      <IconSection>
        <Icon classList={"pulse mr25"}/>
        <NumberedIcon classList={"pulse mr25"} />
      </IconSection>
    </section>
  );
}

export default App;
