// let express = require("express");
// let path = require("path");
// let multer = require("multer");
// let sharp = require("sharp");

// let app = express();

// let storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "upload"));
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${file.originalname}`);
//   }
// });

// let upload = multer({ storage: storage });

// app.post("/upload", upload.single("picture"), async (req, res) => {
//   let compressedImagePath = path.join(
//     __dirname,
//     "compressed",
//     new Date().getTime() + ".jpeg"
//   );
//   try {
//     if (req.file.mimetype == "image/jpeg") {
//       sharp(req.file.path)
//         .jpeg({ quality: 50, chromaSubsampling: "4:4:4" })
//         .toFile(compressedImagePath, (err, info) => {
//           if (err) {
//             res.send(err);
//           } else {
//             res.send(info);
//           }
//         });
//     } else if (req.file.mimetype == "image/png") {
//       sharp(req.file.path)
//         .png({ quality: 50, chromaSubsampling: "4:4:4" })
//         .toFile(compressedImagePath, (err, info) => {
//           if (err) {
//             res.send(err);
//           } else {
//             res.send(info);
//           }
//         });
//     }
//   } catch (err) {
//     res.send(err);
//   }
// });

// app.listen(2000, () => console.log(`Server running on port 2000`));
