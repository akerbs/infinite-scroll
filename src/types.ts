/**
 * Interface representing a user's name.
 * @interface
 * @property {string} first - The user's first name.
 * @property {string} last - The user's last name.
 */
export interface IName {
  first: string;
  last: string;
}

/**
 * Interface representing a user's profile picture.
 * @interface
 * @property {string} thumbnail - The URL for the user's profile picture thumbnail.
 */
export interface IPicture {
  thumbnail: string;
}

/**
 * Interface representing a user's ID.
 * @interface
 * @property {string} value - The value of the user's ID.
 */
export interface IID {
  value: string;
}

/**
 * Interface representing a user.
 * @interface
 * @property {IID} id - The user's ID.
 * @property {IName} name - The user's name.
 * @property {string} email - The user's email address.
 * @property {IPicture} picture - The user's profile picture.
 */
export interface IUser {
  id: IID;
  name: IName;
  email: string;
  picture: IPicture;
}

/**
 * Interface representing a response from the API.
 * @interface
 * @property {IUser[]} results - An array of user objects.
 * @property {object} info - Additional information about the response.
 */
export interface IResponse {
  results: IUser[];
  info: object;
}
