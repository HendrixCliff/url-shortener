import React from "react"

export default function TrimmerUrl() {
    return (
        <div className="compress">
        <div className="wrapper-3">
          <form action="/signup" method="post">
            <p>
              <small>
                <input
                  className="opt-2"
                  type="text"
                  placeholder="Paste your URL here..."
                />
              </small>
            </p>
            <div className="opt-1">
              <select id="opt-1">
                Choose Domain
                <option>Generic domains</option>
                <option>Industry-specific domains</option>
                <option>Geographic domains</option>
                <option>Brand domains</option>
              </select>
              <label htmlFor="opt-2" />
              <input type="text" id="opt-2" placeholder="Type Alias here" />
            </div>
            <button type="submit">Trim URL</button>
            <p />
            <h5>
              By clicking Trim URL, I agree to the{" "}
              <strong>
                Terms of service, <br /> Privacy Policy
              </strong>{" "}
              and Use of Cookies.
            </h5>
          </form>
        </div>
      </div>
      
    )
}