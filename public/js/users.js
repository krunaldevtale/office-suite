$(document).ready(function () {
  // Sample data array
  const users = [
    {
      name: "Rachel Saket",
      email: "Rachelsaket@gmail.com",
      role: "Admin",
      status: "Active",
      lastActive: "2 hours ago",
    },
    {
      name: "Rachel Saket",
      email: "Rachelsaket@gmail.com",
      role: "Regular User",
      status: "Pending",
      lastActive: "1 day ago",
    },
    {
      name: "Rachel Saket",
      email: "Rachelsaket@gmail.com",
      role: "Manager",
      status: "Active",
      lastActive: "2 hours ago",
    },
    {
      name: "Rachel Saket",
      email: "Rachelsaket@gmail.com",
      role: "Regular User",
      status: "Active",
      lastActive: "1 week ago",
    },
  ];

  // Loop through the data and append to table
  users.forEach((user) => {
    $("#tableBody").append(`
        <tr >
          <td class="text-left px-8 py-2">${user.name}</td>
          <td class="text-left px-4">${user.email}</td>
          <td class="text-left px-4">${user.role}</td>
          <td class="text-left px-4">${user.status}</td>
          <td class="text-left px-4">${user.lastActive}</td>
         <td >
                <button class="more-button absolute right-10">
                    <i class="ri-more-2-fill ri-lg md:ri-xl"></i>
                </button>
            <div class="moredropdown hidden absolute right-full w-72 bg-white border border-dark-charcoal rounded-lg shadow-md z-[9999]">
                <ul class="text-sm">
                    <!-- User Info -->
                    <li>
                        <div class="flex items-center justify-between px-4 py-2">
                            <span class="text-base font-semibold text-dark-charcoal">
                                <i class="ri-user-3-line"></i> User info
                            </span>
                            <div class="flex items-center">
                                <i class="ri-pencil-line hidden edit-icon mr-2"></i>
                                <i class="ri-arrow-down-s-fill toggle-arrow"></i>
                            </div>
                        </div>
                        <ul class="submenu hidden px-6">
                            <li class="block px-4 text-base font-normal underline">Rachel Saket</li>
                            <li class="block px-4 text-base font-normal underline">Rachelsaket@gmail.com</li>
                            <li class="block px-4 text-base font-normal underline">Admin</li>
                            <li class="block px-4 text-base font-normal underline">01/02/2025</li>
                        </ul>
                    </li>

                <!-- Activity Log -->
                <li>
                 <div class="flex items-center justify-between px-4 py-2">
                    <span class="text-base font-semibold"><i class="ri-pulse-line"></i> Activity Log</span>
                    <i class="ri-arrow-down-s-fill toggle-arrow"></i>
                    </div>
        
                            <!-- Activity Log Submenu -->
                            <ul class="submenu hidden pl-6">
                                <li class="block px-4 text-base font-normal">Last Login</li>
                                
                                <!-- Files Modified with Toggle -->
                                <li class="block px-4 text-base font-normal flex justify-between items-center files-modified">
                                    <span>Files Modified</span>
                                    <i class="ri-arrow-down-s-fill toggle-arrow"></i>
                                </li>

                                <!-- Project 1 (Initially Hidden) -->
                                <ul class="submenu hidden project-list">
                                    <li class="block px-4 text-base font-normal flex justify-between items-center project-item">
                                        <span class="pl-6">Project 1</span>
                                        <i class="ri-arrow-down-s-fill toggle-arrow"></i>
                                    </li>
                                    <ul class="submenu px-4 project-details hidden">
                                        <li class="block  text-base font-normal flex justify-between items-center cv-item">
                                        <span class="pl-6">cv.pdf</span>
                                        <i class="ri-arrow-down-s-fill toggle-arrow"></i>
                                    </li>
                                        <ul class="submenu hidden cv-details px-4">
                                            <li class="block pl-6 text-base font-normal">File type-PDF</li>
                                            <li class="block  pl-6 text-base font-normal">Action taken-Edited</li>
                                            <li class="block pl-6 text-base font-normal">Feb 12,2025-10:30 AM</li>
                                        </ul>
                                    </ul>
                                </ul>
                                <li class="block px-4 text-base font-normal flex justify-between items-center recent-projects">
                                    <span>Recent Projects</span>
                                    <i class="ri-arrow-down-s-fill toggle-arrow"></i>
                                </li>
                                <ul class="submenu hidden recent-list px-4">
                                <li class="block pl-6 text-base font-normal">Project 1</li>
                                <li class="block pl-6 text-base font-normal">cv.pdf</li>
                                </ul>
                            </ul>
                </li>


                <!-- Manage Permissions -->
                <li>
                    <div class="flex items-center justify-between px-4 py-2">
                        <span class="text-base font-semibold"><i class="ri-shield-fill"></i> Manage Permissions</span>
                        <i class="ri-arrow-down-s-fill toggle-arrow"></i>
                    </div>
                    <ul class="submenu hidden px-4">
                     <li class="pl-6 text-base font-normal">Permission 1</li>                
                     <li class="pl-6 text-base font-normal">Permission 2</li>
                    </ul>
                </li>
                <!-- Actions Submenu -->
                <li>
                    <div class="flex items-center justify-between px-4 py-2">
                        <span class="text-base font-semibold"><i class="ri-clipboard-line"></i> Actions</span>
                        <i class="ri-arrow-down-s-fill toggle-arrow"></i>
                    </div>
                    <ul class="submenu hidden px-4 role-details">
                        <li class="block px-1 text-base font-normal flex justify-between items-center role">
                            <span class="pl-6">Change Role</span>
                            <i class="ri-arrow-down-s-fill toggle-arrow"></i>
                        </li>
                        <li class="submenu hidden role-list px-4">
                            <ul>
                                <li class="pl-6 text-base font-normal">Regular User</li>
                                <li class="pl-6 text-base font-normal">Admin</li>
                                <li class="pl-6 text-base font-normal">Manager</li>
                            </ul>
                        </li>
                        <li class="pl-6 text-base font-normal">Remove</li>
           
    </div>
</td>

          
          </tr>
      `);
  });

  // Event delegation for dynamically added elements
  $(document).on("click", ".toggle-arrow", function (event) {
    event.stopPropagation(); // Prevents event from bubbling up

    // Toggle arrow rotation
    $(this).toggleClass("rotate-180");

    // Check if the clicked element is "Files Modified"
    if ($(this).closest("li").hasClass("files-modified")) {
      $(this).closest("li").next(".project-list").slideToggle(200); // Toggle Project 1 submenu
    } else if ($(this).closest("li").hasClass("project-item")) {
      $(this).closest("li").next(".project-details").slideToggle(200); // Toggle Project 1 details
    } else if ($(this).closest("li").hasClass("cv-item")) {
      $(this).closest("li").next(".cv-details").slideToggle(200); // Toggle Project 1 details
    } else if ($(this).closest("li").hasClass("recent-projects")) {
      $(this).closest("li").next(".recent-list").slideToggle(200); // Toggle Project 1 details
    } else if ($(this).closest("li").hasClass("role")) {
      $(this).closest("li").next(".role-list").slideToggle(200); // Toggle Project 1 details
    } else {
      // Toggle the submenu for normal items
      $(this).closest("li").children(".submenu").slideToggle(200);
    }

    // Toggle the edit icon next to the arrow
    $(this).siblings(".edit-icon").toggleClass("hidden");
  });
});
