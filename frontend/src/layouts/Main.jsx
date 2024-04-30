import { Outlet } from "#rrd";
import Page from "#components/page/Page";
import Header from "#components/header/Header";
import Main from "#components/main/Main";
import Footer from "#components/footer/Footer";
export default function () {
    return (
        <Page>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </Page>
    );
}
