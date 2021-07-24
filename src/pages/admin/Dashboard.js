import { useSelector } from "react-redux"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Main from '../../layouts/Main'

const Dashboard = () => {
    const usersReducer = useSelector((state) => state.users)

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Admin Dashboard</title>
                    <meta name="description" content="Amazing app"></meta>
                </Helmet>
                <Main>
                    <div id='client-content'>
                        <h1 className='mx-2'>Welcome Admin { usersReducer.user.firstName}</h1>
                    </div>
                </Main>
            </HelmetProvider>
        </>
    );
}

export default Dashboard;
