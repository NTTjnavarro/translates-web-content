export function getFileName(file: any) {
  return file.split("/").pop()?.split("iberia-web-content")[1];
}
