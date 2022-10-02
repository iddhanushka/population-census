import React from "react"
import { Link } from "react-router-dom"

function HouseHold() {
  return (
    <section className="house-hold">
      <div className="container">
        <div className="house-hold__button-back">
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
              <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
            </svg>
            Go back
          </Link>
        </div>
        <div className="house-hold__general">
          <div className="general-form">
            <h4 className="general-form__headline">General Information</h4>
            <form className="row g-3 gx-5">
              <div className="col-md-6">
                <label htmlFor="inputPeopleCount" className="form-label">
                  How many people were living or staying?
                </label>
                <input type="text" className="form-control general-form__input-field" id="inputPeopleCount" placeholder="3" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputHouseType" className="form-label">
                  Is this house, apartment or mobile home?
                </label>
                <select id="inputHouseType" className="form-select general-form__selector general-form__input-field">
                  <option selected>Select</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Mobile home</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputProvince" className="form-label">
                  What is your Province?
                </label>
                <select id="iinputProvinc" className="form-select general-form__selector general-form__input-field">
                  <option selected>Select</option>
                  <option>Southern</option>
                  <option>Western</option>
                  <option>Uva</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputDistrict" className="form-label">
                  What is your District?
                </label>
                <select id="inputDistrict" className="form-select general-form__selector general-form__input-field">
                  <option selected>Select</option>
                  <option>Galle</option>
                  <option>Matara</option>
                  <option>Colombo</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputTel" className="form-label">
                  Telephone
                </label>
                <input type="text" className="form-control general-form__input-field" id="inputTel" placeholder="(+94) 711234567" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <textarea className="form-control general-form__input-field" id="inputAddress" aria-label="With textarea" rows="3" placeholder="121/3, “Palm street”, Colombo, SL"></textarea>
              </div>
            </form>
          </div>
        </div>
        <div className="house-hold__head">
          <div className="general-form">
            <h4 className="general-form__headline">Head’s of house Information</h4>
            <form className="row g-3 gx-5">
              <div className="col-md-6">
                <label htmlFor="inputFName" className="form-label">
                  First Name
                </label>
                <input type="text" className="form-control general-form__input-field" id="inputFName" placeholder="John" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputLName" className="form-label">
                  Last Name
                </label>
                <input type="text" className="form-control general-form__input-field" id="inputLName" placeholder="Doe" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputGender" className="form-label">
                  Gender
                </label>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-check">
                      <input className="form-check-input general-form__input-radio" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                      <label class="form-check-label" htmlFor="gridRadios1">
                        Male
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-check">
                      <input className="form-check-input general-form__input-radio" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                      <label className="form-check-label" htmlFor="gridRadios2">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputBirthHead" className="form-label">
                  Date of birth
                </label>
                <input type="text" className="form-control general-form__input-field" id="inputBirthHead" placeholder="dd/mm/yyyy" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputRace" className="form-label">
                  What is your race?
                </label>
                <input type="text" className="form-control general-form__input-field" id="inputRace" placeholder="Sinhala" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputReligion" className="form-label">
                  What is your religion?
                </label>
                <input type="text" className="form-control general-form__input-field" id="inputReligion" placeholder="Buddhism" />
              </div>

              <div className="col-md-6">
                <label htmlFor="inputMaritalState" className="form-label">
                  What is your marital status?
                </label>
                <select id="inputMaritalState" className="form-select general-form__selector general-form__input-field">
                  <option selected>Select</option>
                  <option>Married</option>
                  <option>Single</option>
                  <option>Seperated</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputJob" className="form-label">
                  What is your job? (if any)
                </label>
                <input type="text" className="form-control general-form__input-field" id="inputJob" placeholder="Carpenter" />
              </div>
            </form>
          </div>
        </div>
        <ul className="house-hold__action-list">
          <li className="house-hold__action-item">
            <h4>If no more members with you:</h4>
            <Link to="/" className="button button--small">
              Submit
            </Link>
          </li>
          <li className="house-hold__action-item">
            <h4>If more members with you:</h4>
            <Link to="/member" className="button button--small">
              Next
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default HouseHold
