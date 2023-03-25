import './card.css';
export default function Card({student}){
    return(
        <div className='card-dsn'>
            <div className='card'>
                    <div>
                        <div className='college-name'>Xavier's Institiute of Engineering</div>
                        <div className='post'>Student</div>
                    </div>
                    <div>
                        <img className="profile-img" src={`${process.env.PUBLIC_URL}/images/jeevan.jpeg`}  alt="Profile"></img>
                        <h1 className='name'>{student[0]}</h1>
                    </div>
                    <div className='detatils'>
                        <p className='roll-number'><span>Roll No. : </span>{student[3]}</p>
                        <p className='time'><span>Time : </span>{student[6]}</p>
                        <p className='day'><span>Date : </span>{student[7]}</p>
                    </div>
                </div>
        </div>
    )
}