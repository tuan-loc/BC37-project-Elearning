import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-100 bg-slate-900 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <NavLink to="/">
            <img
              src="/img/600e8df5132cb60024b04964.jpg"
              className="w-40"
              alt=""
            />
          </NavLink>
          <p className="mt-2 text-sm text-gray-100">
            Công ty TNHH Công Nghệ Giáo Dục Topica Việt Nam
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-sm">
            <h2 className="title-font font-medium text-yellow-500 tracking-widest text-sm mb-3">
              VỀ CHÚNG TÔI
            </h2>
            <nav className="list-none mb-10">
              <li>
                <NavLink className="text-gray-100 hover:text-yellow-500 no-underline">
                  Điều khoản
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-100 hover:text-yellow-500 no-underline">
                  Chính sách bảo mật
                </NavLink>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-sm">
            <h2 className="title-font font-medium text-yellow-500 tracking-widest text-sm mb-3">
              CỘNG ĐỒNG
            </h2>
            <nav className="list-none mb-10">
              <li>
                <NavLink className="text-gray-100 hover:text-yellow-500 no-underline">
                  Chăm sóc khách hàng
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-100 hover:text-yellow-500 no-underline">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-100 hover:text-yellow-500 no-underline">
                  Danh mục
                </NavLink>
              </li>
            </nav>
          </div>
          <div className="lg:w-2/4 md:w-1/2 w-full px-4 text-sm">
            <h2 className="title-font font-medium text-yellow-500 tracking-widest text-sm mb-3">
              ĐỊA CHỈ
            </h2>
            <nav className="list-none mb-10">
              <li className="text-gray-100 hover:text-yellow-500 no-underline">
                Công ty TNHH Công Nghệ Giáo Dục Topica Việt Nam
              </li>
              <li className="text-gray-100 hover:text-yellow-500 no-underline">
                MST: 0109475876
              </li>
              <li className="text-gray-100 hover:text-yellow-500 no-underline">
                Địa chỉ: Tầng 6, Tòa nhà Kim Khí Thăng long, Sô 1 Lương Yên,
                Phường Bạch Đằng, Quận Hai Bà Trưng, Thành phố Hà Nội, Việt Nam
              </li>
              <li className="text-gray-100 hover:text-yellow-500 no-underline">
                Email: trogiup@edumall.vn
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-slate-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-100  text-sm text-center sm:text-left">
            © Cybersoft
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-100 ml-4 no-underline"
              target="_blank"
            >
              Võ công Tuấn Lộc - Nguyễn Lê Anh Khoa
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <NavLink className="text-gray-100">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </NavLink>
            <NavLink className="ml-3 text-gray-100">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </NavLink>
            <NavLink className="ml-3 text-gray-100">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </NavLink>
            <NavLink className="ml-3 text-gray-100">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </NavLink>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
