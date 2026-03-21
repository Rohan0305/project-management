import { User } from "@/state/api";
import Image from "next/image";
import React from "react";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="flex items-center rounded border p-4 shadow bg-white dark:bg-dark-secondary">
      {user.profilePictureUrl && (
        <Image
          src={`https://pm-s3-bucket-rohanv.s3.us-east-2.amazonaws.com/p1.jpeg`}
          alt="profile picture"
          width={32}
          height={32}
          className="rounded-full"
        />
      )}
      <div>
        <h3 className="dark:text-white">{user.username}</h3>
        <p className="dark:text-white">{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;