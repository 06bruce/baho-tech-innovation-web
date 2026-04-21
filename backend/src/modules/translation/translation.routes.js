import { Router } from "express";
import { requireAuth } from "../../middlewares/auth.middleware.js";
import { languageOptions, translateDynamicContent } from "./translation.controller.js";

export const translationRoutes = Router();

translationRoutes.get("/languages", languageOptions);
translationRoutes.post("/translate", requireAuth, translateDynamicContent);
