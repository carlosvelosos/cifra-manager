/**
 * Polyfills for Safari 10.1 / iOS 10.3.3 (iPad 4th Generation) compatibility.
 * Imported as the first statement in app/layout.tsx so they run before any
 * other application code.
 *
 * Covers:
 *   - Array.prototype.flatMap  (ES2019 — Safari 12+)
 *   - Object.fromEntries       (ES2019 — Safari 12.1+)
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

if (typeof Array.prototype.flatMap !== "function") {
  // eslint-disable-next-line no-extend-native
  (Array.prototype as any).flatMap = function flatMap(
    this: any[],
    callback: (value: any, index: number, array: any[]) => any,
    thisArg?: unknown,
  ): any[] {
    return Array.prototype.concat.apply([], this.map(callback, thisArg));
  };
}

if (typeof Object.fromEntries !== "function") {
  (Object as any).fromEntries = function fromEntries(
    entries: Iterable<readonly [PropertyKey, any]>,
  ): Record<string, any> {
    const result: Record<string, any> = {};
    for (const [key, value] of entries as Iterable<[PropertyKey, any]>) {
      result[String(key)] = value;
    }
    return result;
  };
}
