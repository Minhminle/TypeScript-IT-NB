import type { ReactElement } from "react";

import Layout from "@/src/components/layout";
import { NextPageWithLayout } from "../../_app";
import { Box, Button, Stack, Typography } from "@mui/material";
import AboutLayout from "@/src/components/AboutLayout";
const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{ backgroundColor: "white", color: "black", height: "750px" }}
      >
        <Box textAlign={"center"} sx={{ width: "50%", paddingTop: "200px" }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", width: "80%", margin: "auto" }}
          >
            Our Dhabi Restaurant Expert Chef
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
            food, substance consisting essentially of protein, carbohydrate,
            fat, and other nutrients used in the body of an organism to sustain
            growth and vital processes and to furnish energy. The absorption and
            utilization of food by the body is fundamental to nutrition and is
            facilitated by digestion
          </Typography>
        </Box>

        <Box sx={{ width: "50%" }}>
          <img
            src="/images/Children.png"
            alt="Description"
            style={{
              width: "70%",
              height: "auto",
            }}
          />
        </Box>
      </Stack>
    </>
  );
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AboutLayout>{page}</AboutLayout>
    </Layout>
  );
};

export default Contact;
