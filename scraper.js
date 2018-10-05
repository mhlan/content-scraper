const scrapeIt = require("scrape-it");

const url = "http://shirts4mike.com/";

// Promise interface
scrapeIt(`${url}shirts.php`, {
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
  console.log(data.pages[3]);
  scrapeIt(`${url}${data.pages[3].url}`, {
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
    console.log(data);
  });
  // pageLinks.push(data.pages);
  // console.log(pageLinks);
});
