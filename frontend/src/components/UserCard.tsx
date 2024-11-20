import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_USER_STATUS } from "../graphql/mutations/UPDATE_USER_STATUS.ts";
import { User } from "../types/graphql.ts";
import SelectButton from "./SelectButton.tsx";
import SelectOptions from "./SelectOptions.tsx";
import StatusIcon from "./StatusIcon.tsx";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [status, setStatus] = useState(user.status);
  const [show, setShow] = useState(false);
  const [updateStatus] = useMutation(UPDATE_USER_STATUS);

  const handleStatusChange = async (newStatus: string) => {
    setStatus(newStatus);
    setShow(false);
    await updateStatus({
      variables: {
        id: user.id,
        status: newStatus,
      },
    });
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-3 flex items-center  ${show ? "shadow-sky-500/50" : ""}`}
    >
      <img
        className="w-28 h-28 rounded-full object-cover border-2 border-gray-100"
        src={user.img || "/src/assets/img/user4.jpg"}
        alt={user.name}
      />
      <div className="flex flex-col relative h-full justify-end w-full px-2 py-3">
        <p className="text-left text-base font-medium text-gray-600 mb-2">
          {user.name}
        </p>
        <SelectButton
          style="w-full border-b-[0.5px] border-gray-600 bg-white text-xs font-normal text-gray-600"
          status={status}
          handleClickButton={(onClick: boolean) => {
            if (onClick) setShow(!show);
            else setShow(false);
          }}
        >
          <div className="flex items-center">
            <svg height="12" width="12" xmlns="http://www.w3.org/2000/svg">
              <StatusIcon status={status} />
            </svg>
            <div className="ml-1 flex-grow text-left">{status}</div>
            <div className="triangle"></div>
          </div>
        </SelectButton>
        <SelectOptions
          style="absolute left-0 top-[100px] bg-white divide-y-2 divide-gray-500 rounded-lg shadow text-xs text-gray-600 w-full z-10"
          handleStatusChange={handleStatusChange}
          status={status}
          show={show}
        />
      </div>
    </div>
  );
};

export default UserCard;
