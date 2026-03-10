import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
function Footer() {
    const currentYear = new Date().getFullYear();
    return (
       <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 poiret-one-regular">
  <aside>
   <img className="footerLogo" src="/assets/leaf.png" alt="logo" />
    <p >
      Echo Retreat Center<br />
      Doğanın Kucağında Huzur ve Yenilenme<br />
      <br />
        {currentYear} © Tüm Hakları Saklıdır.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title ">Social</h6>
    <div className="grid grid-flow-col gap-3 ">
      <a href="#">
       <InstagramIcon className="fill-current" />
      </a>
      <a href="#">
        <WhatsAppIcon className="fill-current" />
      </a>
      <a href="#">
        <XIcon className="fill-current" />
      </a>
    </div>
  </nav>
</footer>
    );
}
export default Footer;