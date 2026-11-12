import express from "express";
import {
  uploadSingle,
  uploadMultiple,
  removeFile,
} from "../Controllers/UploadCn.js";
import upload from "../Utils/Upload.js";

const uploadRouter = express.Router();

uploadRouter
  .route("/")
  .post(upload.single("file"), uploadSingle)
  .delete(removeFile);

uploadRouter.route("/multi").post(upload.array("files", 10), uploadMultiple);

export default uploadRouter;
