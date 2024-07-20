import locationPicture from '../../assets/images/Background.png'
import Dropdown from '../../components/Dropdown'
import Tag from '../../components/Tag'
function Location() {
  return (
    <div className="centered_flex location_container ">
      <div className="container ">
        <img className="location_img" src={locationPicture} alt="home" />

        <div className="location_main">
          <section className="location_profile_section">
            <div className="location_title">
              <div>
                <h2 className="location_title_h2">
                  Cozy loft on the Canal Saint-Martin
                </h2>
                <span className="location_title_span">
                  Paris, Île-de-France
                </span>
              </div>
              <Tag />
            </div>
            <div className="location_profile_info">
              <div className="location_photo_profile">
                <p>Alexandre Dumas</p>
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle id=".Host" cx="32" cy="32" r="32" fill="#C4C4C4" />
                </svg>
              </div>

              <div className="location_rating">
                <svg
                  width="196"
                  height="36"
                  viewBox="0 0 196 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="_Rate">
                    <g id="star-inactive 2">
                      <path
                        id="Vector"
                        d="M179.721 6.84366C179.473 6.32809 178.948 6 178.371 6C177.795 6 177.275 6.32809 177.022 6.84366L174.008 13.0445L167.277 14.0382C166.715 14.1225 166.246 14.5162 166.073 15.0552C165.9 15.5942 166.04 16.1895 166.443 16.5879L171.327 21.4201L170.174 28.2491C170.08 28.8115 170.315 29.3833 170.779 29.7161C171.243 30.0489 171.857 30.0911 172.363 29.8239L178.376 26.6133L184.389 29.8239C184.896 30.0911 185.51 30.0536 185.974 29.7161C186.438 29.3786 186.672 28.8115 186.578 28.2491L185.421 21.4201L190.304 16.5879C190.707 16.1895 190.853 15.5942 190.675 15.0552C190.496 14.5162 190.032 14.1225 189.47 14.0382L182.735 13.0445L179.721 6.84366Z"
                        fill="#E3E3E3"
                      />
                    </g>
                    <g id="star-inactive 1">
                      <path
                        id="Vector_2"
                        d="M139.721 6.84366C139.473 6.32809 138.948 6 138.371 6C137.795 6 137.275 6.32809 137.022 6.84366L134.008 13.0445L127.277 14.0382C126.715 14.1225 126.246 14.5162 126.073 15.0552C125.9 15.5942 126.04 16.1895 126.443 16.5879L131.327 21.4201L130.174 28.2491C130.08 28.8115 130.315 29.3833 130.779 29.7161C131.243 30.0489 131.857 30.0911 132.363 29.8239L138.376 26.6133L144.389 29.8239C144.896 30.0911 145.51 30.0536 145.974 29.7161C146.438 29.3786 146.672 28.8115 146.578 28.2491L145.421 21.4201L150.304 16.5879C150.707 16.1895 150.853 15.5942 150.675 15.0552C150.496 14.5162 150.032 14.1225 149.47 14.0382L142.735 13.0445L139.721 6.84366Z"
                        fill="#E3E3E3"
                      />
                    </g>
                    <g id="star-active 3">
                      <path
                        id="Vector_3"
                        d="M99.7212 6.84366C99.4728 6.32809 98.9479 6 98.3714 6C97.7949 6 97.2747 6.32809 97.0216 6.84366L94.0079 13.0445L87.2775 14.0382C86.7151 14.1225 86.2464 14.5162 86.0729 15.0552C85.8995 15.5942 86.0401 16.1895 86.4432 16.5879L91.327 21.4201L90.174 28.2491C90.0803 28.8115 90.3146 29.3833 90.7786 29.7161C91.2426 30.0489 91.8566 30.0911 92.3628 29.8239L98.3761 26.6133L104.389 29.8239C104.896 30.0911 105.51 30.0536 105.974 29.7161C106.438 29.3786 106.672 28.8115 106.578 28.2491L105.421 21.4201L110.304 16.5879C110.707 16.1895 110.853 15.5942 110.675 15.0552C110.496 14.5162 110.032 14.1225 109.47 14.0382L102.735 13.0445L99.7212 6.84366Z"
                        fill="#FF6060"
                      />
                    </g>
                    <g id="star-active 2">
                      <path
                        id="Vector_4"
                        d="M59.7212 6.84366C59.4728 6.32809 58.9479 6 58.3714 6C57.7949 6 57.2747 6.32809 57.0216 6.84366L54.0079 13.0445L47.2775 14.0382C46.7151 14.1225 46.2464 14.5162 46.0729 15.0552C45.8995 15.5942 46.0401 16.1895 46.4432 16.5879L51.327 21.4201L50.174 28.2491C50.0803 28.8115 50.3146 29.3833 50.7786 29.7161C51.2426 30.0489 51.8566 30.0911 52.3628 29.8239L58.3761 26.6133L64.3894 29.8239C64.8956 30.0911 65.5096 30.0536 65.9736 29.7161C66.4376 29.3786 66.6719 28.8115 66.5782 28.2491L65.4205 21.4201L70.3043 16.5879C70.7073 16.1895 70.8526 15.5942 70.6745 15.0552C70.4964 14.5162 70.0324 14.1225 69.47 14.0382L62.7349 13.0445L59.7212 6.84366Z"
                        fill="#FF6060"
                      />
                    </g>
                    <g id="star-active 1">
                      <path
                        id="Vector_5"
                        d="M19.7212 6.84366C19.4728 6.32809 18.9479 6 18.3714 6C17.7949 6 17.2747 6.32809 17.0216 6.84366L14.0079 13.0445L7.27748 14.0382C6.71506 14.1225 6.24636 14.5162 6.07295 15.0552C5.89953 15.5942 6.04014 16.1895 6.44321 16.5879L11.327 21.4201L10.174 28.2491C10.0803 28.8115 10.3146 29.3833 10.7786 29.7161C11.2426 30.0489 11.8566 30.0911 12.3628 29.8239L18.3761 26.6133L24.3894 29.8239C24.8956 30.0911 25.5096 30.0536 25.9736 29.7161C26.4376 29.3786 26.6719 28.8115 26.5782 28.2491L25.4205 21.4201L30.3043 16.5879C30.7073 16.1895 30.8526 15.5942 30.6745 15.0552C30.4964 14.5162 30.0324 14.1225 29.47 14.0382L22.7349 13.0445L19.7212 6.84366Z"
                        fill="#FF6060"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </section>
          <section className="location_dropdown_section">
            <Dropdown
              name="Description"
              text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quidem, debitis ullam quos voluptatibus aliquid! Reiciendis nisi, minus exercitationem molestiae, ab dolorum aliquid officiis assumenda eum asperiores voluptatem accusamus quae? "
            />

            <Dropdown
              name="Équipements"
              text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quidem, debitis ullam quos voluptatibus aliquid! Reiciendis nisi, minus exercitationem molestiae, ab dolorum aliquid officiis assumenda eum asperiores voluptatem accusamus quae?"
            />
          </section>
        </div>
      </div>
    </div>
  )
}
export default Location
