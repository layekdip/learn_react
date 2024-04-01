import { useState } from 'react';

import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.js'
import CoreConcepts from './components/CoreConcepts.js'
import TabButton from './components/TabButton.js'

function App() {

let tabContent = 'Please click a button...';

const [ selectedTopic, setSelectedTopic ] = useState('Please click a button...');

function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
}

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                <CoreConcepts
                    title={CORE_CONCEPTS[0].title}
                    description={CORE_CONCEPTS[0].description}
                    image={CORE_CONCEPTS[0].image}
                />
                <CoreConcepts {...CORE_CONCEPTS[1]} />
                <CoreConcepts {...CORE_CONCEPTS[2]} />
                <CoreConcepts {...CORE_CONCEPTS[3]} />
            </ul>
        </section>
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton onSelect={() => handleSelect('component')}>Component</TabButton>
                <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>
            { selectedTopic }
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;