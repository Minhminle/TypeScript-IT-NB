import type { ReactElement } from "react";

import Layout from "@/src/components/layout";
import { NextPageWithLayout } from "../_app";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import useSWR from "swr";
import Link from "@mui/material/Link";

interface User {
  name: string;
}

interface MovieList {
  results: Movie[];
}

interface Movie {
  id: string;
  title: string;
  poster_path: string;
  overview: string;
}

const HomeDetail: NextPageWithLayout = () => {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, isLoading, error } = useSWR<MovieList>(
    "/movie/upcoming",
    fetcher
  );
  console.log(data);
  return (
    <>
      <Box sx={{ color: "white" }}>Home Detail</Box>
      <Stack gap={4}>
        {data?.results.map((movie) => (
          <Box
            key={movie.id}
            padding={2}
            display="flex"
            sx={{
              background: "linear-gradient(to bottom, #6a1b9a, #20033B)",
            }}
          >
            <Box
              width="20%"
              component="img"
              style={{
                width: "200px",
                height: "auto",
                borderRadius: "4px 0 0 4px",
              }}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <Box width="80%" padding={2}>
              <Typography
                variant="h3"
                sx={{ fontSize: "35px", color: "white" }}
              >
                {movie.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "20px", marginTop: "15px", color: "white" }}
              >
                {movie.overview}
              </Typography>
              <Link
                href="#"
                underline="none"
                position={"relative"}
                sx={{
                  fontSize: "20px",
                  color: "#ff5722",
                  top: "20px ",
                  "&:hover": { color: "#ffab00" },
                }}
              >
                Read more
              </Link>
            </Box>
          </Box>
        ))}
      </Stack>
    </>
  );
};

HomeDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomeDetail;
