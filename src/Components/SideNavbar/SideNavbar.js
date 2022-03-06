import React from 'react';

const SideNavbar = (props) => {
    const handleCategory = props.handleCategory;
    return (
        <div>
            <div className="programs-container-nav">
                    <div className="programs-container-nav-item">
                        <a onClick={(e)=>handleCategory(e.target.innerHTML)} className="programs-container-nav-item-link ">Know Your Country</a>
                    </div>
    
                    <div className="programs-container-nav-item">
                        <a onClick={(e)=>handleCategory(e.target.innerHTML)} className="programs-container-nav-item-link">Cartoon Songs</a>
                    </div>
    
                    <div className="programs-container-nav-item">
                        <a onClick={(e)=>handleCategory(e.target.innerHTML)} className="programs-container-nav-item-link">Poems</a>
                    </div>
    
                    <div className="programs-container-nav-item">
                        <a onClick={(e)=>handleCategory(e.target.innerHTML)} className="programs-container-nav-item-link">Little Genius</a>
                    </div>
                    
                    <div className="programs-container-nav-item">
                        <a onClick={(e)=>handleCategory(e.target.innerHTML)} className="programs-container-nav-item-link">Country Songs</a>
                    </div>
                </div>
        </div>
    );
};

export default SideNavbar;