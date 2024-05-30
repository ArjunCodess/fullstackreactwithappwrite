import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import Loader from './Loader'

export default function Protected({ children, authentication = true }) {
  const authStatus = useSelector((status) => status.auth.status);
  const navigate = useNavigate();

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate('/login');
    } else if (!authentication && authStatus !== authentication) {
      navigate('/');
    }

    setLoader(false);
  }, [authStatus, authentication, navigate])

  return loader ? <Loader /> : <>{children}</>
}
