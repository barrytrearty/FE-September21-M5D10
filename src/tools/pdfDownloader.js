import { text } from "express";
import PdfPrinter from "pdfmake";

export const getPdfReadableStream = (mediaObject) => {
  const fonts = {
    Roboto: {
      normal: "Helvetica",
      bold: "Helvetica-Bold",
    },
  };

  //   const printReviews = (array) => {
  //     for (let i = 0; i < array.length; i++) {
  //       {
  //         text: mediaObject.array[i];
  //       }
  //     }
  //   };

  //   const printReviews = (array) => array.map(review=> {text: review, style:"subHeader"});

  const printer = new PdfPrinter(fonts);

  const docDefinition = {
    content: [
      { text: mediaObject.Title, style: "header" },
      { text: mediaObject.Year, style: "subHeader" },
      { text: mediaObject.Type, style: "subHeader" },
      //   ...printReviews(mediaObject.reviews),
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: 10,
      },
      subHeader: {
        fontSize: 13,
        bold: true,
        margin: 10,
      },
    },
  };

  //   const options = {
  //     // ...
  //   };

  const pdfDoc = printer.createPdfKitDocument(docDefinition, {});
  pdfDoc.end();

  //pdfDoc is a readable stream in pdf format

  return pdfDoc;
};
