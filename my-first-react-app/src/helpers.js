import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const storeUser = (data) => {
    localStorage.setItem('user', JSON.stringify({
        username: data.user.username,
        jwt: data.jwt
    })
    );
};

export const userData = () => {
    const stringidiedUser = localStorage.getItem('user') || '""';
    return JSON.parse(stringidiedUser || {})
};

export const Protector = ({ Component }) => {
    const navigate = useNavigate();
    
    const {jwt} = userData();

    useEffect(() => {
        if (!jwt) {
            navigate("/login");
        }
    }, [navigate, jwt]);

    return <Component />;
};