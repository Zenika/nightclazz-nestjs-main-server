function getTeams() {
  return fetch('/teams')
    .then((res) => res.json())
    .then(mapTeamsToRowsTable);
}

function mapTeamsToRowsTable(teams) {
  return teams.map((team) => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = team.name;
    tr.appendChild(td);
    return tr;
  });
}

function refreshTableBody(rows) {
  const tbody = document.querySelector('.teams-data');
  tbody.replaceChildren(...rows);
}

setInterval(() => {
  getTeams().then(refreshTableBody);
}, 1000);
