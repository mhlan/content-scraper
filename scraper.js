const scrapeIt = require("scrape-it");

const mainURL = "http://shirts4mike.com/";

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
})
  .then(({ data }) => {
    const urls = data.pages.map(page => `${mainURL}${page.url}`);
    const shirtCalls = urls.map(url =>
      scrapeIt(url, {
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
      })
    );
    return Promise.all(shirtCalls);
  })
  .then(shirtResults => {
    const shirts = shirtResults.map(shirtResult => shirtResult.data);
    shirts.map(shirt => {
      let pageID = shirt.image.replace(/\D/g, "");
      shirt.url = `${mainURL}shirt.php?id=${pageID}`;
      shirt.image = shirt.image.replace(/^/, `${mainURL}`);
    });
    console.log(shirts);
  });
