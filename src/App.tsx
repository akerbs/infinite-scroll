import { useState, useEffect, FC } from "react";
import axios from "axios";
import { IResponse, IUser } from "./types";
import UserCard from "./components/UserCard";
import "./styles.css";

/**
 * The main App component that demonstrates the infinite scroll
 *  @returns {JSX.Element} - The main App component
 */

const App: FC = (): JSX.Element => {
  /**
   * State to store and update the list of users
   * @type {IUser[]}
   */

  const [users, setUsers] = useState<IUser[]>([]);

  /**
   * State to store and update the last batch of users loaded from the API
   * @type {IUser[]}
   */

  const [lastLoadedUsers, setLastLoadedUsers] = useState<IUser[]>([]);

  /**
   * Effect hook to add the last loaded users to the list of users
   */

  useEffect(() => {
    setUsers([...users, ...lastLoadedUsers]);
  }, [lastLoadedUsers]);

  /**
   * Function to fetch users from the API
   * @async
   */

  const fetchUsers = async () => {
    /**
     * Get the response from the API
     * @type {IResponse}
     */

    const res = await axios.get<IResponse>(
      `https://randomuser.me/api/?page=${users.length / 30 + 1}&results=30`
    );

    /**
     * Update the state with the new batch of users
     */

    setLastLoadedUsers(res.data.results);
  };

  /**
   * Effect hook to handle the window scrolling event
   */

  useEffect(() => {
    /**
     * Timer ID for the setTimeout function
     * @type {null | ReturnType<typeof setTimeout>}
     */

    let timerId: null | ReturnType<typeof setTimeout> = null;

    /**
     * Function to handle the window scrolling event
     */

    const handleScroll = () => {
      /**
       * Check if the user has reached the end of the page
       */

      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;

      /**
       * If a timer is already set, clear it before setting a new one.
       */

      if (timerId) {
        clearTimeout(timerId);
      }

      /**
       * Set a timer to load more users after 100 milliseconds.
       */

      timerId = setTimeout(() => {
        fetchUsers();
      }, 100);
    };

    /**
     * Fetch the first batch of users when component mounts.
     */

    fetchUsers();

    /**
     * Add the scroll event listener
     */

    window.addEventListener("scroll", handleScroll);

    /**
     * Remove the scroll event listener when component unmounts.
     */

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Render the users in a container
   */

  return (
    <div className="container">
      {users.map((user) => (
        <UserCard
          key={user.email}
          name={`${user.name.first} ${user.name.last}`}
          email={user.email}
          picture={user.picture.thumbnail}
        />
      ))}
    </div>
  );
};

export default App;
