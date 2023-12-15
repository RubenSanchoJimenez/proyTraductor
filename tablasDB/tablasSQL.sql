-- --------------------------------------------------------
-- Host:                         2daw.esvirgua.com
-- Versión del servidor:         5.7.44 - MySQL Community Server (GPL)
-- SO del servidor:              Linux
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para user2daw_BD1-19
CREATE DATABASE IF NOT EXISTS `user2daw_BD1-19` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci */;
USE `user2daw_BD1-19`;

-- Volcando estructura para tabla user2daw_BD1-19.almacenados
CREATE TABLE IF NOT EXISTS `almacenados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `texto` text COLLATE utf8_spanish_ci,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=99 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Volcando datos para la tabla user2daw_BD1-19.almacenados: 91 rows
/*!40000 ALTER TABLE `almacenados` DISABLE KEYS */;
INSERT INTO `almacenados` (`id`, `texto`) VALUES
	(11, 'asdasd'),
	(10, 'asdasd'),
	(9, 'asdasdasdasdasd'),
	(8, 'asdadsadasdsad'),
	(12, 'asdasd'),
	(13, 'asdasd'),
	(14, 'asdasd'),
	(15, 'asdasd'),
	(16, 'hola'),
	(17, 'hola2'),
	(18, 'asdasd'),
	(19, 'asdasd'),
	(20, 'asdad'),
	(21, 'asdasdadad'),
	(22, 'asda'),
	(23, 'asdasdasdasd'),
	(24, 'Hola'),
	(25, 'asdasdasdasd'),
	(26, 'asda'),
	(27, 'hola'),
	(28, 'hola'),
	(29, 'asdasdasd'),
	(30, 'asdasd'),
	(31, 'asdas'),
	(32, 'hola'),
	(33, 'hola'),
	(34, 'hola'),
	(35, 'adios'),
	(36, 'aksmdkasdasd'),
	(37, 'leandro es un rey'),
	(38, 'leandro es un rey'),
	(39, 'hola 2'),
	(40, 'hola 3'),
	(41, 'hola 4'),
	(42, 'hola 5'),
	(43, 'leandro es un rey'),
	(44, 'hola 2'),
	(45, 'hola 3'),
	(46, 'hola 4'),
	(47, 'hola 5'),
	(48, 'leandro es un rey'),
	(49, 'hola 2'),
	(50, 'hola 3'),
	(51, 'hola 4'),
	(52, 'hola 5'),
	(53, 'hola'),
	(54, 'hola 2'),
	(55, 'Hola joser'),
	(56, 'VersiÃ³n movÃ­l'),
	(57, 'Jajas'),
	(58, 'Va genial'),
	(59, 'hola'),
	(60, ''),
	(61, ''),
	(62, ''),
	(63, ''),
	(64, 'hola'),
	(65, 'asd'),
	(66, 'asd'),
	(67, ''),
	(68, ''),
	(69, ''),
	(70, ''),
	(71, ''),
	(72, ''),
	(73, 'hola'),
	(74, 'hola'),
	(75, 'holassss'),
	(76, 'holassss'),
	(77, 'asdadas'),
	(78, 'hola'),
	(79, 'Hola'),
	(80, 'Hola 2'),
	(81, 'Hola 3'),
	(82, 'Hola 4'),
	(83, 'Hola'),
	(84, 'Hola 2'),
	(85, 'Hola 3'),
	(86, 'Hola'),
	(87, 'Hola'),
	(88, 'Hola'),
	(89, 'Hila'),
	(90, 'Hila'),
	(91, 'asdasd'),
	(92, 'asdasd'),
	(93, 'asdasd'),
	(94, 'asdasd'),
	(95, 'asdasd'),
	(96, 'asdasd'),
	(97, 'hola'),
	(98, 'hola 2');
/*!40000 ALTER TABLE `almacenados` ENABLE KEYS */;

-- Volcando estructura para tabla user2daw_BD1-19.contenedor
CREATE TABLE IF NOT EXISTS `contenedor` (
  `texto` text COLLATE utf8_spanish_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Volcando datos para la tabla user2daw_BD1-19.contenedor: 1 rows
/*!40000 ALTER TABLE `contenedor` DISABLE KEYS */;
INSERT INTO `contenedor` (`texto`) VALUES
	('Texto supuesta y curiosamente traducido :)');
/*!40000 ALTER TABLE `contenedor` ENABLE KEYS */;

-- Volcando estructura para tabla user2daw_BD1-19.idiomas
CREATE TABLE IF NOT EXISTS `idiomas` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Volcando datos para la tabla user2daw_BD1-19.idiomas: 15 rows
/*!40000 ALTER TABLE `idiomas` DISABLE KEYS */;
INSERT INTO `idiomas` (`id`, `nombre`) VALUES
	(30, 'Korean'),
	(29, 'Japanese'),
	(28, 'Chinese'),
	(27, 'Russian'),
	(26, 'Finnish'),
	(25, 'Norwegian'),
	(24, 'Danish'),
	(23, 'Swedish'),
	(22, 'Dutch'),
	(21, 'Portuguese'),
	(20, 'Italian'),
	(19, 'German'),
	(18, 'French'),
	(17, 'Spanish'),
	(16, 'English');
/*!40000 ALTER TABLE `idiomas` ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
