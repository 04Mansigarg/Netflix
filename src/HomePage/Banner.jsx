import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useNavigate } from "react-router-dom";

export const Banner = () => {
  const navigate = useNavigate()
  const [obj, setObj] = React.useState({
    id: 1,
    title: "Little Things",
    category: "Indian",
    bannerPic:
      "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQUAolj0aWIPvIeX_b3hWZgv02JOY81yERK3NHg6QukX90NzDXbcygmZr4zIuAiP96SKYj1mRg3CgIjRP_6TaEoUu1V8.webp?r=749",
    namePic:
      "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWeNM_pjzgOMs-v3bIM-BPEaEpNPcZf8wplU0KiAJTyxu4pbT5oJatLztRwjoN29vKTDnk0Ushvnxb8fEHxMtA_V3BB-BnO2WYPvRQZBSImK0bcAMXL12rf81zNfqGnpOMUm06KTJHNN2xHZ_dLnGjwXvOSlcjGlseNaq-rUsfM7nw.webp?r=5f9",
    description:
      "A cohabiting couple in their 20s navigate the ups and downs of work, modern-day relationships and finding themselves in contemporary Mumbai.",
    match: 94,
    certificate: "U/A 16+",
    seasons: 4,
    year: 2021,
    cast: ["Dhruv Sehgal", "Mithila Palkar"],
    genres: [
      "Romantic TV Dramas",
      "Romantic TV Comedies",
      "Hindi-Language TV Shows",
    ],
    quality: ["Intimate", "Romantic"],
  });

  React.useEffect(() => {
    let id = 2;
    setInterval(() => {
      console.log(id);
      fetch(`http://localhost:3000/banners-tv/${id}`)
        .then((res) => res.json())
        .then((res) => setObj(res))
        .catch((err) => console.log(err));
      if (id >= 4) {
        id = 1;
      } else {
        id++;
      }
    }, 5000);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url("${obj.bannerPic}")`,
        height: "90vh",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div style={{ width: "35%" }}>
        <img
          style={{ marginTop: "30%", marginLeft: "15%", width: "100%" }}
          src={`${obj.namePic}`}
          alt=""
        />

        <h3
          style={{
            color: "#fff",
            fontWeight: "400",
            lineHeight: "normal",
            width: "100%",
            fontSize: "1.4vw",
            textShadow: "2px 2px 4px rgb(0 0 0 / 45%)",
            marginLeft: "15%",
          }}
        >
          {obj.description}
        </h3>
        <div
          style={{
            marginTop: "1.5vw",
            whiteSpace: "nowrap",
            display: "flex",
            columnGap: "1rem",
            lineHeight: "88%",
            marginLeft: "15%",
          }}
        >
          <button
          onClick={() => navigate("/player")}
            style={{
              backgroundColor: "rgba(255,255,255,0.75)",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "4px",
              width: "35%",
              paddingBottom: "4px",
              border: "none",
              borderRadius: "3px",
              fontSize: "22px",
              fontWeight: "550",
            }}
          >
            {" "}
            <div>
              <PlayCircleFilledIcon sx={{ fontSize: "22px" }} />{" "}
              <span style={{ marginTop: "-2em" }}>Play</span>
            </div>
          </button>
          <button
            style={{
              backgroundColor: "rgba(109,109,110,0.7)",
              color: "white",
              fontSize: "22px",
              paddingRight: "1rem",
              paddingLeft: "1rem",
              border: "0px",

              width: "35%",
              borderRadius: "2px",
            }}
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
