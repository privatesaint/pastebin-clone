import catchAsyncError from "../middleware/catchAsyncError";
import { PasteBinService } from "../services";
import PasteBinRequest from "../validation/PasteBinRequest";

/**
 * @route   GET api/pastebin/:slug
 * @desc    Get Single Content
 * @access  Public
 */
export const show = catchAsyncError(async (req, res, next) => {
  const pastebin = await PasteBinService.getSingleBin(req.params.slug);

  return res.status(200).json({
    success: true,
    message: "",
    data: pastebin,
  });
});

/**
 * @route   POST api/pastebin
 * @desc    Paste content in a bin
 * @access  Public
 */
export const store = catchAsyncError(async (req, res, next) => {
  await PasteBinRequest(req.body);

  const response = await PasteBinService.create(req.body);
  const url = `${req.protocol}://${req.get("host")}/api/pastebin/${
    response.slug
  }`;

  res.status(201).json({
    success: true,
    message: "Content added to pastebin successfully",
    data: { url },
  });
});
