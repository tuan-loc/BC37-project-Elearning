import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { fetchInfoUserAccountAction } from "features/Admin/Courses/redux/actions";
import { updateUserAction } from "features/Admin/Users/redux/action";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { userSignin } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const { accountUser } = useSelector((state) => state.courseListReducer);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: accountUser?.taiKhoan,
      matKhau: accountUser?.matKhau,
      hoTen: accountUser?.hoTen,
      soDT: accountUser?.soDT,
      maLoaiNguoiDung: accountUser?.maLoaiNguoiDung,
      maNhom: accountUser?.maNhom,
      email: accountUser?.email,
    },
    onSubmit: (values) => {
      dispatch(updateUserAction(values));
    },
  });

  useEffect(() => {
    dispatch(fetchInfoUserAccountAction);
  }, []);

  const handleChangeGroupId = (value) => {
    formik.setFieldValue("maNhom", value);
  };

  if (!userSignin?.taiKhoan) {
    return navigate("/user/signin");
  }

  return (
    <>
      <div className="text-white bg-yellow-500 flex flex-col justify-center items-center h-48 mb-24">
        <div className="absolute text-center space-y-1">
          <h3 className="text-3xl">CẬP NHẬT THÔNG TIN CÁ NHÂN</h3>
        </div>
      </div>
      <div className="container px-6">
        <Form
          onSubmitCapture={formik.handleSubmit}
          labelCol={{
            span: 13,
          }}
          wrapperCol={{
            span: 24,
          }}
          layout="horizontal"
          style={{
            maxWidth: 1000,
          }}
          className="pb-10"
        >
          <Form.Item label="Tài khoản">
            <Input
              name="taiKhoan"
              value={formik.values.taiKhoan}
              onChange={formik.handleChange}
            />
          </Form.Item>
          <Form.Item label="Mật khẩu">
            <Input
              name="matKhau"
              value={formik.values.matKhau}
              onChange={formik.handleChange}
            />
          </Form.Item>
          <Form.Item label="Họ tên">
            <Input
              name="hoTen"
              value={formik.values.hoTen}
              onChange={formik.handleChange}
            />
          </Form.Item>
          <Form.Item label="Số điện thoại">
            <Input
              name="soDT"
              value={formik.values.soDT}
              onChange={formik.handleChange}
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Form.Item>
          <Form.Item label="Nhóm">
            <Select
              value={formik.values.maNhom}
              options={[
                { label: "GP01", value: "GP01" },
                { label: "GP02", value: "GP02" },
                { label: "GP03", value: "GP03" },
                { label: "GP04", value: "GP04" },
                { label: "GP05", value: "GP05" },
                { label: "GP06", value: "GP06" },
                { label: "GP07", value: "GP07" },
                { label: "GP08", value: "GP08" },
                { label: "GP09", value: "GP09" },
                { label: "GP10", value: "GP10" },
              ]}
              onChange={handleChangeGroupId}
              placeholder="Chọn mã nhóm"
            />
          </Form.Item>
          <Form.Item label="Đối tượng">
            <Input
              disabled
              name="maLoaiNguoiDung"
              value={
                formik.values.maLoaiNguoiDung === "GV" ? "Giáo vụ" : "Học viên"
              }
            />
          </Form.Item>
          <Form.Item label="Cập nhật thông tin">
            <Button htmlType="submit" type="primary">
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default EditProfile;
