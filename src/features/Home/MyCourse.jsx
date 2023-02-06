import { Button, Card, Col, Pagination, Rate, Row } from "antd";
import {
  cancelRegisterCourseAction,
  fetchInfoUserAccountAction,
} from "features/Admin/Courses/redux/actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { truncateString } from "utils/truncateString";

const MyCourse = () => {
  const dispatch = useDispatch();
  const { accountUser } = useSelector((state) => state.courseListReducer);
  const { userSignin } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchInfoUserAccountAction);
  }, []);

  if (!userSignin?.taiKhoan) {
    return navigate("/user/signin");
  }

  return (
    <div>
      <div className="text-white bg-yellow-500 flex flex-col justify-center items-center h-48 mb-24">
        <div className="absolute text-center space-y-1">
          <h3 className="text-3xl">KHÓA HỌC CỦA TÔI</h3>
        </div>
      </div>
      <div className="container px-8">
        {accountUser?.chiTietKhoaHocGhiDanh.length > 0 && (
          <Row gutter={30}>
            {accountUser?.chiTietKhoaHocGhiDanh.map((course) => {
              return (
                <Col className="mb-8" key={course.maKhoaHoc} span={6}>
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
                    <h1 className="text-lg h-16 mt-2">{course?.tenKhoaHoc}</h1>
                    <p className="h-16 text-gray-500">
                      {truncateString(course.moTa, 70)}
                    </p>
                    <Rate
                      allowHalf
                      count={10}
                      defaultValue={course.danhGia}
                      className="mb-4"
                      disabled
                    />
                    <h4 className="text-base">GV: Đặng Trung Hiếu</h4>
                    <Button
                      className="mt-4"
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                        dispatch(
                          cancelRegisterCourseAction({
                            maKhoaHoc: course.maKhoaHoc,
                            taiKhoan: accountUser.taiKhoan,
                          })
                        );
                      }}
                    >
                      Hủy khóa học
                    </Button>
                  </Card>
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </div>
  );
};

export default MyCourse;
