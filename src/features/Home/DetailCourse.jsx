import { Button, Card, Col, Menu, Rate, Row } from "antd";
import Input from "antd/es/input/Input";
import {
  cancelRegisterCourseAction,
  fetchDetailCourse,
  fetchInfoUserAccountAction,
  registerCourseAction,
} from "features/Admin/Courses/redux/actions";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { truncateString } from "utils/truncateString";
import { fetchCourseListCategory } from "./redux/action";

const DetailCourse = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detailCourse } = useSelector((state) => state.courseListReducer);
  const { courseList } = useSelector((state) => state.homeReducer);
  const { accountUser } = useSelector((state) => state.courseListReducer);
  const navigate = useNavigate();
  console.log(accountUser);

  useEffect(() => {
    dispatch(fetchDetailCourse(id));
    dispatch(
      fetchCourseListCategory(detailCourse.danhMucKhoaHoc?.maDanhMucKhoaHoc)
    );
    dispatch(fetchInfoUserAccountAction);
  }, [id]);

  function getItem(label, key, children, type) {
    return {
      key,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem(<p className="text-lg font-medium">Mục 1: Giới thiệu</p>, "sub1", [
      getItem(
        <p className="flex justify-between text-gray-600">
          <span>
            <i className="fa-solid fa-circle-play text-yellow-500 mr-2"></i>Các
            khái niệm về React Component
          </span>
          <span>
            <i className="fa-solid fa-clock mr-4 text-yellow-500"></i>14:45
          </span>
        </p>,
        "1"
      ),
      getItem(
        <p className="flex justify-between text-gray-600">
          <span>
            <i className="fa-solid fa-circle-play text-yellow-500 mr-2"></i>
            Thiết lập môi trường cho Windows
          </span>
          <span>
            <i className="fa-solid fa-clock mr-4 text-yellow-500"></i>14:45
          </span>
        </p>,
        "2"
      ),
      getItem(
        <p className="flex justify-between text-gray-600">
          <span>
            <i className="fa-solid fa-circle-play text-yellow-500 mr-2"></i>Tạo
            ứng dụng React - React-Scripts
          </span>
          <span>
            <i className="fa-solid fa-clock mr-4 text-yellow-500"></i>14:45
          </span>
        </p>,
        "3"
      ),
      getItem(
        <p className="flex justify-between text-gray-600">
          <span>
            <i className="fa-solid fa-circle-play text-yellow-500 mr-2"></i>Ghi
            chú nhanh về dấu ngoặc kép cho string interpolation
          </span>
          <span>
            <i className="fa-solid fa-clock mr-4 text-yellow-500"></i>14:45
          </span>
        </p>,
        "4"
      ),
    ]),
    getItem(
      <p className="text-lg font-medium">Mục 2: Kiến thức căn bản</p>,
      "sub2",
      [
        getItem(
          <p className="flex justify-between text-gray-600">
            <span>
              <i className="fa-solid fa-circle-play text-yellow-500 mr-2"></i>
              Trang chủ và thành phần thư mục
            </span>
            <span>
              <i className="fa-solid fa-clock mr-4 text-yellow-500"></i>14:45
            </span>
          </p>,
          "5"
        ),
        getItem(
          <p className="flex justify-between text-gray-600">
            <span>
              <i className="fa-solid fa-circle-play text-yellow-500 mr-2"></i>
              Hướng dẫn khóa học + Liên kết Github
            </span>
            <span>
              <i className="fa-solid fa-clock mr-4 text-yellow-500"></i>14:45
            </span>
          </p>,
          "6"
        ),
        getItem(
          <p className="flex justify-between text-gray-600">
            <span>
              <i className="fa-solid fa-circle-play text-yellow-500 mr-2"></i>
              Trang chủ thương mại điện tử + thiết lập SASS
            </span>
            <span>
              <i className="fa-solid fa-clock mr-4 text-yellow-500"></i>14:45
            </span>
          </p>,
          "7"
        ),
        getItem(
          <p className="flex justify-between text-gray-600">
            <span>
              <i className="fa-solid fa-circle-play text-yellow-500 mr-2"></i>
              Tệp CSS và SCSS
            </span>
            <span>
              <i className="fa-solid fa-clock mr-4 text-yellow-500"></i>14:45
            </span>
          </p>,
          "8"
        ),
        getItem(
          <p className="flex justify-between text-gray-600">
            <span>
              <i className="fa-solid fa-circle-play text-yellow-500 mr-2"></i>
              React 17: Cập nhật các gói + Phiên bản React mới nhất
            </span>
            <span>
              <i className="fa-solid fa-clock mr-4 text-yellow-500"></i>14:45
            </span>
          </p>,
          "9"
        ),
      ]
    ),
    getItem(
      <p className="text-lg font-medium">Mục 3: Kiến thức chuyên sâu</p>,
      "sub3",
      [
        getItem(
          <p className="flex justify-between text-gray-600">
            <span>
              <i className="fa-solid fa-circle-play text-yellow-500 mr-2"></i>
              connect() and mapStateToProps
            </span>
            <span>
              <i className="fa-solid fa-clock mr-4 text-yellow-500"></i>14:45
            </span>
          </p>,
          "10"
        ),
        getItem(
          <p className="flex justify-between text-gray-600">
            <span>
              <i className="fa-solid fa-circle-play text-yellow-500 mr-2"></i>
              Trạng thái thư mục vào Redux
            </span>
            <span>
              <i className="fa-solid fa-clock mr-4 text-yellow-500"></i>14:45
            </span>
          </p>,
          "11"
        ),
        getItem(
          <p className="flex justify-between text-gray-600">
            <span>
              <i className="fa-solid fa-circle-play text-yellow-500 mr-2"></i>
              Thành phần Tổng quan về Bộ sưu tập
            </span>
            <span>
              <i className="fa-solid fa-clock mr-4 text-yellow-500"></i>14:45
            </span>
          </p>,
          "12"
        ),
      ]
    ),
  ];

  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <>
      <div className="text-white bg-yellow-500 flex flex-col justify-center items-center h-48">
        <div className="absolute text-center space-y-1">
          <h3 className="text-3xl">THÔNG TIN KHÓA HỌC</h3>
          <p className="text-lg">TIẾN LÊN VÀ KHÔNG CHẦN CHỪ !!!</p>
        </div>
      </div>
      <div className="container px-6 pt-20 grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h3 className="text-3xl mb-8">{detailCourse.tenKhoaHoc}</h3>
          <div className="grid grid-cols-3">
            <div className="flex items-center">
              <img
                className="rounded-full w-16"
                src="https://i.pinimg.com/564x/50/d4/29/50d429ea5c9afe0ef9cb3c96f784bea4.jpg"
                alt=""
              />
              <div className="ml-3">
                <p className="text-gray-400 text-sm">Giảng viên</p>
                <p className="text-lg font-bold">Đặng Trung Hiếu</p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-graduation-cap text-yellow-500 text-4xl"></i>
              <div className="ml-3">
                <p className="text-gray-400 text-sm">Lĩnh vực</p>
                <p className="text-lg font-bold">
                  {detailCourse.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
                </p>
              </div>
            </div>
            <div>
              <Rate disabled allowHalf defaultValue={4.5} />
              <p className="text-gray-400 text-sm">100 đánh giá</p>
            </div>
          </div>
          <p className="text-gray-500 my-8">{detailCourse.moTa}</p>
          <hr />
          <h3 className="my-4 text-xl">Những gì bạn sẽ học</h3>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <ul className="list-none space-y-2 text-gray-600">
                <li>
                  <i className="fa-solid fa-check mr-2 text-yellow-500"></i>
                  Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với
                  người dùng và phản ứng nhanh
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 text-yellow-500"></i>
                  Đăng ký công việc được trả lương cao hoặc làm freelancer trong
                  một trong những lĩnh vực được yêu cầu nhiều nhất mà bạn có thể
                  tìm thấy trong web dev ngay bây giờ
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 text-yellow-500"></i>
                  Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận dụng
                  sức mạnh của JavaScript một cách dễ dàng
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 text-yellow-500"></i>
                  Tìm hiểu tất cả về React Hooks và React Components
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-none space-y-2 text-gray-600">
                <li>
                  <i className="fa-solid fa-check mr-2 text-yellow-500"></i>
                  Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp
                  Javascript NPM, Webpack, Babel và ES6 / ES2015
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 text-yellow-500"></i>
                  Nhận ra sức mạnh của việc xây dựng các thành phần có thể kết
                  hợp
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 text-yellow-500"></i>
                  Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi
                  người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 text-yellow-500"></i>
                  Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các ứng
                  dụng Redux
                </li>
              </ul>
            </div>
          </div>
          <div className="my-10">
            <h3 className="text-xl mb-4">Nội dung khóa học</h3>
            <Menu
              className="text-slate-900 text-base"
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              style={{
                width: 900,
              }}
              items={items}
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="drop-shadow w-full pb-4 bg-white">
            <img src={detailCourse.hinhAnh} className="w-full" alt="" />
            <div className="px-8 py-6 space-y-5">
              <p className="text-right font-bold text-4xl">990.000 đ</p>
              {accountUser?.chiTietKhoaHocGhiDanh.filter(
                (course) => course.maKhoaHoc === id
              )[0] ? (
                <Button
                  onClick={() => {
                    dispatch(
                      cancelRegisterCourseAction({
                        maKhoaHoc: detailCourse.maKhoaHoc,
                        taiKhoan: accountUser.taiKhoan,
                      })
                    );
                  }}
                  block
                  size="large"
                >
                  Hủy đăng ký
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    if (accountUser?.taiKhoan) {
                      dispatch(
                        registerCourseAction({
                          maKhoaHoc: detailCourse.maKhoaHoc,
                          taiKhoan: accountUser.taiKhoan,
                        })
                      );
                    } else {
                      navigate("/user/signin");
                    }
                  }}
                  type="primary"
                  block
                  size="large"
                >
                  Đăng ký
                </Button>
              )}
              <div className="flex justify-between">
                <p className="text-gray-500">
                  Ghi danh:{" "}
                  <span className="text-black font-medium text-lg">
                    {detailCourse.soLuongHocVien} học viên
                  </span>
                </p>
                <i className="fa-solid fa-user-graduate text-yellow-500 text-xl"></i>
              </div>
              <hr color="#f2f1f1" />
              <div className="flex justify-between">
                <p className="text-gray-500">
                  Thời gian:{" "}
                  <span className="text-black font-medium text-lg">18 giờ</span>
                </p>
                <i className="fa-solid fa-clock text-yellow-500 text-xl"></i>
              </div>
              <hr color="#f2f1f1" />
              <div className="flex justify-between">
                <p className="text-gray-500">
                  Bài học:{" "}
                  <span className="text-black font-medium text-lg">10</span>
                </p>
                <i className="fa-solid fa-book text-yellow-500 text-xl"></i>
              </div>
              <hr color="#f2f1f1" />
              <div className="flex justify-between">
                <p className="text-gray-500">
                  Video:{" "}
                  <span className="text-black font-medium text-lg">14</span>
                </p>
                <i className="fa-solid fa-video text-yellow-500 text-xl"></i>
              </div>
              <hr color="#f2f1f1" />
              <div className="flex justify-between">
                <p className="text-gray-500">
                  Lượt xem:{" "}
                  <span className="text-black font-medium text-lg">
                    {detailCourse.luotXem}
                  </span>
                </p>
                <i className="fa-solid fa-eye text-yellow-500 text-xl"></i>
              </div>
              <hr color="#f2f1f1" />
              <div className="flex justify-between">
                <p className="text-gray-500">
                  Trình độ:{" "}
                  <span className="text-black font-medium text-lg">
                    Người mới bắt đầu
                  </span>
                </p>
                <i className="fa-solid fa-turn-up text-yellow-500 text-xl"></i>
              </div>
              <hr color="#f2f1f1" />
              <div>
                <Input placeholder="Nhập mã giảm giá" size="large" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-6 my-4">
        <hr color="#f2f1f1" />
      </div>
      <div className="container p-6 mt-4">
        <h3 className="text-2xl mb-2">Khóa học liên quan</h3>
        <Row gutter={30}>
          {courseList.length > 0 &&
            courseList.slice(0, 4).map((course) => {
              return (
                <Col className="my-4" key={course.maKhoaHoc} span={6}>
                  <NavLink to={`/chi-tiet-khoa-hoc/${course.maKhoaHoc}`}>
                    <Card
                      hoverable
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      cover={
                        <img
                          className="h-72 object-cover object-left-top"
                          alt="example"
                          src={course.hinhAnh}
                        />
                      }
                    >
                      <h3 className="text-yellow-500 font-normal">
                        {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                      </h3>
                      <h1 className="text-lg h-16 mt-2">{course.tenKhoaHoc}</h1>
                      <p className="h-16 text-gray-500">
                        {truncateString(course.moTa, 70)}
                      </p>
                      <h4 className="text-base">GV: Đặng Trung Hiếu</h4>
                      <p>
                        <span className="text-xl font-bold text-red-600 mr-4">
                          399.000 đ
                        </span>
                        <span className="line-through text-base text-gray-400">
                          999.000 đ
                        </span>
                      </p>

                      <NavLink to={`/chi-tiet-khoa-hoc/${course.maKhoaHoc}`}>
                        <Button
                          className="mt-4"
                          size="large"
                          type="primary"
                          block
                        >
                          Xem chi tiết
                        </Button>
                      </NavLink>
                    </Card>
                  </NavLink>
                </Col>
              );
            })}
        </Row>
      </div>
    </>
  );
};

export default DetailCourse;
