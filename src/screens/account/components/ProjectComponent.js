import React from "react";
import CardComponent from "../../../components/CardComponent"

function ProjectComponent() {
    return (
        <div>
        <div className="project-wrapper">
            <CardComponent 
                image={require("../../../img/img2.png")}
                name="Furnitown"
                title="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
            />
            <CardComponent 
                image={require("../../../img/img2.png")}
                name="Furnitown2"
                title="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
            />
            
        </div>
        <div className="upload-button">
            <a href="">
            {" "}
            <img src={require("../../../img/upload-icon.png")} alt="" /> tải lên
            </a>
        </div>
        </div>
    );
}

export default ProjectComponent;


