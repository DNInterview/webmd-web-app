import "reflect-metadata";
export function Field(): PropertyDecorator {
  return (target, key) => {
    const fields = Reflect.getOwnMetadata("fields", target) || [];
    if (!fields.includes(key)) {
      fields.push(key);
    }
    Reflect.defineMetadata("fields", fields, target);
  };
}

export abstract class ReflectFields {
  get fields() {
    let fields = [];
    let target = Object.getPrototypeOf(this);
    while (target != Object.prototype) {
      let childFields = Reflect.getOwnMetadata("fields", target) || [];
      fields.push(...childFields);
      target = Object.getPrototypeOf(target);
    }
    return fields;
  }
}
