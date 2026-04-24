import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer(){
  return(
    <footer className="footer">
      <div className="flex justify-center gap-6 mb-4">
        <FaFacebook/><FaLinkedin/><FaTwitter/>
      </div>
      <p>© 2026 S4 Technologies</p>
    </footer>
  );
}