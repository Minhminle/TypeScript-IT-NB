// detail/[id].tsx
import { GetServerSideProps, NextPage } from "next";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import Layout from "@/src/components/layout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@/pages/_app";
import { Movie } from "@/models/Movie";

interface MovieDetail {
  id: string;
  title: string;
  poster_path: string;
  overview: string;
}

interface MovieDetailProps {
  movieDetail: MovieDetail;
}

const MovieDetailPage: NextPageWithLayout<MovieDetailProps> = ({
  movieDetail,
}) => {
  return (
    <Box sx={{ color: "white" }}>
      <Typography variant="h2" sx={{ fontSize: "35px", color: "white" }}>
        {movieDetail.title}
      </Typography>
      <Box
        component="img"
        style={{
          width: "200px",
          height: "auto",
          borderRadius: "4px",
        }}
        src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
      />
      <Typography
        variant="body2"
        sx={{ fontSize: "20px", marginTop: "15px", color: "white" }}
      >
        {movieDetail.overview}
      </Typography>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  try {
    const response = await axios.get(`/movie/${id}`); // Replace with your actual API endpoint
    const movieDetail: MovieDetail = response.data;
    return {
      props: {
        movieDetail,
      },
    };
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return {
      notFound: true,
    };
  }
};

MovieDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MovieDetailPage;
