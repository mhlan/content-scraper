# Treehouse Project 6: Content Scraper

## Instructions

Imagine you work for a price comparison website. You’ve been given the task to create a Node.js command line application that goes to an ecommerce site to get the latest prices and save them to a spreadsheet (CSV format). You will write the application as if the spreadsheet will be used by another application to populate a database. The application you build will run once every day. You should use npm modules to assist you in the project. You have to research and use npm packages that will help you scrape a website and create a CSV file.

###### Command Line Interface and Dependency Management

- [] Project includes a package.json file containing dependencies to run node scraper.js
- [] Running npm install installs relevant dependencies
- [] Exceeds: The scraper.js file can be run with the npm start command

###### Folder Generation

- [] Program creates onedata folder if that folder doesn’t already exist. If the folder does exist, the program does nothing.

###### Research npm packages

- [] Chosen npm packages meet the following requirements:
  - [] 1,000 downloads
  - [] Updated in the last 6 months
- [] Uses a CSV module for the creation of the CSV
- [] Uses a scraping module for the scraping, or uses the cheerio module for creating custom scraper

###### Crawling

- [] The project uses the http://shirts4mike.com/shirts.php URL as an entry point to look through the links on the page to find 8 shirts

###### Scraping and Saving Data

- [] Project scrapes the product title, price, image and url, and all information is correct and in the correct place
- [] A CSV is successfully saved to the ‘data’ folder in this format: ‘YYYY-MM-DD.csv’, e.g. ‘2016-12-30.csv’.
- [] Column headers are in this order: Title, Price, ImageURL, URL, Time

###### Overwriting Data

- [] If the script is run twice, the program overwrites the data. The file contains the data from the second call.

###### Error Handling

- [] The program displays a human-friendly error (not just the original error code) when it cannot connect to http://shirts4mike.com
