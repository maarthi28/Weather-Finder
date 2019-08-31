import React from "react";

class Title extends React.Component{

    render(){
        return(
            <div>
                <h1 className="title-container__title">Know My Weather</h1>
                <p className="title-container__subtitle">Find out temperature, conditions and more...</p>
            </div>

        );
    }
};

export default Title;