import Head from "next/head";
import { Grid, Typography, Avatar, Paper, Divider, Chip } from "@mui/material";
import Image from "next/image";
import avatar from "../public/min.jpg";
import cover from "../public/cover.jpg";

function Header() {
  return (
    <Grid container direction="row" alignItems="flex-start" spacing={2}>
      <Grid item style={{ position: "relative" }}>
        <Image
          src={cover}
          alt="cover"
          layout="responsive"
          width={600}
          height={100}
          style={{ borderRadius: "10px" }}
        />
        <Avatar
          alt="avatar"
          src="min.jpg"
          style={{
            width: 150,
            height: 150,
            position: "absolute",
            bottom: -80,
            left: "20px",
            border: "4px solid #fff",
          }}
        />
      </Grid>
      <Grid item>
        <div style={{ marginLeft: "175px" }}>
          <Typography variant="h4">Võ Lê Minh Nghĩa</Typography>
          <Typography variant="subtitle1">Intern Developer</Typography>
        </div>
      </Grid>
    </Grid>
  );
}

function SectionHeader(props: { title: string }) {
  return (
    <Grid
      container
      direction="column"
      alignItems="left"
      spacing={2}
      style={{ margin: "20px 0" }}
    >
      <Typography variant="h5">{props.title}</Typography>
      <Divider style={{ width: "30%" }} />
    </Grid>
  );
}

function Section(props: { data: SectionData }) {
  return (
    <Grid container direction="column" alignItems="flex-start" spacing={1}>
      {props.data.items.map((item, index) => (
        <Grid item key={index}>
          <Typography>{item}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}

type SectionData = {
  title: string;
  items: string[];
};

export default function Home() {
  const data: SectionData[] = [
    {
      title: "Contact",
      items: [
        "🏠 17/14 Cao Văn Bé, Vĩnh Phước",
        "✉️ nghia.vlm.62cntt@ntu.edu.vn",
        "📱 0523053534",
      ],
    },
    {
      title: "Hobbies",
      items: ["Movie", "Travel", "Swimming", "Sleepping"],
    },
    {
      title: "Skills",
      items: ["✅ Frontend", "✅ Backend", "✅ Design", "✅ Machine Learning"],
    },
    {
      title: "Work experiences",
      items: ["Nha Trang University", "Amy Center", "9thWonder"],
    },
  ];

  const languages = ["typescript", "python", "ruby", "swift"];
  const frameworks = ["nextjs", "nodejs", "xcode", "visual-studio-code"];

  return (
    <>
      <Head>{/* Head content */}</Head>
      <Paper
        elevation={3}
        style={{
          backgroundColor: "rgb(240, 240, 240)",
          maxWidth: "100%",
          margin: "auto",
          borderRadius: "10px",
          border: "1px solid #ccc",
          padding: "20px",
        }}
      >
        <Header />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            {data.map((item) => (
              <div key={item.title}>
                <SectionHeader title={item.title} />
                <Section data={item} />
              </div>
            ))}
            <SectionHeader title="Programming Languages" />
            <Grid container spacing={2}>
              {languages.map((lang) => (
                <Grid item key={lang}>
                  <Chip label={lang} />
                </Grid>
              ))}
            </Grid>
            <SectionHeader title="Frameworks" />
            <Grid container spacing={2}>
              {frameworks.map((lang) => (
                <Grid item key={lang}>
                  <Chip label={lang} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8}>
            <SectionHeader title="Photos"></SectionHeader>
            <Grid container spacing={2}>
              {Array.from(Array(12).keys()).map((i) => (
                <Grid item key={i} xs={6} sm={3}>
                  <div
                    className=""
                    style={{
                      borderRadius: "10px",
                      overflow: "hidden",
                      margin: "10px",
                    }}
                  >
                    <Image
                      src={`/gallery/${i + 1}.jpg`}
                      alt={`${i}.jpg`}
                      width={0}
                      height={0}
                      layout="responsive"
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      ;
    </>
  );
}
