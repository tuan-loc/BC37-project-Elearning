import { Button } from "antd";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { signup } from "./utils/userService";

const Signup = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: "",
      email: "",
    },
    onSubmit: (values) => {
      dispatch(signup(values));
      alert("Bạn đã đăng ký thành công");
      return <Navigate to="/user/signin" replace />;
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="lg:w-1/2 xl:max-w-screen-sm"
    >
      <div className="px-12 sm:px-24 md:px-48 lg:px-12 xl:px-24 xl:max-w-2xl">
        <h2
          className="text-center text-3xl py-4 text-yellow-500 font-display font-semibold lg:text-left xl:text-3xl
xl:text-bold"
        >
          ĐĂNG KÝ
        </h2>
        <div className="mt-4">
          <div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Tài khoản
              </div>
              <input
                className="w-full text-lg py-1 border-b border-gray-300 focus:outline-none focus:border-yellow-500"
                type="text"
                placeholder="Nhập vào tài khoản"
                name="taiKhoan"
                onChange={formik.handleChange}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mật khẩu
                </div>
                <div>
                  <NavLink
                    className="text-xs font-display font-semibold text-yellow-500 hover:text-yellow-700
        cursor-pointer no-underline"
                  >
                    Quên mật khẩu?
                  </NavLink>
                </div>
              </div>
              <input
                className="w-full text-lg py-1 border-b border-gray-300 focus:outline-none focus:border-yellow-500"
                type="password"
                placeholder="Nhập vào mật khẩu"
                name="matKhau"
                onChange={formik.handleChange}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Họ tên
                </div>
              </div>
              <input
                className="w-full text-lg py-1 border-b border-gray-300 focus:outline-none focus:border-yellow-500"
                type="text"
                placeholder="Nhập vào họ tên"
                name="hoTen"
                onChange={formik.handleChange}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Số điện thoại
                </div>
              </div>
              <input
                className="w-full text-lg py-1 border-b border-gray-300 focus:outline-none focus:border-yellow-500"
                type="text"
                placeholder="Nhập vào số điện thoại"
                name="soDT"
                onChange={formik.handleChange}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mã nhóm
                </div>
              </div>
              <input
                className="w-full text-lg py-1 border-b border-gray-300 focus:outline-none focus:border-yellow-500"
                type="text"
                placeholder="Nhập vào mã nhóm"
                name="maNhom"
                onChange={formik.handleChange}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Email
                </div>
              </div>
              <input
                className="w-full text-lg py-1 border-b border-gray-300 focus:outline-none focus:border-yellow-500"
                type="email"
                placeholder="Nhập vào email"
                name="email"
                onChange={formik.handleChange}
              />
            </div>
            <div className="mt-8">
              <Button type="primary" htmlType="submit" block size="large">
                Đăng ký
              </Button>
            </div>
          </div>
          <div className="mt-4 text-sm font-display font-semibold text-gray-700 text-center">
            Bạn đã có tài khoản?{" "}
            <NavLink
              to="/user/signin"
              className="cursor-pointer text-yellow-500 hover:text-yellow-700 no-underline"
            >
              Đăng nhập
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
