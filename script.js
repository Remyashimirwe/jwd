const expenseList = document.getElementById('expense-list');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const totalExpenseDisplay = document.getElementById('total-expense');
function addexpenses() {
    const name = expenseNameInput.value;
    const amount = expenseAmountInput.value;
    totalExpenseDisplay.textContent =parseFloat(totalExpenseDisplay.textContent || 0)+ parseFloat(amount);
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
}
function Expenses() {
    const li = document.createElement('li');
    li.textContent = `${expenseNameInput.value}: $${expenseAmountInput.value}`;
    expenseList.appendChild(li);
}
