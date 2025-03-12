import {
  Box,
  Button,
  Modal,
  Typography,
  IconButton,
} from "@mui/material";
import { AddShoppingCart, Close } from "@mui/icons-material";
import React from "react";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: { xs: "80%", md: "800px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Modall = ({ open, handleClose, item }) => {
  if (!item) return null; // تجنب حدوث أخطاء عند عدم توفر بيانات

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="product-modal">
      <Box sx={style}>
        {/* زر الإغلاق */}
        <IconButton
          sx={{
            position: "absolute",
            top: { xs: 30, md: 10 },
            right: { xs: 30, md: 10 },
            ":hover": {
              color: "red",
              rotate: "360deg",
              transition: "0.3s",
            },
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>

        {/* محتوى النافذة المنبثقة */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
          {/* الصورة الرئيسية للمنتج */}
          <Box sx={{ mx: "auto" }}>
            <img
              style={{ width: "320px", borderRadius: "10px", height: "100%" }}
              src={item.productimage?.[0]?.url ? `http://localhost:1337${item.productimage[0].url}` : "/placeholder.png"}
              alt={item.producttitle || "صورة المنتج"}
            />
          </Box>

          {/* تفاصيل المنتج */}
          <Box sx={{ ml: 2, pl: 1, pb: 1, pt: 1.5, borderRadius: "5px", textAlign: { xs: "center", md: "left" } }}>
            <Typography color="black" variant="h5">
              {item.producttitle}
            </Typography>
            <Typography variant="body1" my={1} color={"crimson"} fontSize={"22px"}>
              ${item.productprice}
            </Typography>
            <Typography color="gray" variant="body1">
              {item.productdescription}
            </Typography>

            {/* الصور الإضافية للمنتج */}
            {item.productimage?.length > 1 && (
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}>
                {item.productimage.map((img, index) => (
                  <img
                    key={index}
                    src={`http://localhost:1337${img.url}`}
                    style={{ width: "100px", height: "100px", borderRadius: "10px" }}
                    alt={""}
                  />
                ))}
              </Box>
            )}

            {/* زر الشراء */}
            <Button sx={{ mt: 2, width: "100%" }} variant="contained">
              <AddShoppingCart /> Buy Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};



export default Modall;
