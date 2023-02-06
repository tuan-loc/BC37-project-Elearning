import { Button } from "antd";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { signinAction } from "./redux/action";

const Signin = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { taiKhoan: "", matKhau: "" },
    onSubmit: (values) => {
      dispatch(signinAction(values));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="lg:w-1/2 xl:max-w-screen-sm"
    >
      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2
          className="text-center text-3xl text-yellow-500 font-display font-semibold lg:text-left xl:text-3xl
xl:text-bold"
        >
          ĐĂNG NHẬP
        </h2>
        <div className="mt-12">
          <div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Tài khoản
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500"
                type="text"
                placeholder="Nhập vào tài khoản"
                name="taiKhoan"
                onChange={formik.handleChange}
              />
            </div>
            <div className="mt-8">
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
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500"
                type="password"
                placeholder="Nhập vào mật khẩu"
                name="matKhau"
                onChange={formik.handleChange}
              />
            </div>
            <div className="mt-10">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="bg-yellow-500 text-gray-100 p-4 w-full rounded-full tracking-wide
    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-yellow-500
    shadow-lg"
              >
                Đăng nhập
              </Button>
            </div>
          </div>
          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            Bạn chưa có tài khoản?{" "}
            <NavLink
              to="/user/signup"
              className="cursor-pointer text-yellow-500 hover:text-yellow-700 no-underline"
            >
              Đăng ký
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signin;
