import Pagination from "@/Components/Pagination";
import SearchForm from "@/Components/SearchForm";
import Table from "@/Components/Table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Management employees",
};

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-5">Employees</h1>

      <SearchForm />

      <div className="mb-5">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Create employee
        </button>
      </div>

      <div className="border rounded-md mb-5">
        <Table />
      </div>

      <div className="flex justify-center">
        <Pagination />
      </div>
    </main>
  );
}
