import React from 'react';
import '../App.css'

const Footer = () => {
    return (
        <>
                <footer class="bg-body-tertiary text-center text-md-start lg-mt-5">
                    <div class="container p-4 ">
                    <div class="row ">
                        <div class="col-lg-4 col-md-12 mb-4 mb-md-0 me-auto">
                        <h5 class="text-uppercase">Footer Content</h5>

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                            aliquam voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                        </div>
                        
                        <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Discover</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                            <a href="#!" class="text-body">Home</a>
                            </li>
                            <li>
                            <a href="#!" class="text-body">Pricing</a>
                            </li>
                            <li>
                            <a href="#!" class="text-body">Reviews</a>
                            </li>
                        </ul>
                        </div>
                
                        <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                        <h5 class="text-uppercase mb-0">Features</h5>

                        <ul class="list-unstyled">
                            <li>
                            <a href="#!" class="text-body">Top Coins</a>
                            </li>
                            <li>
                            <a href="#!" class="text-body">Footers</a>
                            </li>
                        </ul>
                        </div>

                        <div class="col-lg-1 col-md-4 mb-4 mb-md-0">
                        <h5 class="text-uppercase mb-0">Support</h5>

                        <ul class="list-unstyled">
                            <li>
                            <a href="#!" class="text-body">Help desc</a>
                            </li>
                            <li>
                            <a href="#!" class="text-body">Contact us</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </footer>
        </>
    );
};

export default Footer;

