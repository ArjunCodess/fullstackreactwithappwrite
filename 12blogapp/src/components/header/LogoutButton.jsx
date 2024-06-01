import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth.js"
import { logout } from "../../store/authSlice.js"

export default function LogoutButton() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout()
        
        .then(() => {
            dispatch(logout());
        })

        .catch((error) => {
            alert("from LogoutButton.jsx/logoutHandler :: ", error);
        })
    }

    return (
        <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandler}>
            Logout
        </button>
    )
}