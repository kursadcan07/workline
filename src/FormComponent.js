import React from "react";
import "./style.css";
import {withRouter} from "react-router-dom";


import Page2 from "./Page2";

function FormComponent(props) {

    function passCheck() {
        if(props.data.userName === "Can" && props.data.passWord === "123") {
            console.log("Giriş başarılı");
            //this.props.history.push("/Page2");

        } else {
            console.log("Gİriş başarısız");
        }


    }


    return (
        <main>
            <form>
                <div className="upperStrAttr">İZİN BİLGİ SİSTEMİ</div>
                <br/>
                <input
                    name="userName"
                    value={props.data.userName}
                    placeholder="Username"
                    onChange={props.handleChange}
                />
                <br/>
                <input
                    name="passWord"
                    value={props.data.passWord}
                    placeholder="Password"
                    onChange={props.handleChange}
                />
                <br/>
                <button type="button" className="btnLgnStyle" onClick={passCheck} > GİRİŞ</button>

            </form>
        </main>
    );

}



export default FormComponent;
