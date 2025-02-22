import { model } from "mongoose";
import { HoldingSchema } from "./schemas/HoldingSchema";

export const HoldingModel = new model("holding", HoldingSchema);
