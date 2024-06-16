import React from "react";

const Table = () => {
  return (
    <div className="relative w-full overflow-auto">
      <table className="w-full caption-bottom text-sm">
        <thead className="[&_tr]:border-b">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 max-w-[150px]">
              Name
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 hidden md:table-cell">
              Email
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 hidden md:table-cell">
              Username
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0" />
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
              Clementine Bauch
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 hidden md:table-cell">
              clementine@gmail.com
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              @clementine
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full"
                name="$ACTION_REF_21"
                formAction=""
                formEncType="multipart/form-data"
                formMethod="POST"
              >
                <input
                  type="hidden"
                  name="$ACTION_21:0"
                  defaultValue='{"id":"b92f8a7a398f53f2fba6bbfa9d5c02e346113462","bound":"$@1"}'
                />
                <input type="hidden" name="$ACTION_21:1" defaultValue="[4]" />
                Delete
              </button>
            </td>
          </tr>
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
              Jamie Johnson
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 hidden md:table-cell">
              jamiejohnson@example.com
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              jamiejohnson
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full"
                name="$ACTION_REF_22"
                formAction=""
                formEncType="multipart/form-data"
                formMethod="POST"
              >
                <input
                  type="hidden"
                  name="$ACTION_22:0"
                  defaultValue='{"id":"b92f8a7a398f53f2fba6bbfa9d5c02e346113462","bound":"$@1"}'
                />
                <input type="hidden" name="$ACTION_22:1" defaultValue="[7]" />
                Delete
              </button>
            </td>
          </tr>
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
              Chris Lee
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 hidden md:table-cell">
              chrislee@example.com
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              chrislee
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full"
                name="$ACTION_REF_23"
                formAction=""
                formEncType="multipart/form-data"
                formMethod="POST"
              >
                <input
                  type="hidden"
                  name="$ACTION_23:0"
                  defaultValue='{"id":"b92f8a7a398f53f2fba6bbfa9d5c02e346113462","bound":"$@1"}'
                />
                <input type="hidden" name="$ACTION_23:1" defaultValue="[8]" />
                Delete
              </button>
            </td>
          </tr>
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
              Pat Morgan
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 hidden md:table-cell">
              patmorgan@example.com
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              patmorgan
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full"
                name="$ACTION_REF_24"
                formAction=""
                formEncType="multipart/form-data"
                formMethod="POST"
              >
                <input
                  type="hidden"
                  name="$ACTION_24:0"
                  defaultValue='{"id":"b92f8a7a398f53f2fba6bbfa9d5c02e346113462","bound":"$@1"}'
                />
                <input type="hidden" name="$ACTION_24:1" defaultValue="[9]" />
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
