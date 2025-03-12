import { AddShoppingCart, Close } from "@mui/icons-material";
import { useGetproductByNameQuery } from "../../../Redux/Product";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Modal,
  Rating,
  Stack,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import Modall from "./Modal";

const Cardsection = () => {
  const theme=useTheme()
  const [onclick, setonclick] = useState({});

  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setmydata(newValue)

    }
  };
  const categroymen =
    "http://localhost:1337/api/products?populate=*&filters[productcategroy][$eq]=men";
  const categroywoman =
    "http://localhost:1337/api/products?populate=*&filters[productcategroy][$eq]=woman";
  const allproduct = "products?populate=*";
  const [mydata, setmydata] = useState(allproduct);
  const { data, error, isLoading } = useGetproductByNameQuery(mydata);
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  if (isLoading) {
    return (
      <Typography variant="h5" color="initial">
        Is Loadin......................
      </Typography>
    );
  }
  if (error) {
    return (
      <Typography variant="h5" color="initial">
        {
          // @ts-ignore
          error.message
        }
      </Typography>
    );
  }
  if (data) {
    return (
      <Box>
        <Container sx={{ mb: 10, mt: 10, display: "flex", flexWrap: "wrap" }}>
          <Box sx={{ flexGrow: 1, mb: "16px" }}>
            <Typography variant="h5">Selected Products</Typography>
            <Typography variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            value={mydata}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ":hover": { bgcolor: "error" },
              ".Mui-selected": {
                border: "1px solid rgba(233,69,96,0.5) !important",
                color: "#e94560",
                bgcolor: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="mybutton"
              color="error"
              value={allproduct}
              aria-label=""
            >
              All Products
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="mybutton"
              color="error"
              value={categroymen}
              aria-label=""
            >
              Men Categroies
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="mybutton"
              color="error"
              value={categroywoman}
              aria-label=""
            >
              Woman Categroies
            </ToggleButton>
          </ToggleButtonGroup>
        </Container>

        <Container
          sx={{
            pb: "150px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
          }}
        >
          {data.data.map((item) => {
            return (
              <Box>
              <Card
                key={item.producttitle}
                sx={{
                  maxWidth: 300,
                  my: "10px",
                  transition: "all 0.3s",
                  ":hover .MuiCardMedia-root": {
                    scale: "1.1",
                    transition: "0.7s",
                  },
                }}
              >
                <CardMedia
                  sx={{}}
                  component="img"
                  alt="green iguana"
                  height="277"
                  image={`http://localhost:1337${item.productimage[0].url}`}
                />

                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h6">{item.producttitle}</Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.productprice}$
                    </Typography>
                  </Box>

                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.productdescription}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    onClick={() => {
                      handleOpen()
                      setonclick(item)
                    }
                    }
                    sx={{ textTransform: "capitalize" }}
                    size="small"
                  >
                    <AddShoppingCart /> Add to card
                  </Button>
                  <Stack spacing={1}>
                    <Rating
                      name="size-large"
                      defaultValue={item.productrating}
                      precision={0.5}
                    />
                  </Stack>
                </CardActions>
              </Card>
              
              </Box>
            );
          })}
        
        </Container>
        {true&& <Modall open={open} handleClose={handleClose} item={onclick} mydata={mydata}/>}
        
      </Box>
      
    );
  }
};

export default Cardsection;
