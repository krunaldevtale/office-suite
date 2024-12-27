$(document).ready(function () {
    let isExpanded = false;
  
    $('#toggleTable').click(function () {
      if (!isExpanded) {
        // Expand the table
        setTimeout(() => {
          $('#tableRows').append(`
            <tr class="border-b-2 border-light-sky-blue">
              <td class="py-4 md:py-5 flex items-center gap-3">
                <div class="border border-mediumGray rounded-md p-2 flex flex-col justify-center items-center">
                  <p class="text-[5px] md:text-[6px] font-medium text-nowrap">More File</p>
                  <img class="w-6 h-6 md:w-8 md:h-8" src="/public/images/pdf.svg" alt="PDF Icon"/>
                </div>
                <span class="text-xs md:text-base">Sizaf</span>
              </td>
              <td class="py-4 md:py-5 text-xs md:text-base text-nowrap">Rohan Verma</td>
              <td class="py-4 md:py-5 text-xs md:text-base text-nowrap">2 hours ago</td>
              <td class="py-4 md:py-5">
                <button class="more-button">
                    <i class="ri-more-fill ri-lg md:ri-xl"></i>
                </button>
                <div class="moredropdown hidden absolute w-48 bg-dark-charcoal shadow-md rounded-lg z-[9999]">
                    <ul class="text-sm text-white-smoke">
                    <li><a href="#" class="block px-4 py-2">Open</a></li>
                    <li><a href="#" class="block px-4 py-2">Copy</a></li>
                    <li><a href="#" class="block px-4 py-2">Share</a></li>
                    <li><a href="#" class="block px-4 py-2">Rename</a></li>
                    <li><a href="#" class="block px-4 py-2">Move to bin</a></li>
                    </ul>
                </div>
              </td>
            </tr>
          `);
  
          // Hide other sections
          $('.feature, .intro, .home')
            .addClass('hidden')
            .css({ opacity: '0', visibility: 'hidden' });
  
          // Animate table section
          $('.main-content')
            .removeClass('slideRight') 
            .addClass('slideLeft');
        }, 200);
  
        // Update button text
        $('#toggleTable').html('Back <i class="ri-arrow-left-s-line ri-lg"></i>');
        isExpanded = true;
      } else {
        // Collapse the table
        $('#tableRows tr:nth-child(n+3)').remove();
  
        // Reset animations for the main content
        $('.main-content')
          .removeClass('slideLeft') 
          .addClass('slideRight');
  
        setTimeout(() => {
          // Show hidden sections
          $('.feature, .intro, .home')
            .removeClass('hidden')
            .css({ opacity: '1', visibility: 'visible' });
        }, 300);
  
        // Update button text
        $('#toggleTable').html('More <i class="ri-arrow-right-s-line ri-lg"></i>');
        isExpanded = false;
      }
    });

    $(document).on('click', '.more-button', function (e) {
      var $dropdown = $(this).next('.moredropdown');
      var mouseY = e.clientY;
      $('.moredropdown').not($dropdown).addClass('hidden');
      
      // Clear previous inline styles before calculating new position
      $dropdown.removeAttr('style');
      
      // Get the dropdown's height and the viewport height
      var dropdownHeight = $dropdown.outerHeight();
      var viewportHeight = $(window).height();
  
      // Check if the mouse is near the bottom of the page
      if (mouseY + dropdownHeight > viewportHeight) {
        // Position the dropdown above the button if near the bottom of the page
        $dropdown.css('top', 'initial');
        $dropdown.css('top', '26%'); 
      } else {
        // Position it below the button
        $dropdown.css('right', '5rem');
        $dropdown.css('bottom', 'initial');
      }
  
      // Toggle the dropdown visibility
      $dropdown.toggleClass('hidden');
    });
    
    // Close all dropdowns when clicking outside
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.more-button').length) {
        $('.moredropdown').addClass('hidden');
      }
    });
  });
  