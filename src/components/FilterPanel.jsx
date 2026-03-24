import React from 'react'
import './FilterPanel.css'

const FilterPanel = ({ filters, setFilters, data }) => {
  const cities = [...new Set(data.map(item => item.city))].sort()
  const managers = [...new Set(data.map(item => item.manager))].sort()
  const products = [...new Set(data.map(item => item.product))].sort()

  const handleCheckboxChange = (filterType, value) => {
    setFilters(prev => {
      const currentValues = prev[filterType]
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value]
      return { ...prev, [filterType]: newValues }
    })
  }

  const handleDateChange = (dateType, value) => {
    setFilters(prev => ({ ...prev, [dateType]: value }))
  }

  const clearFilters = () => {
    setFilters({
      cities: [],
      managers: [],
      products: [],
      startDate: null,
      endDate: null
    })
  }

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h2>Filters</h2>
        <button className="clear-btn" onClick={clearFilters}>Clear All</button>
      </div>

      <div className="filter-section">
        <h3>City</h3>
        <div className="filter-options">
          {cities.map(city => (
            <label key={city} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.cities.includes(city)}
                onChange={() => handleCheckboxChange('cities', city)}
              />
              <span>{city}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Manager</h3>
        <div className="filter-options">
          {managers.map(manager => (
            <label key={manager} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.managers.includes(manager)}
                onChange={() => handleCheckboxChange('managers', manager)}
              />
              <span>{manager}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Product</h3>
        <div className="filter-options">
          {products.map(product => (
            <label key={product} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.products.includes(product)}
                onChange={() => handleCheckboxChange('products', product)}
              />
              <span>{product}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Date Range</h3>
        <div className="date-inputs">
          <input
            type="date"
            value={filters.startDate || ''}
            onChange={(e) => handleDateChange('startDate', e.target.value)}
            className="date-input"
          />
          <input
            type="date"
            value={filters.endDate || ''}
            onChange={(e) => handleDateChange('endDate', e.target.value)}
            className="date-input"
          />
        </div>
      </div>
    </div>
  )
}

export default FilterPanel
