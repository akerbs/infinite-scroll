import { FC } from "react";

interface UserCardProps {
  /**
   * The full name of the user.
   */
  name: string;
  /**
   * The email of the user.
   */
  email: string;
  /**
   * The URL of the user's thumbnail picture.
   */
  picture: string;
}
/**
 * A component that displays a user's information in a card format.
 */
const UserCard: FC<UserCardProps> = ({
  email,
  picture,
  name,
}: UserCardProps): JSX.Element => {
  /**
   * Render the user's information in a card format.
   */
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
