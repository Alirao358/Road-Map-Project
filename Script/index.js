// let transactions = [];
//         const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
// const transactionForm = document.getElementById('transactionForm');
// const descriptionInput = document.getElementById('description');
// const amountInput = document.getElementById('amount');
// const typeSelect = document.getElementById('type');
// const transactionList = document.getElementById('transactionList');
// const totalIncomeEl = document.getElementById('totalIncome');
// const totalExpensesEl = document.getElementById('totalExpenses');
// const balanceEl = document.getElementById('balance');
// const themeToggle = document.getElementById('themeToggle');
// const sunIcon = document.querySelector('.sun');
// const moonIcon = document.querySelector('.moon');


// //chart
// const ctx = document.getElementById('expenseChart').getContext('2d');
// const expenseChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['No Data'],
//         datasets: [{
//             label: 'Expenses',
//             data: [0],
//             backgroundColor: 'rgba(255, 99, 132, 0.7)',
//             borderColor: 'rgba(255, 99, 132, 1)',
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         },
//         responsive: true,
//         maintainAspectRatio: false
//     }
// });
// transactionForm.addEventListener('submit', function(e) {
//   e.preventDefault();
  
//   const description = descriptionInput.value.trim();
//   const amount = parseFloat(amountInput.value);
//   const type = typeSelect.value;
  
//   if (description === '' || isNaN(amount)) {
//       alert('Please enter valid values');
//       return;
//   }
  
//   const transaction = {
//       id: generateID(),
//       description,
//       amount,
//       type,
//       date: new Date()
//   };
  
//   transactions.push(transaction);
//   updateUI();
  
//   // Reset form
//   transactionForm.reset();
// });

// // Generate random ID
// function generateID() {
//   return Math.floor(Math.random() * 1000000);
// }

// // Delete transaction
// function deleteTransaction(id) {
//   transactions = transactions.filter(transaction => transaction.id !== id);
//   updateUI();
// }

// // Update UI
// function updateUI() {
//   updateTransactionList();
//   updateSummary();
//   updateChart();
  
//   // Save to localStorage
//   localStorage.setItem('transactions', JSON.stringify(transactions));
// }

// // Update transaction list
// function updateTransactionList() {
//   if (transactions.length === 0) {
//       transactionList.innerHTML = `
//           <tr class="text-center">
//               <td colspan="5" class="px-6 py-4 text-gray-500">No transactions yet</td>
//           </tr>
//       `;
//       return;
//   }
  
//   transactionList.innerHTML = '';
  
//   transactions.forEach(transaction => {
//       const row = document.createElement('tr');
//       row.className = transaction.type === 'income' ? 'bg-green-50' : 'bg-red-50';
      
//       const date = new Date(transaction.date);
//       const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
      
//       row.innerHTML = `
//           <td class="px-6 py-4 whitespace-nowrap">${transaction.description}</td>
//           <td class="px-6 py-4 whitespace-nowrap ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}">
//               ${transaction.type === 'income' ? '+' : '-'}$${Math.abs(transaction.amount).toFixed(2)}
//           </td>
//           <td class="px-6 py-4 whitespace-nowrap">
//               <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${transaction.type === 'income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">${transaction.type}</span>
//           </td>
//           <td class="px-6 py-4 whitespace-nowrap">${formattedDate}</td>
//           <td class="px-6 py-4 whitespace-nowrap">
//               <button onclick="deleteTransaction(${transaction.id})" class="btn-delete text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md transition">Delete</button>
//           </td>
//       `;
      
//       transactionList.appendChild(row);
//   });
// }

// // Update summary
// function updateSummary() {
//   const income = transactions
//       .filter(transaction => transaction.type === 'income')
//       .reduce((total, transaction) => total + transaction.amount, 0);
      
//   const expenses = transactions
//       .filter(transaction => transaction.type === 'expense')
//       .reduce((total, transaction) => total + transaction.amount, 0);
      
//   const balance = income - expenses;
  
//   totalIncomeEl.textContent = `$${income.toFixed(2)}`;
//   totalExpensesEl.textContent = `$${expenses.toFixed(2)}`;
//   balanceEl.textContent = `$${balance.toFixed(2)}`;
  
//   if (balance < 0) {
//       balanceEl.classList.remove('text-blue-600');
//       balanceEl.classList.add('text-red-600');
//   } else {
//       balanceEl.classList.remove('text-red-600');
//       balanceEl.classList.add('text-blue-600');
//   }
// }

// // Update chart
// function updateChart() {
//   // Group expenses by month
//   const expenseData = {};
  
//   transactions.forEach(transaction => {
//       if (transaction.type === 'expense') {
//           const date = new Date(transaction.date);
//           const month = months[date.getMonth()];
          
//           if (!expenseData[month]) {
//               expenseData[month] = 0;
//           }
          
//           expenseData[month] += transaction.amount;
//       }
//   });
  
//   const chartLabels = Object.keys(expenseData).length > 0 ? Object.keys(expenseData) : ['No Data'];
//   const chartData = Object.keys(expenseData).length > 0 ? Object.values(expenseData) : [0];
  
//   expenseChart.data.labels = chartLabels;
//   expenseChart.data.datasets[0].data = chartData;
//   expenseChart.update();
// }

// //dark-mode-local-storage
//   themeToggle.addEventListener('click', function() {
//     document.body.classList.toggle('dark-mode');
//     sunIcon.classList.toggle('hidden');
//     moonIcon.classList.toggle('hidden');
    
//     // Save theme preference
//     const isDarkMode = document.body.classList.contains('dark-mode');
//     localStorage.setItem('darkMode', isDarkMode);
// });
// function InitializeApp(){
//   const SavedTheme=localStorage.getItem('darkMode');
//   if(SavedTheme==='true'){
//     document.body.classList.add('dark-mode');
//     sunIcon.classList.remove('hidden');
//     moonIcon.class.add('hidden');
//   }
//   updateUI();
// }
// initializeApp();