import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import ICrudEntityFormViewModel from "@/modules/crud/components/ICrudEntityFormViewModel";
import { Vue } from "vue-property-decorator";

export default abstract class CrudEntityFormViewModel<T extends IDatabaseEntity>
  extends Vue
  implements ICrudEntityFormViewModel<T> {}
