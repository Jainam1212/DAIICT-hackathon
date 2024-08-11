import React from 'react';

export const ResearchPaper = () => {
    const papers = [
        {
            title: "Research Paper 1",
            url: "https://agupubs.onlinelibrary.wiley.com/doi/epdf/10.1029/2021SW002859"
        },
        {
            title: "Research Paper 2",
            url: "https://ieeexplore.ieee.org/document/9814334"
        },
        {
            title: "Research Paper 3",
            url: "https://www.researchgate.net/publication/359415194_Machine_Learning_Model_Development_for_Space_Weather_Forecasting_in_the_Ionosphere"
        },
        {
            title: "Research Paper 4",
            url: "https://arxiv.org/pdf/2006.12224v1"
        }
    ];

    return (
        <div className="research-paper-container" style={{ backgroundColor: 'black', padding: '50px', borderRadius: '8px', color: 'white',marginLeft:"78px",height:"100vh",display:'flex',alignItems:'center',flexDirection:'column'  }}>
            <h2 style={{ fontSize: '2em', marginBottom: '3rem',fontWeight:'bold',textAlign:'center' }}>Research Papers</h2>
            <ul style={{ listStyleType: 'none', padding: 0,display:'grid',gridTemplateColumns:'repeat(2,auto)' }}>
                {papers.map((paper, index) => (
                    <li key={index} style={{ marginBottom: '2rem',marginLeft:'5rem',marginRight:'5rem',height:'90px',width:'250px' }}>
                        <a
                            href={paper.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: 'none',
                                height:'inherit',
                                width:'inherit',
                                color: 'white',
                                backgroundColor: '#007bff',
                                padding: '10px 10px',
                                borderRadius: '5px',
                                alignItems:'center',
                                justifyContent:'center',
                                display: 'flex',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
                        >
                            {paper.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div>
                <h2 style={{ fontSize: '2em', marginBottom: '3rem',fontWeight:'bold',textAlign:'center' ,marginTop:'3.5rem' }}>Our Github link</h2>
                <p><a href="https://github.com/Jainam1212/Space-tech-daiict" target='_new' style={{textDecoration:'underline',textAlign:'center' }}>https://github.com/Jainam1212/Space-tech-daiict</a></p>
            </div>
        </div>
    );
};
