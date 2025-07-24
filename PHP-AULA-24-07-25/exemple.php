<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- <form method= "Get"
action = "action.php">
<input type= "text" name ="nome">
<input type = "submit" value ="none">
    </form> -->

    <form method= "GET" action = "continuacao.php">
        <fieldset id ="pessoal">
        <p>Nome<input type= "text" name ="nome" id= "nome" size="20"
        maxlength="20" placeholder="Ex: Raquel"></p>
</fieldset>
    <input type="submit" value="Enviar">
    </form>
</body>
</html>