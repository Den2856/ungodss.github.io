<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="/assets/css/style.min.css">
	<title>Ваше сообщение отправлено</title>
</head>

<body class="modalback-page">

	<?php
	$back = "<p class='msg__back'><a class='msg__backlink' href=\"\index.html\">Вернуться назад</a></p>";

	if (!empty($_POST['amountsite']) and !empty($_POST['amountmysql']) and !empty($_POST['diskmb']) and !empty($_POST['loadcpu']) and !empty($_POST['loadmysql'])) {
		$amountsite = trim(strip_tags($_POST['amountsite']));
		$amountmysql = trim(strip_tags($_POST['amountmysql']));
		$diskmb = trim(strip_tags($_POST['diskmb']));
		$loadcpu = trim(strip_tags($_POST['loadcpu']));
		$amountssl = trim(strip_tags($_POST['amountssl']));
		$loadmysql = trim(strip_tags($_POST['loadmysql']));

		mail('ssolodchuk@inbox.ru', 'Письмо с demetra-soft', 'Количество сайтов: ' . $amountsite . PHP_EOL . 'Количество MySQL: ' . $amountmysql . PHP_EOL . 'Дисковая квота (MB): ' . $diskmb . PHP_EOL . 'Нагрузка на CPU(CP): ' . $loadcpu . PHP_EOL .'Количество SSL: ' . $amountssl . PHP_EOL .'Нагрузка на MySQL: ' . $loadmysql, 'From: sadad81@bk.ru');

		echo  "<div class='msg__text'>Ваше сообщение успешно отправлено!<Br> Вы получите ответ в ближайшее время<Br></div> $back";
			
		exit;
	} else {
		echo " Для отправки сообщения заполните все поля! $back ";
		exit;
	}
	?>

</body>

</html>