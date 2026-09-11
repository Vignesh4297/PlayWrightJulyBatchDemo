//xlsx library is used to read the excel file

import * as XLSX from 'xlsx';

//create interface to define the structure of the test data
export interface LoginData {
  username: string;
  password: string;

}

export interface ProductData {
    productName: string;
    productPrice: string;
}

export function getLoginData(filePath: string, sheetName: string): LoginData[] {


   const workbook = XLSX.readFile(filePath);

   const worksheet = workbook.Sheets[sheetName];

   if (!worksheet) {
     throw new Error(`Sheet "${sheetName}" not found in the Excel file.`);
   }

   // Convert the worksheet data to JSON format and map it to the LoginData interface
   const data: LoginData[] = XLSX.utils.sheet_to_json(worksheet);


   return data;
}

export function getProductData(filePath: string, sheetName: string): ProductData[] {


   const workbook = XLSX.readFile(filePath);

   const worksheet = workbook.Sheets[sheetName];

   if (!worksheet) {
     throw new Error(`Sheet "${sheetName}" not found in the Excel file.`);
   }

   // Convert the worksheet data to JSON format and map it to the ProductData interface
   const data: ProductData[] = XLSX.utils.sheet_to_json(worksheet);


   return data;
}