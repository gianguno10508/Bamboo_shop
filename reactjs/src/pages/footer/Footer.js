import '../../styles/footer_styles.css'
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="content-above">
              <ul class="list-items">
                <li class="list-item">
                      <span class="list-text">240 East Houston Street New York, NY 10002 </span>
                    </li>
                  <li class="list-item">
                      <span class="list-text">Fax: 1800 375 9788 </span>
                    </li>
                  <li class="list-item">
                      <span class="list-text">info@companyname.com</span>
                    </li>
              </ul>
            </div>
            <div className="content-under">
              <ul class="list-items">
                <li class="list-item">
                      <span class="list-text">Monday – Friday: 8:00 - 19:00</span>
                    </li>
                  <li class="list-item">
                      <span class="list-text">Saturady: 09:00 – 16:00</span>
                    </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">test</div>
          <div className="col-md-2">test</div>
          <div className="col-md-2">test</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;