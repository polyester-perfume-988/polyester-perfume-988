import multer from "multer";
import { allowedFileTypes } from "@config/allowedFiles";

const storage = multer.memoryStorage();

const fileFilter: multer.Options["fileFilter"] = (_req, file, cb) => {
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Only IGES and STEP files are allowed.") as unknown as null,
      false
    );
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

export { upload };
