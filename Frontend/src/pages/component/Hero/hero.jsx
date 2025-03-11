import { ArrowForward} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Hero.css";
import Iconsection from "./Icon";
import Cardsection from "../Cardsection/Cardsection";

const Hero = () => {
  const theme = useTheme();
  return (
    <Box sx={{}}>
    <Container>
      <Box sx={{ pt:2,mt: 3, display: "flex", alignItems: "center",mb:"20px"}}>
      <Swiper
      loop={true}
        style={{}}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img src="/image/banner-15.jpg" alt="" />
          <Box
            sx={{
              [theme.breakpoints.up("sm")]: {
                position: "absolute",
                left: "10%",
                top:"30%",
                zIndex: 3,
                textAlign: "left",
              },
              [theme.breakpoints.down("sm")]: { pt: 6, pb: 6,textAlign:"center",bgcolor:"white" },
            }}
          >
            {" "}
            <Typography variant="h5" color="initial">
              LIFESTYLE COLLECTION
            </Typography>
            <Typography variant="h3" color="initial">
              MEN
            </Typography>
            <Typography className="screenty" variant="h4" color="initial">
              SALE UP TO{" "}
              <span style={{ color: "red", marginLeft: "10px" }}>30% OFF</span>
            </Typography>
            <Typography
              sx={{ color: "gray", fontWeight: 300, my: 1 }}
              variant="body1"
              color="initial"
            >
              Get Free Shipping On Orders Over $99.00{" "}
            </Typography>
            <Button variant="contained" sx={{ bgcolor: "black", mt: "10px",color:"#fff" }}>
              Shop Now
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/banner-25.jpg" alt="" />
          <Box
            sx={{
              [theme.breakpoints.up("sm")]: {
                position: "absolute",
                left: "10%",
                top:"30%",
                zIndex: 3,
                
              },
              [theme.breakpoints.down("sm")]: { pt: 6, pb: 6,textAlign:"center",bgcolor:"white" },
            }}
          >
            <Typography variant="h5" color="initial">
              LIFESTYLE COLLECTION
            </Typography>
            <Typography variant="h3" color="initial">
              WOMAN
            </Typography>
            <Typography className="screenty" variant="h4" color="initial">
              SALE UP TO{" "}
              <span style={{ color: "red", marginLeft: "10px" }}>30% OFF</span>
            </Typography>
            <Typography
              sx={{ color: "gray", fontWeight: 300, my: 1 }}
              variant="body1"
              color="initial"
            >
              Get Free Shipping On Orders Over $99.00{" "}
            </Typography>
            <Button variant="contained" sx={{ bgcolor: "black", mt: "10px",color:"#fff" }}>
              Shop Now
            </Button>
          </Box>
        </SwiperSlide>
      </Swiper>

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          ml: "30px",
          minWidth: "26%",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <img width={"100%"} src="/image/banner-17.jpg" alt="" />
          <Stack
            sx={{
              position: "absolute",
              top: "30%",
              transform: "transalatY(-50%)",
              left: 30,
              lineHeight: "20px",
            }}
          >
            <Typography
              sx={{ fontSize: "18px" }}
              variant="body1"
              color="initial"
            >
              New arrivals
            </Typography>
            <Typography variant="body1" color="initial">
              Summer
            </Typography>
            <Typography variant="body1" color="initial">
              Sale 20% off
            </Typography>
            <Link
              sx={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 2,
                color: "#2B3445",
                ":hover": { color: "#D23F57" },
                cursor:"pointer"
              }}
            >
              Shop Now
              <ArrowForward />
            </Link>
          </Stack>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img width={"100%"} src="/image/banner-16.jpg" alt="" />
          <Stack
            sx={{
              position: "absolute",
              top: "30%",
              transform: "transalatY(-50%)",
              left: 30,
            }}
          >
            <Typography
              sx={{ fontSize: "18px" }}
              variant="body1"
              color="initial"
            >
              Gaming 4K
            </Typography>
            <Typography variant="body1" color="initial">
              DESKTOPS 7
            </Typography>
            <Typography variant="body1" color="initial">
              LAPTOPS
            </Typography>
            <Link
              sx={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 2,
                color: "#2B3445",
                ":hover": { color: "#D23F57" },
                cursor:"pointer"
              }}
            >
              Shop Now
              <ArrowForward />
            </Link>
          </Stack>
        </Box>
      </Box>
      </Box>
    <Iconsection/>
    <Cardsection/>
    </Container>

    </Box>
  );
};

export default Hero;
