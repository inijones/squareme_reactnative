import { failure, Result, success } from "../../utils/result";
import { loginApi } from "./api";
import { AuthToken } from "./types";

export async function loginRepo(email: string, password: string): Promise<Result<Error, AuthToken>> {
  try {
    const token = await loginApi(email, password);
    return success(token);
  } catch (err) {
    return failure(err instanceof Error ? err : new Error(String(err)));
  }
}
