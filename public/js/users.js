$(document).ready(function () {
    // Sample Data Array
    let users = [
      { name: "Rachel Saket", email: "rachelsaket@gmail.com", role: "Admin", status: "Active", lastActive: "2 hrs ago" },
      { name: "John Doe", email: "johndoe@example.com", role: "Editor", status: "Inactive", lastActive: "5 days ago" },
      { name: "Jane Smith", email: "janesmith@example.com", role: "Viewer", status: "Active", lastActive: "30 mins ago" }
    ];

    // Populate Table Dynamically
    $.each(users, function (index, user) {
      $("#tableBody").append(`
        <tr class="border-b border-gray-300 h-12">
          <td class="px-4">${user.name}</td>
          <td class="px-4">${user.email}</td>
          <td class="px-4">${user.role}</td>
          <td class="px-4">${user.status}</td>
          <td class="px-4">${user.lastActive}</td>
        </tr>
      `);
    });
  });