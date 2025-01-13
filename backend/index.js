import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import "./pdfDetails.js";
import path from "path";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/files", express.static("files"));

// MongoDB connection----------------------------------------------
const mongoUrl = "mongodb+srv://suryashashankneupane:shashank0427@cluster0.u6qg0.mongodb.net/";

mongoose
    .connect(mongoUrl)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((e) => console.log(e));

// Multer setup----------------------------------------------------
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

// File upload endpoint--------------------------------------------
app.post("/upload-files", upload.single("file"), async (req, res) => {
    console.log(req.file);
    const fileName = req.file.filename;
    const originalName = req.file.originalname;
    const title = path.parse(originalName).name; // Extract title from the original file name
    try {
        await PdfSchema.create({ title: title, pdf: fileName, originalName: originalName });
        res.send({ status: "ok" });
    } catch (error) {
        res.json({ status: error });
    }
});

// Get files endpoint----------------------------------------------
app.get("/get-files", async (req, res) => {
    try {
        const data = await PdfSchema.find({});
        res.send({ status: "ok", data: data });
    } catch (error) {
        res.json({ status: error });
    }
});

// Root endpoint---------------------------------------------------
app.get("/", async (req, res) => {
    res.send("Success!!!!!!");
});

app.listen(5000, () => {
    console.log("Server Started");
});

app.get("/get-pdf/:filename", async (req, res) => {
    const { filename } = req.params; // Get the filename from the request parameters
    const filePath = path.join(__dirname, "files", filename);

    // Send the PDF file if it exists
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(404).send({ status: "error", message: "File not found" });
        }
    });
});

// Get PDF names endpoint------------------------------------------
app.get("/get-pdf-names", async (req, res) => {
    try {
        const pdfNames = await PdfSchema.find({}, 'title originalName');
        res.send({ status: "ok", data: pdfNames });
    } catch (error) {
        res.json({ status: error });
    }
});
