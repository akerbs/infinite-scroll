import { FC } from "react";

/**
 * React functional component that renders a user card with name, email, and picture.
 * @component
 * @param {object} props - The props object containing the name, email, and picture props.
 * @param {string} props.name - The name of the user to be rendered.
 * @param {string} props.email - The email of the user to be rendered.
 * @param {string} props.picture - The URL of the picture of the user to be rendered.
 * @returns {JSX.Element} - User card with name, email, and picture.
 */

interface UserCardProps {
  name: string;
  email: string;
  picture: string;
}

const UserCard: FC<UserCardProps> = ({
  email,
  picture,
  name,
}: UserCardProps): JSX.Element => {
  return (
    <div className="card">
      <img src={picture} alt={name} />
      <div className="info">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
