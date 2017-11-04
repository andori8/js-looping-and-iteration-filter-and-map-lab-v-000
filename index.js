// Code your solution here:
function driversWithRevenueOver(array, revenue) {
  return array.filter(function(element) {
    return element.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(array, revenue) {
  return array.filter(function(element) {
    if (element.revenue > revenue) {
      return element.name;
    }
  });
}