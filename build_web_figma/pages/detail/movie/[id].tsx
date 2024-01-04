// pages/detail/[id].tsx
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import Layout from "@/src/components/layoutDetailMovie";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";
import { Movie as BaseMovie } from "@/models/Movie";
import { Rating, Chip } from "@mui/material";

export interface Genre {
  id: number;
  name: string;
}
export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
  // Thêm các thuộc tính khác của cast nếu cần
}

export interface Movie extends BaseMovie {
  vote_average?: number;
  vote_count?: number;
  genres?: Genre[];
  credits?: {
    cast?: Cast[];
  };
}

const MovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, error } = useSWR<Movie>(
    `/movie/${id}?append_to_response=credits`,
    fetcher
  );

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
        <Stack direction={"row"} spacing={"20px"}>
          <Rating
            name="movie-rating"
            value={data.vote_average ? data.vote_average / 2 : 0}
            precision={0.5}
            readOnly
            sx={{ color: "#FFD700", fontSize: 24 }}
          />
          <Typography
            variant="h5"
            sx={{ color: "#d32f2f", marginBottom: "10px" }}
          >
            Votes: {data.vote_count}
          </Typography>
        </Stack>
        <Typography variant="h5" sx={{ color: "#42a5f5", marginTop: "10px" }}>
          Genres:
          {data.genres?.map((genre) => (
            <Chip
              key={genre.id}
              label={genre.name}
              sx={{
                margin: "3px",
                backgroundColor: "#673ab7",
                color: "white",
                marginRight: "5px",
                marginBottom: "5px",
              }}
            />
          ))}
        </Typography>
        <Typography variant="h5" sx={{ color: "#1de9b6", marginTop: "10px" }}>
          Cast:
          {data.credits?.cast?.slice(0, 10).map((actor) => (
            <Chip
              key={actor.id}
              label={`${actor.name} as ${actor.character}`}
              sx={{
                margin: "3px",
                backgroundColor: "#66bb6a",
                color: "white",
                marginRight: "5px",
                marginBottom: "5px",
              }}
            />
          ))}
        </Typography>
      </Box>
    </Stack>
  );
};

MovieDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MovieDetail;
