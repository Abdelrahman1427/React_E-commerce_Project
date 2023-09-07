import { useSelector } from "react-redux";
import "./about.css";

function About() {
    // const counter = useSelector(state =>state.counterReducer.counter)
    const counter = useSelector((state) => state.counterReducer.counter);
    return (
        <div>
            <div className="body">
                <body>
                    <header class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <h1>Shopping </h1>
                                    <h2>Shop any way you want</h2>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h2>About Us</h2>
                                <hr />
                            </div>
                        </div>

                        <div class="row row-content align-item-center">
                            <div class="col">
                                <h3>Shop online now</h3>

                                <h4>
                                    Shop online now, and your items will be delivered in a few
                                    days.
                                </h4>
                                <p class="d-none d-sm-block">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but
                                    also the leap into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of
                                </p>
                                <div className="m-5 ">
                                    <h4>Developed by:</h4>
                                    <p class="d-none d-sm-block">
                                        {" "}
                                        Abdelrahman Mohamed Abdallah <br />
                                        Abdelrahman Osama
                                    </p>

                                    <p>
                                        Support Us <br />
                                        {counter} $ donated so far !
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div class="container">
                            <div class="row">
                                <div class="col-4 col-sm-2 offset-1">
                                    <h5>Links</h5>
                                    <ul class="list-unstyled">
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="aboutus.html">About</a>
                                        </li>
                                        <li>
                                            <a href="#">Sites</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-6 col-sm-5 text-center">
                                    <h5>Social</h5>
                                    <a href="http://instagram.com/" className="m-3">
                                        Instagram
                                    </a>
                                    <a href="http://facebook.com/" className="m-3">
                                        Facebook
                                    </a>
                                    <a href="http://twitter.com/" className="m-3">
                                        Twitter
                                    </a>
                                    <a href="http://youtube.com/" className="m-3">
                                        YouTube
                                    </a>
                                </div>
                                <div class="col-sm-4 text-center">
                                    Email: abdelrahman.abdallah@stemredsea.moe.edu.eg
                                    abdelrahmanosama620@gmail.com
                                    <br />
                                    Tel: <br /> +20 101-142-5565 <br />
                                    +20 101-558-8483
                                </div>
                            </div>
                        </div>
                    </footer>
                    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
                    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
                    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
                </body>
            </div>
        </div>
    );
}
export default About;
