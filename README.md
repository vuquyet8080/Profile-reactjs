# REACT/JSX Profile Project

---

Đây là một số chia sẻ, hướng dẫn của mình về ReactJs cho các bạn mới bắt đầu. Qua đó các bạn mới sẽ có cái nhìn tổng quan, tiếp cận vấn đề dễ dàng hơn.
P/S: bài viết được dựa trên tài liệu chính thống của **[ReactJS](https://reactjs.org/)** kết hợp với kinh nghiệm của bản thân mình, có gì sai sót anh chị em góp ý để mình sửa đổi nhé...

---

# Mục lục

I. Mục tiêu
II. Lưu ý
III. Chia sẻ

- 1.Cấu trúc thư mục của dự án
- 2.Component trong ReactJs
  - 2.1.Vòng đời của một Component
  - 2.2.Các thành phần cơ bản của một Components
  - 2.3.Một số hàm đặc biệt
- 3.Thiết kế Layout/View
- 4.Style trong ReactJs
- 5.Kỹ thuật debug cơ bản
- 6.Props/state - chia sẻ dữ liệu giữa các Components
- 7.Cài đặt và sử dụng library

---

# I.Mục tiêu

- Nắm được cấu trúc của một dự án ReactJs
- Hiểu được các thành phần của một Component, vòng đời (lifecycle react)
- Custom Ui theo ý muốn
- Sủ dụng library hỗ trợ
- Xây dựng được một trang Profile

---

# II.Lưu lý

- Đã có kiến thức cơ bản về javascript
  - Toán tử trong javascript
  - Điều khiển rẽ nhánh if else, switch case
  - Vòng lặp for, foreach, map
  - Mảng, duyệt mảng, Object
- Hiểu biết về html, css

- Clean code cũng là một việc cần tuân thủ, để có những dòng code đẹp có thể tham khảo một số coding convention như **[Airbnb JavaScript Style](https://github.com/airbnb/javascript)** và **[Airbnb React/JSX](https://github.com/airbnb/javascript/tree/master/react)**

---

# III.Hướng dẫn

- 1.Cấu trúc thư mục
  - file package.json quản lý toàn bộ thư viện sử dụng trong dự án, và script để run project
  - forder src, nơi lưu trữ toàn bộ source code, component, data ....
  - forder public sẽ là nơi lưu trữ những dự liệu được public cho người dùng sử dụng
  - forder node_modules, các thư viện được sử dụng sẽ nằm ở đây
  - **[Cấu trúc thư mục dự án và đặt tên Component](https://medium.com/hackernoon/structuring-projects-and-naming-components-in-react-1261b6e18d76)**
- 2.Các thành phần của một dự án
  - Component là một thành phần cơ bản trong ứng dụng react-native. Mọi view, screen đều được kế thừa từ lớp component này.

## Các hàm được gọi trong vòng đời của Component

- constructor(props) - Hàm khởi tạo component. Trong hàm này chúng ta thường dùng để khởi tạo state, binding các hàm con của component.
  Lưu ý: Không được thay đổi state bằng phương thức this.setState() trong hàm này.
- componentWillMount() - Hàm này sẽ bị loại bỏ ở phiên bản mới.
- render() - Đây là hàm bắt buộc có trong component. Sau khi khởi tạo hàm này được gọi để trả về các thành phần hiển thị lên màn hình.
  Hàm này sẽ được tự động gọi lại khi state hoặc props của nó thay đổi. Chỉ những component có sử dụng state hoặc props thì mới được gọi lại để render lại.
- componentDidMount() - Hàm này sẽ được gọi ngay sau khi hàm render() lần đầu tiên được gọi. Thông thường trong hàm này ta có thể lấy dữ liệu từ server hoặc client để render dữ liệu ra. Khi chạy đến đây thì các phần từ đã được sinh ra rồi, ta có thể tương tác với các thành phần UI.
- componentWillUnmount() - Hàm này được gọi khi component này bị loại bỏ. Chúng ta nên thực hiện các thao tác dọn dẹp, hủy timer hoặc các tiến trình đang xử lý.
