import express from "express";
import routes from "./router/index.js";

const app = express();
const port = 3015;
app.use(express.json());

// posts reports
app.use("/api", routes);

app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}/api`);
})