import React from 'react'

const Banner = () => {
    return (
        <div className="superc-olympiad">
            {/* Top Bar */}
            <div className=" bg-white py-md-4 px-md-4    headerContainer">
                    <div className='examInMob py-2' style={{color : "#191919" ,fontSize :"24px" ,backgroundColor : "#FB5D00"}}>
                       <img src='/ArrowWhite.svg' style={{marginRight :"16px"}}/> <span> Exam in <strong>78 Days!</strong> </span>
                    </div>
                <div  style={{width : '80%'}} className='d-flex justify-content-between align-items-center logoContainer position-relative'>
                <div >
                    <img src="/logo.png" className='superClogo' style={{zIndex :2, backgroundColor : "#fff", borderRadius :"50%"  ,width: "100px", height: "100px" , boxSizing:"content-box" , padding : "20px" ,position :"absolute" ,top:"-60%"  }} />
                </div>
                <div className='d-flex gap-5 align-items-center'>
                    <div className='examInDesktop' style={{color : "#191919" ,fontSize :"24px"}}>
                       <img src='/Arrow.svg' style={{marginRight :"16px"}}/> Exam in <strong>78 Days!</strong>
                    </div>
                    <div style={{gap : "24px"}} className='d-flex btnContainer'>
                        <button type='btn' className="btn  me-2" style={{background :"#1779A8", color : "#fff" , borderRadius :  "0px"}}> <img src='/R-now.svg' style={{marginRight :"8px"}}/>  Register Now</button>
                        <button type='btn' className="btn " style={{border :"2px solid #1779A8", color : "#1779A8" , borderRadius :  "0px"}}> <img src='/icons.svg' style={{marginRight :"8px"}}/> Download App</button>
                    </div>
                </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bannerContainer position-relative text-white d-flex align-items-center mt-2 my-lg-0" style={{ backgroundImage: `url(./homebanner.png)`, backgroundSize: 'cover', backgroundPosition: 'left center', minHeight: '500px' }}>
                <div className="container d-flex  flex-md-row align-items-center justify-content-start h-100 py-md-5" style={{gap :"10%"}}>
                    <div className="col-md-6">
                        <h1 className=" display-5 mb-3 text-white" style={{fontWeight : 400 ,textShadow :"2px 0px gray"}}>
                            Your Child Could Be <br />
                            India’s Next Maths Star <br />
                            With a Free Trip to London!
                        </h1>
                        <button type='btn' style={{background :"#14516E", color : "#fff" , borderRadius :  "0px"}} className="btn">Enroll Now</button>
                    </div>
                    <div className=" text-center bannerDayLeftContainer">
                        <div className="p-3  mt-3 fw-bold gap-3 d-flex align-items-center justify-align-content-around " style={{ position :"absolute", bottom :"10%",backgroundImage : 'url(./bannerTag.svg)' ,backgroundRepeat : "no-repeat" ,backgroundSize :"contain" ,width :"230px" ,height : "110px"}}>
                           <img src={"./time.svg"} style={{width :"45px"}}/> 
                           <p style={{marginBottom :16}}> <strong style={{fontSize :"32px" }}> 78 </strong> <br/> Days Left! </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Bar */}
            <div className="olympidcontainer text-center py-3 d-flex align-items-center justify-content-center" style={{backgroundColor :"#d7f1fc"}}>
                <div className="olympid text-center py-4 d-flex align-items-center justify-content-between" style={{width : "60%"  }}>
                <h5 className="mb-2 " style={{fontWeight :400 ,fontSize :"30px" ,color :"#14516E"}}>
                    India’s Biggest Online <br/> Maths Olympiad for <br/> Classes 2 to 6
                </h5>
                <div>
                <p style={{fontSize :"24px" , color :"#14516E" ,fontWeight :300}}>
                    Conducted by SuperC <br/> Exam Date:  <br/> <strong>15th July 2025</strong>
                </p>
                     
                </div>
                <button type='btn' className="btn btn-primary"  style={{background :"#14516E", color : "#fff" , borderRadius :  "0px" ,border:"none"}}>Download SuperC App for Daily Prep</button>
                </div>
            </div>
        </div>
    )
}

export default Banner