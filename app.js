let express = require("express");
let path = require("path");
let multer = require("multer");

let app = express();

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "upload"));
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname} - ${new Date.now()}`);
  }
});

let upload = multer({ storage: storage });

app.listen(2000, () => console.log(`Server running on port 2000`));
