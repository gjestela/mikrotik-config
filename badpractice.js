<script>
let username = 'username';
let password = 'mySecretPassword';

let sql = "SELECT * FROM TABLE WHERE id=" + window.location.search;

runSql('10.0.20.20', username, password, sql);
  
</script>
