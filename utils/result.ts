export type Result<E, T> = Success<T> | Failure<E>;

export interface Success<T> {
  readonly _tag: "success";
  readonly value: T;
}

export interface Failure<E> {
  readonly _tag: "failure";
  readonly error: E;
}

export const success = <T>(value: T): Success<T> => ({ _tag: "success", value });
export const failure = <E>(error: E): Failure<E> => ({ _tag: "failure", error });

export const isSuccess = <E, T>(r: Result<E, T>): r is Success<T> => r._tag === "success";
export const isFailure = <E, T>(r: Result<E, T>): r is Failure<E> => r._tag === "failure";