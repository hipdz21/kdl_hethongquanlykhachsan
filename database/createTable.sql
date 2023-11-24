-- 
-- Set character set the client will use to send SQL statements to the server
--
SET NAMES 'utf8';
--
-- Create database `ptttttql_qldvks_n12`
--
CREATE DATABASE ptttttql_qldvks_n12;
--
-- Set default database
--
USE ptttttql_qldvks_n12;

--
-- Create table `tbl_position`
--
CREATE TABLE tbl_position (
  position_id int NOT NULL AUTO_INCREMENT,
  ten_chuc_vu varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (position_id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 5,
AVG_ROW_LENGTH = 4096,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create table `room_type`
--
CREATE TABLE room_type (
  room_type_id int NOT NULL,
  ten_loai_phong varchar(255) NOT NULL DEFAULT '',
  gia_phong float NOT NULL,
  mo_ta text DEFAULT NULL,
  PRIMARY KEY (room_type_id)
)
ENGINE = INNODB,
AVG_ROW_LENGTH = 2730,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create table `room`
--
CREATE TABLE room (
  room_id int NOT NULL AUTO_INCREMENT,
  so_phong varchar(255) NOT NULL DEFAULT '',
  trang_thai varchar(255) NOT NULL DEFAULT '',
  mo_ta text DEFAULT NULL,
  room_type_id int DEFAULT NULL,
  PRIMARY KEY (room_id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 51,
AVG_ROW_LENGTH = 327,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create foreign key
--
ALTER TABLE room
ADD CONSTRAINT FK_room_room_type_room_type_id FOREIGN KEY (room_type_id)
REFERENCES room_type (room_type_id);

--
-- Create table `account`
--
CREATE TABLE account (
  account_id int NOT NULL AUTO_INCREMENT,
  ten_dang_nhap varchar(255) NOT NULL DEFAULT '',
  mat_khau varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (account_id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 1031,
AVG_ROW_LENGTH = 79,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create table `staff`
--
CREATE TABLE staff (
  staff_id int NOT NULL AUTO_INCREMENT,
  ho_ten_nhan_vien varchar(255) NOT NULL DEFAULT '',
  ngay_sinh date NOT NULL,
  gioi_tinh varchar(10) NOT NULL,
  sdt varchar(255) NOT NULL DEFAULT '',
  dia_chi varchar(50) DEFAULT NULL,
  position_id int DEFAULT NULL,
  account_id int DEFAULT NULL,
  PRIMARY KEY (staff_id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 31,
AVG_ROW_LENGTH = 546,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create foreign key
--
ALTER TABLE staff
ADD CONSTRAINT FK_staff_account_account_id FOREIGN KEY (account_id)
REFERENCES account (account_id);

--
-- Create foreign key
--
ALTER TABLE staff
ADD CONSTRAINT FK_staff_position_position_id FOREIGN KEY (position_id)
REFERENCES tbl_position (position_id);

--
-- Create table `check_room`
--
CREATE TABLE check_room (
  ngay_kiem_tra datetime NOT NULL,
  ghi_chu varchar(255) DEFAULT NULL,
  room_id int DEFAULT NULL,
  staff_id int DEFAULT NULL
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create foreign key
--
ALTER TABLE check_room
ADD CONSTRAINT FK_check_room_room_room_id FOREIGN KEY (room_id)
REFERENCES room (room_id);

--
-- Create foreign key
--
ALTER TABLE check_room
ADD CONSTRAINT FK_check_room_staff_staff_id FOREIGN KEY (staff_id)
REFERENCES staff (staff_id);

--
-- Create table `client`
--
CREATE TABLE client (
  client_id int NOT NULL AUTO_INCREMENT,
  ho_ten_khach varchar(255) NOT NULL DEFAULT '',
  gioi_tinh varchar(10) NOT NULL,
  ngay_sinh date NOT NULL,
  SDT varchar(255) NOT NULL DEFAULT '',
  email varchar(50) DEFAULT NULL,
  so_cccd varchar(255) DEFAULT NULL,
  so_ho_chieu varchar(255) DEFAULT NULL,
  account_id int DEFAULT NULL,
  PRIMARY KEY (client_id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 1001,
AVG_ROW_LENGTH = 147,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create foreign key
--
ALTER TABLE client
ADD CONSTRAINT FK_client_account_account_id FOREIGN KEY (account_id)
REFERENCES account (account_id);

--
-- Create table `booking`
--
CREATE TABLE booking (
  booking_id int NOT NULL AUTO_INCREMENT,
  ngay_dat date NOT NULL,
  ngay_nhan_phong datetime NOT NULL,
  ngay_tra_phong datetime NOT NULL,
  ghi_chu varchar(255) DEFAULT '',
  tien_coc float NOT NULL,
  trang_thai varchar(255) NOT NULL DEFAULT '',
  gia_phong float NOT NULL,
  client_id int DEFAULT NULL,
  PRIMARY KEY (booking_id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 50001,
AVG_ROW_LENGTH = 73,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create foreign key
--
ALTER TABLE booking
ADD CONSTRAINT FK_booking_client_client_id FOREIGN KEY (client_id)
REFERENCES client (client_id);

--
-- Create table `booked_room`
--
CREATE TABLE booked_room (
  room_id int DEFAULT NULL,
  booking_id int DEFAULT NULL
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create foreign key
--
ALTER TABLE booked_room
ADD CONSTRAINT FK_booked_room_booking_booking_id FOREIGN KEY (booking_id)
REFERENCES booking (booking_id);

--
-- Create foreign key
--
ALTER TABLE booked_room
ADD CONSTRAINT FK_booked_room_room_room_id FOREIGN KEY (room_id)
REFERENCES room (room_id);

--
-- Create table `bill`
--
CREATE TABLE bill (
  bill_id int NOT NULL AUTO_INCREMENT,
  ngay_xuat_hoa_don datetime NOT NULL,
  tong_tien float NOT NULL,
  thu_them float DEFAULT NULL,
  ghi_chu varchar(255) DEFAULT NULL,
  phuong_thuc_thanh_toan varchar(255) DEFAULT NULL,
  client_id int DEFAULT NULL,
  booking_id int DEFAULT NULL,
  PRIMARY KEY (bill_id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 45425,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create foreign key
--
ALTER TABLE bill
ADD CONSTRAINT FK_bill_booking_booking_id FOREIGN KEY (booking_id)
REFERENCES booking (booking_id);

--
-- Create foreign key
--
ALTER TABLE bill
ADD CONSTRAINT FK_bill_client_client_id FOREIGN KEY (client_id)
REFERENCES client (client_id);

--
-- Create table `service`
--
CREATE TABLE service (
  service_id int NOT NULL AUTO_INCREMENT,
  ten_dich_vu varchar(255) NOT NULL DEFAULT '',
  gia_dich_vu varchar(255) NOT NULL DEFAULT '',
  mo_ta text DEFAULT NULL,
  PRIMARY KEY (service_id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 6,
AVG_ROW_LENGTH = 3276,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create table `used_service`
--
CREATE TABLE used_service (
  ngay_su_dung datetime NOT NULL,
  so_luong int NOT NULL,
  gia_dich_vu float NOT NULL,
  ghi_chu varchar(255) DEFAULT NULL,
  booking_id int DEFAULT NULL,
  service_id int DEFAULT NULL
)
ENGINE = INNODB,
AVG_ROW_LENGTH = 54,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create foreign key
--
ALTER TABLE used_service
ADD CONSTRAINT FK_used_service_booking_booking_id FOREIGN KEY (booking_id)
REFERENCES booking (booking_id);

--
-- Create foreign key
--
ALTER TABLE used_service
ADD CONSTRAINT FK_used_service_service_service_id FOREIGN KEY (service_id)
REFERENCES service (service_id);