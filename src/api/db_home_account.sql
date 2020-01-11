/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : db_home_account

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-01-11 15:11:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `income`
-- ----------------------------
DROP TABLE IF EXISTS `income`;
CREATE TABLE `income` (
  `income_id` int(11) NOT NULL,
  `income_name` varchar(255) NOT NULL,
  `income_amount` float NOT NULL,
  `income_date` date NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`income_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of income
-- ----------------------------
INSERT INTO `income` VALUES ('1', 'ขายครีม', '2000', '2020-01-11', '1', '2020-01-11 14:55:24');
INSERT INTO `income` VALUES ('2', 'ขายเสื้อ', '1500', '2020-01-11', '1', '2020-01-11 14:56:02');

-- ----------------------------
-- Table structure for `notify`
-- ----------------------------
DROP TABLE IF EXISTS `notify`;
CREATE TABLE `notify` (
  `notify_id` int(11) NOT NULL,
  `notify_name` varchar(255) NOT NULL,
  `notify_date` datetime NOT NULL,
  `amount` varchar(255) NOT NULL,
  `date_limit` date NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`notify_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of notify
-- ----------------------------
INSERT INTO `notify` VALUES ('1', 'ค่าที่พัก', '2020-02-01 08:00:00', '2000', '2020-02-02', '1', '2020-01-11 15:02:18');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_sname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'สมชาย', 'สมดี', 'somchai', '1234');

-- ----------------------------
-- Table structure for `widthdraw`
-- ----------------------------
DROP TABLE IF EXISTS `widthdraw`;
CREATE TABLE `widthdraw` (
  `widthdraw_id` int(11) NOT NULL,
  `widthdraw_name` varchar(255) NOT NULL,
  `widthdraw_type_id` int(11) NOT NULL,
  `widthdraw_amount` float NOT NULL,
  `widthdraw_date` date NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`widthdraw_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of widthdraw
-- ----------------------------
INSERT INTO `widthdraw` VALUES ('1', 'ค่ามือถือ', '3', '200', '2020-01-11', '1', '2020-01-11 14:58:33');

-- ----------------------------
-- Table structure for `widthdraw_type`
-- ----------------------------
DROP TABLE IF EXISTS `widthdraw_type`;
CREATE TABLE `widthdraw_type` (
  `widthdraw_type_id` int(11) NOT NULL,
  `widthdraw_type_name` varchar(255) NOT NULL,
  PRIMARY KEY (`widthdraw_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of widthdraw_type
-- ----------------------------
INSERT INTO `widthdraw_type` VALUES ('1', 'อาหาร');
INSERT INTO `widthdraw_type` VALUES ('2', 'ของใช้ส่วนตัว');
INSERT INTO `widthdraw_type` VALUES ('3', 'อื่นๆ');
