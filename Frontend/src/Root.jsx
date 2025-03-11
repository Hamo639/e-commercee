import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, CssBaseline, useTheme } from "@mui/material";
import Header1 from "pages/component/Header/Header1";
import Header2 from "pages/component/Header/Header2";
import Header3 from "pages/component/Header/Header3";
import Hero from "./pages/component/Hero/hero";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Scrooltotop from "./pages/component/scroll/Scrooltotop";
import Footer from "./pages/component/Footer/Footer";

const Root = () => {
  const theme=useTheme()
  // استرجاع الوضع الحالي من localStorage
  const getInitialMode = () => {
    return localStorage.getItem("currentmode") === "dark" ? "dark" : "light";
  };

  const [mymode, setmymode] = useState(getInitialMode);

  // تحديث localStorage عند تغيير وضع الثيم
  useEffect(() => {
    localStorage.setItem("currentmode", mymode);
  }, [mymode]);

  // تحديد الألوان لكل وضع
  const darkmode = createTheme({
    palette: {
      mode: mymode,
      
      secondary: {
        main: mymode === "light" ? "#ff9800" : "#f48fb1", // لون ثانوي (برتقالي فاتح في الوضع الفاتح، وردي في الوضع الداكن)
      },
      background: {
        default: mymode === "light" ? "#ffffff" : "#121212", // لون الخلفية (أبيض في الفاتح، رمادي غامق في الداكن)
        paper: mymode === "light" ? "#f5f5f5" : "#1e1e1e", // لون خلفية الـ Card أو الـ Paper
      },
      text: {
        primary: mymode === "light" ? "#212121" : "#ffffff", // لون النص الأساسي
        secondary: mymode === "light" ? "#757575" : "#bdbdbd", // لون النص الثانوي
      },
      mycolor: {
        main: mymode === "dark" ? "#1D2021" : "#F6F6F6", // لون مخصص لك
      },
    },
  });

  return (
    <div className={mymode}>
      <ThemeProvider theme={darkmode}>
        <CssBaseline />
        <Header1 setmymode={setmymode} /> {/* تمرير setmymode للتحكم في التبديل */}
        <Header2 />
        <Header3 />
        <Box sx={{bgcolor:darkmode.palette.
// @ts-ignore
        mycolor.main}}>
        <Hero />
        </Box>
        <Scrooltotop/>
        <Footer/>
        <Outlet />
      </ThemeProvider>
    </div>
  );
};

export default Root;
