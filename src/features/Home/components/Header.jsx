import { Input, Menu } from "antd";
import { fetchCategoryCourseAction } from "features/Admin/Courses/redux/actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const { Search } = Input;

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userSignin } = useSelector((state) => state.userReducer);
  const { categoryCourse } = useSelector((state) => state.courseListReducer);

  useEffect(() => {
    dispatch(fetchCategoryCourseAction);
  }, []);

  const onSearch = (value) => {
    return navigate(`/tim-kiem/${value}`);
  };

  const items = [
    {
      label: (
        <NavLink
          to="/danh-muc-khoa-hoc"
          className="text-white hover:text-yellow-500"
        >
          <i className="fa-solid fa-list"></i>
          <span className="ml-2">Danh mục khóa học</span>
        </NavLink>
      ),
      key: "danhMucKhoaHoc",
      children: categoryCourse.map((category) => {
        return {
          label: (
            <NavLink to={`/danhmuckhoahoc/${category.maDanhMuc}`}>
              {category.tenDanhMuc}
            </NavLink>
          ),
          key: category.maDanhMuc,
        };
      }),
    },
  ];

  return (
    <header className="p-4 bg-gray-900 text-gray-100 sticky top-0 z-50">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink to="/">
          <img
            src="/img/600e8df5132cb60024b04964.jpg"
            alt=""
            className="w-40"
          />
        </NavLink>
        <Search
          size="large"
          placeholder="Tìm kiếm khóa học"
          onSearch={onSearch}
          enterButton
          className="w-96 relative top-3"
        />
        <ul className="items-center hidden lg:flex">
          <li className="flex items-center">
            <Menu
              mode="horizontal"
              items={items}
              className="bg-transparent text-white text-base w-52 relative top-0"
            />
          </li>
          <li className="flex">
            <NavLink
              to="/khoa-hoc"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center pr-2 text-white hover:text-yellow-500 no-underline"
            >
              Khóa học
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-2 text-white hover:text-yellow-500 no-underline"
            >
              Blog
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-2 text-white hover:text-yellow-500 no-underline"
            >
              Sự kiện
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-2 text-white hover:text-yellow-500 no-underline"
            >
              Thông tin
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {userSignin.taiKhoan ? (
            <div>
              <NavLink to="/mycourse" className="text-white no-underline mr-4">
                <i className="fa-solid fa-circle-play mr-1"></i>
                Khóa học của tôi
              </NavLink>
              <NavLink to="/profile" className="text-yellow-500 no-underline">
                <i className="fa-solid fa-circle-user mr-1"></i>
                {userSignin.hoTen}
              </NavLink>
            </div>
          ) : (
            <>
              <NavLink to="/user/signup">
                <button className="self-center px-8 py-3 rounded cursor-pointer">
                  Đăng ký
                </button>
              </NavLink>
              <NavLink to="/user/signin">
                <button className="self-center px-8 py-3 font-semibold rounded bg-yellow-500 text-gray-900 cursor-pointer">
                  Đăng nhập
                </button>
              </NavLink>
            </>
          )}
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
