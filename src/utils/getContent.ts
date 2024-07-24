import { readFileSync } from "fs";

export function getContent(path: string) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (_err) {
    return;
  }
}
