
import React, { useState } from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import axiosApi from '../pages/axiosApi';
import '.././App.css'

function SearchForm() {
  const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (searchQuery) => {
    try {
      const response = await axiosApi.get('/cripts', {
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
      const filteredData = response.data.filter(item =>
        item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      setSuggestions(filteredData);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery) {
      fetchSuggestions(newQuery);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (suggestion) => {
    setQuery(suggestion.name);
    setSuggestions([]);
  };

  return (
    <div className="position-relative d-flex flex-column align-items-center">
      <Form className="d-flex w-50 mt-5">
        <Form.Control
          type="search"
          placeholder="Поиск"
          className="me-2"
          aria-label="Поиск"
          value={query}
          onChange={handleInputChange}
        />
        <Form.Select
          aria-label="Пример выбора"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className=" w-auto"
        >
          <option value=""></option>
          <option value="1">Один</option>
          <option value="2">Два</option>
          <option value="3">Три</option>
        </Form.Select>

        {suggestions.length > 0 && (
        <Dropdown.Menu show className="dropdown-menu-custom d-flex mt-2">
          {suggestions.map((suggestion) => (
            <Dropdown.Item
              key={suggestion.id}
              onClick={() => handleSelect(suggestion)}
            >
              {suggestion.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      )}
      </Form>
    
    </div>
  );
}

export default SearchForm;

