import {useContext} from 'react';
import {AuthContext} from "../views/private/AuthProvider";

export const useAuth = () => {
    return useContext(AuthContext);
};
