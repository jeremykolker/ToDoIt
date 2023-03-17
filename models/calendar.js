$(() => {
    function generateCalendar(year, month) {
    // Get the number of days in the month
    let numDays = new Date(year, month + 1, 0).getDate();
    
    // Get the index of the first day of the month (0 for Sunday, 1 for Monday, etc.)
    let firstDayIndex = new Date(year, month, 1).getDay();
    
    // Create an array of empty cells for the days before the first day of the month
    let emptyCells = Array(firstDayIndex).fill('');
    
    // Create an array of cells for the days of the month
    let dayCells = Array.from({ length: numDays }, (_, i) => i + 1);
    
    // Combine the arrays of empty cells and day cells into a single array
    let cells = [...emptyCells, ...dayCells];
    
    // Create an array of rows, each containing 7 cells
    let rows = cells.reduce((acc, cell, i) => {
      if (i % 7 === 0) {
        acc.push([]);
      }
      acc[acc.length - 1].push(cell);
      return acc;
    }, []);
    
    // Render the rows as HTML
    let html = rows.map(row => {
      return `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`;
    }).join('');
    
    // Set the HTML of the calendar body
    $('#calendar-body').html(html);
    
    // Set the formatted date as the content of the #current-date element
    let date = new Date(year, month, 1);
    let options = { month: 'long', year: 'numeric' };
    let formattedDate = date.toLocaleDateString('en-US', options);
    $('#current-date').text(formattedDate);
    }
    
    // Generate calendar on window load
    let currentDate = new Date();
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    
    // Previous year button
    $('#prev-year-btn').click(function() {
    let currentDate = new Date();
    let year = currentDate.getFullYear() - 1;
    let month = currentDate.getMonth();
    generateCalendar(year, month);
    });
    
    // Previous month button
    $('#prev-month-btn').click(function() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() - 1;
    if (month < 0) {
    year--;
    month = 11;
    }
    generateCalendar(year, month);
    });
    
    // Next month button
    $('#next-month-btn').click(function() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    if (month > 11) {
    year++;
    month = 0;
    }
    generateCalendar(year, month);
    });
    
    // Next year button
    $('#next-year-btn').click(function() {
    let currentDate = new Date();
    let year = currentDate.getFullYear() + 1;
    let month = currentDate.getMonth();
    generateCalendar(year, month);
    });
    
    // Initialize dropdown menu
    $('.dropdown-toggle').dropdown();
    
    // Set current date
    let options = { month: 'long', day: 'numeric', year: 'numeric' };
    let formattedDate = currentDate.toLocaleDateString('en-US', options);
    $('#current-date').text(formattedDate);
    });
    
    

