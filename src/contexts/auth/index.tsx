import React, {
  createContext,
  FC,
  useMemo,
  useState,
  useEffect,
} from 'react';

import { Storage } from '../../helpers/storage-manager';

import { REDIRECT_URL } from '../../configs/index';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../../hooks/use-query-params';
import { userService } from '../../services/user-service/index';
import { accessTokenKey, codeKey } from '../../constants';
import Loading from '../../components/loading';
import { IAuthContextType, IAuthProviderProps, IUser } from '../../types';

export const AuthContext = createContext<IAuthContextType>({} as IAuthContextType);

export const AuthProvider: FC<IAuthProviderProps> = ({
  children: { props },
}: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser>();
  const [redirectUrl, setRedirectUrl] = useState<string>('');
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  const query = useQuery();
  const navigate = useNavigate();
  const isLogedIn = Storage.isKeyExistInStorage(accessTokenKey);

  useEffect(() => {
    Storage.getItem(accessTokenKey).then((token) => {
      if (token) {
        getUserProfile();
      }
    });
  }, []);

  const getUserProfile = (withRedirect: boolean = false) => {
    userService
      .getUserProfile()
      .then((response) => {
        const {
          data: { profile },
        } = response;
        setUser(profile);
        if (withRedirect) {
          navigate('/dashboard/events');
        }
      })
      .catch(() => console.log(''));
  };

  const getAccessToken = () => {
    if (!query.get(codeKey)) {
      return;
    }

    userService
      .getAccessToken({
        code: query.get(codeKey),
        redirectUrl: REDIRECT_URL,
      })
      .then((response) => {
        const {
          data: { accessToken },
        } = response;

        if (accessToken) {
          Storage.setItem(accessTokenKey, accessToken).then((result) => {
            getUserProfile(true);
          });
        }
      });
  };

  useEffect(() => {
    if (isLogedIn) {
      return setLoadingInitial(false);
    }

    userService
      .authorize()
      .then((response) => {
        const {
          data: { url },
        } = response;
        setRedirectUrl(url);
        getAccessToken();
        setLoadingInitial(false);
      })
      .finally(() => setLoadingInitial(false));
  }, []);

  const tools = useMemo(
    () => ({
      user,
      redirectUrl,
      getAccessToken,
      isLogedIn,
    }),
    [user, redirectUrl, isLogedIn]
  );

  return (
    <AuthContext.Provider value={tools}>
      {loadingInitial ? <Loading /> : props?.children}
    </AuthContext.Provider>
  );
};
