import { useQuery } from "@apollo/client";
import { GET_USERS } from "../graphql/queries/GET_USERS";
import { UserModel } from "../models/User.ts";
import { User } from "../types/graphql";
import UserCard from "./UserCard.tsx";

const UserCards = () => {
  const { loading, error, data } = useQuery<{ users: User[] }>(GET_USERS);

  return (
    <>
      <div className="grid grid-cols-1 min-h-6 mb-1">
        {loading ? "Loading..." : error ? `Error: ${error.message}` : ""}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.users.map((userData) => {
          const user = new UserModel(userData);
          return <UserCard key={user.id} user={user} />;
        })}
      </div>
    </>
  );
};

export default UserCards;
