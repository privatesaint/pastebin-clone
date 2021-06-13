import { Router } from "express";
import { show, store } from "../controllers/PasteBinController";

const router = Router();

router.post("/pastebin", store);
router.get("/pastebin/:slug", show);

export default router;
