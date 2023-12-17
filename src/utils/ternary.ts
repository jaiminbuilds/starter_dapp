/**
 * Creates a reusable ternary operation function.
 * @param expression The logical expression to test the ternary. For example, the variable A in -> A ? B : C
 * @param fallbackValue The Else value in a ternary. For example, the variable C in -> A ? B : C
 * @returns A function that emulates a ternary operation. This closure takes the truthy return and evaluates the ternary.
 */
export function repeatableTernaryBuilder<Type>(
  expression: boolean,
  fallbackValue: Type
) {
  /**
   * Represents a ternary operation.
   * @param value The returned in a ternary if the expression is true. For example, the variable B in -> A ? B : C
   * @returns `value` if `expression` is true and `value` is defined, else `fallbackValue`
   */
  function closure(value?: Type): Type {
    if (expression && value) {
      return value;
    } else {
      return fallbackValue;
    }
  }
  return closure;
}
