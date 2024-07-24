import { CONSTANTS } from "./constants";
import { findKey, getAllJson, getContent, getFileName, saveToExcel } from "./utils";

(async function Main() {
  const translates: { key: string; translation: string; fileName: string }[] = [];
  const allJson = await getAllJson(CONSTANTS.IbWebContentDir);
  CONSTANTS.findKeys.forEach((resolvekey) => {
    allJson.forEach((file) => {
      const content = getContent(file);
      const key = findKey(content, resolvekey);
      const fileName = getFileName(file);
      if (!key || !fileName) return;
      translates.push({ key: resolvekey, translation: key, fileName });
    });
  });
  saveToExcel(translates);
})();
