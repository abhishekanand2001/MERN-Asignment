document.addEventListener('DOMContentLoaded', function() {
    // Initial data load
    loadData();
  
   
  });
  
  async function loadData(direction) {
    const month = document.getElementById('month').value;
    const search = document.getElementById('search').value;
  
    const apiUrl = `http://localhost:3000/list-transactions?month=${month}&search=${search}`;
  
    // Fetch data from the API
    const response = await fetch(apiUrl);
    const data = await response.json();
  
    // Update the table with the fetched data
    updateTable(data);
  
    // Fetch statistics data from the API
    const statisticsUrl = `http://localhost:3000/statistics?month=${month}`;
    const statisticsResponse = await fetch(statisticsUrl);
    const statisticsData = await statisticsResponse.json();
  
    // Update statistics
    updateStatistics(statisticsData);
  
    // Fetch bar chart data from the API
    const barChartUrl = `http://localhost:3000/bar-chart?month=${month}`;
    const barChartResponse = await fetch(barChartUrl);
    const barChartData = await barChartResponse.json();
  
    // Update bar chart
    updateBarChart(barChartData);
  
   
  }
  
  function updateTable(data) {
    const tableBody = document.getElementById('transactionTableBody');
    tableBody.innerHTML = ''; // Clear previous data
  
    data.forEach(transaction => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${transaction.product_title}</td>
                      <td>${transaction.description}</td>
                      <td>${transaction.price}</td>`;
      tableBody.appendChild(row);
    });
  }
  
  function updateStatistics(data) {
    document.getElementById('totalSaleAmount').textContent = data.total_sale_amount;
    document.getElementById('totalSoldItems').textContent = data.total_sold_items;
    document.getElementById('totalNotSoldItems').textContent = data.total_not_sold_items;
  }
  
  function updateBarChart(data) {
   
    const barChartElement = document.getElementById('barChart');
    barChartElement.innerHTML = '<p>Bar Chart will be rendered here</p>';
  }
  