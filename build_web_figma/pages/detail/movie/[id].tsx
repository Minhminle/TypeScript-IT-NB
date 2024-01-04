// pages/detail/[id].tsx
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import { Movie } from "@/models/Movie";
import Layout from "@/src/components/layoutDetailMovie";
import { Box, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

const MovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, error } = useSWR<Movie>(`/movie/${id}`, fetcher);

  if (error) return <div>Error loading movie details</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Stack gap={4} direction={"row"}>
      <Box
        component="img"
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
        width={300}
        style={{
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
          marginLeft: "10px",
          padding: "10px",
        }}
      />
      <Box
        sx={{
          borderRadius: "8px",
          padding: "40px",
          boxShadow: "0px 0px 20px rgba(0.5, 0.5, 0.5, 0.5)",
        }}
      >
        <Typography variant="h3" sx={{ marginBottom: "10px" }}>
          {data.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "18px", color: "#555", marginBottom: "20px" }}
        >
          {data.overview}
        </Typography>
      </Box>
    </Stack>
  );
};

MovieDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MovieDetail;
