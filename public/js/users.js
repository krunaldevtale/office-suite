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
  
  const userRoles=[
    {
      name: "Alex Brown",
      DateTime:"Feb 12 2025-10:30 AM",
      Action: "Edited",
      Project: "Report Q1",
      Details: "Updated financial figures",
    },
    {
      name: "John Doe",
      DateTime:"Feb 12 2025-10:30 AM",
      Action: "Deleted",
      Project: "Budget.xlsx",
      Details: "Moved To trash",
    },
    {
      name: "Jane Smith",
      DateTime:"Feb 12 2025-10:30 AM",
      Action: "Shared",
      Project: "Designer.png",
      Details: "shared with @mike",
    },
    {
      name: "Rachel Saket",
      DateTime:"Feb 12 2025-10:30 AM",
      Action: "Created Project",
      Project: "Marketing Plan",
      Details: "New project added",
    },
  ];

  // All users
  users.forEach((user) => {
    $("#tableBody").append(`
        <tr>
          <td class="text-left text-nowrap px-8 py-2">${user.name}</td>
          <td class="text-left px-4">${user.email}</td>
          <td class="text-left text-nowrap px-4">${user.role}</td>
          <td class="text-left px-4">${user.status}</td>
          <td class="text-left text-nowrap px-4">${user.lastActive}</td>
         <td class=" flex justify-end">
                <button class="more-button px-4 py-2">
                    <i class="ri-more-2-fill ri-lg md:ri-xl"></i>
                </button>
            <div class="moredropdown hidden absolute right-full w-72 bg-white border border-dark-charcoal rounded-lg shadow-md z-[9999]">
                <ul class="text-sm">
                    <!-- User Info -->
                    <li>
                        <div class="flex items-center justify-between px-4 py-2">
                            <span class="text-base font-semibold text-dark-charcoal flex text-nowrap">
                                <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#user-info"></use></svg>  User info
                            </span>
                            <div class="flex items-center">
                                <i class="ri-pencil-line hidden edit-icon mr-2"></i>
                                <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg> 
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
                    <span class="text-base font-semibold flex text-nowrap">   
                    <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#user-activity"></use></svg>  Activity Log
                    </span>
                     <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                    </div>
        
                            <!-- Activity Log Submenu -->
                            <ul class="submenu hidden pl-6">
                                <li class="block px-4 text-base font-normal">Last Login</li>
                                
                                <!-- Files Modified with Toggle -->
                                <li class="block px-4 text-base font-normal flex justify-between items-center files-modified">
                                    <span>Files Modified</span>
                                     <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                                </li>

                                <!-- Project 1 (Initially Hidden) -->
                                <ul class="submenu hidden project-list">
                                    <li class="block px-4 text-base font-normal flex justify-between items-center project-item">
                                        <span class="pl-6">Project 1</span>
                                       <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                                    </li>
                                    <ul class="submenu px-4 project-details hidden">
                                        <li class="block  text-base font-normal flex justify-between items-center cv-item">
                                        <span class="pl-6">cv.pdf</span>
                                         <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
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
                                    <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                                </li>
                                <ul class="submenu hidden recent-list px-4">
                                <li class="block pl-6 text-base font-normal">Project 1</li>
                                <li class="block pl-6 text-base font-normal">cv.pdf</li>
                                </ul>
                            </ul>
                </li>


                <!-- Manage Permissions -->
                <li>
                    <div class="flex items-center justify-between px-3 py-2">
                          <span class="text-base font-semibold flex text-nowrap">   
                    <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#permission"></use></svg>Manage Permissions
                    </span>
                        <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                    </div>
                    <ul class="submenu hidden px-4">
                     <li class="pl-6 text-base font-normal">Permission 1</li>                
                     <li class="pl-6 text-base font-normal">Permission 2</li>
                    </ul>
                </li>
                <!-- Actions Submenu -->
                <li>
                    <div class="flex items-center justify-between px-3 py-1">
                        <span class="text-base font-semibold flex text-nowrap">   
                    <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#actions"></use></svg>Actions
                    </span>
                        <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                    </div>
                    <ul class="submenu hidden px-4 role-details">
                        <li class="block px-1 text-base font-normal flex justify-between items-center role">
                            <span class="pl-6">Change Role</span>
                            <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
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

//Admins

users.forEach((user) => {
    $("#adminTable").append(`
         <tr>
          <td class="text-left text-nowrap px-8 py-2">${user.name}</td>
          <td class="text-left px-4">${user.email}</td>
          <td class="text-left text-nowrap px-4">${user.role}</td>
          <td class="text-left px-4">${user.status}</td>
        
         <td class=" flex justify-end">
                <button class="more-button px-4 py-2">
                    <i class="ri-more-2-fill ri-lg md:ri-xl"></i>
                </button>
            <div class="moredropdown hidden absolute right-full w-72 bg-white border border-dark-charcoal rounded-lg shadow-md z-[9999]">
                <ul class="text-sm">
                    <!-- User Info -->
                    <li>
                        <div class="flex items-center justify-between px-4 py-2">
                            <span class="text-base font-semibold text-dark-charcoal flex text-nowrap">
                                <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#user-info"></use></svg>  User info
                            </span>
                            <div class="flex items-center">
                                <i class="ri-pencil-line hidden edit-icon mr-2"></i>
                                <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
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
                     <span class="text-base font-semibold flex text-nowrap">   
                    <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#user-activity"></use></svg>  Activity Log
                    </span>
                    <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                    </div>
        
                            <!-- Activity Log Submenu -->
                            <ul class="submenu hidden pl-6">
                                <li class="block px-4 text-base font-normal">Last Login</li>
                                
                                <!-- Files Modified with Toggle -->
                                <li class="block px-4 text-base font-normal flex justify-between items-center files-modified">
                                    <span>Files Modified</span>
                                 <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                                </li>

                                <!-- Project 1 (Initially Hidden) -->
                                <ul class="submenu hidden project-list">
                                    <li class="block px-4 text-base font-normal flex justify-between items-center project-item">
                                        <span class="pl-6">Project 1</span>
                                        <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                                    </li>
                                    <ul class="submenu px-4 project-details hidden">
                                        <li class="block  text-base font-normal flex justify-between items-center cv-item">
                                        <span class="pl-6">cv.pdf</span>
                                        <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
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
                                    <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                                </li>
                                <ul class="submenu hidden recent-list px-4">
                                <li class="block pl-6 text-base font-normal">Project 1</li>
                                <li class="block pl-6 text-base font-normal">cv.pdf</li>
                                </ul>
                            </ul>
                </li>


                <!-- Manage Permissions -->
                <li>
                    <div class="flex items-center justify-between px-3 py-2">
                       <span class="text-base font-semibold flex text-nowrap">   
                    <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#permission"></use></svg>Manage Permissions
                    </span>
                        <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                    </div>
                    <ul class="submenu hidden px-4">
                     <li class="pl-6 text-base font-normal">Permission 1</li>                
                     <li class="pl-6 text-base font-normal">Permission 2</li>
                    </ul>
                </li>
                <!-- Actions Submenu -->
                <li>
                    <div class="flex items-center justify-between px-3 py-2">
                      <span class="text-base font-semibold flex text-nowrap">   
                    <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#actions"></use></svg>Actions
                    </span>
                        <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                    </div>
                    <ul class="submenu hidden px-4 role-details">
                        <li class="block px-1 text-base font-normal flex justify-between items-center role">
                            <span class="pl-6">Change Role</span>
                            <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
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


//Regular users

users.forEach((user) => {
    $("#reguserTable").append(`
         <tr>
          <td class="text-left text-nowrap px-8 py-2">${user.name}</td>
          <td class="text-left px-4">${user.email}</td>
          <td class="text-left text-nowrap px-4">${user.role}</td>
          <td class="text-left px-4">${user.status}</td>
        
         <td class=" flex justify-end">
                <button class="more-button px-4 py-2">
                    <i class="ri-more-2-fill ri-lg md:ri-xl"></i>
                </button>
            <div class="moredropdown hidden absolute right-full w-72 bg-white border border-dark-charcoal rounded-lg shadow-md z-[9999]">
                <ul class="text-sm">
                    <!-- User Info -->
                    <li>
                        <div class="flex items-center justify-between px-4 py-2">
                           <span class="text-base font-semibold text-dark-charcoal flex text-nowrap">
                                <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#user-info"></use></svg>  User info
                            </span>
                            <div class="flex items-center">
                                <i class="ri-pencil-line hidden edit-icon mr-2"></i>
                                <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
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
                     <span class="text-base font-semibold flex text-nowrap">   
                    <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#user-activity"></use></svg>  Activity Log
                    </span>
                    <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                    </div>
        
                            <!-- Activity Log Submenu -->
                            <ul class="submenu hidden pl-6">
                                <li class="block px-4 text-base font-normal">Last Login</li>
                                
                                <!-- Files Modified with Toggle -->
                                <li class="block px-4 text-base font-normal flex justify-between items-center files-modified">
                                    <span>Files Modified</span>
                                    <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                                </li>

                                <!-- Project 1 (Initially Hidden) -->
                                <ul class="submenu hidden project-list">
                                    <li class="block px-4 text-base font-normal flex justify-between items-center project-item">
                                        <span class="pl-6">Project 1</span>
                                         <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                                    </li>
                                    <ul class="submenu px-4 project-details hidden">
                                        <li class="block  text-base font-normal flex justify-between items-center cv-item">
                                        <span class="pl-6">cv.pdf</span>
                                       <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
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
                    <div class="flex items-center justify-between px-3 py-2">
                       <span class="text-base font-semibold flex text-nowrap">   
                    <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#permission"></use></svg>Manage Permissions
                    </span>
                       <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                    </div>
                    <ul class="submenu hidden px-4">
                     <li class="pl-6 text-base font-normal">Permission 1</li>                
                     <li class="pl-6 text-base font-normal">Permission 2</li>
                    </ul>
                </li>
                <!-- Actions Submenu -->
                <li>
                    <div class="flex items-center justify-between px-3 py-2">
                       <span class="text-base font-semibold flex text-nowrap">   
                    <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#actions"></use></svg>Actions
                    </span>
                        <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                    </div>
                    <ul class="submenu hidden px-4 role-details">
                        <li class="block px-1 text-base font-normal flex justify-between items-center role">
                            <span class="pl-6">Change Role</span>
                          <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
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
//User Roles
  userRoles.forEach((user) => {
    $("#userroleTable").append(`
        <tr class="text-nowrap">
         <td class="text-left px-8 py-2">${user.name}</td>
          <td class="text-left px-4">${user.DateTime}</td>
          <td class="text-left px-4">${user.Action}</td>
          <td class="text-left px-4">${user.Project}</td>
            <td class="text-left px-4">${user.Details}</td>
        
         <td class=" flex justify-end">
                <button class="more-button px-4 py-2">
                    <i class="ri-more-2-fill ri-lg md:ri-xl"></i>
                </button>
            <div class="moredropdown hidden absolute right-full w-72 bg-white border border-dark-charcoal rounded-lg shadow-md z-[9999]">
                <ul class="text-sm">
                    <!-- User Info -->
                    <li>
                        <div class="flex items-center justify-between px-4 py-2">
                           <span class="text-base font-semibold text-dark-charcoal flex text-nowrap">
                                <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#user-info"></use></svg>  User info
                            </span>
                            <div class="flex items-center">
                                <i class="ri-pencil-line hidden edit-icon mr-2"></i>
                              <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
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
                   <span class="text-base font-semibold flex text-nowrap">   
                    <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#user-activity"></use></svg>  Activity Log
                    </span>
                    <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                    </div>
        
                            <!-- Activity Log Submenu -->
                            <ul class="submenu hidden pl-6">
                                <li class="block px-4 text-base font-normal">Last Login</li>
                                
                                <!-- Files Modified with Toggle -->
                                <li class="block px-4 text-base font-normal flex justify-between items-center files-modified">
                                    <span>Files Modified</span>
                                    <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                                </li>

                                <!-- Project 1 (Initially Hidden) -->
                                <ul class="submenu hidden project-list">
                                    <li class="block px-4 text-base font-normal flex justify-between items-center project-item">
                                        <span class="pl-6">Project 1</span>
                                         <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                                    </li>
                                    <ul class="submenu px-4 project-details hidden">
                                        <li class="block  text-base font-normal flex justify-between items-center cv-item">
                                        <span class="pl-6">cv.pdf</span>
                                        <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
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
                                    <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                                </li>
                                <ul class="submenu hidden recent-list px-4">
                                <li class="block pl-6 text-base font-normal">Project 1</li>
                                <li class="block pl-6 text-base font-normal">cv.pdf</li>
                                </ul>
                            </ul>
                </li>


                <!-- Manage Permissions -->
                <li>
                    <div class="flex items-center justify-between px-3 py-2">
                      <span class="text-base font-semibold flex text-nowrap">   
                    <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#permission"></use></svg>Manage Permissions
                    </span>
                       <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                    </div>
                    <ul class="submenu hidden px-4">
                     <li class="pl-6 text-base font-normal">Permission 1</li>                
                     <li class="pl-6 text-base font-normal">Permission 2</li>
                    </ul>
                </li>
                <!-- Actions Submenu -->
                <li>
                    <div class="flex items-center justify-between px-3 py-2">
                        <span class="text-base font-semibold flex text-nowrap">   
                    <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#actions"></use></svg>Actions
                    </span>
                        <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                    </div>
                    <ul class="submenu hidden px-4 role-details">
                        <li class="block px-1 text-base font-normal flex justify-between items-center role">
                            <span class="pl-6">Change Role</span>
                            <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
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


//Activity Logs
  userRoles.forEach((user) => {
    $("#activitylogsTable").append(`
        <tr class=" text-nowrap">
          <td class="text-left px-8 py-2">${user.name}</td>
          <td class="text-left px-4">${user.DateTime}</td>
          <td class="text-left px-4">${user.Action}</td>
       <td class="text-left px-4 cursor-pointer  group project-cell">
    
    <div class="inline-block break-words max-w-[150px] relative truncate project-text">
        ${user.Project}
    </div>

   
    <button class="absolute border border-dark-charcoal px-2 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[999]">
        ${user.Project}
    </button>
</td>




          <td class="text-left px-4">${user.Details}</td>
         <td class=" flex justify-end">
                <button class="more-button px-4 py-2">
                    <i class="ri-more-2-fill ri-lg md:ri-xl"></i>
                </button>
            <div class="moredropdown hidden absolute right-full w-72 bg-white border border-dark-charcoal rounded-lg shadow-md z-[9999]">
                <ul class="text-sm">
                    <!-- User Info -->
                    <li>
                        <div class="flex items-center justify-between px-4 py-2">
                             <span class="text-base font-semibold text-dark-charcoal flex text-nowrap">
                                <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#user-info"></use></svg>  User info
                            </span>
                            <div class="flex items-center">
                                <i class="ri-pencil-line hidden edit-icon mr-2"></i>
                               <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
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
                     <span class="text-base font-semibold flex text-nowrap">   
                    <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#user-activity"></use></svg>  Activity Log
                    </span>
                  <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                    </div>
        
                            <!-- Activity Log Submenu -->
                            <ul class="submenu hidden pl-6">
                                <li class="block px-4 text-base font-normal">Last Login</li>
                                
                                <!-- Files Modified with Toggle -->
                                <li class="block px-4 text-base font-normal flex justify-between items-center files-modified">
                                    <span>Files Modified</span>
                                  <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                                </li>

                                <!-- Project 1 (Initially Hidden) -->
                                <ul class="submenu hidden project-list">
                                    <li class="block px-4 text-base font-normal flex justify-between items-center project-item">
                                        <span class="pl-6">Project 1</span>
                                         <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                                    </li>
                                    <ul class="submenu px-4 project-details hidden">
                                        <li class="block  text-base font-normal flex justify-between items-center cv-item">
                                        <span class="pl-6">cv.pdf</span>
                                      <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
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
                                    <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                                </li>
                                <ul class="submenu hidden recent-list px-4">
                                <li class="block pl-6 text-base font-normal">Project 1</li>
                                <li class="block pl-6 text-base font-normal">cv.pdf</li>
                                </ul>
                            </ul>
                </li>


                <!-- Manage Permissions -->
                <li>
                    <div class="flex items-center justify-between px-3 py-2">
                       <span class="text-base font-semibold flex text-nowrap">   
                    <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#permission"></use></svg>Manage Permissions
                    </span>
                   <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
                    </div>
                    <ul class="submenu hidden px-4">
                     <li class="pl-6 text-base font-normal">Permission 1</li>                
                     <li class="pl-6 text-base font-normal">Permission 2</li>
                    </ul>
                </li>
                <!-- Actions Submenu -->
                <li>
                    <div class="flex items-center justify-between px-3 py-2">
                 <span class="text-base font-semibold flex text-nowrap">   
                    <svg class=" w-5 h-5"><use xlink:href="/public/images/icons.svg#actions"></use></svg>Actions
                    </span>
                        <svg class=" w-6 h-6 toggle-arrow"><use xlink:href="/public/images/icons.svg#downarrow"></use></svg>
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

   //copy button
   $(document).on("click", ".copyIcon", function () {
    let container = $(this).closest(".moredropdown"); // Find the closest parent dropdown
    let emailInput = container.find(".emailInput"); // Get the corresponding input field
    let copiedBtn = container.find(".copiedBtn"); // Get the copied button in the same section

    let email = emailInput.val().trim(); // Get the email value

    if (email !== "") {
        navigator.clipboard.writeText(email).then(() => {
            copiedBtn.removeClass("hidden").fadeIn(200); // Show "Copied" message

            setTimeout(() => {
                copiedBtn.fadeOut(200); // Hide after 2 seconds
            }, 2000);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    } else {
        alert("Please enter an email to copy!");
    }
});
   //Set Permissions dropdown
   $(document).ready(function () {
    // Toggle the dropdown for the clicked button
    $(document).on("click", ".permissionDropdown", function (event) {
        event.stopPropagation(); // Prevent closing when clicking inside
        let dropdownList = $(this).siblings(".permissionList"); // Get related list
        $(".permissionList").not(dropdownList).addClass("hidden"); // Hide others
        dropdownList.toggleClass("hidden"); // Toggle visibility
    });

    // Handle selection inside the dropdown
    $(document).on("click", ".permissionList li", function (event) {
        event.stopPropagation(); // Prevent closing when selecting
        let inputField = $(this).closest(".dropdownContainer").find(".permissionInput");
        inputField.val($(this).text()); // Update input field
        $(this).closest(".permissionList").addClass("hidden"); // Hide dropdown
    });

    // Hide all dropdowns when clicking outside
    $(document).click(function () {
        $(".permissionList").addClass("hidden");
    });
});


$(".nav-link").each(function() {
    if (this.href === window.location.href) {
      $(this).addClass("bg-gray-300 text-blue-600 font-semibold");
    }
  });
    
   
});


