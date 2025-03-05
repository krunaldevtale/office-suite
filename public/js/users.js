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
        <tr>
          <td class="text-left px-4 py-2">${user.name}</td>
          <td class="text-left px-4">${user.email}</td>
          <td class="text-left px-4">${user.role}</td>
          <td class="text-left px-4">${user.status}</td>
          <td class="text-left px-4">${user.lastActive}</td>
          <td class="py-4 md:py-5 text-right px-4 w-12 relative">
    <div class="flex justify-end items-center">
    <button class="more-button">
      <i class="ri-more-2-fill ri-lg md:ri-xl"></i>
    </button>
    <div class="moredropdown hidden absolute right-0 top-10 w-40 bg-dark-charcoal shadow-md rounded-lg z-[9999]">
      <ul class="text-sm text-white-smoke">
        <li><a href="#" class="block px-4 py-2">Open</a></li>
        <li><a href="#" class="block px-4 py-2">Copy</a></li>
        <li><a href="#" class="block px-4 py-2">Share</a></li>
        <li><a href="#" class="block px-4 py-2">Rename</a></li>
        <li><a href="#" class="block px-4 py-2">Move to bin</a></li>
      </ul>
    </div>
  </div>
</td>

        </tr>
      `);
  });
});
