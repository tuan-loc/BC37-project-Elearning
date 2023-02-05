import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Pagination, Table, Input } from "antd";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  deleteUserAction,
  fetchUserAction,
} from "features/Admin/Users/redux/action";

const { Search } = Input;

const UsersList = () => {
  const { userList } = useSelector((state) => state.userListReducer);
  const dispatch = useDispatch();

  const data = userList.items;

  useEffect(() => {
    dispatch(fetchUserAction());
  }, []);

  const columns = [
    {
      title: "Loại người dùng",
      dataIndex: "tenLoaiNguoiDung",
      width: 160,
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      width: 160,
      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1;
      },
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      sorter: (a, b) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
          return 1;
        }
        return -1;
      },
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDT",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      render: (text, user) => {
        return (
          <Fragment>
            <NavLink
              to={`/admin/users/edit-user/${user.taiKhoan}`}
              className="bg-black text-white mr-2 p-2 rounded"
            >
              <EditOutlined />
            </NavLink>
            <NavLink
              onClick={() => {
                if (
                  window.confirm(
                    "Bạn có chắc muốn xóa người dùng " + user.hoTen
                  )
                ) {
                  dispatch(deleteUserAction(user.taiKhoan));
                }
              }}
              className="bg-red-700 text-white p-2 rounded"
            >
              <DeleteOutlined />
            </NavLink>
          </Fragment>
        );
      },
    },
  ];

  const onSearchUser = (value, e) => {
    dispatch(fetchUserAction(1, value));
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-3xl">Quản lý người dùng</h3>
        <NavLink to="/admin/users/add-user">
          <Button type="primary">Thêm người dùng</Button>
        </NavLink>
      </div>
      <Search
        placeholder="Tìm kiếm"
        enterButton="Tìm kiếm"
        size="large"
        onSearch={onSearchUser}
      />
      <Table
        className="mt-4 mb-8"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <Pagination
        className="text-center py-8"
        defaultCurrent={userList.currentPage}
        total={userList.totalCount}
        pageSize={10}
        onChange={(page) => {
          dispatch(fetchUserAction(page));
        }}
      />
    </div>
  );
};

export default UsersList;
