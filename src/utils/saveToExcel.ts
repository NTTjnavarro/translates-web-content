import { utils, writeFile } from "xlsx";

export function saveToExcel(data: any[]) {
  try {
    console.log("Creating Excel file...");
    const groupedData = data.reduce((acc, item) => {
      if (!acc[item.key]) {
        acc[item.key] = [];
      }
      acc[item.key].push(item);
      return acc;
    }, {});

    const wb = utils.book_new();

    Object.keys(groupedData).forEach((key) => {
      const ws = utils.json_to_sheet(groupedData[key]);
      utils.book_append_sheet(wb, ws, key);
    });

    writeFile(wb, "translates.xlsx");
    console.log("Excel file created successfully!");
  } catch (error: any) {
    if (error.message === "Workbook is empty") {
      console.log("[ERROR]: Workbook is empty");
    } else {
      console.log(error);
    }
  }
}
