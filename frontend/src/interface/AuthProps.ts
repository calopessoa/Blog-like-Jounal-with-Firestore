export interface AuthProps {
  isAuth: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

export interface SetAuthProps {
  setIsAuth: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

