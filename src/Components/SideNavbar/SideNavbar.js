import React from 'react';

const SideNavbar = (props) => {
    const handleCategory = props.handleCategory;
    return (
        <div>
            <div className="programs-container-nav">
                    <div className="programs-container-nav-item">
                        <span onClick={(e)=>handleCategory(e.target.innerHTML)} className="programs-container-nav-item-link ">Know Your Country</span>
                    </div>
    
                    <div className="programs-container-nav-item">
                        <span onClick={(e)=>handleCategory(e.target.innerHTML)} className="programs-container-nav-item-link">Cartoon Songs</span>
                    </div>
    
                    <div className="programs-container-nav-item">
                        <span onClick={(e)=>handleCategory(e.target.innerHTML)} className="programs-container-nav-item-link">Poems</span>
                    </div>
    
                    <div className="programs-container-nav-item">
                        <span onClick={(e)=>handleCategory(e.target.innerHTML)} className="programs-container-nav-item-link">Little Genius</span>
                    </div>
                    
                    <div className="programs-container-nav-item">
                        <span onClick={(e)=>handleCategory(e.target.innerHTML)} className="programs-container-nav-item-link">Country Songs</span>
                    </div>
                </div>
        </div>
    );
};

export default SideNavbar;