import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import "./pdfDetails.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/files", express.static("files"));

//mongodb connection----------------------------------------------
const mongoUrl =
    "mongodb+srv://adarsh:adarsh@cluster0.zllye.mongodb.net/?retryWrites=true&w=majority";

mongoose
    .connect(mongoUrl, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Connected to database");
    })
    .catch((e) => console.log(e));

//multer------------------------------------------------------------
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./files");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    },
});

const PdfSchema = mongoose.model("PdfDetails");
const upload = multer({ storage: storage });

app.post("/upload-files", upload.single("file"), async (req, res) => {
    console.log(req.file);
    const title = req.body.title;
    const fileName = req.file.filename;
    try {
        await PdfSchema.create({ title: title, pdf: fileName });
        res.send({ status: "ok" });
    } catch (error) {
        res.json({ status: error });
    }
});

app.get("/get-files", async (req, res) => {
    try {
        PdfSchema.find({}).then((data) => {
            res.send({ status: "ok", data: data });
        });
    } catch (error) {}
});

//apis----------------------------------------------------------------
app.get("/", async (req, res) => {
    res.send("Success!!!!!!");
});

app.listen(5000, () => {
    console.log("Server Started");
});
