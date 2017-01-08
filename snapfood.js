/**
 * Created by kevin on 1/7/2017.
 */

// Hello World
console.log('Hello World!');

// Closest locations please
var marketData = [
    {storename:"WALGREENS at 3025 Las Vegas Blvd Southouth",          xlat:-115.16435,ylong:36.132813},
    {storename:"Fiesta Mart at 1195 East Desert Inn Road",            xlat:-115.13774,ylong:36.129742},
    {storename:"CVS Pharmacy at 2700 Las Vegas Blvd South",           xlat:-115.16089,ylong:36.138588},
    {storename:"Walgreens at 3765 Las Vegas Blvd South",              xlat:-115.17276,ylong:36.105019},
    {storename:"Walgreens at 3339 Las Vegas Blvd South",              xlat:-115.17068,ylong:36.123112},
    {storename:"Dollar General at 2905 South Maryland Parkway",       xlat:-115.13693,ylong:36.1366},
    {storename:"Riviera Am/pm at 2955 Paradise Road",                 xlat:-115.15487,ylong:36.135056},
    {storename:"7-eleven Store at 2910 South Maryland Parkway",       xlat:-115.13686,ylong:36.136608},
    {storename:"Walgreens at 3397 Las Vegas Blvd South",              xlat:-115.17184,ylong:36.121239},
    {storename:"7- Eleven Store at 815 East Desert Inn Road",         xlat:-115.14556,ylong:36.129742},
    {storename:"CVS PHARMACY at 3300 LAS VEGAS BLVD South",           xlat:-115.17033,ylong:36.124157},
    {storename:"The Market at 195 East Tropicana Avenue",             xlat:-115.16445,ylong:36.100754},
    {storename:"Zelte's Mini Market at 900 Karen Avenue",             xlat:-115.14298,ylong:36.140537},
    {storename:"Dollar Tree at 2600 South Maryland Parkway",          xlat:-115.13685,ylong:36.141884},
    {storename:"CVS/PHARMACY at 3645 Las Vegas Blvd South",           xlat:-115.17277,ylong:36.112991},
    {storename:"7-eleven Store at 2683 South Maryland Parkway",       xlat:-115.1369, ylong:36.140999},
    {storename:"7 Eleven at 3001 Las Vegas Blvd South",               xlat:-115.16433,ylong:36.132847},
    {storename:"7-eleven Store at 4158 Koval Ln",                     xlat:-115.16391,ylong:36.11351},
    {storename:"Arco am pm at 3873 Las Vegas Blvd South",             xlat:-115.17278,ylong:36.097244},
    {storename:"CVS PHARMACY at 3758 Las Vegas Blvd South",           xlat:-115.17323,ylong:36.104595},
    {storename:"DI CLASSIC MART at 991 East Desert Inn Road",         xlat:-115.14219,ylong:36.129742},
    {storename:"CVS PHARMACY at 2735 South Maryland Parkway",         xlat:-115.13692,ylong:36.140133},
    {storename:"SMITH'S FOOD and DRUG at 2540 South Maryland Parkway",xlat:-115.13689,ylong:36.143517}
];

var testData = [
    {xlat:1.0, ylong:3.0, storename:"Store 1/3"},
    {xlat:2.0, ylong:3.0, storename:"Store 2/3"},
    {xlat:3.0, ylong:3.0, storename:"Store a3/3"},
    {xlat:4.0, ylong:3.0, storename:"Store 4/3"},
    {xlat:5.0, ylong:3.0, storename:"Store 5/3"},
    {xlat:3.0, ylong:5.0, storename:"Store 3/5"},
    {xlat:3.0, ylong:4.0, storename:"Store 3/4"},
    {xlat:3.0, ylong:3.0, storename:"Store b3/3"},
    {xlat:3.0, ylong:2.0, storename:"Store 3/2"},
    {xlat:3.0, ylong:1.0, storename:"Store 3/1"}
    ];

var myLocation = {xlat:-115.168305 ,ylong:36.124208, storename:"Venetian"}
var testLocation = {xlat:3.5, ylong: 1.5, storename:"Me"};

var closeMarkets = []; // Array of closest 4 stores
var newMarket = [];    // Store data being compared in to array
var newDist;           // Distance to compare in to array
var oldDist;           // Temporary storage for replaced store distance
var tmpMarket = [];    // Hold each element of marketData
var tmpDist;           // Comparison distance
var bubble = [];

for (var i=0; i<marketData.length; i++) {
    newMarket = marketData[i];
    newDist = Math.pow(myLocation.xlat  - newMarket.xlat, 2) +
        Math.pow(myLocation.ylong - newMarket.ylong, 2);
    console.log('outer loop');
    // Closest 4f
    for (var j=0; j<4; j++) {
        // Add locations until maximum is reached
        if (typeof (closeMarkets[j]) === 'undefined') {
            closeMarkets.push({xlat:newMarket.xlat, ylong:newMarket.ylong, storename:newMarket.storename});
            console.log('Added ' + j + ' location');
            break;
        } else { // Sort new distance with existing distances
            bubble = closeMarkets[j];
            oldDist = Math.pow(myLocation.xlat - bubble.xlat, 2) +
                      Math.pow(myLocation.ylong - bubble.ylong, 2);
            if (newDist < oldDist) {
                // Read out existing value
                tmpMarket = closeMarkets[j];
                tmpDist = oldDist;
                // Put in new values
                closeMarkets[j] = {xlat:newMarket.xlat, ylong:newMarket.ylong, storename:newMarket.storename};
                // Reload comparison store
                newMarket = tmpMarket;
                newDist = tmpDist;
            }
        }
        console.log('inner loop');
    }
}

console.log('Closest stores are:');
for (var k=0; k<4; k++) {
    console.log(closeMarkets[k].storename);
}

