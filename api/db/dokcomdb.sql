-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2018 at 11:19 AM
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
(1, 1, '2018-11-23', '2018-11-23', '12:30', '14:30', 'Check Up ', 1, '2018-11-23 10:30:37', 1, '2018-11-23 10:30:37', 1);

-- --------------------------------------------------------

--
-- Table structure for table `medication`
--

CREATE TABLE `medication` (
  `medicationId` int(10) NOT NULL,
  `name` varchar(250) NOT NULL,
  `description` text NOT NULL,
  `createdate` datetime NOT NULL,
  `StatusId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `medication`
--

INSERT INTO `medication` (`medicationId`, `name`, `description`, `createdate`, `StatusId`) VALUES
(1, 'Flue cough', 'Flue cough', '2018-11-23 10:24:25', 1),
(2, 'Panado', 'Panado', '2018-11-23 12:19:11', 1);

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `PatientId` int(11) NOT NULL,
  `FirstName` varchar(225) NOT NULL,
  `Surname` varchar(225) NOT NULL,
  `IdNumber` varchar(15) NOT NULL,
  `DOB` varchar(10) NOT NULL,
  `Gender` varchar(10) NOT NULL,
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

INSERT INTO `patient` (`PatientId`, `FirstName`, `Surname`, `IdNumber`, `DOB`, `Gender`, `Email`, `Cellphone`, `AddressLine1`, `AddressLine2`, `AddressLine3`, `City`, `PostCode`, `GlobalKey`, `CreateUserId`, `CreateDate`, `ModifyUserId`, `ModifyDate`, `StatusId`) VALUES
(1, 'Freedom', 'Khanyile', '920725050208', '1992-07-25', 'Male', 'freedom.khanyile1@gmail.com', '0746958061', '12 Jacaranda Lane', 'Boskruin', '12 Panther Road', 'Johannesburg', '2100', 'cce1d13f-eef7-11e8-9ddc-f48e38e878a3', 1, '2018-11-23 10:13:55', 1, '2018-11-23 10:20:07', 1);

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
  `createdate` datetime NOT NULL,
  `StatusId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prescription`
--

INSERT INTO `prescription` (`prescriptionId`, `patientId`, `diagnosis`, `boolPreasure`, `pulseRate`, `createdate`, `StatusId`) VALUES
(1, 1, 'Flue', '100', '100', '2018-11-23 10:24:31', 1),
(2, 1, 'Headaches', '50', '50', '2018-11-23 12:19:13', 1);

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
  `createdate` datetime NOT NULL,
  `StatusId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prescription_medication_drug`
--

INSERT INTO `prescription_medication_drug` (`id`, `prescriptionId`, `medicationId`, `unit`, `dosage`, `createdate`, `StatusId`) VALUES
(1, 1, 1, '1', '3', '2018-11-23 10:24:31', 1),
(2, 2, 2, '1', '3', '2018-11-23 12:19:14', 1);

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
  MODIFY `AppointmentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `medication`
--
ALTER TABLE `medication`
  MODIFY `medicationId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `PatientId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `prescription`
--
ALTER TABLE `prescription`
  MODIFY `prescriptionId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `prescription_medication_drug`
--
ALTER TABLE `prescription_medication_drug`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
