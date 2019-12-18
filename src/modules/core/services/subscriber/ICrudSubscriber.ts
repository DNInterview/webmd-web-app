import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import ICrudService from "@/modules/crud/services/ICrudService";
import IDatabaseEntitySubscriber from "@/modules/core/services/subscriber/IDatabaseEntitySubscriber";

export default interface ICrudSubscriber<T extends IDatabaseEntity>
  extends ICrudService<T>,
    IDatabaseEntitySubscriber<T> {}
