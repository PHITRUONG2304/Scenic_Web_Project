-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 19, 2022 lúc 07:41 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `danhlamthangcanh`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `scenic`
--

CREATE TABLE `scenic` (
  `id` int(255) NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `picture` text NOT NULL,
  `description` longtext NOT NULL,
  `region` text NOT NULL,
  `time` text NOT NULL,
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `scenic`
--

INSERT INTO `scenic` (`id`, `name`, `address`, `picture`, `description`, `region`, `time`, `type`) VALUES
(1, 'Phong Nha Kẻ Bàng', 'Quảng Bình', '1_1_1.jpg', 'Quần thể hang động đồi núi và rừng bao quanh với sự đa dạng sinh học của các loài động thực vật', 'Miền Trung', 'Mùa Thu', 'Hang động'),
(2, 'Quần thể Di tích Cố Đô Huế', 'Huế', '2_1_1.jpg', 'Quần thể di tích các công trình cổ của Triều đại nhà Nguyễn dưới thời phong kiến của Việt Nam', 'Miền Trung', 'Mùa Thu', 'Thành phố'),
(3, 'Bà Nà Hills', 'Đà Nẵng', '3_1_1.jpg', 'Là quần thể du lịch nghỉ dưỡng kết hợp vui chơi giải trí đẳng cấp bậc nhất Việt Nam nằm ở độ cao 1.487m so với mực nước biển', 'Miền Trung', 'Mùa Thu', 'Đồi núi'),
(4, 'Thánh địa Mỹ Sơn', 'Quảng Nam', '4_1_1.jpg', 'Quần thể kiến trúc gồm nhiều đền đài Chămpa cùng kiến trúc vô cùng độc đáo', 'Miền Trung', 'Mùa Thu', 'Đồi núi'),
(5, 'Gềnh Đá Đĩa', 'Phú Yên', '5_1_1.jpg', 'Là 1 trong 5 ghềnh đá đĩa trên thế giới có hiện tượng nham thạch phun trào tạo ra hình thù đẹp tuyệt trông rất giống một tổ ong to khổng lồ', 'Miền Trung', 'Mùa Hạ', 'Biển, sông, suối'),
(6, 'Hang rái', 'Ninh Thuận', '6_1_1.jpg', 'Là thắng cảnh những hòn đá xếp chồng lên nhau tạo nên vô số hình thù đa dạng hang động lớn nhỏ đẹp mắt', 'Miền Trung', 'Mùa Đông', 'Hang động'),
(7, 'Vịnh Nha Trang', 'Khánh Hòa', '7_1_1.jpg', 'Là Vịnh đảo có những loài sinh vật biển phong phú, những bãi biển rộng với màu ngọc lam ngoạn mục', 'Miền Trung', 'Mùa Xuân', 'Thành phố'),
(8, 'Mũi né', 'Bình Thuận', '8_1_1.jpg', 'Nơi đây có những triền cát đặc trưng rộng lớn, bờ biển sài ôm sát địa phận và du lịch biển kết hợp trò chơi thể thao mạo hiểm', 'Miền Trung', 'Mùa Thu', 'Đồi núi'),
(9, 'Thành Nhà Hồ', 'Thanh Hóa', '9_1_1.jpg', 'Là di tích lịch sử được xây dưới triều Trần. Đây là một trong những tòa thành lũy bằng đá hiếm hoi còn sót lại trên thế giới', 'Miền Trung', 'Mùa Hạ', 'Thành phố'),
(10, 'Kỳ Co Eo Gió', 'Bình Định', '10_1.jpg', 'Là một bán đảo được bao bọc bởi những dãy núi đá hùng vĩ và một mặt hướng ra biển cùng với hệ thống rạn san hô', 'Miền Trung', 'Mùa Hạ', 'Biển, sông, suối'),
(11, 'Lý Sơn', 'Quãng Ngãi', '11_1.jpg', 'Là một trong những điểm du lịch biển tuyệt vời ở dải đất miền Trung, là huyện đảo duy nhất của tỉnh Quảng Ngãi', 'Miền Trung', 'Mùa Hạ', 'Đồi núi'),
(12, 'Đảo Phú Quý', 'Bình Thuận', '12_1.jpg', 'Sở hữu cảnh vật hoang sơ, những bãi biển trong xanh nhìn thấu tận đáy đẹp đến say lòng người', 'Miền Trung', 'Mùa Hạ', 'Biển, sông, suối'),
(13, 'Vườn quốc gia Pù Mát', 'Nghệ An', '13_1.jpg', 'Bao phủ bởi những cánh rừng hoang sơ và thảm động - thực vật phong phú', 'Miền Trung', 'Mùa Xuân', 'Đồi núi'),
(14, 'Đà Lạt', 'Lâm Đồng', '14_1.jpg', 'Với hàng loạt phong cảnh và khu du lịch đẹp được xếp hạng thắng cảnh quốc gia', 'Miền Trung', 'Mùa Hạ', 'Thành phố'),
(15, 'Biển Thiên Cầm', 'Hà Tĩnh', '15_1.jpg', 'Biển Thiên Cầm với vẻ đẹp hoang sơ, yên tĩnh và trong lành là một điểm đến hấp dẫn không thể bỏ lỡ cho các du khách thích khám phá những nơi mới lạ', 'Miền Trung', 'Mùa Hạ', 'Biển, sông, suối'),
(16, 'Địa đạo Vịnh Mốc', 'Quảng Trị', '16_1.jpg', 'Là di tích lịch sử văn hóa mang nhiều giá trị lịch sử, giáo dục to lớn, là biểu tượng cho tinh thần yêu nước bất diệt trong những năm kháng chiến', 'Miền Trung', 'Mùa Đông', 'Hang động'),
(17, 'Nhà Rông Kon Klor', 'Kon Tum', '17_1.jpg', 'Là một trong những ngôi nhà của người Ba Na vẫn còn lưu giữ kiến trúc độc đáo và nghề thủ công truyền thống', 'Miền Trung', 'Mùa Hạ', 'Đồi núi'),
(18, 'Biển Hồ Tơ Nưng', 'Pleiku', '18_1.jpg', 'Là một hồ nước ngọt cách trung tâm Thành Phố Pleiku 8km, nằm phía Bắc của Pleiku là điểm du lịch sinh thái và tâm linh', 'Miền Trung', 'Mùa Thu', 'Biển, sông, suối');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `scenic`
--
ALTER TABLE `scenic`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `scenic`
--
ALTER TABLE `scenic`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
