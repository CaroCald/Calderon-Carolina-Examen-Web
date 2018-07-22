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
-- Table structure for table `medicamento`
--

DROP TABLE IF EXISTS `medicamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medicamento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(500) NOT NULL,
  `composicion` int(11) NOT NULL,
  `usadoPara` varchar(500) NOT NULL,
  `numeroPastillas` int(11) NOT NULL,
  `urlMedicamento` varchar(500) NOT NULL,
  `pacienteId` int(11) DEFAULT NULL,
  `gramos` int(11) NOT NULL,
  `estado` tinyint(4) NOT NULL,
  `fechaCaducidad` varchar(100) NOT NULL,
  `medicamentoPeticionId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_6a7eff113aad20300d0ceb79a6b` (`pacienteId`),
  KEY `FK_65f9bb2a283a8e1317e4622283d` (`medicamentoPeticionId`),
  CONSTRAINT `FK_65f9bb2a283a8e1317e4622283d` FOREIGN KEY (`medicamentoPeticionId`) REFERENCES `peticion` (`id`),
  CONSTRAINT `FK_6a7eff113aad20300d0ceb79a6b` FOREIGN KEY (`pacienteId`) REFERENCES `paciente` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicamento`
--

LOCK TABLES `medicamento` WRITE;
/*!40000 ALTER TABLE `medicamento` DISABLE KEYS */;
INSERT INTO `medicamento` VALUES (1,'aspirina',10,'dolor',3,'https://www.xlsemanal.com/wp-content/uploads/sites/3/2017/07/capsulas-pastillas-colores.jpg',1,20,0,'Abril',1),(2,'ibuprofeno',10,'dolor',3,'https://www.xlsemanal.com/wp-content/uploads/sites/3/2017/07/capsulas-pastillas-colores.jpg',1,2,0,'Agosto',2),(3,'emulsol',4,'gripe',3,'https://mejorconsalud.com/wp-content/uploads/2015/11/jarabe-tos-resfriado.jpg',4,2,0,'Agosto',3),(4,'aspirira',4,'gripe',5,'https://www.xlsemanal.com/wp-content/uploads/sites/3/2017/07/capsulas-pastillas-colores.jpg',2,2,0,'Junio',NULL),(5,'buscapina',7,'dolor',8,'https://www.xlsemanal.com/wp-content/uploads/sites/3/2017/07/capsulas-pastillas-colores.jpg',2,2,0,'Junio',NULL),(6,'finalin',4,'dolor',3,'https://www.xlsemanal.com/wp-content/uploads/sites/3/2017/07/capsulas-pastillas-colores.jpg',3,2,0,'Marzo',NULL),(7,'aspirina',3,'dolor',2,'https://www.xlsemanal.com/wp-content\n/uploads/sites/3/2017/07/capsulas-pastillas-colores.jpg',4,12,0,'Enero',NULL),(8,'capsiflu',6,'tos',2,'https://www.xlsemanal.com/wp-content\n/uploads/sites/3/2017/07/capsulas-pastillas-colores.jpg',4,10,0,'Marzo',NULL),(9,'capsiflu',6,'tos',2,'https://www.xlsemanal.com/wp-content\n/uploads/sites/3/2017/07/capsulas-pastillas-colores.jpg',5,10,0,'Marzo',NULL),(10,'glucofage',5,'tos',2,'https://www.xlsemanal.com/wp-content\n/uploads/sites/3/2017/07/capsulas-pastillas-colores.jpg',6,11,0,'Julio',NULL),(11,'aspirina',5,'tos',2,'https://www.xlsemanal.com/wp-content\n/uploads/sites/3/2017/07/capsulas-pastillas-colores.jpg',6,11,0,'Julio',NULL);
/*!40000 ALTER TABLE `medicamento` ENABLE KEYS */;
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
