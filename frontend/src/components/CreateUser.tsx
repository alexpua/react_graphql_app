import {useMutation} from "@apollo/client";
import {useState} from "react";
import {CREATE_USER} from "../graphql/mutations/CREATE_USER.ts";
import SelectButton from "./SelectButton.tsx";
import SelectOptions from "./SelectOptions.tsx";

interface CreateUserProps {
  onUserAdded: () => void;
  onCancel: () => void;
}

const CreateUser: React.FC<CreateUserProps> = ({ onUserAdded, onCancel }) => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");
  const [createUser] = useMutation(CREATE_USER, {
    variables: { name, status },
  });

  const handleCreate = async () => {
    if (!name || !status) return;
    await createUser();
    onUserAdded();
    setName("");
    setStatus("");
    onCancel();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[500px]">
        <p className="text-lg font-serif font-normal mb-6 border-b-[1px] border-gray-200 px-8 py-4 text-left">
          Create New User
        </p>

        <div className="px-8 pb-8">
          <div className="relative mb-8 pt-4">
            <div className="absolute left-0 top-0 text-gray-400 text-[10px]">
              User name:
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-b-[1px] border-gray-300 text-lg font-normal text-gray-600 focus:outline-none"
            />
          </div>

          <div className="relative mb-12 pt-4">
            <div className="absolute left-0 top-0 text-gray-400 text-[10px]">
              Status:
            </div>
            <SelectButton
              style="w-full py-0 border-b-[1px] border-gray-300 bg-white text-lg font-normal text-gray-600"
              status={status}
              handleClickButton={(onClick: boolean) => {
                if (onClick) setShow(!show);
                else setShow(false);
              }}
            >
              <div className="flex items-center">
                <div className="flex-grow text-left min-h-[24px]">{status}</div>
                <div className="triangle"></div>
              </div>
            </SelectButton>
            <SelectOptions
              style="absolute left-0 top-[50px] bg-white border-[1px] rounded-md  font-normal text-gray-600 w-full"
              handleStatusChange={(_status) => {
                setStatus(_status);
                setShow(false);
              }}
              status={status}
              show={show}
            />
          </div>

          <div className="flex justify-start space-x-2 font-serif">
            <button
              onClick={handleCreate}
              className="bg-sky-500 text-white px-6 py-2 rounded shadow hover:bg-sky-600"
            >
              Create
            </button>
            <button
              onClick={onCancel}
              className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
