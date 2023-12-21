import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const Container_Cus = () => {
  return (
    <Stack>
      <Box textAlign={"center"} sx={{ width: "50%", paddingTop: "200px" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", width: "80%", margin: "auto" }}
        >
          Our Dhabi Restaurant Happy Customers
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            width: "50%",
            margin: "auto",
            fontSize: "20px",
            paddingTop: "20px",
          }}
        >
          A customer is a person or business that buys goods or services from
          another business. Customers are crucial because they generate revenue.
          Without them, businesses would go out of business.
        </Typography>
      </Box>
      <Box sx={{ width: "50%" }}>
        <img
          src="/images/6.png"
          alt="Description"
          style={{
            width: "70%",
            height: "auto",
            position: "relative",
            zIndex: "1",
            left: "110px ",
          }}
        />
      </Box>
    </Stack>
  );
};

export default Container_Cus;
