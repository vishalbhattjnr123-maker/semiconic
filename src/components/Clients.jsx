function Clients  () {

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));


  return (
    <>






<section className="brand-section reveal">
  <h2 className="section-title">Our Trusted Brands</h2>
  {/* ROW 1 */}
  <div className="logo-slider">
    <div className="logo-track left">
      <div className="logo"><img src="src/assets/Images/1.jpg" /></div>
      <div className="logo"><img src="/src/assets/Images/2.png" /></div>
      <div className="logo"><img src="/src/assets/Images/3.jpg" /></div>
      <div className="logo"><img src="/src/assets/Images/4.jpg" /></div>
      <div className="logo"><img src="/src/assets/Images/5.jpg" /></div>
      <div className="logo"><img src="logos/halonix.png" /></div>
      {/* duplicate */}
      <div className="logo"><img src="logos/surya.png" /></div>
      <div className="logo"><img src="logos/philips.png" /></div>
      <div className="logo"><img src="logos/havells.png" /></div>
      <div className="logo"><img src="logos/dixon.png" /></div>
      <div className="logo"><img src="logos/orient.png" /></div>
      <div className="logo"><img src="logos/halonix.png" /></div>
    </div>
  </div>
  {/* ROW 2 */}
  <div className="logo-slider">
    <div className="logo-track right">
      <div className="logo"><img src="logos/jaquar.png" /></div>
      <div className="logo"><img src="logos/crompton.png" /></div>
      <div className="logo"><img src="logos/syska.png" /></div>
      <div className="logo"><img src="logos/exide.png" /></div>
      <div className="logo"><img src="logos/luminous.png" /></div>
      {/* duplicate */}
      <div className="logo"><img src="logos/jaquar.png" /></div>
      <div className="logo"><img src="logos/crompton.png" /></div>
      <div className="logo"><img src="logos/syska.png" /></div>
      <div className="logo"><img src="logos/exide.png" /></div>
      <div className="logo"><img src="logos/luminous.png" /></div>
    </div>
  </div>
  
</section>







   
    </>
  )
}

export default Clients