const insert = document.querySelector('#insert');

window.addEventListener('keydown', function(e) {
    insert.innerHTML = `
        <div class='color'>
            <table class='studentTable'>
                <tr>
                    <th>Property</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Key</td>
                    <td>${e.key}</td>
                </tr>
                <tr>
                    <td>Code</td>
                    <td>${e.code}</td>
                </tr>
                <tr>
                    <td>KeyCode</td>
                    <td>${e.keyCode}</td>
                </tr>
            </table>
        </div>
    `;
});
