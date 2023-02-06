import AddCourse from "features/Admin/Courses/AddCourse";
import CoursesList from "features/Admin/Courses/CourseList";
import EditCourse from "features/Admin/Courses/EditCourse";
import AddUser from "features/Admin/Users/AddUser";
import EditUser from "features/Admin/Users/EditUser";
import UserList from "features/Admin/Users/UserList";
import Category from "features/Home/Category";
import EditProfile from "features/Home/EditProfile";
import Profile from "features/Home/Profile";
import CourseCategory from "features/Home/CourseCategory";
import Courses from "features/Home/Courses";
import DetailCourse from "features/Home/DetailCourse";
import Home from "features/Home/Home";
import MyCourse from "features/Home/MyCourse";
import Signin from "features/User/Signin";
import Signup from "features/User/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminTemplate from "templates/AdminTemplate/AdminTemplate";
import HomeTemplate from "templates/HomeTemplate/HomeTemplate";
import UserTemplate from "templates/UserTemplate/UserTemplate";
import "./App.css";
import Search from "features/Home/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomeTemplate />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/danh-muc-khoa-hoc" exact element={<Category />} />
          <Route
            path="/danhmuckhoahoc/:id"
            exact
            element={<CourseCategory />}
          />
          <Route path="/khoa-hoc" exact element={<Courses />} />
          <Route
            path="/chi-tiet-khoa-hoc/:id"
            exact
            element={<DetailCourse />}
          />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/edit-profile" exact element={<EditProfile />} />
          <Route path="/mycourse" exact element={<MyCourse />} />
          <Route path="/tim-kiem/:id" exact element={<Search />} />
        </Route>
        <Route path="/admin" exact element={<AdminTemplate />}>
          <Route path="/admin/users" exact element={<UserList />} />
          <Route path="/admin/users/add-user" exact element={<AddUser />} />
          <Route
            path="/admin/users/edit-user/:id"
            exact
            element={<EditUser />}
          />

          <Route path="/admin/courses" exact element={<CoursesList />} />
          <Route
            path="/admin/courses/add-course"
            exact
            element={<AddCourse />}
          />
          <Route
            path="/admin/courses/edit-course/:id"
            exact
            element={<EditCourse />}
          />
        </Route>
        <Route path="/user" exact element={<UserTemplate />}>
          <Route path="/user/signin" exact element={<Signin />} />
          <Route path="/user/signup" exact element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
