import shortid from "shortid";
import { startOfDay, endOfDay } from "date-fns";
import { PasteBin } from "../models";
import ErrorHandler from "../utils/ErrorHandler";

export class PasteBinService {
  /**
   * @description Find single content
   * @param {string} slug
   */
  static async getSingleBin(slug) {
    const pastebin = await PasteBin.findOne({ slug });

    if (!pastebin) {
      throw new ErrorHandler("Content not found", 404);
    }

    return pastebin;
  }

  /**
   * @description create new content
   * @param {string} data
   */
  static async create(data) {
    data.slug = shortid();

    return await PasteBin.create(data);
  }

  /**
   * @description Delete expired content
   */
  static async deleteExpiredContent() {
    return await PasteBin.deleteMany({
      expiredAt: {
        $gte: startOfDay(new Date()),
        $lte: endOfDay(new Date()),
      },
    });
  }
}
