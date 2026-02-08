import Footer from "./Footer"

function Segment() {


  return (
    <>



      <div class="segment-cards">

        <div class="segment-card">
          <div class="segment-card-img">
            <img src="/assets/Images/charger.jpg" alt="" />
          </div>
          <h3 class="segment-title">SMPS</h3>
          <a href="/Smps" class="segment-btn">EXPLORE</a>
        </div>

        <div class="segment-card">
          <div class="segment-card-img">
            <img src="/assets/Images/28.jpg" alt="" />
          </div>
          <h3 class="segment-title">INDUSTRIAL</h3>
          <a href="Industrial" class="segment-btn">EXPLORE</a>
        </div>

        <div class="segment-card">
          <div class="segment-card-img">
            <img src="/assets/Images/29.avif" alt="" />
          </div>
          <h3 class="segment-title">LIGHTING</h3>
          <a href="Lighting" class="segment-btn">EXPLORE</a>
        </div>


        <div class="segment-card">
          <div class="segment-card-img">
            <img src="/assets/Images/31.jpg" alt="" />
          </div>
          <h3 class="segment-title">KITTING</h3>
          <a href="Linecard" class="segment-btn">EXPLORE</a>
        </div>

        <div class="segment-card">
          <div class="segment-card-img">
            <img src="/assets/Images/30.jpg" alt="" />
          </div>
          <h3 class="segment-title">MEDICAL</h3>
          <a href="#" class="segment-btn">EXPLORE</a>
        </div>


      </div>


      <Footer />







    </>
  )
}

export default Segment