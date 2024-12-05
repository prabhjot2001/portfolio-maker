import { Route, Routes } from "react-router-dom";
import AuthPage from "@/pages/auth/AuthPage";
import RootLayout from "@/components/layout/RootLayout";
import HomePage from "@/pages/home/HomePage";
import ProjectPage from "@/pages/project/ProjectPage";
import BlogPage from "@/pages/blog/BlogPage";
import ContactPage from "@/pages/contact/ContactPage";
import ErrorPage from "@/pages/error/ErrorPage";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import MyPetPage from "@/pages/pet/MyPetPage";
import Blog from "@/components/standAloneComponents/Blog";
import PreviewPage from "./pages/preview/PreviewPage";
import ProtectedRoutes from "./components/layout/ProtectedRoutes";
import ExploreMorePage from "./pages/explore-more/ExploreMorePage";
import PrivacyPage from "./pages/privacy/PrivacyPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:id" element={<Blog />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="leo" element={<MyPetPage />} />
        <Route path="explore-more" element={<ExploreMorePage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="preview" element={<PreviewPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
