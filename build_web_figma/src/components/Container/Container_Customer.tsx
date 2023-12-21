import React from "react";
import { Box, Typography, Card, Avatar, Stack } from "@mui/material";

const ContainerComponent = () => {
  return (
    <Box width="100%" sx={{ backgroundColor: "rgba(218, 233, 82, 0.20);" }}>
      {/* Tiêu đề và mô tả */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Our Dhabi Restaurant Happy Customers
        </Typography>
        <Typography variant="body1" sx={{ width: "70%", margin: "auto" }}>
          A customer is a person or business that buys goods or services from
          another business. Customers are crucial because they generate revenue.
          Without them, businesses would go out of business.
        </Typography>
      </Box>
      {/* Stack chứa hình ảnh và mô tả */}
      <Stack direction="row" spacing={2} alignItems="center">
        {/* Hình ảnh */}
        <img
          src="/images/6.png"
          alt="Description"
          style={{
            width: "70%",
            height: "auto",
          }}
        />
        {/* Card chứa mô tả */}
        <Card>
          <Avatar src="/images/avacus.png" alt="ava customer" />
          <Typography variant="body2">
            A customer is a person or business that buys goods or services from
            another business. Customers are crucial because they generate
            revenue. Without them, businesses would go out of business.
          </Typography>
          <Typography variant="h6">Abdullah Iqbal</Typography>
        </Card>
      </Stack>
    </Box>
  );
};

export default ContainerComponent;
