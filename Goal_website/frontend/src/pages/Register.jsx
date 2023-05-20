import e from "express"
import { useState,useEffect } from "react"
import { FaUser } from "react-icons/fa"

const Register = () => {
    const [formData,setformData]=useState({
        name:'',
        email:'',
        password:'',
        cpassword:'',
    })
    const {name,password,email, cpassword}=formData
    const onChange=()=>{
        setformData((prevState)=>(
        {
            ...prevState,
            [e.target.name]:e.target.value

        }))

    }
    const onSubmit=(e)=>{
        e.preventDefault()

    }
  return (
    <>
      <section className="heading">
        <h1>
            <FaUser/>User
        </h1>
        <p>please create account</p>
      </section>
      <section className="formm">
        <form onSubmit={onSubmit}>
            <div className="form-group">
            <input type="text" className="form-control" id="name" name="name" value={name} placeholder="enter your name" onChange={onChange}/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" id="email" name="email" value={email} placeholder="enter your email" onChange={onChange}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" name="password" value={password} placeholder="enter your password" onChange={onChange}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="cpassword" name="cpassword" value={cpassword} placeholder="Confirm Password" onChange={onChange}/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
