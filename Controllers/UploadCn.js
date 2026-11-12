import { catchAsync, HandleERROR } from "vanta-api";
import fs from "fs";
import { __dirname } from "../app.js";

export const uploadSingle = catchAsync(async (req, res, next) => {
  const file = req.file;

  if (!file) {
    return next(new HandleERROR("No file uploaded", 400));
  }

  return res.status(201).json({
    success: true,
    message: "File uploaded successfully",
    data: file.filename,
  });
});

export const uploadMultiple = catchAsync(async (req, res, next) => {
  const files = req.files;

  if (!files || files.length === 0) {
    return next(new HandleERROR("No files uploaded", 400));
  }

  const data = files.map((file) => file.filename);

  return res.status(201).json({
    success: true,
    message: "Files uploaded successfully",
    data,
  });
});

export const removeFile = catchAsync(async (req, res, next) => {
  const { filename = null } = req.body;

  if (!filename) {
    return next(new HandleERROR("No filename provided", 400));
  }

  const normalizationFileName = filename.split("/").at(-1);

  if (!normalizationFileName || normalizationFileName !== filename) {
    return next(new HandleERROR("Invalid filename", 400));
  }

  const filePath = `${__dirname}/Public/Uploads/${normalizationFileName}`;

  fs.unlink(filePath, (err) => {
    if (err) {
      if (err.code === "ENOENT") {
        return next(new HandleERROR("File not found", 404));
      }

      return next(new HandleERROR("Error deleting file", 500));
    }

    return res.status(200).json({
      success: true,
      message: "File deleted successfully",
    });
  });
});