import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";


const Footer = () => {
    return (
        <div className="  bg-[#aaffd6] ">
          <footer className="footer p-10 bg-[#aaffd6] text-base-content ">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <div>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input  join-item" /> 
        <button className="btn bg-[#206c4b] border-none text-white join-item">Subscribe</button>
      </div>
    </fieldset>
  </div>
</footer>
<footer className="footer px-10 py-4 border-t bg-[#aaffd6] text-base-content border-base-300 ">
  <aside className="items-center grid-flow-col ">
    {/* <MdOutlineRealEstateAgent className="text-3xl text-[#1DB2FF]"></MdOutlineRealEstateAgent> */}
    <p  className="font-semibold">Artisan Haven Ltd. <br/>Providing reliable Arts since 2010</p>
  </aside> 
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <a><FaFacebook className="text-2xl text-[#0e5c3a]"></FaFacebook></a>
      <a><IoLogoTwitter className="text-2xl text-[#0e5c3a]"></IoLogoTwitter></a>
      <a><FaInstagram className="text-2xl text-[#0e5c3a]"></FaInstagram></a>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;