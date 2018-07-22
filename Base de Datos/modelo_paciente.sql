-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: modelo
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `paciente`
--

DROP TABLE IF EXISTS `paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paciente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(500) NOT NULL,
  `apellido` varchar(500) NOT NULL,
  `edad` int(11) NOT NULL,
  `fecha` varchar(500) NOT NULL,
  `hijos` int(11) NOT NULL,
  `tieneSeguro` varchar(10) NOT NULL,
  `urlPaciente` varchar(500) NOT NULL,
  `pacienteIdId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_c4ab80ca3f3a769cf1951e3b888` (`pacienteIdId`),
  CONSTRAINT `FK_c4ab80ca3f3a769cf1951e3b888` FOREIGN KEY (`pacienteIdId`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente`
--

LOCK TABLES `paciente` WRITE;
/*!40000 ALTER TABLE `paciente` DISABLE KEYS */;
INSERT INTO `paciente` VALUES (1,'Carlos','Calderon',23,'Septiembre',3,'No','http://pezal.com/UserFiles/Image/kontakt/PiotrZaleskiSS.jpg',1),(2,'Carlos','Andrade',33,'Marzo',2,'Si','http://pezal.com/UserFiles/Image/kontakt/PiotrZaleskiSS.jpg',1),(3,'Carlos','Lopez',21,'Enero',1,'Si','http://pezal.com/UserFiles/Image/kontakt/PiotrZaleskiSS.jpg',1),(4,'Carlos','Manzano',32,'Febrero',1,'Si','http://pezal.com/UserFiles/Image/kontakt/PiotrZaleskiSS.jpg',6),(5,'Jesica','Manzano',34,'Febrero',2,'Si','http://henaresaldia.com/wp-content/uploads/2016/10/user-clipart-dagobert83_female_user_icon.png',2),(6,'Jesica','Gutierrez',22,'Julio',2,'Si','http://henaresaldia.com/wp-content/uploads/2016/10/user-clipart-dagobert83_female_user_icon.png',2),(7,'Jesica','Almeida',23,'Julio',1,'Si','http://henaresaldia.com/wp-content/uploads/2016/10/user-clipart-dagobert83_female_user_icon.png',2),(8,'Jesica','Jaramillo',44,'Julio',4,'Si','http://henaresaldia.com/wp-content/uploads/2016/10/user-clipart-dagobert83_female_user_icon.png',3),(9,'Jesica','Gonzalez',56,'Agosto',4,'Si','http://henaresaldia.com/wp-content/uploads/2016/10/user-clipart-dagobert83_female_user_icon.png',3),(10,'Marcela','Gonzalez',56,'Agosto',4,'Si','http://henaresaldia.com/wp-content/uploads/2016/10/user-clipart-dagobert83_female_user_icon.png',4),(11,'Marcela','Almeida',22,'Agosto',4,'Si','http://henaresaldia.com/wp-content/uploads/2016/10/user-clipart-dagobert83_female_user_icon.png',4),(12,'Marcela','Martin',44,'Agosto',2,'Si','http://henaresaldia.com/wp-content/uploads/2016/10/user-clipart-dagobert83_female_user_icon.png',4),(13,'Luis','Jose',33,'Enero',1,'Si','http://pezal.com/UserFiles/Image/kontakt/PiotrZaleskiSS.jpg',5),(14,'Lucas','Garcia',22,'Marzo',1,'Si','http://pezal.com/UserFiles/Image/kontakt/PiotrZaleskiSS.jpg',5),(15,'Andres','Velez',55,'Febrero',2,'Si','http://pezal.com/UserFiles/Image/kontakt/PiotrZaleskiSS.jpg',6),(16,'Veronica','Velez',44,'Enero',2,'Si','http://henaresaldia.com/wp-content/uploads/2016/10/user-clipart-dagobert83_female_user_icon.png',7),(17,'Liz','Lopez',55,'Marzo',2,'Si','http://henaresaldia.com/wp-content/uploads/2016/10/user-clipart-dagobert83_female_user_icon.png',7);
/*!40000 ALTER TABLE `paciente` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-22 14:34:55
