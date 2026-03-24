import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const HorizontalBarChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Quantity',
        data: data.values,
        backgroundColor: 'rgba(0, 212, 255, 0.8)',
        borderColor: 'rgba(0, 212, 255, 1)',
        borderWidth: 2,
        borderRadius: 6,
      }
    ]
  }

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(26, 31, 58, 0.95)',
        titleColor: '#00d4ff',
        bodyColor: '#ffffff',
        borderColor: '#3d2a5f',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => `Quantity: ${context.parsed.x}`
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: '#a0a0c0',
          font: { size: 11 }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: '#a0a0c0',
          font: { size: 11 }
        }
      }
    }
  }

  return (
    <div style={{ height: '300px' }}>
      <Bar data={chartData} options={options} />
    </div>
  )
}

export default HorizontalBarChart
