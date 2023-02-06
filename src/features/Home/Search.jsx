import { Button, Card, Col, Pagination, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { truncateString } from "utils/truncateString";
import { fetchCourseListPage } from "./redux/action";

const Search = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { coursePage } = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(fetchCourseListPage(id));
  }, [id]);

  return (
    <>
      <div className="text-white bg-yellow-500 flex flex-col justify-center items-center h-48 mb-24">
        <div className="absolute text-center space-y-1">
          <h3 className="text-3xl">TÌM KIẾM KHÓA HỌC</h3>
        </div>
      </div>
      <div className="container px-6">
        {coursePage.items?.length > 0 ? (
          <>
            <Row gutter={30}>
              {coursePage.items?.map((course) => {
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
                        <h1 className="text-lg h-16 mt-2">
                          {course.tenKhoaHoc}
                        </h1>
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
            <Pagination
              className="text-center py-6"
              defaultCurrent={coursePage.currentPage}
              total={coursePage.totalCount}
              pageSize={16}
              onChange={(page) => {
                dispatch(fetchCourseListPage(id, page));
              }}
            />
          </>
        ) : (
          <div className="flex flex-col items-center">
            <img src="/img/course_not_found.png" className="w-72" alt="" />
            <h1 className="text-2xl text-yellow-500 mt-6">
              Không tìm thấy khóa học nào
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
