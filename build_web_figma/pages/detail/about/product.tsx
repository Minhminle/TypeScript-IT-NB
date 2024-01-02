import type { ReactElement } from "react";

import Layout from "@/src/components/layout";
import { NextPageWithLayout } from "../../_app";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import AboutLayout from "@/src/components/AboutLayout";

const foods = [
  {
    id: 1,
    imageSrc: "/images/1.png",
    title: "Special Salad",
    description:
      "Food is any substance consumed by an organism for nutritional support.",
  },
  {
    id: 2,
    imageSrc: "/images/2.png",
    title: "Russian Salad",
    description:
      "Food is any substance consumed by an organism for nutritional support.",
  },
  {
    id: 3,
    imageSrc: "/images/3.png",
    title: "Ramen Bliss",
    description:
      "Food is any substance consumed by an organism for nutritional support.",
  },
  {
    id: 4,
    imageSrc: "/images/4.png",
    title: "American Salad",
    description:
      "Food is any substance consumed by an organism for nutritional support.",
  },
];

const Blog: NextPageWithLayout = () => {
  return (
    <Box sx={{ backgroundColor: "#F8FBDC", color: "black", height: "900px" }}>
      <Box sx={{ paddingTop: "60px" }}>
        <Typography variant="h3" sx={{ fontSize: "35px", textAlign: "center" }}>
          Our Delicious and Special Salad
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "#DAE952",
            fontSize: "35px",
            fontWeight: "bolder",
            textAlign: "center",
          }}
        >
          Asian
        </Typography>
        <Typography
          variant="body1"
          sx={{ paddingTop: "20px", fontSize: "20px", textAlign: "center" }}
        >
          Food is any substance consumed by an organism for nutritional support.
        </Typography>
      </Box>

      <Box
        mt={4}
        sx={{ marginTop: "75px", marginLeft: "60px", textAlign: "center" }}
      >
        <Stack direction={"row"} spacing={3}>
          {foods.map((food) => (
            <Box key={food.id}>
              <Card
                sx={{ borderRadius: "30px", width: "291px", height: "495px" }}
              >
                <Box
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    top: "30px",
                    left: "20px",
                    fontWeight: "bold",
                  }}
                >
                  $12
                </Box>
                <div style={{ height: "310px", marginTop: "10px" }}>
                  <img
                    src={food.imageSrc}
                    alt={food.title}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <Typography
                  variant="h6"
                  sx={{
                    position: "relative",
                    top: "-10px",
                    fontWeight: "bolder",
                  }}
                >
                  {food.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "20px", position: "relative" }}
                >
                  {food.description}
                </Typography>
              </Card>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AboutLayout>{page}</AboutLayout>
    </Layout>
  );
};

export default Blog;
