export interface AuthProps {
  isAuth: boolean;
}

export interface SetAuthProps {
  setIsAuth: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

