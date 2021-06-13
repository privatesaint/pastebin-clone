import JoiBase from "@hapi/joi";
import JoiDate from "@hapi/joi-date";

const Joi = JoiBase.extend(JoiDate);

const PasteBinRequest = (data) => {
  const pasteBinSchema = Joi.object({
    content: Joi.string().trim().required().messages({
      "string.empty": "Content is required",
      "any.required": "Content is required",
    }),
    expiredAt: Joi.date().empty("").format("YYYY-MM-DD").min("now").messages({
      "date.base": "Not a valid date",
      "date.format": "Invalid date format",
      "date.min": "Expired date must be more than today",
    }),
  });
  return pasteBinSchema.validateAsync(data);
};

export default PasteBinRequest;
