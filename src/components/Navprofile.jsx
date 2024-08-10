import userimg from '../assets/logo.png'
export const Navprofile = () =>{
    return(
        <>
            <li className="profile">
                <div className="profile-details">
                    <img src={userimg} alt="image" />
                    <div className="name_job">
                        <div className="name">Username</div>
                        <div className="job">Role</div>
                    </div>
                </div>
                <i className='bx bx-log-out' id="log_out" ></i>
            </li>
        </>
    )   
}