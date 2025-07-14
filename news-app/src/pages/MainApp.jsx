
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import NewsCard from "../component/NewsCard";

let MainApp = () => {




    return (
        <>

            <Navbar />
            <Hero />
            <div>
                <h2 className="text-center mt-5">Latest News</h2>
                <p className="text-center">Stay tuned for the latest updates and articles.</p>
            </div>

            <div>
                <div className="container-fluid d-flex flex-wrap justify-content-center">

                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
            </div>



            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous"></script>

        </>
    );
}


export default MainApp;