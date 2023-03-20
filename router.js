import { PdfReader } from "pdfreader";
import { Router } from "express";
import translateHelper from "./translate-util.js";
const router = Router();

router.get("/", (req, res) => {
  const result = {
    data: [],
  };

  new PdfReader().parseFileItems("sample.pdf", async (err, item) => {
    if (err) console.error(err);
    else if (!item) {
      console.warn("end of file");
      const translatedResultObject = await translateHelper(result);
      return res.status(200).json(translatedResultObject);
    } else if (item.text) {
      console.log(item);
      result.data.push(item);
    }
  });
});

export default router;
