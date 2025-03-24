$(document).ready(function () {
  // Sample data array
  const users = [
    {
      name: "Rachel Saket",
      email: "Rachelsaket@gmail.com",
      role: "Admin",
      lastActive: "2 hours ago",
    },
    {
      name: "Rachel Saket",
      email: "Rachelsaket@gmail.com",
      role: "Regular User",
      lastActive: "1 day ago",
    },
    {
      name: "Rachel Saket",
      email: "Rachelsaket@gmail.com",
      role: "Manager",
      lastActive: "2 hours ago",
    },
    {
      name: "Rachel Saket",
      email: "Rachelsaket@gmail.com",
      role: "Regular User",
      lastActive: "1 week ago",
    },
  ];
  
  const userRoles=[
    {
      name: "Alex Brown",
      DateTime:"Feb 12 2025-10:30 AM",
      Action: "Edited",
      Project: "Report Q1",
     
    },
    {
      name: "John Doe",
      DateTime:"Feb 12 2025-10:30 AM",
      Action: "Deleted",
      Project: "Budget.xlsx",
     
    },
    {
      name: "Jane Smith",
      DateTime:"Feb 12 2025-10:30 AM",
      Action: "Shared",
      Project: "Designer.png",
     
    },
    {
      name: "Rachel Saket",
      DateTime:"Feb 12 2025-10:30 AM",
      Action: "Created Project",
      Project: "Marketing Plan",
     
    },
  ];

  // All users
  users.forEach((user) => {
    $("#tableBody").append(`
        <tr>
          <td class="text-left text-nowrap px-8 py-2">${user.name}</td>
          <td class="text-left px-4">${user.email}</td>
          <td class="text-left text-nowrap px-4">${user.role}</td>
          <td class="text-left text-nowrap px-4">${user.lastActive}</td>
        </tr>
      `);
  });

//Admins

users.forEach((user) => {
    $("#adminTable").append(`
         <tr>
          <td class="text-left text-nowrap px-8 py-2">${user.name}</td>
          <td class="text-left px-4">${user.email}</td>
          <td class="text-left text-nowrap px-4">${user.role}</td>
          <td class="text-left text-nowrap px-4">${user.lastActive}</td>
        </tr>
      `);
  });


//Regular users

users.forEach((user) => {
    $("#reguserTable").append(`
         <tr>
          <td class="text-left text-nowrap px-8 py-2">${user.name}</td>
          <td class="text-left px-4">${user.email}</td>
          <td class="text-left text-nowrap px-4">${user.role}</td>
          <td class="text-left text-nowrap px-4">${user.lastActive}</td>
        </tr>
      `);
  });


//Activity Logs
  userRoles.forEach((user) => {
    $("#activitylogsTable").append(`
        <tr class=" text-nowrap">
          <td class="text-left px-8 py-2">${user.name}</td>
          <td class="text-left px-4">${user.DateTime}</td>
          <td class="text-left px-4">${user.Action}</td>
          <td class="text-left px-4">${user.Project}</td>
        </tr>
      `);
  });



//copy button in add users dropdown
   $(document).on("click", ".copyIcon", function () {
    let container = $(this).closest(".moredropdown"); 
    let emailInput = container.find(".emailInput"); 
    let copiedBtn = container.find(".copiedBtn"); 

    let email = emailInput.val().trim(); 

    if (email !== "") {
        navigator.clipboard.writeText(email).then(() => {
            copiedBtn.removeClass("hidden").fadeIn(200); 

            setTimeout(() => {
                copiedBtn.fadeOut(200); 
            }, 2000);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    } else {
        alert("Please enter an email to copy!");
    }
});
   
//Set Permissions dropdown inside add users dropdown
    $(document).on("click", ".permissionDropdown", function (event) {
        event.stopPropagation(); 
        let dropdownList = $(this).siblings(".permissionList"); 
        $(".permissionList").not(dropdownList).addClass("hidden"); 
        dropdownList.toggleClass("hidden"); 
    });
    $(document).on("click", ".permissionList li", function (event) {
        event.stopPropagation(); 
        let inputField = $(this).closest(".dropdownContainer").find(".permissionInput");
        inputField.val($(this).text()); 
        $(this).closest(".permissionList").addClass("hidden"); 
    });

    // Hide all dropdowns when clicking outside
    $(document).click(function () {
        $(".permissionList").addClass("hidden");
    });

//back button functionailty.
   $("#back-btn").click(function(){
    window.history.back();
   })

   
  

   $(".role-button").click(function () {
    $(".role-button").removeClass("royal-blue text-white-smoke"); // Remove styles from all buttons
    $(this).addClass("royal-blue text-white-smoke"); // Add style only to the clicked button
});

    $(".profile-button").click(function(){
        window.location.href="profile-section.html"
    })
 
    $(".home-profile-btn").click(function(){
      window.location.href="/src/profile-section.html"
    })
    $(".usermgt-btn").click(function(){
        window.location.href="all-users.html"
    })

    $(".filter-btn").on("click", function () {
      $(".filter-btn").removeClass("filter-active");
      $(this).addClass("filter-active");
       $(".filter-content").addClass("hidden");

      
      let target = $(this).data("filter");
      $("#" + target).removeClass("hidden");
  });
 
    $(".filter-content").removeClass("selected-filter");
    $(this).addClass("selected-filter");
    
    
   
   
    $("#type li:first-child").removeClass("text-transparent-dark-gray").addClass("text-dark-charcoal");

  $(".filter-content li").click(function () {
    // Remove highlight from all list items in the same parent UL
    $(this).siblings().removeClass("text-dark-charcoal").addClass("text-transparent-dark-gray");

    // Highlight only the clicked item
    $(this).removeClass("text-transparent-dark-gray").addClass("text-dark-charcoal");
  });
    
});


