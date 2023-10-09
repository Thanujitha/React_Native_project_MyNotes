-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.26 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for note_react
CREATE DATABASE IF NOT EXISTS `note_react` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `note_react`;

-- Dumping structure for table note_react.category
CREATE TABLE IF NOT EXISTS `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `url` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table note_react.category: ~3 rows (approximately)
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` (`id`, `name`, `url`) VALUES
	(4, 'Travel', 'https://www.clipartkey.com/mpngs/m/44-440439_tour-and-travel-logo-png.png'),
	(5, 'Work', 'https://cdn.dribbble.com/users/840922/screenshots/2263406/worker-logo.jpg'),
	(6, 'Study', 'https://cdn.icon-icons.com/icons2/1859/PNG/512/student3_117884.png');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;

-- Dumping structure for table note_react.note
CREATE TABLE IF NOT EXISTS `note` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL DEFAULT '0',
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `date_time` datetime NOT NULL,
  `category_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `img_path` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_note_category` (`category_id`),
  KEY `FK_note_user` (`user_id`),
  CONSTRAINT `FK_note_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `FK_note_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table note_react.note: ~11 rows (approximately)
/*!40000 ALTER TABLE `note` DISABLE KEYS */;
INSERT INTO `note` (`id`, `title`, `description`, `date_time`, `category_id`, `user_id`, `img_path`) VALUES
	(1, 'Iddi7', 'Yxjuyd', '2023-09-22 19:03:29', 4, 1, NULL),
	(2, 'Yyyyyf', 'Gugyf6d', '2023-09-22 19:08:05', 4, 2, NULL),
	(3, 'Ywfjs', 'Hsvwg', '2023-09-22 19:09:12', 5, 2, NULL),
	(4, 'Hhw', 'Uge', '2023-09-22 19:10:59', 5, 2, NULL),
	(5, 'Hheue', 'Jj9u9wi', '2023-09-22 19:11:42', 6, 1, NULL),
	(6, 'Gg5', 'Ggu7', '2023-09-22 19:23:47', 5, 2, NULL),
	(7, '', 'Ggu7', '2023-09-22 19:26:47', 4, 2, NULL),
	(8, '66tt', '', '2023-09-22 19:27:12', 6, 1, NULL),
	(9, 'Yyt', 'Tt', '2023-09-22 19:28:06', 5, 1, NULL),
	(10, 'Ggph6f', 'Tufyfihih8u', '2023-09-22 19:29:22', 4, 3, NULL),
	(11, 'Hhauq', 'J9oemw', '2023-09-22 21:40:47', 5, 1, NULL),
	(12, 'Sfhffh', 'Edffscsgegege\nfwfwfwfegr\negrhtntnuimyhr\n3grjykukth', '2023-09-28 00:13:44', 4, 5, NULL),
	(13, 'Test', 'Jgsuwpgjud 8/', '2023-09-28 19:40:23', 5, 6, NULL);
/*!40000 ALTER TABLE `note` ENABLE KEYS */;

-- Dumping structure for table note_react.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mobile_no` int NOT NULL DEFAULT '0',
  `f_name` varchar(50) DEFAULT NULL,
  `l_name` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `user_type_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_user_user_type` (`user_type_id`),
  CONSTRAINT `FK_user_user_type` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table note_react.user: ~6 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `mobile_no`, `f_name`, `l_name`, `password`, `user_type_id`) VALUES
	(1, 756485353, 'Thanujitha', 'Dilshan', '123', 1),
	(2, 714661671, 'Thanujitha ', 'Dilshan ', '123', 1),
	(3, 753453676, 'ABC', 'Hfeyio', '123', NULL),
	(4, 756485367, 'Thanujitha ', 'Dilshan ', '123', NULL),
	(5, 756456432, 'Thanujitha ', 'Dilshan ', '123', NULL),
	(6, 756485394, 'Thanujitha', 'Dilshan ', '123', NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- Dumping structure for table note_react.user_type
CREATE TABLE IF NOT EXISTS `user_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table note_react.user_type: ~2 rows (approximately)
/*!40000 ALTER TABLE `user_type` DISABLE KEYS */;
INSERT INTO `user_type` (`id`, `name`) VALUES
	(1, 'Employee');
/*!40000 ALTER TABLE `user_type` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
