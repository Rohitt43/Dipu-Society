<template>
<div>
    <section class="section about-page">
	<div class="container">
		<div class="row">
			<div class="col-lg-4">
				<div class="about-item-img">
					<img src="../assets/c1.jpg" alt="" class="img-fluid w-100">
				</div>
			</div>

			<div class="col-lg-8">
				<div class="about-item-content pl-4">
					<h2 class="mb-4 content-title"> Welcome to Charite NonProfit Organization</h2>
					<p class="lead">Charite is the world’s #1 fundraising site forcharitable causes. Raise money for over 1.5 million charities.</p>
					<p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<a href="#" class="btn btn-main rounded">Learn More</a>
				</div>
			</div>
		</div>
	</div>
</section>



    <Footer />
</div>
</template>

<script>
    import Footer from '../components/Footer.vue';
    export default {
        components: {Footer}
    }
</script>
