import React, { useState, useEffect } from 'react';
import SearchInput, {createFilter} from 'react-search-input'
import Navbar from './components/Navbar';
import BatchCards from './components/Card/BatchCards';
import people from './assets/people.json';

const KEYS_TO_FILTERS = [
  "name",
  "jobTitle",
  "location.city",
  "location.state",
  "location.country"
]

function App() {
  const [searchfield, setSearchfield] = useState('');
  const filteredPersons = (searchFilter) => people.filter(createFilter(searchFilter, KEYS_TO_FILTERS))
  return (
    <div>
     <Navbar />
     <BatchCards
        members={filteredPersons(searchfield)}
        numberPerBatch={16}
     />
    </div>
  );
}

export default App;
