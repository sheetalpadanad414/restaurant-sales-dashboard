# Restaurant Sales Dashboard

A fully responsive, production-ready Restaurant Sales Dashboard built with React and Chart.js, inspired by Power BI dashboards.

## Features

- **KPI Cards**: Total Revenue, Total Quantity, Average Sales
- **Interactive Charts**: 
  - Sales by City (Bar Chart)
  - Sales by Payment Method (Pie Chart)
  - Quantity by Product (Horizontal Bar Chart)
  - Yearly Trends (Line Chart)
- **Advanced Filters**: City, Manager, Product, Date Range
- **Dark Modern UI**: Professional gradient design
- **Fully Responsive**: Works on desktop, tablet, and mobile
- **Static JSON Data**: No backend required

## Tech Stack

- React 18
- Vite
- Chart.js & react-chartjs-2
- CSS3 (Gradients, Flexbox, Grid)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy (zero configuration needed)

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── BarChart.jsx
│   │   ├── PieChart.jsx
│   │   ├── LineChart.jsx
│   │   ├── HorizontalBarChart.jsx
│   │   ├── KPICard.jsx
│   │   ├── KPICard.css
│   │   ├── FilterPanel.jsx
│   │   └── FilterPanel.css
│   ├── data/
│   │   └── salesData.js
│   ├── utils/
│   │   └── dataProcessing.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## License

MIT
