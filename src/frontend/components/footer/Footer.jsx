import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-main-case">
        <h1 className="about-team">
          Join the ovement and get exclusive deals, promotions, <br /> and
          updates on favorite brands
        </h1>

        <main className="contect-info">
          <div className="email-info">
            <div>
              <input
                type="text"
                placeholder="Email"
                className="underline-input"
              />
              <button id="btn-size-input">Submit</button>
            </div>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
              debitis voluptas! Sapiente distinctio fugiat quidem explicabo
              molestias magnam recusandae,
              <u> deserunt quaerat eligendi voluptate</u> vitae incidunt facilis
              quae saepe obcaecati. A <u> Privecy policy</u>
            </p>
          </div>

          <table>
            <thead>
              <tr>
                <th>SHOP</th>
                <th> ABOUT</th>
                <th>SUPPORT</th>
                <th>SOCIAL MEDIA</th>
                <th>CELL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>our missions</td>
                <td>contect seller</td>
                <td>instagram</td>
                <td>sell on rivly</td>
              </tr>

              <tr>
                <td>home page </td>
                <td>careers</td>
                <td>order and returns</td>
                <td>facebook</td>
                <td>seller feedback group</td>
              </tr>

              <tr>
                <td>shopper community</td>
                <td>partnership</td>
                <td>help center and faq</td>
                <td>twitter</td>
              </tr>

              <tr>
                <td></td>

                <td>press</td>
                <td>Germany</td>
                <td>youtube</td>
              </tr>

              <tr>
                <td></td>

                <td>faq</td>
              </tr>
              <tr>
                <td></td>

                <td>articles</td>
              </tr>
            </tbody>
          </table>

          <div className="more-info"></div>
        </main>

        <div>
          <h1>Rivly</h1>

          <p>Copyright &copy; Rivly</p>

          <strong>2023</strong>
        </div>
      </footer>
    </>
  );
};

export default Footer;
