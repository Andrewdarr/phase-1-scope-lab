// declared in global
var customerName = ('bob');

// declared global
const leastFavoriteCustomer = ('john');

// changes customerName to uppercase
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
leastFavoriteCustomer = 'bobby';
}