import React from "react"
import { Link } from "react-router-dom"

function Member() {
  return (
    <section className="member">
      <div className="container">
        <div className="member__button-back">
          <Link to="/house-hold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
              <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
            </svg>
            Go back
          </Link>
        </div>
        <div className="general-form">
          <h4 className="general-form__headline">Person 1 Information</h4>
          <form className="row g-3 gx-5">
            <div className="col-md-6">
              <label htmlFor="inputFName" className="form-label">
                First Name{" "}
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
              <label htmlFor="inputBirth" className="form-label">
                Date of birth
              </label>
              <input type="text" className="form-control general-form__input-field" id="inputBirth" placeholder="dd/mm/yyyy" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputRace" className="form-label">
                What is his/her race?
              </label>
              <input type="text" className="form-control general-form__input-field" id="inputRace" placeholder="Sinhala" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputReligion" className="form-label">
                What is his/her religion?
              </label>
              <input type="text" className="form-control general-form__input-field" id="inputReligion" placeholder="Buddhism" />
            </div>

            <div className="col-md-6">
              <label htmlFor="inputMaritalStatus" className="form-label">
                What is his/her marital status?
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
                What is his/her job? (if any)
              </label>
              <input type="text" className="form-control general-form__input-field" id="inputJob" placeholder="Carpenter" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputRelated" className="form-label">
                How is this person related to head of house?{" "}
              </label>
              <input type="text" className="form-control general-form__input-field" id="inputRelated" placeholder="Son" />
            </div>
          </form>
        </div>
        <div className="member__action-btn">
          <ul className="member__action-list">
            <li className="member__action-item">
              <Link onClick={() => setPersonCount(personCount++)} className="button button--small button--high-width">
                Add new person
              </Link>
            </li>
            <li className="member__action-item">OR</li>
            <li className="member__action-item">
              <Link to="/" className="button button--small button--high-width">
                Submit
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Member
