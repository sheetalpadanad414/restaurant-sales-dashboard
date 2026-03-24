export const filterData = (data, filters) => {
  return data.filter(item => {
    if (filters.cities.length > 0 && !filters.cities.includes(item.city)) return false
    if (filters.managers.length > 0 && !filters.managers.includes(item.manager)) return false
    if (filters.products.length > 0 && !filters.products.includes(item.product)) return false
    
    if (filters.startDate) {
      const itemDate = new Date(item.date)
      const startDate = new Date(filters.startDate)
      if (itemDate < startDate) return false
    }
    
    if (filters.endDate) {
      const itemDate = new Date(item.date)
      const endDate = new Date(filters.endDate)
      if (itemDate > endDate) return false
    }
    
    return true
  })
}

export const calculateKPIs = (data) => {
  const totalRevenue = data.reduce((sum, item) => sum + item.price, 0) / 1000
  const totalQuantity = data.reduce((sum, item) => sum + item.quantity, 0) / 1000
  const averageSales = data.length > 0 ? data.reduce((sum, item) => sum + item.price, 0) / data.length : 0
  
  return { totalRevenue, totalQuantity, averageSales }
}

export const aggregateByCity = (data) => {
  const cityMap = {}
  data.forEach(item => {
    cityMap[item.city] = (cityMap[item.city] || 0) + item.price
  })
  
  return Object.entries(cityMap)
    .sort((a, b) => b[1] - a[1])
    .reduce((acc, [city, price]) => {
      acc.labels.push(city)
      acc.values.push(price)
      return acc
    }, { labels: [], values: [] })
}

export const aggregateByPayment = (data) => {
  const paymentMap = {}
  data.forEach(item => {
    paymentMap[item.paymentMethod] = (paymentMap[item.paymentMethod] || 0) + item.price
  })
  
  return Object.entries(paymentMap).reduce((acc, [method, price]) => {
    acc.labels.push(method)
    acc.values.push(price)
    return acc
  }, { labels: [], values: [] })
}

export const aggregateByProduct = (data) => {
  const productMap = {}
  data.forEach(item => {
    productMap[item.product] = (productMap[item.product] || 0) + item.quantity
  })
  
  return Object.entries(productMap)
    .sort((a, b) => b[1] - a[1])
    .reduce((acc, [product, quantity]) => {
      acc.labels.push(product)
      acc.values.push(quantity)
      return acc
    }, { labels: [], values: [] })
}

export const aggregateByYear = (data) => {
  const yearMap = {}
  data.forEach(item => {
    yearMap[item.year] = (yearMap[item.year] || 0) + item.price
  })
  
  return Object.entries(yearMap)
    .sort((a, b) => a[0] - b[0])
    .reduce((acc, [year, price]) => {
      acc.labels.push(year)
      acc.values.push(price)
      return acc
    }, { labels: [], values: [] })
}
