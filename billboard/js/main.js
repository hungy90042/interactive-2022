console.log("Hello javascript is running");

// load the airtable library
var Airtable = require('airtable');

// configure the site to point to your Airtable
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyw84Jj5UiY37qz8'
});
var base = Airtable.base('app7VCrLZAQMfNJpm');

// set up a blank array for all your rows
const rows = [];

// this line of code says to get all the info from AirTable
base('text').select({
    // If you want to sort the records, include that here:
sort: [
 {field: 'message', direction: 'asc'}
  ],
}).eachPage(gotPageofRows, gotAllRows);

// Here, we're going to get batches of rows from the airtable, 
// and add each row to our rows array.
function gotPageofRows(records, fetchNextPage) {
    console.log("gotPageofRows()");

    rows.push(...records);

    fetchNextPage();
}

// once we've got all rows in our array, the following code runs.
function gotAllRows(err) {
    console.log("gotAllRows()");

    // first, if there's an error we're going to log that.
    if (err) {
        console.log("Error loading rows");
        console.error(err);
        return;
    }

    // if no error, we're going to run two more functions.
    consoleLogRows();
    showRows();
}

// consoleLogRows simply logs each row to the console, 
// so you can see it's data and fields.
function consoleLogRows() {
    
    console.log("consoleLogRows()");
    
    rows.forEach((row) => {
        console.log("Row:", row);
    });

}

// showRows is what puts the content onto the HTML page
function showRows() {
    console.log("showRows()");
    rows.forEach((row) => {
        
       // const h2 = document.createElement("h2");
       // h2.innerText = row.fields.message;
       // document.body.appendChild(h2);

        // uncomment this code to add the description column from the table.
       // const div = document.createElement("div");
       // div.innerText = row.fields.status;
       // document.body.appendChild(div);

       


        if (row.fields.status==true) {
            if (row.fields.emptyimage) {
                const image = document.createElement("img");
                image.src = row.fields.emptyimage[0].url;
                // image.classList.add("emptyimage");

                document.body.appendChild(image);
                image.id = row.fields.rowID;
        }
    }

        else {
            if (row.fields.images) {
                const image = document.createElement("a");
                image.setAttribute('href', row.fields.images[0].url);
                image.setAttribute('download', 'Image');
                image.innerHTML = "<img src='"+ row.fields.images[0].url + "'>";
                
                image.classList.add("stickerimage");
                document.body.appendChild(image);
                image.id = row.fields.rowID;
            }

                  if (row.fields.emptyimage) {
                const image = document.createElement("img");
                image.src = row.fields.emptyimage[0].url;
                image.classList.add("emptyimage")
                document.body.appendChild(image);
                image.id = row.fields.rowID;

            }

        }
        
    })
}

$('body').on('click','img',function(){

base('text').update([
  {
    "id": this.id,
    "fields": {

      "status": true
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function(record) {
    console.log(record.get('message'));
  });
});

$(this).hide();
$(this).next().show();




})

// ADD IMAGE DOWNLOAD FUNCTION







// ADD AUTO-REFRESH FUNCTION





















