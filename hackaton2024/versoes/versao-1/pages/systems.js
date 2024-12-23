export function initSystems(container) {
    const template = `
        <div class="systems-page">
            <h1>Systems Management</h1>
            <form id="systemForm">
                <div class="form-group">
                    <label for="siscodigo">System Code</label>
                    <input type="number" id="siscodigo" required>
                </div>
                <div class="form-group">
                    <label for="sisnome">System Name</label>
                    <input type="text" id="sisnome" required>
                </div>
                <div class="form-group">
                    <label for="sisativo">Active</label>
                    <input type="checkbox" id="sisativo">
                </div>
                <button type="submit">Save System</button>
            </form>
            <table id="systemsTable">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    `;

    container.innerHTML = template;

    const form = document.getElementById('systemForm');
    const table = document.getElementById('systemsTable').querySelector('tbody');

    function loadSystems() {
        const systems = JSON.parse(localStorage.getItem('systems') || '[]');
        table.innerHTML = systems.map(system => `
            <tr>
                <td>${system.siscodigo}</td>
                <td>${system.sisnome}</td>
                <td>${system.sisativo ? 'Yes' : 'No'}</td>
                <td>
                    <button onclick="deleteSystems(${system.siscodigo})">Delete</button>
                </td>
            </tr>
        `).join('');
    }

    window.deleteSystems = function(code) {
        let systems = JSON.parse(localStorage.getItem('systems') || '[]');
        systems = systems.filter(s => s.siscodigo !== code);
        localStorage.setItem('systems', JSON.stringify(systems));
        loadSystems();
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const systems = JSON.parse(localStorage.getItem('systems') || '[]');
        const newSystem = {
            siscodigo: parseInt(document.getElementById('siscodigo').value),
            sisnome: document.getElementById('sisnome').value,
            sisativo: document.getElementById('sisativo').checked
        };

        systems.push(newSystem);
        localStorage.setItem('systems', JSON.stringify(systems));
        form.reset();
        loadSystems();
    });

    loadSystems();
}