import { glob } from "glob";
export async function getAllJson(path: string) {
  return glob("**/*.json", { cwd: path, absolute: true });
}
