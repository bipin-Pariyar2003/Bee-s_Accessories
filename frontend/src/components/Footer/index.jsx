import React from "react";
import { useNavigate } from "react-router-dom";
const Fotoer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <footer className="footer mt-10 footer-horizontal footer-center text-base-content rounded p-10 ">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover" onClick={() => navigate("/about")}>
            About us
          </a>
          <a className="link link-hover" onClick={() => navigate("/contact")}>
            Contact
          </a>
          <a className="link link-hover text-primary" onClick={() => navigate("/browse")}>
            Shop Now
          </a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            {/* Instagram icon  */}

            <a
              href="https://www.instagram.com/bees.accessories_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.403a4.92 4.92 0 011.675 1.092 4.92 4.92 0 011.092 1.675c.163.458.35 1.258.403 2.428.058 1.266.07 1.645.07 4.849s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.428a4.902 4.902 0 01-1.092 1.675 4.902 4.902 0 01-1.675 1.092c-.458.163-1.258.35-2.428.403-1.266.058-1.645.07-4.85.07s-3.584-.012-4.849-.07c-1.17-.054-1.97-.24-2.428-.403a4.902 4.902 0 01-1.675-1.092 4.902 4.902 0 01-1.092-1.675c-.163-.458-.35-1.258-.403-2.428C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.849c.054-1.17.24-1.97.403-2.428a4.92 4.92 0 011.092-1.675A4.92 4.92 0 015.403 2.636c.458-.163 1.258-.35 2.428-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.174 0-3.552.012-4.805.07-1.003.046-1.55.215-1.91.36a3.092 3.092 0 00-1.133.738 3.092 3.092 0 00-.738 1.133c-.145.36-.314.907-.36 1.91-.058 1.253-.07 1.631-.07 4.805s.012 3.552.07 4.805c.046 1.003.215 1.55.36 1.91.168.418.42.792.738 1.133.34.34.714.59 1.133.738.36.145.907.314 1.91.36 1.253.058 1.631.07 4.805.07s3.552-.012 4.805-.07c1.003-.046 1.55-.215 1.91-.36a3.092 3.092 0 001.133-.738 3.092 3.092 0 00.738-1.133c.145-.36.314-.907.36-1.91.058-1.253.07-1.631.07-4.805s-.012-3.552-.07-4.805c-.046-1.003-.215-1.55-.36-1.91a3.092 3.092 0 00-.738-1.133 3.092 3.092 0 00-1.133-.738c-.36-.145-.907-.314-1.91-.36-1.253-.058-1.631-.07-4.805-.07zM12 5.838a6.162 6.162 0 016.162 6.162A6.162 6.162 0 0112 18.162 6.162 6.162 0 015.838 12 6.162 6.162 0 0112 5.838zm0 1.838a4.324 4.324 0 100 8.648 4.324 4.324 0 000-8.648zm6.406-1.168a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>

            {/* tt icon  */}
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9.5 3.5v13.1a2.4 2.4 0 11-2.4-2.4 2.4 2.4 0 011.4.5V11a5 5 0 100 10 5 5 0 005-5v-7.3a6.7 6.7 0 004 1.3V7.1a4.6 4.6 0 01-4-4.6H9.5z" />
              </svg>
            </a>
            {/* facebook icon  */}
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Bee's
            Accessories 🐝
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Fotoer;
