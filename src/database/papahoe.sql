-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: localhost    Database: papahoe
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP DATABASE IF EXISTS papahoe;
CREATE DATABASE papahoe;
USE papahoe;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Papa Hoe'),(2,'FCS'),(3,'Octopus'),(4,'Captain Fins'),(5,'Futures'),(6,'Creatures');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Surfboards'),(2,'Accesorios'),(3,'Complementos'),(4,'Custom Board');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'‍Negro',NULL),(2,'‍Blanco',NULL),(3,'‍Amarillo',NULL),(4,'‍Rojo',NULL),(5,'‍Azul',NULL),(6,'‍Verde',NULL),(7,'‍Violeta',NULL),(8,'‍Anaranjado',NULL),(9,'‍Marrón',NULL),(10,'‍Gris',NULL),(11,'‍Plateado',NULL),(12,'‍Dorado',NULL),(13,'‍Amarillo Patito',NULL),(14,'‍Rosa Pálido',NULL),(15,'‍Celeste',NULL),(16,'‍Verde Agua',NULL),(17,'‍Lavanda',NULL),(18,'‍Salmón',NULL),(19,'‍Beige',NULL),(20,'‍Marfil',NULL),(21,'‍Textura',NULL);
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fins`
--

DROP TABLE IF EXISTS `fins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `conditions` text COLLATE utf8_unicode_ci,
  `pros` text COLLATE utf8_unicode_ci,
  `cons` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fins`
--

LOCK TABLES `fins` WRITE;
/*!40000 ALTER TABLE `fins` DISABLE KEYS */;
INSERT INTO `fins` VALUES (1,'‍Single Fin','Las quillas Simples o \"Single Fins\" se utilizan sobre todo para longboard surfing. Este set-up es a veces considerado un poco anticuado, pero sigue siendo un clásico gracias a la suave sensación que produce al surfear una ola.\nEstas quillas suelen ser largas y anchas y lo suficientemente grandes para garantizar un buen control de la tabla por sí solas.\n\nPRO\'S\nPermiten una buena velocidad, ya que un menor número de quillas crea menos resistencia.\nSon ideales para realizar giros suaves y lentos.\nEl tamaño de esta quilla única ayuda a evitar derrapes (spins out) en un tubo.\n\n','Condiciones ideales: Olas pequeñas a pequeñas-medias. O bien olas medianas-grandes y poco potentes.','Garantizan una buena velocidad, ya que un menor número de quillas crea menos resistencia.\nSon ideales para realizar giros suaves y lentos.\nAyudan a evitar derrapes (spinning out) en un tubo.','Pueden resultar inestables, especialmente si no estás acostumbrado a usar esta configuración de quillas.\nDificultan los giros rápidos y contundentes.'),(2,'‍Twin Fin','Las quillas Gemelas o \"Twin Fins\" se popularizaron a finales de la década de los 70, cuando Mark Richards empezó a utilizar \"twin-fin fishes\" para ganar cuatro Campeonatos del Mundo consecutivos. En esa época, el mundo descubrió que las aletas gemelas ofrecían una maniobrabilidad y velocidad adicionales.','Condiciones ideales: Olas pequeñas y medianas.','Es más estable que una \"Single\" y proporciona una gran maniobrabilidad y velocidad.','Puede sentirse un poco \"holgada\" y dificultar el giro de cola en olas más grandes, ya que la cola podría deslizarse.'),(3,'‍Thruster Fin','Las \"Thruster Fins\" o quillas Propulsoras, son actualmente la configuración más popular para la mayoría de los surfistas de todos los niveles.\nEn 1980, el australiano Simon Anderson, frustrado por el hecho de que las aletas gemelas no \"aguantaban\" lo suficiente en olas grandes, tuvo la idea de una configuración de tres aletas de igual tamaño.\nLa aleta extra colocada en el centro, en la parte posterior de la cola, proporciona más estabilidad y maniobrabilidad. La configuración de los propulsores ha desempeñado un papel importante en la evolución del surf de alto rendimiento, haciendo posible muchas maniobras radicales.','Condiciones ideales: (Super adaptable) Perfecta para divertirse cuando las condiciones son épicas. Perfecta estabilidad en olas fuertes y empinadas y en tubos.','Gran maniobrabilidad y estabilidad. Ésta es una gran configuración de aleta para los trucos de alto rendimiento.','Te frena. La aleta trasera crea más resistencia en el extremo de la tabla de surf.'),(4,'‍Quad Fin','La configuración de cuatro quillas o \"Quad Fins\" toma algunas características del setup de las \"Twin Fin\" y otro poco de las \"Thruster\". Los Quads pueden ser geniales en olas pequeñas, especialmente si las quillas traseras están situadas más hacia los bordes externos de la tabla. Esto ayuda a los surfistas a generar velocidad, incluso en olas débiles, y ayuda a hacer giros rápidos, un poco como lo haría una aleta gemela, pero con un control extra.\nLas Quads son también perfectas para los amantes de las Big Hollow (grandes olas tubulares) porque confieren un mayor agarre en las olas empinadas. Los surfistas avanzados disfrutan de la velocidad extra que se obtiene al no tener una quilla central, y de la sujeción adicional en las olas más altas, gracias a su dobles quillas cerca de los cantos.','Condiciones ideales: Darán lo mejor de sí en condiciones de marea limpia, potente y con buenas olas.','Más rápidas que las \"Thruster\".','Se pueden sentir algo inestables, sobre todo si es tu primera sesión con \"Quads\".');
/*!40000 ALTER TABLE `fins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_has_product`
--

DROP TABLE IF EXISTS `order_has_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_has_product` (
  `id` int NOT NULL,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`,`order_id`,`product_id`),
  KEY `fk_order_has_product_order_id_idx` (`order_id`),
  KEY `fk_order_has_product_product_id_idx` (`product_id`),
  CONSTRAINT `fk_order_has_product_order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `fk_order_has_product_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_has_product`
--

LOCK TABLES `order_has_product` WRITE;
/*!40000 ALTER TABLE `order_has_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_has_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `tax` decimal(7,2) DEFAULT NULL,
  `total` decimal(7,2) NOT NULL,
  `shipping_method_id` int NOT NULL,
  `payment_method_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_purchases_shipping_methods1_idx` (`shipping_method_id`),
  KEY `fk_purchases_payment_methods1_idx` (`payment_method_id`),
  KEY `fk_purchases_users1_idx` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_methods`
--

DROP TABLE IF EXISTS `payment_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_methods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_methods`
--

LOCK TABLES `payment_methods` WRITE;
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
INSERT INTO `payment_methods` VALUES (1,'‍Tarjeta de Crédito'),(2,'‍Tarjeta de Débito');
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_has_color`
--

DROP TABLE IF EXISTS `product_has_color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_has_color` (
  `product_id` int NOT NULL,
  `color_id` int NOT NULL,
  PRIMARY KEY (`product_id`,`color_id`),
  KEY `fk_products_has_colors_colors1_idx` (`color_id`),
  KEY `fk_products_has_colors_products1_idx` (`product_id`),
  CONSTRAINT `fk_product_has_color_color_id` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`),
  CONSTRAINT `fk_product_has_color_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_has_color`
--

LOCK TABLES `product_has_color` WRITE;
/*!40000 ALTER TABLE `product_has_color` DISABLE KEYS */;
INSERT INTO `product_has_color` VALUES (1,14),(1,16);
/*!40000 ALTER TABLE `product_has_color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_has_size`
--

DROP TABLE IF EXISTS `product_has_size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_has_size` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `size_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_has_size_size_id_idx` (`size_id`),
  KEY `fk_product_has_size_product_id_idx` (`product_id`),
  CONSTRAINT `fk_product_has_size_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_product_has_size_size_id` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_has_size`
--

LOCK TABLES `product_has_size` WRITE;
/*!40000 ALTER TABLE `product_has_size` DISABLE KEYS */;
INSERT INTO `product_has_size` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,1,6);
/*!40000 ALTER TABLE `product_has_size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount` tinyint NOT NULL DEFAULT '0',
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `features` text COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `stock` int NOT NULL,
  `fin_id` int DEFAULT NULL,
  `brand_id` int NOT NULL,
  `subcategory_id` int NOT NULL,
  `category_id` int NOT NULL,
  `image1` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image3` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image4` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image5` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_brands1_idx` (`brand_id`),
  KEY `fk_products_subcategories1_idx` (`subcategory_id`),
  KEY `fk_products_categories1_idx` (`category_id`),
  KEY `fk_products_fin_id_idx` (`fin_id`),
  CONSTRAINT `fk_products_brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`),
  CONSTRAINT `fk_products_category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `fk_products_fin_id` FOREIGN KEY (`fin_id`) REFERENCES `fins` (`id`),
  CONSTRAINT `fk_products_subcategory_id` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Pipona Royal Glass',300000,0,'Esta tabla es muy pipona y por eso la llamamos Tabla Pipona. Pero esto es sólo una prueba de texto para poder ver si funciona o no','Las características de esta tabla son muy piponas... Claro! Porque es una Tabla Pipona',1,100,2,1,2,1,'PapaHoe_PiponaBlueSea.png',NULL,NULL,NULL,NULL),(2,'B-Cap Papa Hoe',3000,0,'Esta tabla es muy pipona y por eso la llamamos Tabla Pipona. Pero esto es sólo una prueba de texto para poder ver si funciona o no','Las características de esta tabla son muy piponas... Claro! Porque es una Tabla Pipona',1,100,NULL,1,3,3,'B-cap-PapaHoe-Beige.png',NULL,NULL,NULL,NULL),(3,'B-Cap Papa Hoe',3000,0,'Esta tabla es muy pipona y por eso la llamamos Tabla Pipona. Pero esto es sólo una prueba de texto para poder ver si funciona o no','Las características de esta tabla son muy piponas... Claro! Porque es una Tabla Pipona',1,100,NULL,1,3,3,'B-cap-PapaHoe-VerdeAgua.png',NULL,NULL,NULL,NULL),(4,'Vintage Vibes',3000,0,'Esta tabla es muy pipona y por eso la llamamos Tabla Pipona. Pero esto es sólo una prueba de texto para poder ver si funciona o no','Las características de esta tabla son muy piponas... Claro! Porque es una Tabla Pipona',1,100,NULL,1,3,3,'T-Shirt-Vintage-Amarillo.png',NULL,NULL,NULL,NULL),(5,'Eye Surfing',3000,0,'Esta remera es re copada y es de PapaHoe y tiene tejidos muy blandos de algodón','Las características de esta tabla son muy piponas... Claro! Porque es una Tabla Pipona',1,100,NULL,1,3,3,'T-Shirt-PapaHoe-RosaPalido.png',NULL,NULL,NULL,NULL),(6,'T-Shirt Happiness',3000,0,'Esta remera es re copada y es de PapaHoe y tiene tejidos muy blandos de algodón','Las características de esta tabla son muy piponas... Claro! Porque es una Tabla Pipona',1,100,NULL,1,3,3,'T-Shirt-Vintage-Rojo.png',NULL,NULL,NULL,NULL),(7,'Freedom Helix',5000,0,'The Freedom Helix creates the perfect blend of weightlessness, strength and sustainability in a leash that’s one of a kind. Featuring a cord made from natural bio-resin, the Helix ups the performance levels by being lighter and faster than anything you’ve experienced.\nEvery element of the leash has been re-designed for maximum performance and comfort to help you surf free.\nNew Helix construction and Overmould connections straighten under tension to absorb shock and amplify strength.','Cord Thickness: 6.5mm.\nLeash Lengths: 6 ft, 7 ft.\nSpecifically designed for wave sizes 0 - 8 ft',1,100,NULL,2,5,2,'fcs_legropes_freedom-helix-all-round_blue-black_a_1080x.webp',NULL,NULL,NULL,NULL),(8,'Superlite Leash',5000,0,'The Freedom Helix creates the perfect blend of weightlessness, strength and sustainability in a leash that’s one of a kind. Featuring a cord made from natural bio-resin, the Helix ups the performance levels by being lighter and faster than anything you’ve experienced.\nEvery element of the leash has been re-designed for maximum performance and comfort to help you surf free.\nNew Helix construction and Overmould connections straighten under tension to absorb shock and amplify strength.','Cord Thickness: 6.5mm.\nLeash Lengths: 6 ft, 7 ft.\nSpecifically designed for wave sizes 0 - 8 ft',1,100,NULL,6,5,2,'Creatures-Superlite-Comp-Leash-Cement_1080x.webp',NULL,NULL,NULL,NULL),(9,'All Round Essential',5000,0,'Day-to-day performance and reliability in a wide range of conditions.\nInspired by the revolutionary freedom leash. The FCS Essential series leash has been streamlined into a light, durable and super comfortable leash that is built to handle all conditions.','Our Comp 6 is a lightweight Leash for small to medium-sized waves. The 6mm cord and 6ft long Comp Leash is perfect for a broad range of conditions and ideal for day-to-day use.\n	•	Cord thickness: 7mm\n	•	Wave Size: 2 - 8 ft\n	•	In-cuff silicone grip, preventing ankle twisting\n	•	Hypalon pull tab for ease of release\n	•	Extra strength moulded velcro\n	•	Extended overmould reduces tangles\n	•	Contoured horn conforms to shape of ankle',1,100,NULL,2,5,2,'fcs_legropes_allround-essential_charcoal-blood-orange_a_1080x.webp',NULL,NULL,NULL,NULL),(10,'Freedom Helix Competition',5000,0,'Day-to-day performance and reliability in a wide range of conditions.\nInspired by the revolutionary freedom leash. The FCS Essential series leash has been streamlined into a light, durable and super comfortable leash that is built to handle all conditions.','Our Comp 6 is a lightweight Leash for small to medium-sized waves. The 6mm cord and 6ft long Comp Leash is perfect for a broad range of conditions and ideal for day-to-day use.\n	•	Cord thickness: 7mm\n	•	Wave Size: 2 - 8 ft\n	•	In-cuff silicone grip, preventing ankle twisting\n	•	Hypalon pull tab for ease of release\n	•	Extra strength moulded velcro\n	•	Extended overmould reduces tangles\n	•	Contoured horn conforms to shape of ankle',1,100,NULL,2,5,2,'fcs_legropes_comp-essential_white-black_a_1080x.webp',NULL,NULL,NULL,NULL),(11,'Big Wave Essential',5000,0,'FCS Big Wave Essential Leash is the go-to performance FCS leash for waves up to 15 feet. This leash is thick and strong. Great for those outer bombies or rock slabs where losing your board is unthinkable.','	•	Cord thickness: 8mm\n	•	Wave Size: 4 - 12 ft\n	•	Interchangeable smooth rotating nylon cuff and rail saver swivel assembly.\n	•	Machine stainless steel swivels.\n	•	Engineered polyurethane cord.\n	•	Deluxe padded ankle strap.\n	•	Key pocket.\n	•	Wax comb included.',1,100,NULL,2,5,2,'fcs_legropes_bigwave-essential_black.webp',NULL,NULL,NULL,NULL),(12,'T-3 Traction',5000,0,'FCS T-3 Traction is a 3 piece traction, designed to suit performance boards.','	•	3 piece pad\n	•	Double diamond groove & double square groove\n	•	Coffin arch bar\n	•	High tail kick\n	•	Sanded surfaces for enhanced grip\n	•	Ultra thin sensitivity\n	•	Perforated for extra resistance',1,100,NULL,2,6,2,'fcs_grips_t3_black-blue_a_1080x.webp',NULL,NULL,NULL,NULL),(13,'T-2 Traction',5000,0,'FCS T-2 Traction is a 2 piece traction, designed to suit hybrid boards.','2 piece pad\nDouble diamond groove\nCoffin arch bar\nHigh tail kick\nSanded surfaces for enhanced grip\nUltra-thin sensitivity\nPerforated for extra resistance',1,100,NULL,2,6,2,'T2-Traction-Black-Blood_1080x.webp',NULL,NULL,NULL,NULL),(14,'Pipona Sandman',900000,0,'Esta tabla es muy pipona y por eso la llamamos Tabla Pipona. Pero esto es sólo una prueba de texto para poder ver si funciona o no','Las características de esta tabla son muy piponas... Claro! Porque es una Tabla Pipona',1,100,2,1,1,1,'PapaHoe_PiponaSandman.png',NULL,NULL,NULL,NULL),(15,'Rocker Choclo',900000,0,'Esta tabla es muy pipona y por eso la llamamos Tabla Pipona. Pero esto es sólo una prueba de texto para poder ver si funciona o no','Las características de esta tabla son muy piponas... Claro! Porque es una Tabla Pipona',1,100,2,1,2,1,'PapaHoe_RockerChoclo.png',NULL,NULL,NULL,NULL),(16,'Rocker Sky',900000,0,'Esta tabla es muy pipona y por eso la llamamos Tabla Pipona. Pero esto es sólo una prueba de texto para poder ver si funciona o no','Las características de esta tabla son muy piponas... Claro! Porque es una Tabla Pipona',1,100,2,1,2,1,'PapaHoe_RockerSky.png',NULL,NULL,NULL,NULL),(17,'Inner Joint Sunset',900000,0,'Esta tabla es muy pipona y por eso la llamamos Tabla Pipona. Pero esto es sólo una prueba de texto para poder ver si funciona o no','Las características de esta tabla son muy piponas... Claro! Porque es una Tabla Pipona',1,100,3,1,2,1,'PapaHoe_InnerJointSunset.png',NULL,NULL,NULL,NULL),(18,'Inner Joint Acapulco',3000000,0,'Esta tabla es muy Joint y por eso la llamamos Tabla Pipona. Pero esto es sólo una prueba de texto para poder ver si funciona o no','Las características de esta tabla son muy piponas... Claro! Porque es una Tabla Pipona',1,100,3,1,2,1,'PapaHoe_InnerJointAcapulco.png',NULL,NULL,NULL,NULL),(19,'Bananer Split Sea',4500000,0,'Esta tabla es muy Joint y por eso la llamamos Tabla Pipona. Pero esto es sólo una prueba de texto para poder ver si funciona o no','Las características de esta tabla son muy piponas... Claro! Porque es una Tabla Pipona',1,100,3,1,3,1,'PapaHoe_BananerSea.png',NULL,NULL,NULL,NULL),(20,'Bananer Flat Dark Night',4500000,0,'Este Longboard es muy largo y sin punta... y por eso la llamamos Bananer Flat! Pero esto es sólo una prueba de texto para poder ver si funciona o no','Las características de esta tabla son muy piponas... Claro! Porque es una Tabla Pipona',1,100,1,1,3,1,'PapaHoe_BananerFlat.png',NULL,NULL,NULL,NULL),(21,'R8 Legacy Series',13400,0,'The R8 Legacy Series Thruster is a large sized fin with a rake template and balanced feel for increased hold through carves.','Template Category | Rake (drawn-out, control, drive)\nConstruction | Honeycomb\nSize | Large (80+kg\'s)\nRide Number | Balanced - 5.9',1,100,2,5,4,2,'2100_PriceBreak_8379_840x.webp',NULL,NULL,NULL,NULL),(22,'Special Seafom',13900,0,'The CF-Twin es is part of our Limited La Especial Surfboard Fin Collection. It is a multi-color solid fiberglass layup. This set comes with a bonus trailer fin that will add stability and drive to those slick twinnies. Team developed and tested. Feedback has been amazing.','Template Category | Rake (drawn-out, control, drive)\nConstruction | Honeycomb\nSize | Large (80+kg\'s)\nRide Number | Balanced - 5.9',1,100,2,5,4,2,'2116_PriceBreak_8395_840x.webp',NULL,NULL,NULL,NULL),(23,'DANE REYNOLDS Signature',13900,0,'Powerfully unpredictable. Those two words perfectly describe Dane Reynolds surfing. Challenged with trying to improve on what was already a magic fin was no easy task. The new Dane fin is the next level in performance, power and progression. \"They are slightly more upright with larger side fins and a smaller center fin. I find they work in tight transitions, but have a lot of drive. These fins loosen and liven up my boards.-Dane Reynolds --Made with bits of real panther.  Available in Small, Medium and Large This set comes with FCS II Screws.','Template Category | Rake (drawn-out, control, drive)\nConstruction | Honeycomb\nSize | Large (80+kg\'s)\nRide Number | Balanced - 5.9',1,100,3,4,4,2,'2126_Image1_840x.webp','2126_PriceBreak_8418_840x.webp',NULL,NULL,NULL),(24,'DION AGIUS Signature',13900,0,'Based on our best selling CF-Medium template, Dion wanted to add his own touch with solid fiberglass construction for maximum speed and control. “I\'ve always loved the flex and drive from fiberglass fins, the fiberglass maintains a nice flex when drawing out turns, but can still release quickly in tighter arcs and fin throws!!” - Dion Agius\nThis set comes with FCS II Screws.','',1,100,2,4,4,2,'2133_PriceBreak_8425_840x.webp','2133_Image2_840x.webp',NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin'),(2,'visitor');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipping_methods`
--

DROP TABLE IF EXISTS `shipping_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shipping_methods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipping_methods`
--

LOCK TABLES `shipping_methods` WRITE;
/*!40000 ALTER TABLE `shipping_methods` DISABLE KEYS */;
INSERT INTO `shipping_methods` VALUES (1,'Pickup'),(2,'Normal'),(3,'Express');
/*!40000 ALTER TABLE `shipping_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sizes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dimension` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'5\'0\" x 19\" x 2 1/16\" -21.78L'),(2,'5\'7\" x 19\" x 2 7/16\" - 29.86L'),(3,'5\'10\" x 20\" x 2 5/8\" - 33.73L'),(4,'6\'1\" x 20\" x 2 3/4\" - 37.71L'),(5,'6\'4\" x 21\" x 3 1/2\" - 43.2L'),(6,'6\'10\" x 22\" x 3 1/4\" - 53.95L');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category_idx` (`category_id`),
  CONSTRAINT `fk_ subcategories _category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` VALUES (1,'Shortboards',1),(2,'Mid-Boards',1),(3,'Longboards',1),(4,'Fins',2),(5,'Leg Ropes',2),(6,'Tractions',2),(7,'Apparel',3),(8,'Bags & Packs',3),(9,'Custom Board',4);
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_name` varchar(45) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'user',
  `address` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `floor_apt` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `zip_code` int NOT NULL,
  `province` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `phone_number` int NOT NULL,
  `avatar` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `role_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_roles1_idx` (`role_id`),
  CONSTRAINT `fk_users_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-24  0:22:55
