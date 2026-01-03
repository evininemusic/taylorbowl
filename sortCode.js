const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

// Returns a function responsible for sorting a specific column index 
// (idx = columnIndex, asc = ascending order?).
var comparer = function(idx, asc) { 

    // This is used by the array.sort() function...
    return function(a, b) { 

        // This is a transient function, that is called straight away. 
        // It allows passing in different order of args, based on 
        // the ascending/descending order.
        return function(v1, v2) {

            // sort based on a numeric or localeCompare, based on type...
            return (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)) 
                ? v1 - v2 
                : v1.toString().localeCompare(v2);
        }(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
    }
};

// Returns a function responsible for sorting a specific column index 
// (idx = columnIndex, asc = ascending order?).
var comparer = function(idx, asc) { 

    // This is used by the array.sort() function...
    return function(a, b) { 

        // This is a transient function, that is called straight away. 
        // It allows passing in different order of args, based on 
        // the ascending/descending order.
        return function(v1, v2) {

            // sort based on numeric, numeric of date conversion, or localeCompare, based on type...
            if (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)) {
              return v1 - v2
            } else if (v1 !== '' && v2 !== '' && !isNaN(new Date(v1)[Symbol.toPrimitive]('number')) && !isNaN(new Date(v2)[Symbol.toPrimitive]('number'))) {
              return new Date(v1)[Symbol.toPrimitive]('number') - new Date(v2)[Symbol.toPrimitive]('number')
            } else {
              return v1.toString().localeCompare(v2);
            }
        }(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
    }
};

// do the work...
document.querySelectorAll('th.sort-table-header').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr) );
})));


