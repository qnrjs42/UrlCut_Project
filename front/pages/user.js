import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Router, { withRouter } from "next/router";

import UserLayout from '../components/UserLayout/UserLayout';


const user = () => {

    // const { me } = useSelector((state) => state.user);

    return (
        <>
            <UserLayout />
        </>
    )
}

export default withRouter(user)
