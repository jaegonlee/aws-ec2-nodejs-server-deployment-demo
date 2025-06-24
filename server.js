const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("port", port);

// 👇 public 폴더를 정적 파일 경로로 설정
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, () => console.log("Listening on", port));