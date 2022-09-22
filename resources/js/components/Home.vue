<template>
<div>

<!-- Slider Section -->
<div class="slider">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-9 col-md-10">
				<div class="block text-center">
					<span class="d-block mb-3 text-white text-capitalize">Small help can make change</span>
					<h1 class="mb-4">New hope for <br>near future</h1>
					<p class="mb-4">Your small contribution means a lot. Natus officia amet hic  <br>accusamus repellat magni reprehenderit dolorem.</p>
					<b-button variant="success">Button</b-button>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Slider Section Ends -->


<!-- Memory Starts -->

<section class="section latest-blog">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-7 text-center">
				<div class="section-title">
					<h2 class="mt-3 content-title">In the Loving Memory of <br> Dipu Swar</h2>
				</div>
			</div>
		</div>

		<div class="row justify-content-center">
			<div class="col-lg-4 col-md-6 mb-5 mb-lg-0">
				<div class="card blog-item">
					<img src="https://dummyimage.com/600x400/000/fff" class="img-fluid">

					<!-- <div class="card-body mt-2">
						<span class="text-sm text-color text-uppercase font-weight-bold">January 3, 2019</span>
						<h3 class="mb-3"><a href="blog-single.html" class="">We can make a difference in families lives</a></h3>
						<p>Aspernatur obcaecati unde, quasi nihil neque, voluptatem. Consectetur.</p>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Memory Ends here -->


<!-- Intro Section Starts -->

<section class="section-intro">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-lg-6">
				<div class="section-title">
					<span class="text-color ">What we can do</span>
					<h2 class="mt-3 content-title">We Believe that We can <br>Save More Lifes with you</h2>
				</div>
			</div>
			<div class="col-lg-6">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dicta, iure. Esse quasi labore aperiam, dolorem amet voluptas soluta asperiores nostrum voluptate molestias numquam similique. Voluptate natus corporis ex, distinctio.</p>
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-lg-3 col-md-6 col-12">
				<div class="intro-item mb-5 mb-lg-0"> 
					<img :src="require('../assets/b1.jpg')" class="img-fluid w-100">
					<h4 class="mt-4 mb-3">Get inspired</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
				</div>
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="intro-item mb-5 mb-lg-0">
					<img :src="require('../assets/b2.jpg')" class="img-fluid w-100">
					<h4 class="mt-4 mb-3">Give Donation</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
				</div>
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="intro-item">
					<img :src="require('../assets/b3.jpg')" class="img-fluid w-100">
					<h4 class="mt-4 mb-3">Become a Volunteer</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
				</div>
			</div> 
			<div class="col-lg-3 col-md-6">
				<div class="intro-item">
					<img :src="require('../assets/b4.jpg')" class="img-fluid w-100">
					<h4 class="mt-4 mb-3">Help The children</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
				</div>
			</div> 
		</div>
	</div>
</section>

<!-- Intro Section Ends -->




<!-- Video Section Started -->
<div class="section-video">
	<div class="container">
		<div class="row ">
			<div class="col-lg-8">
				<div class="video-content  mb-5 mb-lg-0">
					<h2 class="mt-3 mb-5 position-relative text-lg text-white">We Make a Difference <br>in their Life</h2>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12">
				<div class="video-block">
					<div class="img-block">
						<img :src="require('../assets/v1.jpg')" class="img-fluid">
					</div>
					<a data-video-id="sXoKSD8QJEA" class="videoplay">
						<i class="icofont-ui-play"></i> 
					</a>
				</div>
			</div>
		</div>

		<div class="counter-section">
			<div class="row">
				<div class="col-lg-3 col-md-6 col-sm-6 show-contents">
					<div class="counter-item-2 mb-5 mb-lg-0 pt-5">
						<VueJsCounter end="18" class="counter-stat text-color"></VueJsCounter>
						<p>Years of Experience</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-6 show-contents">
					<div class="counter-item-2 mb-5 mb-lg-0 pt-5">
						<VueJsCounter end="120" class="counter-stat text-color"></VueJsCounter>
						<p>Active Volunteer</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-6 show-contents">
					<div class="counter-item-2 mb-5 mb-lg-0 pt-5">
						<VueJsCounter class="counter-stat text-color" start="10" end="50"></VueJsCounter>
						<p>Available Country</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-6 show-contents">
					<div class="counter-item-2 pt-5">
						<VueJsCounter end="2020" class="counter-stat text-color"></VueJsCounter>
						<p>Million People Helped</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Video Section Ends here -->



<!-- Gallery Section Starts -->

<section class="section-gallery">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-8 col-md-10">
				<div class="section-title text-center">
					<span class="text-color">Our Gallery</span>
					<h2 class="mt-3 mb-4 position-relative content-title">We connect with people across different sectors. we take risksand we always keep learning.</h2>
				</div>
			</div>
		</div>
	</div>

	<div class="container">
		<div class="gallery-wrap">
			<div class="row">
				<div class="col-lg-4">
					<div class="gallery-item">
							
							<img src="../assets/g1.jpg" class="img-fluid w-100">
						
					</div>
				</div>
				<div class="col-lg-4">
					<div class="gallery-item">
						
							<img src="../assets/g2.jpg" class="img-fluid w-100">
						
					</div>
				</div>
				<div class="col-lg-4">
					<div class="gallery-item">
						
							<img src="../assets/g3.jpg" class="img-fluid w-100">
						
					</div>
				</div>
				<div class="col-lg-4">
					<div class="gallery-item">
						
							<img src="../assets/g4.jpg" class="img-fluid w-100">
						
					</div>
				</div>

				<div class="col-lg-4">
					<div class="gallery-item">
						
							<img src="../assets/g5.jpg" class="img-fluid w-100">
						
					</div>
				</div>
				<div class="col-lg-4">
					<div class="gallery-item">
							<a href="../assets/g6.jpg" class="gallery-popup">
							<img src="../assets/g6.jpg" class="img-fluid w-100">
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="seemore-section">
			<router-link to="/gallery">See More</router-link>
		</div>
		
	</div>
</section>

<!-- Gallery Section Ends Here -->


<!-- Causes Section Starts Here -->

<section class="section-causes">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-7 col-md-7">
				<div class="section-title text-center">
					<span class="text-color">Latest Events</span>
					<h2 class="mt-3 mb-4 position-relative content-title">Our Recent Causes to serve better</h2>
					<p class="mb-5">We provide services in the area of IFRS and management reporting, helping companies to reach their highest level.</p>

				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-4">
				<div class="card mb-3 cause-item">
				  <div class="row no-gutters">
				      <img src="../assets/c1.jpg" class="img-fluid w-100" alt="...">

				      <div class="card-body">
				        <h3 class="mb-3"><a href="cause-single.html">Save Poor Childrens</a></h3>

				         <ul class="list-inline border-bottom border-top py-3 ">
				        	<li class="list-inline-item"><i class="icofont-check text-color mr-2"></i>Goal:	<span>$890</span></li>
				        	<li class="list-inline-item"><i class="icofont-check text-color mr-2"></i>Raised: <span>$390</span></li>
				        </ul>
				        <p class="card-text mb-4">Save poor child by supporting text below as a natural lead-in to additional content.</p>

				        <b-button variant="warning">Donate Now</b-button>
				      </div>
				  </div>
				</div>
			</div>

			<div class="col-lg-4">
				<div class="card mb-3 cause-item">
				  <div class="row no-gutters">
				      <img src="../assets/c2.jpg" class="img-fluid w-100" alt="...">

				      <div class="card-body">
				        <h3 class="mb-3"><a href="cause-single.html">Clean Drink Water</a></h3>
				         <ul class="list-inline border-bottom  border-top py-3">
				        	<li class="list-inline-item"><i class="icofont-check text-color mr-2"></i>Goal: <span>$890</span></li>
				        	<li class="list-inline-item"><i class="icofont-check text-color mr-2"></i>Raised: <span>$390</span></li>
				        </ul>
				        <p class="card-text mb-4">Save poor child by supporting text below as a natural lead-in to additional content. </p>

				        <b-button variant="warning">Donate Now</b-button>
				      </div>
				  </div>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="card mb-3 cause-item">
				  <div class="row no-gutters">
				      <img src="../assets/c3.jpg" class="img-fluid w-100" alt="...">

				      <div class="card-body">
				        <h3 class="mb-3"><a href="cause-single.html">Fund for Education</a></h3>
				       
				        <p class="card-text mb-4">Save poor child by supporting text below as a natural lead-in to additional content. </p>
				        <p>Quia vitae ab maxime cum quod neque .</p>

				        <b-button variant="warning">Donate Now</b-button>
				      </div>
				  </div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Causes Section Ends Here -->

<!-- Simple Background Design Starts -->

<div class="cta-block section">
	<div class="container">
		<div class="row justify-content-center ">
			<div class="col-lg-7 col-md-12">
				<div class="cta-content text-center">
					<i class="icofont-diamond text-lg text-color"></i>
					<h2 class="text-white text-lg mb-5 mt-3">We can’t help everyone, but everyone can help someone</h2>
					<b-button variant="warning" class="rounded text-white">Make a donation</b-button>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Simple Background Design Ends -->




<!-- Footer Section Starts -->

<Footer />

<!-- Footer Section Ends -->

</div>

</template>



<script>
import VueJsCounter from 'vue-js-counter';
import Footer from '../components/Footer.vue';
export default {
  
   components: {
            VueJsCounter, Footer,
        },
}
</script>