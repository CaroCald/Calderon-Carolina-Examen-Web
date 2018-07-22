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
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombreUsuario` varchar(500) NOT NULL,
  `correo` varchar(500) NOT NULL,
  `urlUsuario` varchar(500) NOT NULL,
  `peticionId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_d5f78fd7c189fe9c9622ad3a09c` (`peticionId`),
  CONSTRAINT `FK_d5f78fd7c189fe9c9622ad3a09c` FOREIGN KEY (`peticionId`) REFERENCES `peticion` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Carolina Calderon','caro@epn.edu.ec','https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg',1),(2,'Cristian Calderon','cris@epn.edu.ec','https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg',1),(3,'Cristian Andrade','andrade@epn.edu.ec','https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg',2),(4,'Cristian Jaramillo','jaramillo@epn.edu.ec','https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png',2),(5,'Cristian Lopez','lopez@epn.edu.ec','https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png',NULL),(6,'Maria Vazco','mari@epn.edu.ec','https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png',NULL),(7,'Maria Lopez','lopezmaria@epn.edu.ec','https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png',NULL),(8,'Maria Calderon','mariac@epn.edu.ec','https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png',NULL),(9,'Maria Mena','menamaria@epn.edu.ec','https://openclipart.org/download/247324/abstract-user-flat-1.svg',NULL),(10,'Carlos Villacis','carlos@epn.edu.ec','https://openclipart.org/download/247324/abstract-user-flat-1.svg',NULL),(11,'Carlos Lira','lira@epn.edu.ec','https://openclipart.org/download/247324/abstract-user-flat-1.svg',NULL),(12,'Carlos Ramirez','ramirez@epn.edu.ec','https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg',NULL),(13,'Carlos Mera','mera@epn.edu.ec','https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg',NULL),(14,'Carlos Arellano','arellano@epn.edu.ec','https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg',NULL),(15,'Carlos Martin','martin@epn.edu.ec','https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg',NULL),(16,'Jose Lopez','lopezjose@epn.edu.ec','https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png',NULL),(17,'Jose Mera','josemera@epn.edu.ec','https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png',NULL),(18,'Jose Arellano','josea@epn.edu.ec','https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png',NULL),(19,'Jose Sandoval','sandoval@epn.edu.ec','https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png',NULL),(20,'Jose Calderon','calderonjose@epn.edu.ec','https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png',NULL),(21,'Jose Sanchez','sanchez@epn.edu.ec','https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png',NULL),(22,'Jose Martinez','josem@epn.edu.ec','https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png',NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
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
