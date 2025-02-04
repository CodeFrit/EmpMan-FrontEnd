import "./App.css"
import reactLogo from './assets/react.svg'
export default function Mynav(props){

    return(
    <header>
    <nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid justify-content-center">
    <div className="d-flex mx-auto">
    <button className="btn ps-0"><img className="spin-img" src = {reactLogo} onClick={()=>window.open("https://react.dev/")}/></button>
    <a className="navbar-brand pt-2 pe-0" href="/">Employee Managment</a></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-4 mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="https://github.com/" target='_base'>Github</a>
        </li>
      </ul>
      <form action={(formData)=>{window.location = "/result/"+formData.get("sr")}} className="d-flex" role="search" style={{marginLeft:"auto"}}>
        <input name='sr' className="form-control me-2" type="search" placeholder="Search by first name" aria-label="Search"/>
        <button className="btn btn-outline-info" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </header>
    )
}