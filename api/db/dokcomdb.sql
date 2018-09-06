-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2018 at 12:10 PM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

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
(4, 1, '2018-9-7', '2018-9-7', '8:30', '9:30', 'Patient has fever symptoms', 1, '2018-09-06 12:09:22', 1, '2018-09-06 12:09:22', 1);

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
(2, 'Ntuthuko', 'Sosibo', 'sosibo@mail.com', '07145869571', '34 K Mlazi', 'Umlazi Township', 'KwaNdengezi', 'Durban', '3001', 'ac807847-b052-11e8-a6ec-f48e38e878a3', 1, '2018-09-04 16:56:16', 1, '2018-09-04 16:56:32', 1);

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
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`PatientId`);

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
  MODIFY `AppointmentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `PatientId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
