import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";
import {useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token){
          setUsername(getUsername(token));
        }else{
          navigate('login')
        }
      }, [])

      return username;
}

