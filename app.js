document.getElementById('runQuery').addEventListener('click', async () => {
    const SQL = window.SQL;
    const db = new SQL.Database();
    
    // Create a table and insert some data
    db.run("CREATE TABLE test (id INT, name TEXT)");
    db.run("INSERT INTO test VALUES (1, 'Alice')");
    db.run("INSERT INTO test VALUES (2, 'Bob')");

    // Query the data
    const result = db.exec("SELECT * FROM test");
    
    document.getElementById('output').textContent = JSON.stringify(result, null, 2);
});
