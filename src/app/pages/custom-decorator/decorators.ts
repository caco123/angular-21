
export function ValidateEmail(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const email = args[0];
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      throw new Error('Email inválido');
    }
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

export function timer(
  prototype: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  const orig = descriptor.value;
  descriptor.value = function (...args: []) {
    const start = performance.now();
    orig.apply(this, args);
    const stop = performance.now();
    console.log(`Total time taken:`, stop - start);
  };
}

export function unsubscribe() {
  return function (constructor: any) {
    const originalDestroy = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function () {
      for (let prop in this) {
        const property = this[prop];
        if (property && typeof property.unsubscribe === 'function') {
          property.unsubscribe();
        }
      }
      originalDestroy.apply(this, arguments);
    };
  };
}