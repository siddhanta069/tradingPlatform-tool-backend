import { model } from "mongoose";
import { PositionsSchema } from "./schemas/PositionsSchema";

export const PositionsModel = new model("position", PositionsSchema);