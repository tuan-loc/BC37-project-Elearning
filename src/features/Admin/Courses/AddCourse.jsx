import React, { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourseAction,
  addCourseUploadImageAction,
  fetchCategoryCourseAction,
  fetchInfoUserAccountAction,
} from "./redux/actions";
import moment from "moment/moment";

const { TextArea } = Input;

const AddCourse = () => {
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();

  const { accountUser, categoryCourse } = useSelector(
    (state) => state.courseListReducer
  );

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: null,
      maNhom: "",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: accountUser?.taiKhoan,
    },
    onSubmit: (values) => {
      dispatch(addCourseAction(values));

      let formData = new FormData();
      formData.append("file", values.hinhAnh);
      formData.append("tenKhoaHoc", values.tenKhoaHoc);
      dispatch(addCourseUploadImageAction(formData));
    },
  });

  useEffect(() => {
    dispatch(fetchCategoryCourseAction);
    dispatch(fetchInfoUserAccountAction);
  }, []);

  const handleChangeGroupId = (value) => {
    formik.setFieldValue("maNhom", value);
  };

  const handleChangeDatePicker = (value) => {
    let ngayTao = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayTao", ngayTao);
  };

  const handleChangeFile = (e) => {
    let file = e.target.files[0];

    if (
      file.type === "image/jpeg" ||
      file.type === "image/gif" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };

      formik.setFieldValue("hinhAnh", file.name);
    }
  };

  const handleChangeCategoryCourse = (value) => {
    formik.setFieldValue("maDanhMucKhoaHoc", value);
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  return (
    accountUser && (
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 16,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
        className="pb-10"
      >
        <h3 className="text-3xl py-8">Th??m kh??a h???c</h3>
        <Form.Item label="M?? kh??a h???c">
          <Input
            name="maKhoaHoc"
            value={formik.values.maKhoaHoc}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="B?? danh">
          <Input
            name="biDanh"
            value={formik.values.biDanh}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="T??n kh??a h???c">
          <Input
            name="tenKhoaHoc"
            value={formik.values.tenKhoaHoc}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="M?? t???">
          <TextArea
            rows={4}
            name="moTa"
            value={formik.values.moTa}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="L?????t xem">
          <InputNumber
            onChange={handleChangeInputNumber("luotXem")}
            value={formik.values.luotXem}
            defaultValue={0}
          />
        </Form.Item>
        <Form.Item label="????nh gi??">
          <InputNumber
            onChange={handleChangeInputNumber("danhGia")}
            min={1}
            max={10}
            value={formik.values.danhGia}
            defaultValue={0}
          />
        </Form.Item>
        <Form.Item label="H??nh ???nh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg, image/gif, image/jpg"
          />
          <img style={{ width: 200, marginTop: 15 }} src={imgSrc} alt="..." />
        </Form.Item>
        <Form.Item label="M?? nh??m">
          <Select
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
              { label: "GP11", value: "GP11" },
              { label: "GP12", value: "GP12" },
              { label: "GP13", value: "GP13" },
              { label: "GP14", value: "GP14" },
              { label: "GP15", value: "GP15" },
            ]}
            onChange={handleChangeGroupId}
            placeholder="Ch???n m?? nh??m"
          />
        </Form.Item>
        <Form.Item label="Ng??y t???o">
          <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
        </Form.Item>
        <Form.Item label="Danh m???c kh??a h???c">
          <Select
            options={categoryCourse.map((category) => {
              return {
                label: category.tenDanhMuc,
                value: category.maDanhMuc,
              };
            })}
            onChange={handleChangeCategoryCourse}
            placeholder="Ch???n danh m???c kh??a h???c"
          />
        </Form.Item>
        <Form.Item label="T??i kho???n ng?????i t???o">
          <Input
            name="taiKhoanNguoiTao"
            value={formik.values.taiKhoanNguoiTao}
            disabled
          />
        </Form.Item>
        <Form.Item label="Th??m kh??a h???c">
          <Button htmlType="submit" type="primary">
            Th??m
          </Button>
        </Form.Item>
      </Form>
    )
  );
};

export default AddCourse;
