const searchField = document.querySelector('#searchField');

const tableOutput = document.querySelector('.table-output');
const appTable = document.querySelector('.app-table');
const paginationContainer = document.querySelector('.pagination-container');
tableOutput.computedStyleMap.display = 'none';
const tbody = document.querySelector('.table-body')

searchField.addEventListener('keyup', (e) => {
    const searchValue = e.target.value;

    if (searchValue.trim().length > 0) {
        paginationContainer.style.display = 'none';
        tbody.innerHTML = '';
        tbody.innerHTML = '';
        fetch('/search-expenses', {
            body: JSON.stringify({ searchText: searchValue }),
            method: 'POST',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('data', data);
                appTable.style.display = 'none'
                tableOutput.Output.style.display = 'block';

                if (data.length === 0) {
                    tableOutput.innerHTML = 'No results found';
                } else {
                    data.forEach(item => {
                        tbody.innetHTML += `
                    <tr>
                    <td>${item.amount}</td>
                    <td>${item.category}</td>
                    <td>${item.description}</td>
                    <td>${item.date}</td>
                    </tr>
                    `
                    })
                }
            });
    } else {
        tableOutput.style.display = 'none';
        appTable.style.display = 'block';
        paginationContainer.style.display = 'block';
    }
})
