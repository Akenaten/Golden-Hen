//TODO: update when we decide on a component or styling library
export const LoginScreen = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    console.log(Object.fromEntries(formData.entries()));
  }
  const handleLinkClick = (item) => {
    console.log("Oh no, I forgot my " + item)
  }
  return <div className="login-container">
    <div className="input-container" style={{width:"100%", display:"flex", flexDirection: "column"}}>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username" placeholder="Enter Username"/>
        </div>
          <input type="password" name="password" placeholder="Enter Password"/>
          
        <div className="forgot-links" style={{width:"100%", display:"flex", justifyContent: "flex-end", flexWrap:"wrap"}}>
          <div className="link">
          <button type="button" onClick={()=>handleLinkClick("username")} style={{all:"unset", color:"blue", cursor:"pointer"}}>
            Forgot Username?
          </button>
          </div>
          <div className="row-break" style={{flexBasis:"100%"}}></div>
          <div className="link">
          <button type="button" onClick={()=>handleLinkClick("password")} style={{all:"unset", color:"blue", cursor:"pointer"}}>
            Forgot Password?
          </button>
          </div>
        </div>
        <div className="submit-container" style={{display: "flex", justifyContent: "center"}}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
}