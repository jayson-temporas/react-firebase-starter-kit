import { useEffect } from "react"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Main from '../layouts/Main'

const Home = () => {
    useEffect(() => {

    }, [])

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Homepage</title>
                    <meta name="description" content="Amazing app"></meta>
                </Helmet>
                <Main>
                    <div id="header-section" className="">
                        <div className="overlay d-flex align-items-center justify-content-center">
                            <div className="container text-center">
                                <div className="row justify-content-md-center">
                                    <div className="col-md-6">
                                        <h1 data-testid="header" className="h1">React Firebase Starter Kit</h1>
                                        <h2 className="h4 mt-4">Focus more on development and less on settings and configuration</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Main>
            </HelmetProvider>
        </>
    );
}

export default Home;
