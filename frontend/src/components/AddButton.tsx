import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_USERS } from "../graphql/queries/GET_USERS.ts";
import CreateUser from "./CreateUser.tsx";

function AddButton() {
  const [isModalOpen, setModalOpen] = useState(false);

  const { refetch } = useQuery(GET_USERS);

  return (
    <div className="py-8">
      <button
        className="px-10 py-5 bg-sky-500 text-white font-semibold font-serif rounded flex items-center shadow-md hover:bg-sky-600"
        onClick={() => setModalOpen(true)}
      >
        Create +
      </button>

      {isModalOpen && (
        <CreateUser
          onUserAdded={refetch}
          onCancel={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

export default AddButton;
