$(document).ready(function () {
    let isExpanded = false;
  
    $('#toggleTable').click(function () {
      if (!isExpanded) {
        // Expand the table
        setTimeout(() => {
          $('#tableRows').append(`
            <tr>
              <td class="py-2 pr-10 pl-[1.4rem] flex items-center gap-3">
                <svg class="icon"><use xlink:href="/public/images/icons.svg#pdf"></use></svg> 
                <span class="text-nowrap">Office Research                             
              </td>
              <td class="pr-10 text-xs md:text-base text-nowrap">Owned by me</td>
              <td class="pr-10 text-xs md:text-base text-nowrap">24 mins ago</td>
              <td class="pr-8">
                <div class="flex justify-end">
                  <button class="more-button">
                    <i class="ri-more-2-fill ri-lg md:ri-xl"></i>
                  </button>
                  <div class="moredropdown hidden absolute !right-16 md:w-2/12 lg:w-24 bg-white-smoke shadow-md rounded-lg z-[9999]">
                    <ul class="text-sm">
                      <li><a href="#" class="px-2 py-1 flex items-center gap-1 hover:bg-light-sky-blue rounded-t-lg"><svg class="icon !w-8 !h-8"><use xlink:href="/public/images/icons.svg#pdf-open"></use></svg>Open</a></li>
                      <li><a href="#" class="px-2 py-1 flex items-center gap-1 hover:bg-light-sky-blue rounded-b-lg"><svg class="icon !w-8 !h-8"><use xlink:href="/public/images/icons.svg#pdf-delete"></use></svg>Delete</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
          `);
  
          // Hide other sections
          $('.feature, .intro, .home, .tip')
            .addClass('hidden')
            .css({ opacity: '0', visibility: 'hidden' });
  
          // Animate table section
          $('.main-content')
            .removeClass('slideRight') 
            .addClass('slideLeft');
        }, 200);
  
        // Update button text
        $('#toggleTable').html('<i class="ri-arrow-left-s-line ri-lg"></i> Back');
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
          $('.feature, .intro, .home, .tip')
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
      if (!$(e.target).closest('.more-button, .moredropdown').length) {
        $('.moredropdown').addClass('hidden');
      }
    });    
  });
  