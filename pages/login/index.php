<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ZSTI Korepetycje - Logowanie</title>
  <link rel="stylesheet" href="style.css">
    <link rel="icon" href="img/favicon.ico" type="../../img/zsti.png">
</head>
<body>
  <header>
    <div class="logo">
      <img src="../../img/logo.svg" alt="ZSTI Korepetycje">
    </div>
    <h1>ZSTI Korepetycje</h1>
    <p>Wspieramy uczniów, ucząc się od siebie nawzajem!</p>
  </header>
  <main>
    <section class="login">
      <h2>Zaloguj się do swojego profilu</h2>
      <form action="#">
        <label for="username">Nazwa użytkownika</label>
        <input type="text" id="username" name="username" placeholder="Wpisz nazwę użytkownika">
        <label for="password">Hasło</label>
        <input type="password" id="password" name="password" placeholder="Wpisz hasło">
        <button type="submit">Zaloguj się</button>
      </form>
      <p>Nie masz konta? <a href="pages/register/">Zarejestruj się</a></p>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 ZSTI Korepetycje</p>
  </footer>
</body>
</html>