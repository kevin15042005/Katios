import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className=" grid grid-cols-1 md:grid-cols-3 gap-5 bg-[#ec6e06] inset-0 bg-linear-to-t from-transparent from-90% to-[#360707] p-4  font-semibold">
        <div className="flex  justify-center items-center flex-col gap-2 mt-4 font-bebas-neue   border-2 rounded-2xl p-4 ">
          <h3 className=""> Encuentranos en Aeropuerto El Dorado </h3>{" "}
          <ul className="">
            <li className="hover:underline">
              <a href="https://maps.app.goo.gl/ymQzNo1zhUPKZUKS9">
                <span className="text-amber-200"> Bogota, Colombia</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex  justify-center items-center flex-col gap-2 mt-4 font-bebas-neue  border-2 rounded-2xl p-4">
          <h3> Visita Nuestra</h3>{" "}
          <ul className="">
            <li className="hover:underline  text-[15px]  sm:text-[17px] text-amber-200">
              <Link to="/Politicas">Politica de Privacidad</Link>
            </li>
          </ul>
        </div>
        <div className="flex  justify-center items-center flex-col gap-2 mt-4 font-bebas-neue border-2 rounded-2xl p-4">
          <h3> </h3>{" "}
          <ul>
            <li>
              <ul className="grid grid-cols-3 gap-10 " data-hook="social-bar__wrapper">
                <li className="">
                  <a
                  className="hover:text-amber-200 transition-colors"
                    href="https://www.facebook.com/wix"
                    target="_blank"
                    aria-label="facebook"
                    title="Facebook"
                    data-hook="social-bar__socialLink socialLink--id_facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                     width="25"
                      height="25"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M10 0C-2.399.363-3.663 17.76 8.43 20v-7.03H5.876V10.06H8.43V7.845c.072-4.058 3.333-4.207 6.047-3.718v2.476H13.21c-1.249 0-1.639.775-1.639 1.57v1.888h2.788l-.445 2.909H11.57V20C23.666 17.759 22.396.362 10 0"
                      ></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                  className="hover:text-amber-200 transition-colors"
                    href="https://www.instagram.com/wix"
                    target="_blank"
                    aria-label="instagram"
                    title="Instagram"
                    data-hook="social-bar__socialLink socialLink--id_instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                         width="25"
                      height="25"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M5.858.07c-1.064.05-1.79.22-2.425.47-.658.256-1.215.6-1.77 1.156a4.9 4.9 0 0 0-1.15 1.772C.267 4.105.1 4.832.053 5.897s-.057 1.407-.052 4.122c.005 2.716.017 3.056.069 4.123.05 1.064.22 1.79.47 2.426.256.657.6 1.214 1.156 1.769a4.9 4.9 0 0 0 1.774 1.15c.636.245 1.363.413 2.428.46 1.064.046 1.407.057 4.122.052s3.056-.017 4.123-.068c1.067-.05 1.79-.221 2.425-.47a4.9 4.9 0 0 0 1.769-1.156 4.9 4.9 0 0 0 1.15-1.774c.246-.636.413-1.363.46-2.427.046-1.067.057-1.408.052-4.123s-.018-3.056-.068-4.122c-.05-1.067-.22-1.79-.47-2.427a4.9 4.9 0 0 0-1.156-1.769 4.9 4.9 0 0 0-1.773-1.15C15.895.269 15.168.1 14.104.054 13.039.009 12.697-.003 9.98.002S6.925.018 5.858.07m.117 18.078c-.975-.043-1.504-.205-1.857-.34-.467-.18-.8-.398-1.152-.746a3.1 3.1 0 0 1-.75-1.149c-.137-.352-.302-.881-.347-1.856-.05-1.054-.06-1.37-.066-4.04s.004-2.986.05-4.04c.042-.974.205-1.504.34-1.857.18-.468.397-.8.746-1.151a3.1 3.1 0 0 1 1.15-.75c.351-.138.88-.302 1.855-.348 1.054-.05 1.37-.06 4.04-.066s2.986.004 4.041.05c.974.043 1.505.204 1.857.34.467.18.8.397 1.151.746.352.35.568.682.75 1.15.138.35.302.88.348 1.855.05 1.054.062 1.37.066 4.04s-.004 2.986-.05 4.04c-.043.975-.205 1.504-.34 1.857a3.1 3.1 0 0 1-.747 1.152c-.349.35-.681.567-1.148.75-.352.137-.882.301-1.855.347-1.055.05-1.371.06-4.042.066s-2.985-.005-4.04-.05m8.153-13.493a1.2 1.2 0 1 0 2.4-.003 1.2 1.2 0 0 0-2.4.003M4.865 10.01a5.134 5.134 0 1 0 10.27-.02 5.134 5.134 0 0 0-10.27.02m1.802-.004a3.334 3.334 0 1 1 6.667-.013 3.334 3.334 0 0 1-6.667.013"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                  className="hover:text-amber-200 transition-colors"
                    href="https://www.tiktok.com/@wix"
                    target="_blank"
                    aria-label="tiktok"
                    title="TikTok"
                    data-hook="social-bar__socialLink socialLink--id_tiktok"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="none"
                      viewBox="0 0 17 20"
                    >
                      <path
                        fill="currentColor"
                        d="M14.46 4.009A4.8 4.8 0 0 1 12.417.873 5 5 0 0 1 12.337 0H8.986L8.98 13.78c-.057 1.544-1.294 2.782-2.811 2.782-.472 0-.916-.121-1.307-.332a2.9 2.9 0 0 1-1.51-2.558c0-1.594 1.263-2.89 2.817-2.89.29 0 .568.048.831.133v-3.51a6 6 0 0 0-.831-.062C2.767 7.343 0 10.183 0 13.672a6.37 6.37 0 0 0 2.633 5.181A6.03 6.03 0 0 0 6.17 20c3.4 0 6.168-2.839 6.168-6.329V6.683A7.83 7.83 0 0 0 17 8.222V4.783a4.55 4.55 0 0 1-2.539-.775z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
              
              <li className="text-center mt-5">
                <a href="https://maps.app.goo.gl/ymQzNo1zhUPKZUKS9">
                <span>2026 Katios.com, Inc</span>
              </a>
              </li>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
