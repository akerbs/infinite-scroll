export interface IName {
  /**
   * The first name of the user.
   */
  first: string;
  /**
   * The last name of the user.
   */
  last: string;
}

export interface IPicture {
  /**
   * The thumbnail picture of the user.
   */
  thumbnail: string;
}

export interface IID {
  /**
   *  The id of the user.
   */
  value: string;
}

export interface IUser {
  /**
   *  The id of the user.
   */
  id: IID;
  /**
   *  The name of the user.
   */
  name: IName;
  /**
   *  The email of the user.
   */
  email: string;
  /**
   *  The picture of the user.
   */
  picture: IPicture;
}

export interface IResponse {
  /**
   *  The results of the response.
   */
  results: IUser[];
  /**
   *  The info of the response.
   */
  info: {};
}
