const scrapeIt = require("scrape-it");

const mainURL = "http://shirts4mike.com/";
let shirtURLs;
let shirtData = [];

scrapeIt(`${mainURL}shirts.php`, {
  pages: {
    listItem: ".products li",
    name: "pages",
    data: {
      url: {
        selector: "a",
        attr: "href"
      }
    }
  }
}).then(({ data, response }) => {
  console.log(`Status Code For Main Shirts Page: ${response.statusCode}`);
  // console.log(data.pages);
  shirtURLs = data.pages.map(a => `${mainURL}${a.url}`);
  console.log(shirtURLs);
  scrapeIt(`${shirtURLs[0]}`, {
    name: {
      selector: ".shirt-picture img",
      attr: "alt"
    },
    image: {
      selector: ".shirt-picture img",
      attr: "src"
    },
    price: {
      selector: "span.price"
    }
  }).then(({ data, response }) => {
    console.log(`Status Code First Shirts Page: ${response.statusCode}`);
    shirtData.push(data);
    console.log(shirtData);
  });
  // pageLinks.push(data.pages);
  // console.log(pageLinks);
});
