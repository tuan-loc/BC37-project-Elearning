import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { fetchCourseListCategory } from "features/Home/redux/action";
import { Button, Card, Col, Row } from "antd";
import { truncateString } from "utils/truncateString";

const CourseCategory = () => {
  const dispatch = useDispatch();
  const { categoryCourse } = useSelector((state) => state.courseListReducer);
  const { id } = useParams();
  const { courseList } = useSelector((state) => state.homeReducer);
  console.log(courseList);

  useEffect(() => {
    dispatch(fetchCourseListCategory(id));
  }, [id]);

  return (
    <>
      <div className="text-white bg-yellow-500 flex flex-col justify-center items-center h-48">
        <div className="absolute text-center space-y-1">
          <h3 className="text-3xl">KHÓA HỌC THEO DANH MỤC</h3>
          <p className="text-lg">HÃY CHỌN KHÓA HỌC MONG MUỐN !!!</p>
        </div>
      </div>
      <div className="container p-6">
        <h1 className="text-center mt-10 mb-12">
          {
            categoryCourse.filter((category) => category.maDanhMuc === id)[0]
              .tenDanhMuc
          }
        </h1>
        <Row gutter={30}>
          {courseList.length > 0 &&
            courseList.map((course) => {
              return (
                <Col className="mb-8" key={course.maKhoaHoc} span={6}>
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

export default CourseCategory;
