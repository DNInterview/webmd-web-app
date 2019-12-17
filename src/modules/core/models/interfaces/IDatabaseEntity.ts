import Identifiable from "@/modules/core/models/interfaces/Identifiable";
import { ReflectFields } from "@/modules/core/models/ReflectFields";

export default interface IDatabaseEntity extends Identifiable, ReflectFields {}
