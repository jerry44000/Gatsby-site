import React from "react"

const Footer = () => {
  return (
    <>
      <section id="contact" className="border-top pb-5 mb-5 container">
        <h2 className="text-center display my-md-5 my-4">Contact us</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" id="email" className="form-control" />
            <p className="form-text m-0 mt-2">We'll never share your email</p>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Your message"
              id="floatTxtArea"
            ></textarea>
            <label  htmlFor="floatTxtArea">Your message</label>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </section>
      <div className="bg-light text-center py-3 my-4 border-top">
        © 2022 Stuff, Inc
      </div>
    </>
  )
}

export default Footer
