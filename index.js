// const transactionsDiv = document.getElementById('transactions');

//         function addTransaction() {
//             const description = document.getElementById('description').value;
//             const amount = parseFloat(document.getElementById('amount').value);

//             if (!description || isNaN(amount)) {
//                 alert('Please enter a valid description and amount.');
//                 return;
//             }

//             const transactionDiv = document.createElement('div');
//             transactionDiv.classList.add('transaction');

//             const descriptionSpan = document.createElement('span');
//             descriptionSpan.textContent = description;

//             const amountSpan = document.createElement('span');
//             amountSpan.textContent = `$${amount.toFixed(2)}`;
//             amountSpan.classList.add(amount >= 0 ? 'income' : 'expense');

//             transactionDiv.appendChild(descriptionSpan);
//             transactionDiv.appendChild(amountSpan);

//             transactionsDiv.appendChild(transactionDiv);

//             document.getElementById('description').value = '';
//             document.getElementById('amount').value = '';
//         }

// const transactionsDiv = document.getElementById('transactions');
// const transactionList = document.getElementById('transaction-list');

// const transactions = [];

// function addTransaction() {
//     const description = document.getElementById('description').value;
//     const amount = parseFloat(document.getElementById('amount').value);

//     if (!description || isNaN(amount)) {
//         alert('Please enter a valid description and amount.');
//         return;
//     }

//     const transaction = { description, amount };
//     transactions.push(transaction);

//     const transactionDiv = document.createElement('div');
//     transactionDiv.classList.add('transaction');

//     const descriptionSpan = document.createElement('span');
//     descriptionSpan.textContent = description;

//     const amountSpan = document.createElement('span');
//     amountSpan.textContent = `$${amount.toFixed(2)}`;
//     amountSpan.classList.add(amount >= 0 ? 'income' : 'expense');

//     transactionDiv.appendChild(descriptionSpan);
//     transactionDiv.appendChild(amountSpan);

//     transactionsDiv.appendChild(transactionDiv);

//     updateTransactionList();

//     document.getElementById('description').value = '';
//     document.getElementById('amount').value = '';
// }

// function updateTransactionList() {
//     transactionList.innerHTML = '';

//     transactions.forEach((transaction, index) => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${index + 1}. ${transaction.description} - $${transaction.amount.toFixed(2)}`;
//         transactionList.appendChild(listItem);
//     });
//     console.log('Transaction list updated:', transactionList.innerHTML);
// }

const transactionsDiv = document.getElementById('transactions');
        const transactionList = document.getElementById('transaction-list');
        const totalDisplay = document.getElementById('total-display');

        const transactions = [];

        function addTransaction() {
            const description = document.getElementById('description').value;
            const amount = parseFloat(document.getElementById('amount').value);

            if (!description || isNaN(amount)) {
                alert('Please enter a valid description and amount.');
                return;
            }

            const transaction = { description, amount };
            transactions.push(transaction);

            console.log('Transaction added:', transaction);
            console.log('Updated transactions array:', transactions);

            const transactionDiv = document.createElement('div');
            transactionDiv.classList.add('transaction');

            const descriptionSpan = document.createElement('span');
            descriptionSpan.textContent = description;

            const amountSpan = document.createElement('span');
            amountSpan.textContent = `$${amount.toFixed(2)}`;
            amountSpan.classList.add(amount >= 0 ? 'income' : 'expense');

            transactionDiv.appendChild(descriptionSpan);
            transactionDiv.appendChild(amountSpan);

            transactionsDiv.appendChild(transactionDiv);

            // updateTransactionList();

            document.getElementById('description').value = '';
            document.getElementById('amount').value = '';
        }

        function updateTransactionList() {
            transactionList.innerHTML = '';

            transactions.forEach((transaction, index) => {
                const listItem = document.createElement('ul');
                listItem.textContent = `${index + 1}. ${transaction.description} : $${transaction.amount.toFixed(2)}`;
                transactionList.appendChild(listItem);
            });

            // console.log('Transaction list updated:', transactionList.innerHTML);
        }

        function calculateTotal() {
            const total = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
            totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
            console.log('Total calculated:', total);
        }