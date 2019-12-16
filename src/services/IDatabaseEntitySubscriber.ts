export default interface IDatabaseEntitySubscriber {
  subscribeCreate(): void;
  subscribeUpdate(): void;
  subscribeDelete(): void;
}
