-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2018 at 02:10 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dokcomdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `AppointmentId` int(11) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `StartDate` varchar(225) NOT NULL,
  `EndDate` varchar(225) NOT NULL,
  `FromTime` varchar(25) NOT NULL,
  `ToTime` varchar(25) NOT NULL,
  `Description` varchar(225) NOT NULL,
  `CreateUserId` int(11) NOT NULL,
  `CreateDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ModifyUserId` int(11) NOT NULL,
  `ModifyDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `StatusId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`AppointmentId`, `PatientId`, `StartDate`, `EndDate`, `FromTime`, `ToTime`, `Description`, `CreateUserId`, `CreateDate`, `ModifyUserId`, `ModifyDate`, `StatusId`) VALUES
(1, 1, '2018-09-28', '2018-09-28', '10:00', '13:00', 'Test 1', 1, '2018-09-05 08:25:37', 1, '2018-09-05 08:25:37', 1),
(2, 2, '2018-09-29', '2018-09-29', '11:00', '14:00', 'Test 2', 1, '2018-09-05 08:25:37', 1, '2018-09-05 08:25:37', 1),
(3, 2, '2018-9-7', '2018-9-7', '8:30', '9:30', 'Test From The Web', 1, '2018-09-06 10:49:17', 1, '2018-09-06 10:49:17', 1),
(4, 1, '2018-9-7', '2018-9-7', '8:30', '9:30', 'Patient has fever symptoms', 1, '2018-09-06 12:09:22', 1, '2018-09-06 12:09:22', 1),
(5, 3, 'undefined-undefined-undefined', 'undefined-undefined-undefined', 'undefined:undefined', 'undefined:undefined', 's', 1, '2018-11-14 20:05:59', 1, '2018-11-14 20:07:37', 2);

-- --------------------------------------------------------

--
-- Table structure for table `medication`
--

CREATE TABLE `medication` (
  `medicationId` int(10) NOT NULL,
  `name` varchar(250) NOT NULL,
  `description` text NOT NULL,
  `createdate` datetime NOT NULL,
  `status` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `medication`
--

INSERT INTO `medication` (`medicationId`, `name`, `description`, `createdate`, `status`) VALUES
(1, 'pain killers', 'pain killers', '2018-11-19 00:00:00', 1),
(2, 'cough mixer', 'cough mixer', '2018-11-21 10:26:41', 1),
(3, 'e', 'e', '2018-11-21 10:31:46', 1),
(4, 'test 1', 'test 1', '2018-11-21 10:34:31', 1),
(5, 'pain killers 2', 'pain killers 2', '2018-11-21 13:43:55', 1),
(6, 'cough mixer 5', 'cough mixer 5', '2018-11-21 13:47:30', 1);

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `PatientId` int(11) NOT NULL,
  `FirstName` varchar(225) NOT NULL,
  `Surname` varchar(225) NOT NULL,
  `Email` varchar(225) NOT NULL,
  `Cellphone` varchar(25) NOT NULL,
  `AddressLine1` varchar(225) NOT NULL,
  `AddressLine2` varchar(225) NOT NULL,
  `AddressLine3` varchar(225) NOT NULL,
  `City` varchar(225) NOT NULL,
  `PostCode` varchar(225) NOT NULL,
  `GlobalKey` varchar(225) NOT NULL,
  `CreateUserId` int(11) NOT NULL,
  `CreateDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ModifyUserId` int(11) NOT NULL,
  `ModifyDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `StatusId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`PatientId`, `FirstName`, `Surname`, `Email`, `Cellphone`, `AddressLine1`, `AddressLine2`, `AddressLine3`, `City`, `PostCode`, `GlobalKey`, `CreateUserId`, `CreateDate`, `ModifyUserId`, `ModifyDate`, `StatusId`) VALUES
(1, 'Freedom', 'Khanyile', 'freedom@mail.com', '07469586854', 'Jacaranda Lane Boskruin', 'Unit 56', 'Randburg', 'Johanessburg', '2194', '8b386c40-b050-11e8-a6ec-f48e38e878a3', 1, '2018-09-04 16:41:01', 1, '2018-09-04 16:41:24', 1),
(2, 'Ntuthuko', 'Sosibo', 'sosibo@mail.com', '07145869571', '34 K Mlazi', 'Umlazi Township', 'KwaNdengezi', 'Durban', '3001', 'ac807847-b052-11e8-a6ec-f48e38e878a3', 1, '2018-09-04 16:56:16', 1, '2018-09-04 16:56:32', 1),
(3, 'Ndu', 'Systems', 'queries@ndu-systems.net', '+27658143509', 'G36 Eyethu House 270 Marshall St', 'G36 Eyethu House 270 Marshall St', ' ', 'johannesburg', '2001', 'd3ae1591-e837-11e8-a77e-80fa5b45280e', 1, '2018-11-14 20:05:10', 1, '2018-11-14 20:05:10', 1);

-- --------------------------------------------------------

--
-- Table structure for table `prescription`
--

CREATE TABLE `prescription` (
  `prescriptionId` int(10) NOT NULL,
  `patientId` int(10) NOT NULL,
  `diagnosis` text NOT NULL,
  `boolPreasure` varchar(150) NOT NULL,
  `pulseRate` varchar(150) NOT NULL,
  `createdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prescription`
--

INSERT INTO `prescription` (`prescriptionId`, `patientId`, `diagnosis`, `boolPreasure`, `pulseRate`, `createdate`) VALUES
(1, 1, 'Flue', '10', '10', '0000-00-00 00:00:00'),
(8, 3, 'hedeche', '22', '22', '2018-11-21 13:56:32'),
(9, 3, 'sasds', 'dsad', '21', '2018-11-21 14:01:40'),
(10, 3, 'flue johh', '22', '22', '2018-11-21 15:05:10');

-- --------------------------------------------------------

--
-- Table structure for table `prescription_medication_drug`
--

CREATE TABLE `prescription_medication_drug` (
  `id` int(10) NOT NULL,
  `prescriptionId` int(10) NOT NULL,
  `medicationId` int(10) NOT NULL,
  `unit` varchar(150) NOT NULL,
  `dosage` varchar(150) NOT NULL,
  `createdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prescription_medication_drug`
--

INSERT INTO `prescription_medication_drug` (`id`, `prescriptionId`, `medicationId`, `unit`, `dosage`, `createdate`) VALUES
(1, 1, 1, '1', '2 tablets 3 times a day', '2018-11-19 00:00:00'),
(2, 9, 1, '1', '1', '2018-11-21 14:01:40'),
(3, 10, 6, '1', '2 time a day', '2018-11-21 15:05:10'),
(4, 10, 5, '1', '3 time a day', '2018-11-21 15:05:10');

-- --------------------------------------------------------

--
-- Table structure for table `statuses`
--

CREATE TABLE `statuses` (
  `StatusId` int(11) NOT NULL,
  `Description` varchar(225) NOT NULL,
  `CreateUserId` int(11) NOT NULL,
  `CreateDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ModifyUserId` int(11) NOT NULL,
  `ModifyDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `IsActive` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `statuses`
--

INSERT INTO `statuses` (`StatusId`, `Description`, `CreateUserId`, `CreateDate`, `ModifyUserId`, `ModifyDate`, `IsActive`) VALUES
(1, 'active', 1, '2018-08-10 09:06:48', 1, '2018-08-10 09:06:48', 1),
(2, 'disabled', 1, '2018-08-10 09:07:57', 1, '2018-08-10 09:07:57', 1),
(3, 'blocked', 1, '2018-08-10 09:07:57', 1, '2018-08-10 09:07:57', 1),
(4, 'incomplete', 1, '2018-08-10 09:07:57', 1, '2018-08-10 09:07:57', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserId` int(11) NOT NULL,
  `Username` varchar(225) NOT NULL,
  `Email` varchar(225) NOT NULL,
  `Password` varchar(225) NOT NULL,
  `CreateUserId` int(11) NOT NULL,
  `CreateDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ModifyUserId` int(11) NOT NULL,
  `ModifyDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UserFlags` int(11) NOT NULL,
  `StatusId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserId`, `Username`, `Email`, `Password`, `CreateUserId`, `CreateDate`, `ModifyUserId`, `ModifyDate`, `UserFlags`, `StatusId`) VALUES
(1, 'doc@mail.com', 'doc@mail.com', 'pass', 1, '2018-08-10 09:06:25', 1, '2018-08-10 09:06:25', 2, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`AppointmentId`);

--
-- Indexes for table `medication`
--
ALTER TABLE `medication`
  ADD PRIMARY KEY (`medicationId`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`PatientId`);

--
-- Indexes for table `prescription`
--
ALTER TABLE `prescription`
  ADD PRIMARY KEY (`prescriptionId`);

--
-- Indexes for table `prescription_medication_drug`
--
ALTER TABLE `prescription_medication_drug`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `statuses`
--
ALTER TABLE `statuses`
  ADD PRIMARY KEY (`StatusId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `AppointmentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `medication`
--
ALTER TABLE `medication`
  MODIFY `medicationId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `PatientId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `prescription`
--
ALTER TABLE `prescription`
  MODIFY `prescriptionId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `prescription_medication_drug`
--
ALTER TABLE `prescription_medication_drug`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `statuses`
--
ALTER TABLE `statuses`
  MODIFY `StatusId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;