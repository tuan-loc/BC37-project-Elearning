import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Category = () => {
  const { categoryCourse } = useSelector((state) => state.courseListReducer);

  return (
    <div>
      <div
        className="text-white flex flex-col justify-center items-center h-72"
        style={{
          backgroundImage: "url(./img/617032ca0e4678002597e0a4.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="h-72 w-full absolute"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        ></div>
        <div className="absolute text-center space-y-1">
          <h3 className="text-3xl">Danh mục</h3>
          <p className="text-xl">Tìm những chủ đề mà bạn yêu thích</p>
          <p className="text-xl">
            Có hơn 2000 khoá học với 10 ngành khác nhau để bạn có thể lựa chọn
          </p>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-6 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {categoryCourse.map((category) => {
              return (
                <div key={category.maDanhMuc} className="xl:w-1/3 md:w-1/2 p-4">
                  <NavLink
                    className="no-underline"
                    to={`/danhmuckhoahoc/${category.maDanhMuc}`}
                  >
                    <div className="border border-gray-900 bg-slate-100 hover:bg-yellow-400 p-8 rounded-lg text-gray-900 hover:text-white">
                      <h2 className="text-3xl text-center font-medium title-font mb-2">
                        {category.tenDanhMuc}
                      </h2>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
