import React, { useState, useMemo } from 'react'
import { salesData } from './data/salesData'
import KPICard from './components/KPICard'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'
import LineChart from './components/LineChart'
import HorizontalBarChart from './components/HorizontalBarChart'
import FilterPanel from './components/FilterPanel'
import { filterData, calculateKPIs, aggregateByCity, aggregateByPayment, aggregateByProduct, aggregateByYear } from './utils/dataProcessing'
import './App.css'

function App() {
  const [filters, setFilters] = useState({
    cities: [],
    managers: [],
    products: [],
    startDate: null,
    endDate: null
  })

  const filteredData = useMemo(() => filterData(salesData, filters), [filters])
  const kpis = useMemo(() => calculateKPIs(filteredData), [filteredData])
  const cityData = useMemo(() => aggregateByCity(filteredData), [filteredData])
  const paymentData = useMemo(() => aggregateByPayment(filteredData), [filteredData])
  const productData = useMemo(() => aggregateByProduct(filteredData), [filteredData])
  const yearData = useMemo(() => aggregateByYear(filteredData), [filteredData])

  return (
    <div className="app">
      <header className="header">
        <h1>Restaurant Sales Dashboard</h1>
        <p>Real-time analytics and insights</p>
      </header>

      <div className="dashboard-container">
        <aside className="sidebar">
          <FilterPanel filters={filters} setFilters={setFilters} data={salesData} />
        </aside>

        <main className="main-content">
          <section className="kpi-section">
            <KPICard 
              title="Total Revenue" 
              value={`${kpis.totalRevenue.toFixed(2)}K`}
              icon="💰"
            />
            <KPICard 
              title="Total Quantity" 
              value={`${kpis.totalQuantity.toFixed(2)}K`}
              icon="📦"
            />
            <KPICard 
              title="Average Sales" 
              value={kpis.averageSales.toFixed(2)}
              icon="📊"
            />
          </section>

          <section className="charts-grid">
            <div className="chart-card">
              <h3>Sum of Price by City</h3>
              <BarChart data={cityData} />
            </div>

            <div className="chart-card">
              <h3>Sum of Price by Payment Method</h3>
              <PieChart data={paymentData} />
            </div>

            <div className="chart-card">
              <h3>Sum of Quantity by Product</h3>
              <HorizontalBarChart data={productData} />
            </div>

            <div className="chart-card">
              <h3>Sum of Price by Year</h3>
              <LineChart data={yearData} />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
