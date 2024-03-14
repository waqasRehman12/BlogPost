import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Nav from "./Nav";

import Missing from "./Missing";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import { Route, Routes } from "react-router-dom";
import EditPost from "./EditPost";
import { DataProvider } from "./Context/DataContext";
function App() {
    return (
        <div className="App">
            <Header title="blogPost" />
            <DataProvider>
                <Nav />
                <Routes>
                    <Route exact path="/" Component={Home} />
                    <Route exact path="/post" Component={NewPost} />
                    <Route path="/edit/:id" Component={EditPost} />
                    <Route exact path="/post/:id" Component={PostPage} />
                    <Route path="/about" Component={About} />
                    <Route path="*" Component={Missing} />
                </Routes>
            </DataProvider>
            <Footer />
        </div>
    );
}

export default App;
