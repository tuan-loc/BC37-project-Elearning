import { Button } from "antd";
import { fetchInfoUserAccountAction } from "features/Admin/Courses/redux/actions";
import { logoutAction } from "features/Admin/Users/redux/action";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Profile = () => {
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
          <h3 className="text-3xl">TRANG CÁ NHÂN</h3>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 container px-6">
        <div className="col-span-2">
          <div className="flex flex-col items-center space-y-1">
            <img
              src="./img/50d429ea5c9afe0ef9cb3c96f784bea4.jpg"
              className="w-40 rounded-full"
              alt=""
            />
            <p className="text-xl font-medium">{accountUser?.hoTen}</p>
            <p className="text-sm text-gray-500">Lập trình viên</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-2 mt-4">
            <div className="text-lg space-y-2 font-medium">
              <p>
                Email:{" "}
                <span className="text-base font-normal">
                  {accountUser?.email}
                </span>
              </p>
              <p>
                Họ và tên:{" "}
                <span className="text-base font-normal">
                  {accountUser?.hoTen}
                </span>
              </p>
              <p>
                Số điện thoại:{" "}
                <span className="text-base font-normal">
                  {accountUser?.soDT}
                </span>
              </p>
            </div>
            <div className="text-lg space-y-2 font-medium">
              <p>
                Tài khoản:{" "}
                <span className="text-base font-normal">
                  {accountUser?.taiKhoan}
                </span>
              </p>
              <p>
                Nhóm:{" "}
                <span className="text-base font-normal">
                  {accountUser?.maNhom}
                </span>
              </p>
              <p>
                Đối tượng:{" "}
                {accountUser?.maLoaiNguoiDung === "GV" ? (
                  <span className="text-base font-normal">Giáo vụ</span>
                ) : (
                  <span className="text-base font-normal">Học viên</span>
                )}
              </p>
            </div>
          </div>
          <NavLink to="/edit-profile">
            <Button type="primary" size="large">
              Cập nhật thông tin
            </Button>
          </NavLink>
          <NavLink to="/mycourse">
            <Button className="ml-2 mt-6" type="primary" size="large">
              Xem khóa học của tôi
            </Button>
          </NavLink>
          <Button
            onClick={() => {
              logoutAction();
              navigate("/");
              window.location.reload();
            }}
            className="ml-2 mt-6"
            type="primary"
            size="large"
          >
            Đăng xuất
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
