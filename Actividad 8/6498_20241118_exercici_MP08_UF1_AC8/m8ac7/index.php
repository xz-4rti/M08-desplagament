<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="m8ac7.css">
</head>

<body>
    <div id="image">
        <div id="top">
            <div id="sky"></div>
        </div>
        <div id="bottom">
            <div id="ground"></div>
        </div>
        <div id="text">
            <h1>HELLO WORLD</h1>
            <h2> PHP: <?php echo phpversion()?> </h2>
            <?php 
            if (ini_get('xdebug.remote_enable') != ''){
                echo '<h2> xDebug on port: '.ini_get('xdebug.remote_port').'</h2>';
            }
            ?>
        </div>
    </div>
</body>
</html>
