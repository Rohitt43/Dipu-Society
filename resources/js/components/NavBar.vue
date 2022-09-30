<template>
<div>
    <div class="header-top ">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-6 col-md-4  text-lg-left text-md-left">
                        <div class="header-top-info">
                            <i class="fa-solid fa-phone"></i><span class="m-2">+977 9848455764</span>
                            <i class="fa-solid fa-envelope" style="font-size:15px; margin-left:20px;"></i><span class="m-2">sunita_swar@yahoo.com</span>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-8">
                        <div class="header-top-right text-center text-lg-right text-md-right mt-3 mt-lg-0">
                            <a href="https://www.facebook.com/profile.php?id=100081195559786" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://github.com/" target="_blank"><i class="fa-brands fa-google"></i></a>
                            <a href="#" target="_blank"><i class="fa-brands fa-pinterest"></i></a>
                            <a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="donation.html" class="top-btn">Donate Now</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>

    <nav class="navbar navbar-expand-lg sticky-top custom-nav">
        <div class="container">
            <a class="navbar-brand logo"><img :src="require('../assets/logo.png')"></a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{ name: 'Home' }">Home</router-link>
                        
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'AboutUs' }">About Us</router-link>
                       
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Gallery' }">Gallery</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'ContactUs' }">Contact Us</router-link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {

};
</script>
