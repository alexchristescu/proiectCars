-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 16, 2020 at 02:26 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `up_and_running`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `show_discount` (IN `p_rate` FLOAT UNSIGNED)  READS SQL DATA
    DETERMINISTIC
    SQL SECURITY INVOKER
BEGIN
SELECT car_id, make, price,
ROUND(price = (price * p_rate/100), 2) AS discounted, mileage, transmission, description
FROM cars INNER JOIN makes USING (make_id)
ORDER BY price ASC;
END$$

--
-- Functions
--
CREATE DEFINER=`root`@`localhost` FUNCTION `apply_discount` (`normal_price` DECIMAL(8,2) UNSIGNED) RETURNS DECIMAL(8,2) UNSIGNED READS SQL DATA
    DETERMINISTIC
    SQL SECURITY INVOKER
BEGIN
DECLARE discount_price DECIMAL(8,2);
IF normal_price >= 20000 THEN
	SET discount_price = normal_price * .9;
ELSEIF normal_price >= 10000 THEN
	SET discount_price = normal_price * .95;
ELSE
	SET discount_price = normal_price;
END IF;
RETURN discount_price;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `car_id` int(10) UNSIGNED NOT NULL,
  `make_id` smallint(5) UNSIGNED NOT NULL DEFAULT 0,
  `yearmade` year(4) NOT NULL,
  `mileage` mediumint(8) UNSIGNED NOT NULL,
  `transmission` enum('manual','automatic') NOT NULL DEFAULT 'automatic',
  `price` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`car_id`, `make_id`, `yearmade`, `mileage`, `transmission`, `price`) VALUES
(1, 5, 2007, 113688, 'automatic', '1300.95'),
(2, 2, 2007, 126570, 'automatic', '7489.95'),
(3, 12, 2012, 517, 'automatic', '20699.95'),
(4, 16, 2010, 116626, 'automatic', '10498.95'),
(5, 7, 2011, 124694, 'automatic', '20000.95'),
(6, 11, 2005, 95496, 'automatic', '8498.95'),
(7, 5, 2004, 75500, 'automatic', '5949.95'),
(8, 4, 2001, 100145, 'automatic', '9494.95'),
(9, 2, 1999, 102500, 'automatic', '4494.95'),
(10, 16, 2002, 173658, 'automatic', '6494.95'),
(11, 3, 2005, 122250, 'automatic', '11494.95'),
(12, 17, 2002, 155500, 'automatic', '4249.95'),
(13, 1, 1952, 46383, 'manual', '21999.95'),
(14, 10, 2006, 124209, 'automatic', '9064.95'),
(15, 10, 2012, 9811, 'automatic', '24498.95'),
(16, 14, 2005, 130500, 'manual', '7449.95'),
(17, 15, 2007, 84947, 'automatic', '14498.95'),
(18, 6, 1972, 77600, 'manual', '27999.95'),
(19, 8, 2012, 19361, 'automatic', '14497.95'),
(20, 12, 2002, 160550, 'automatic', '4489.95'),
(21, 9, 2005, 94995, 'automatic', '8094.95'),
(22, 5, 2006, 102300, 'automatic', '7049.95'),
(23, 8, 2012, 5238, 'automatic', '15994.95'),
(24, 17, 2005, 70388, 'automatic', '13999.95'),
(25, 13, 2012, 35000, 'automatic', '15494.95'),
(26, 2, 2004, 108694, 'automatic', '10924.95'),
(27, 2, 2005, 123059, 'automatic', '7944.95'),
(28, 13, 2010, 32791, 'automatic', '20449.95'),
(29, 14, 2002, 124334, 'automatic', '5948.95'),
(30, 14, 2011, 27345, 'automatic', '13944.95'),
(31, 12, 2011, 34256, 'automatic', '11944.95'),
(32, 15, 2003, 93494, 'automatic', '9944.95'),
(33, 3, 2005, 139534, 'automatic', '11449.95'),
(34, 7, 2011, 33784, 'automatic', '25848.95'),
(35, 5, 2012, 7834, 'automatic', '16504.95');

--
-- Triggers `cars`
--
DELIMITER $$
CREATE TRIGGER `cars_update` AFTER UPDATE ON `cars` FOR EACH ROW BEGIN
IF NEW.price != OLD.price THEN
INSERT update_log(user_account, action)
VALUES (USER(), CONCAT('Price changed from' , OLD.price, 'to', NEW.price, 'on car_id', OLD.car_id));
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `cars_bk`
--

CREATE TABLE `cars_bk` (
  `car_id` int(10) UNSIGNED NOT NULL,
  `make_id` smallint(5) UNSIGNED NOT NULL DEFAULT 0,
  `yearmade` year(4) NOT NULL,
  `mileage` mediumint(8) UNSIGNED NOT NULL,
  `transmission` enum('manual','automatic') NOT NULL DEFAULT 'automatic',
  `price` decimal(8,2) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cars_bk`
--

INSERT INTO `cars_bk` (`car_id`, `make_id`, `yearmade`, `mileage`, `transmission`, `price`, `description`) VALUES
(1, 5, 2007, 113688, 'automatic', '1300.95', 'Green Chrysler 300. Only one owner, very carefully maintained. Top of the line, and beautifully styled, this is an outstanding ride with great performance.'),
(2, 2, 2007, 126570, 'automatic', '7489.95', 'Red Ford Focus. Great bargain as a family car.'),
(3, 12, 2012, 517, 'automatic', '20699.95', 'Demo model that\'s hardly been out on the road, this red Chevrolet Cruze is just a dream, with just about every option you could ask for. Great fuel economy, too.'),
(4, 16, 2010, 116626, 'automatic', '10498.95', 'Greb Camry in good running condition. Sound electrics and bodywork. Clean interior, appears never to have been smoked in.'),
(5, 7, 2011, 124694, 'automatic', '20000.95', 'Space grey BMW 3 series with beige leather interior. BMW Factory Certified with a 6 year/100,000 mile warranty from in-service date.'),
(6, 11, 2005, 95496, 'automatic', '8498.95', 'Black Jaguar S-Type in perfect working condition. Good electrics and bodywork. Low mileage. New tyres recently fitted.'),
(7, 5, 2004, 75500, 'automatic', '5949.95', 'Black Sebring LX convertible. Very low mileage. Excellent ride. A must-see bargain.'),
(8, 4, 2001, 100145, 'automatic', '9494.95', 'Black SLK-Class convertible. Immaculate interior. Power top and power seats. Runs like new.'),
(9, 2, 1999, 102500, 'automatic', '4494.95', 'Metallic red Mustang convertible. Economy car, very easy on fuel. No negative history. No rust or damage on paintwork.'),
(10, 16, 2002, 173658, 'automatic', '6494.95', 'So much to like about this Silver Toyota 4Runner. Runs well, good paint, tyres, nice sound system.'),
(11, 3, 2005, 122250, 'automatic', '11494.95', 'Black Cadillac SRX. Only one owner. Beautiful SUV.'),
(12, 17, 2002, 155500, 'automatic', '4249.95', 'Silver Passat. Only one owner. Leather interior. Rare bargain.'),
(13, 1, 1952, 46383, 'manual', '21999.95', 'Burgundy Studebaker Roadster with newly rebuilt engine and wide whitewall tyres. Three-speed manual transmission. Runs and drives amazingly.'),
(14, 10, 2006, 124209, 'automatic', '9064.95', 'White Santa Fe. Only one owner. Leather interior and bodywork are in great shape.'),
(15, 10, 2012, 9811, 'automatic', '24498.95', 'Silver Genesis with beige leather and wood trim interior. Great handling and comfort. Low, low mileage. Luxury at an affordable price.'),
(16, 14, 2005, 130500, 'manual', '7449.95', 'Five-speed manual black Civic. Super clean, with 6 CD changer. This one, you must see!'),
(17, 15, 2007, 84947, 'automatic', '14498.95', 'Audi A4 Quattro. Gray with gray leather interior, and glass roof. Excellent value.'),
(18, 6, 1972, 77600, 'manual', '27999.95', 'Citroen D Super with 5 speed manual transmission in fantastic shape. Extremely well maintained, and has obviously been treasured by its owner. A real European classic.'),
(19, 8, 2012, 19361, 'automatic', '14497.95', 'Yellow Fiat 500 POP. Immaculate interior and bodywork. Electrics in perfect order. Tires only slightly worn.'),
(20, 12, 2002, 160550, 'automatic', '4489.95', 'Blue Impala LS with gray interior. Ideal economical vehicle with good gas mileage. Dependable engine, new tyres. Price includes 6 month/8,500 mile warranty.'),
(21, 9, 2005, 94995, 'automatic', '8094.95', 'Gold Pontiac Bonneville with low mileage. Great condition.'),
(22, 5, 2006, 102300, 'automatic', '7049.95', 'Green Town & Country sports van.'),
(23, 8, 2012, 5238, 'automatic', '15994.95', 'Pearl white Fiat 500 sport hatchback. Power glass sunroof and power windows. Only one owner.'),
(24, 17, 2005, 70388, 'automatic', '13999.95', 'Shadow blue Touareg in excellent condition. Heated leather seats, sun roof, and navigation. Really low mileage. '),
(25, 13, 2012, 35000, 'automatic', '15494.95', 'Tan Altima. Low mileage. Excellent condition.'),
(26, 2, 2004, 108694, 'automatic', '10924.95', 'Top of the line black Expedition XLT 5.4 liter 4WD with every conceivable option. A truly exceptional SUV.'),
(27, 2, 2005, 123059, 'automatic', '7944.95', 'Blue Ford Escape. Excellent condition. A real bargain.'),
(28, 13, 2010, 32791, 'automatic', '20449.95', 'Red Pathfinder 4WD. Only one owner. Nicely equipped with just about every feature you could want, including third-row seats.'),
(29, 14, 2002, 124334, 'automatic', '5948.95', 'Silver Accord with sunroof, CD player, and all new tyres. Excellent condition.'),
(30, 14, 2011, 27345, 'automatic', '13944.95', 'Dark gray Civic. Only one owner, very low mileage. Great fuel economy.'),
(31, 12, 2011, 34256, 'automatic', '11944.95', 'Dark gray Malibu. Interior and bodywork in good condition. Low mileage.'),
(32, 15, 2003, 93494, 'automatic', '9944.95', 'Silver Audi A6 with tan interior. Two previous owners. Mechanically sound and good bodywork. New tyres.'),
(33, 3, 2005, 139534, 'automatic', '11449.95', 'Pearl white Cadillac SRX. Electrics, engine, and bodywork all in excellent condition. Only one owner. Tires have about 3/4 of their life span left.'),
(34, 7, 2011, 33784, 'automatic', '25848.95', 'White 3 Series 328i. Low mileage. Bodywork in mint condition. AM/FM stereo, trip computer, power sunroof.'),
(35, 5, 2012, 7834, 'automatic', '16504.95', 'White Chrysler 200 with black interior. Exceptionally low mileage ');

-- --------------------------------------------------------

--
-- Table structure for table `makes`
--

CREATE TABLE `makes` (
  `make_id` smallint(5) UNSIGNED NOT NULL,
  `make` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `makes`
--

INSERT INTO `makes` (`make_id`, `make`) VALUES
(1, 'Studebaker'),
(2, 'Ford'),
(3, 'Cadillac'),
(4, 'Mercedes Benz'),
(5, 'Chrysler'),
(6, 'Citroen'),
(7, 'BMW'),
(8, 'Fiat'),
(9, 'Pontiac'),
(10, 'Hyundai'),
(11, 'Jaguar'),
(12, 'Chevrolet'),
(13, 'Nissan'),
(14, 'Honda'),
(15, 'Audi'),
(16, 'Toyota'),
(17, 'Volkswagen');

-- --------------------------------------------------------

--
-- Table structure for table `update_log`
--

CREATE TABLE `update_log` (
  `user_account` varchar(40) NOT NULL,
  `updated` timestamp NOT NULL DEFAULT current_timestamp(),
  `action` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `update_log`
--

INSERT INTO `update_log` (`user_account`, `updated`, `action`) VALUES
('root@localhost', '2020-09-14 09:34:49', 'Price changed from13494.95to1300.95on car_id1'),
('root@localhost', '2020-09-14 09:35:00', 'Price changed from26895.95to20000.95on car_id5'),
('event_scheduler@localhost', '2020-09-14 09:45:30', 'Inserted by event scheduler'),
('event_scheduler@localhost', '2020-09-14 09:45:35', 'Inserted by event scheduler'),
('event_scheduler@localhost', '2020-09-14 09:45:40', 'Inserted by event scheduler'),
('event_scheduler@localhost', '2020-09-14 09:45:45', 'Inserted by event scheduler'),
('event_scheduler@localhost', '2020-09-14 09:45:50', 'Inserted by event scheduler'),
('event_scheduler@localhost', '2020-09-14 09:45:55', 'Inserted by event scheduler'),
('event_scheduler@localhost', '2020-09-14 09:46:00', 'Inserted by event scheduler'),
('event_scheduler@localhost', '2020-09-14 09:46:05', 'Inserted by event scheduler'),
('event_scheduler@localhost', '2020-09-14 09:46:10', 'Inserted by event scheduler');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`car_id`),
  ADD KEY `yearmade` (`yearmade`),
  ADD KEY `make_id` (`make_id`);

--
-- Indexes for table `cars_bk`
--
ALTER TABLE `cars_bk`
  ADD PRIMARY KEY (`car_id`),
  ADD KEY `yearmade` (`yearmade`),
  ADD KEY `make_id` (`make_id`);

--
-- Indexes for table `makes`
--
ALTER TABLE `makes`
  ADD PRIMARY KEY (`make_id`);

--
-- Indexes for table `update_log`
--
ALTER TABLE `update_log`
  ADD KEY `user_account` (`user_account`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `car_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `cars_bk`
--
ALTER TABLE `cars_bk`
  MODIFY `car_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `makes`
--
ALTER TABLE `makes`
  MODIFY `make_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`localhost` EVENT `dummy_entries` ON SCHEDULE EVERY 5 SECOND STARTS '2020-09-14 12:45:30' ON COMPLETION NOT PRESERVE DISABLE DO INSERT update_log (user_account, action)
VALUES (USER(), 'Inserted by event scheduler')$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
