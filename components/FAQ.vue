<template>
	<section class="dark:bg-gray-801 dark:text-gray-100">
		<div class="container flex flex-col justify-center py-9 md:p-8 mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
			<h1 class="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h1>
			<p class="mt-5 mb-8 dark:text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
			<div class="space-y-5">
			
				<body>
					<nav class="accordion arrows">
					<!--   <header class="box">
						<label for="acc-close" class="box-title">Accordion menu</label>
					  </header> -->
					  <input type="radio" name="accordion" id="cb1" />
					  <section class="box">
						<label class="box-title" for="cb1">What is the cost of IT services?</label>
						<label class="box-close" for="acc-close"></label>
						<div class="box-content">The cost of IT services can vary widely depending on several factors, including the type of service, the scale of your business, your specific needs, at Techbytes, we provide cheap full support to scale up your business needs.</div>
					  </section>
					  <input type="radio" name="accordion" id="cb2" />
					  <section class="box">
						<label class="box-title" for="cb2">How can IT services benefit small businesses?</label>
						<label class="box-close" for="acc-close"></label>
						<div class="box-content">IT services offer numerous benefits to small businesses, helping them become more efficient, competitive, and secure. Here are some ways in which our IT services can benefit small businesses: Cost Savings, Increased Productivity, Improved Security, Business Continuity, Scalability, Access to Expertise, Compliance and Data Protection, 24/7 Support, Innovation and Competitive Edge, Focus on Core Competencies, Remote Work Support, Customer Service Improvement </div>
					  </section>
					  <input type="radio" name="accordion" id="cb3" />
					  <section class="box">
						<label class="box-title" for="cb3">What is managed IT services, and how does it work?</label>
						<label class="box-close" for="acc-close"></label>
						<div class="box-content">This involves outsourcing the management and maintenance of a business's IT infrastructure and systems to a third-party provider. The goal of managed IT services is to ensure the optimal functionality, security, and performance of a company's IT environment while allowing the business to focus on its core operations.</div>
					  </section>

					  <input type="radio" name="accordion" id="cb4" />
					  <section class="box">
						<label class="box-title" for="cb4">Can you provide a roadmap for technology adoption and development for my business?</label>
						<label class="box-close" for="acc-close"></label>
						<div class="box-content">IT services can significantly benefit your business's overall productivity and efficiency in the following ways: Streamlined Operations, Enhanced Communication, Increased Data Accessibility, Efficient Data Management, Scalability, Automated Tasks, Customer Relationship Management (CRM), Data Analytics, IT Support and Issue Resolution, Cloud Computing, Security Measures, Disaster Recovery, Proactive Monitoring, Compliance and Reporting, Business Intelligence. </div>
					  </section>

					  <input type="radio" name="accordion" id="cb5" />
					  <section class="box">
						<label class="box-title" for="cb5">How can IT services benefit my business's overall productivity and efficiency?</label>
						<label class="box-close" for="acc-close"></label>
						<div class="box-content">IT services can significantly benefit your business's overall productivity and efficiency in the following ways: Streamlined Operations, Enhanced Communication, Increased Data Accessibility, Efficient Data Management, Scalability, Automated Tasks, Customer Relationship Management (CRM), Data Analytics, IT Support and Issue Resolution, Cloud Computing, Security Measures, Disaster Recovery, Proactive Monitoring, Compliance and Reporting, Business Intelligence.</div>
					  </section>
					  <input type="radio" name="accordion" id="cb6" />
					  <section class="box">
						<label class="box-title" for="cb6">What is managed IT services, and how does it work?</label>
						<label class="box-close" for="acc-close"></label>
						<div class="box-content">This involves outsourcing the management and maintenance of a business's IT infrastructure and systems to a third-party provider. The goal of managed IT services is to ensure the optimal functionality, security, and performance of a company's IT environment while allowing the business to focus on its core operations.</div>
					  </section>
					  
				  
					  <input type="radio" name="accordion" id="acc-close" />
					</nav>
				  </body>
			</div>
		</div>
	</section>   
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

body {
	height: calc(100% - 20px);
	width: calc(100% - 20px);
	margin: 0;
	padding: 10px;
	display: flex;
	background: #f2f2f2;
	color: rgba(0,0,0,.87);
	font-family: 'Roboto', sans-serif;
  }
  .accordion {
	margin: auto;
	width: 900px;
  }
  .accordion input {
	display: none;
  }
  .box {
	position: relative;
	background: white;
	  height: 64px;
	  transition: all .15s ease-in-out;
  }
  .box::before {
	  content: '';
	  position: absolute;
	  display: block;
	  top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  pointer-events: none;
	  box-shadow: 0 -1px 0 #e5e5e5,0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24);
  }
  .box-title {
	width: calc(100% - 40px);
	height: 64px;
	line-height: 64px;
	padding: 0 20px;
	display: inline-block;
	cursor: pointer;
	-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;
  }
  .box-content {
	width: calc(100% - 40px);
	padding: 30px 20px;
	font-size: 11pt;
	color: rgba(0,0,0,.54);
	display: none;
  }
  .box-close {
	position: absolute;
	height: 64px;
	width: 100%;
	top: 0;
	left: 0;
	cursor: pointer;
	display: none;
  }
  input:checked + .box {
	height: auto;
	margin: 16px 0;
	  box-shadow: 0 0 6px rgba(0,0,0,.16),0 6px 12px rgba(0,0,0,.32);
  }
  input:checked + .box .box-title {
	border-bottom: 1px solid rgba(0,0,0,.18);
  }
  input:checked + .box .box-content,
  input:checked + .box .box-close {
	display: inline-block;
  }
  .arrows section .box-title {
	padding-left: 44px;
	width: calc(100% - 64px);
  }
  .arrows section .box-title:before {
	position: absolute;
	display: block;
	content: '\203a';
	font-size: 28pt;
	left: 20px;
	top: -2px;
	transition: transform .15s ease-in-out;
	color: rgba(14, 245, 60, 0.54);
  }
  input:checked + section.box .box-title:before {
	transform: rotate(90deg);
  }

</style>