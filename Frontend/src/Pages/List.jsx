import React from "react";

const List = () => {
  return (
    <>
      <div class="relative overflow-x-auto w-full p-14">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                User name
              </th>
              <th scope="col" class="px-6 py-3">
                Mobile Number
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Edite
              </th>
              <th scope="col" class="px-6 py-3">
                Edite
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b  bg-gray-800  ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-white"
              >
                Dipak Pawar
              </th>
              <td class="px-6 py-4">8600405446</td>
              <td class="px-6 py-4">Itsdipaksgalexyj2@gmail.com</td>
              <td class="px-6 py-4">
                <button>Edit</button>
              </td>
              <td class="px-6 py-4">
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;
